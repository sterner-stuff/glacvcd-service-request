<template>
	<div>
		<input
			type="text"
			style="position:absolute;left:-9999px;"
			name="map_status"
			ref="map_status"
			disabled
			:value="this.map_status"
		/>

		<input
			class="pac-input form-control"
			placeholder="Address to report"
			name="pretty_address"
			type="text"
			aria-invalid="false"
			ref="address"
			@input="clear"
			v-model="pretty_address"
		/>
		<div ref="map" class="map" style="margin-top:1em;"></div>
	</div>
</template>
<script>
import gmapsInit from "../../utils/google-maps";
import zones from "../../assets/data/zones.json";
import { isEmpty } from "lodash";

export default {
	async mounted() {
		this.google = await gmapsInit();
		this.geocoder = new this.google.maps.Geocoder();
	},
	data() {
		return {
			// instance of Google Maps API
			google: false,
			geocoder: false,
			map: false,
			autocomplete: false,
			zones: zones,
			polygons: {},
			icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png",
			valid: false,
			pretty_address: "",
			map_status: "",
		};
	},
	props: {
		value: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		initAutocomplete() {
			this.map = new this.google.maps.Map(this.$refs.map, {
				center: new this.google.maps.LatLng(33.93602559, -118.06459665),
				zoom: 10,
				mapTypeId: this.google.maps.MapTypeId.ROADMAP,
				mapId: "glacvcd_sr_map",
				disableDefaultUI: true,
			});

			this.google.maps.event.addListenerOnce(
				this.map,
				"idle",
				this.loadZones
			);

			this.autocomplete = new this.google.maps.places.Autocomplete(
				this.$refs.address,
				{
					types: ["address"],
				}
			);

			this.autocomplete.bindTo("bounds", this.map);
			this.autocomplete.setFields([
				"address_components",
				"geometry",
				"formatted_address",
			]);

			this.autocomplete.addListener("place_changed", () => {
				let place = this.autocomplete.getPlace();
				this.updateMapPlace(place);
				this.validatePlace(place);
			});

			if (!isEmpty(this.value)) {
				this.updateMapPlace(this.value);
				this.validatePlace(this.value);
			}
		},

		updateMapPlace(place) {
			if (typeof place.geometry == "undefined") return;

			let bounds = new this.google.maps.LatLngBounds();
			const iconImage = document.createElement("img");
			iconImage.src = this.icon;

			this.marker = new this.google.maps.marker.AdvancedMarkerElement({
				map: this.map,
				content: iconImage,
				position: place.geometry.location,
				draggable: false,
			});

			if (place.geometry.viewport) {
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.viewport);
			}

			this.pretty_address = place.formatted_address;
			this.map.fitBounds(bounds);
			this.map.setZoom(15);
		},

		validatePlace(place) {
			let inBoundaries = false,
				specificEnough = false;

			if (place && place.geometry) {
				for (var polygon in this.polygons) {
					if (
						this.google.maps.geometry.poly.containsLocation(
							place.geometry.location,
							this.polygons[polygon]
						)
					) {
						inBoundaries = true;
						break;
					}
				}

				if (place.address_components[0].types[0] == "street_number") {
					specificEnough = true;
				}
			}

			this.valid = inBoundaries && specificEnough;
			if (this.valid) {
				this.map_status = "valid";
			} else if (!specificEnough) {
				this.map_status = "vague";
			} else if (!inBoundaries) {
				this.map_status = "outside";
			} else {
				this.map_status = "";
			}

			this.$emit("input", place);

			this.$nextTick(() => {
				this.triggerMapStatusValidation();
			});
		},

		loadZones() {
			this.polygons = {};
			for (var zone in this.zones) {
				if (!Object.prototype.hasOwnProperty.call(this.zones, zone)) {
					continue;
				}
				var polygon = new this.google.maps.Polygon({
					clickable: false,
					paths: this.zones[zone],
					strokeColor: "#FF0000",
					strokeOpacity: 0.5,
					strokeWeight: 2,
					fillColor: "#af7ac5",
					fillOpacity: 0.35,
				});

				polygon.setMap(this.map);
				this.polygons[zone] = polygon;
			}
		},

		clear() {
			this.map_status = "";
		},

		triggerMapStatusValidation() {
			this.$refs.map_status.removeAttribute("disabled");
			this.$refs.map_status.focus();
			this.$refs.map_status.blur();
			this.$refs.map_status.setAttribute("disabled", "disabled");
		},

		refresh() {
			this.initAutocomplete();
		},
	},
};
</script>
<style lang="scss" scoped>
.map {
	height: 400px;
	width: 100%;
	position: relative;
	top: 0;
	left: 0;
}
</style>
