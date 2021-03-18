<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<form
			ref="form"
			:id="form_id"
			class="kwes-form"
			action="https://kwes.io/api/foreign/forms/tKYcmMgyhd7a7R2fq6Xw"
			multistep
		>
			<div class="kw-multistep">
				<Step heading="Intro">
					<b-alert variant="danger" show>
						COVID-19 Note: Please be advised the District performs
						property inspections on a case-by-case basis and will be
						conducted contact-free with the resident.
						<a href="https://www.glacvcd.org/"
							><strong>Read More >></strong></a
						>
					</b-alert>
					<hr />
					<h2>
						Submitting a Service Request? Here’s what to expect.
					</h2>
					<div style="margin:15px 0;max-width:560px;">
						<div class="x-resp-embed">
							<iframe
								src="https://www.youtube.com/embed/bOQ_cyGos50"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen=""
								width="760"
								height="515"
								frameborder="0"
							></iframe>
						</div>
					</div>
					<p>
						<span style="font-size: 16px;"
							>When calling regarding mosquito bites on a
							residential property, an inspector will be
							dispatched to inspect the caller's property first to
							identify potential breading sources. The inspector
							will provide guidance regarding long-term control
							and source reduction, and will also address other
							potential sources in the immediate vicinity.</span
						>
					</p>
					<h3>Mosquito Control is a Shared Responsibility</h3>
					<h4>What We Control</h4>
					<p>
						Greater Los Angeles County Vector Control
						District<strong><em> only </em></strong>provides
						services for:
					</p>
					<ol style="font-weight:bold;">
						<li>Mosquitoes</li>
						<li>Midges</li>
						<li>Black Flies</li>
					</ol>
					<p>
						Our public healthy agency provides services for 35
						cities and parts of unincorporated Los Angeles County
						free of charge.
					</p>
					<h4>How are Requests Handled?</h4>
					<p>
						Submitted service requests are handled on a case-by-case
						basis. When mosquito bites are reported on an immediate
						property, an inspector will be dispatched to the
						caller's property first to clear the property before
						inspecting the vicinity. Mosquitoes do not fly far and
						cryptic breeding sources are often found nearby.
					</p>
					<p>
						The service request entry you submit may result in an
						investigation or action on someone else’s private
						property. Personal information is required but will
						remain confidential and will not be made public or
						shared with any other party as permitted by law. The
						District may contact you for further information but
						will not provide further updates or details regarding
						the case.
					</p>
					<h4>What to do While You Wait</h4>
					<p>
						<b
							>Eliminate any standing water in and outside your
							property.</b
						><br />Mosquitoes grow in dirty, standing water. Our
						District routinely checks public spaces throughout our
						service area but we need your help in removing any
						standing water from your property. For a list of common
						sources and solutions, visit our
						<strong
							><a
								href="https://www.glacvcd.org/resources/diy-mosquito-solutions/"
								>Do-It-Yourself Mosquito Solutions Resource
								Page.&nbsp;</a
							></strong
						>
					</p>
					<p>
						<b>Wear insect repellent.</b><br />If adult mosquitoes
						are active, wear insect repellent to prevent mosquito
						bites and mosquito-transmitted diseases.
						<strong
							><a
								href="https://www.glacvcd.org/resources/repellent-information/"
								>Learn which ingredients are recommended by the
								Centers for Disease Control and
								Prevention.&nbsp;</a
							></strong
						>
					</p>
					<p>
						<b>Share with Your Community.<br /></b>Stay up-to-date
						on the best ways to get rid of mosquitoes and disease
						activity in your area, and share with your community.
						Follow us on social media or&nbsp;sign up for our
						<a
							href="https://www.glacvcd.org/news-updates/newsletter-email-alert-form/"
							><strong>E-Alerts</strong></a
						>.
					</p>

					<hr class="x-hr" />

					<h2 class="h-custom-headline h3">
						<span>Ready to Submit a Service Request?</span>
					</h2>

					<b-alert variant="danger" show>
						COVID-19 Note:&nbsp;&nbsp;Please be advised the District
						performs property inspections on a case-by-case basis
						and will be conducted contact-free with the resident.
						<a href="https://www.glacvcd.org/"
							><strong>Read More &gt;&gt;</strong></a
						>
					</b-alert>

					<p>Click "Next" to continue submitting your request.</p>

					<p>
						<strong>Confidential reporting:&nbsp;</strong>The
						information you provide will be used for the sole
						purpose of directing resources in the fight against
						mosquito-borne diseases. Personal information will
						remain confidential and will not be made public or
						shared with any other party as permitted by law.
					</p>
				</Step>
				<Step heading="Service Request Type">
					<!-- <b-form-group data-kw-group
						rules="not_regex:/^(Bees|Rodents)/"> -->
					<b-form-group data-kw-group>
						<b-form-radio-group
							id="service-request-type"
							name="service_request_type"
							v-model="form.service_request_type"
							stacked
						>
							<div
								class="row row-cols-1 row-cols-md-2 row-cols-xl-4 align-items-stretch"
							>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Mosquitoes"
										src="images/mosquitoes.jpg"
										:selected="
											'Mosquitoes' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Black Flies"
										src="images/black-flies.jpg"
										:selected="
											'Black Flies' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Midges"
										src="images/midges.jpg"
										:selected="
											'Midges' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Mosquitofish Request"
										src="images/mosquitofish.jpg"
										:selected="
											'Mosquitofish Request' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Standing Water"
										src="images/standing-water.jpg"
										:selected="
											'Standing Water' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Neglected Pool"
										src="images/neglected-pool.jpg"
										:selected="
											'Neglected Pool' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Other"
										src="images/other.jpg"
										:selected="
											'Other' == form.service_request_type
										"
									></image-radio-button>
								</div>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Bees or Wasps"
										src="images/bees.jpg"
										invalid
										:selected="
											'Bees or Wasps' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Rodents"
										src="images/rodents.jpg"
										invalid
										:selected="
											'Rodents' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div
									class="col mt-4 d-flex flex-column justify-content-stretch"
								>
									<image-radio-button
										value="Fire Ants, Cockroaches, or Flies"
										src="images/ants.png"
										invalid
										:selected="
											'Fire Ants, Cockroaches, or Flies' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
							</div>
							<alert
								v-show="
									form.service_request_type == 'Mosquitoes'
								"
								class="mt-4"
							>
								<div class="row">
									<div class="col-12 col-md-4 col-xl-2">
										<img
											style="width:120px;"
											class="mr-2"
											src="./assets/images/mosquito-quarter.jpg"
										/>
									</div>
									<div class="col">
										<p>
											Adult mosquitoes are about a quarter
											inch big. If your pest is bigger,
											you're probably dealing with a
											different vector.
											<a href="#"
												>Check out this brochure</a
											>
											for help identifying your pest.
										</p>
									</div>
								</div>
							</alert>
							<alert
								v-show="
									form.service_request_type == 'Black Flies'
								"
								class="mt-4"
							>
								<div class="row">
									<div class="col-12 col-md-4 col-xl-2">
										<img
											style="width:120px;"
											class="mr-2"
											src="./assets/images/black-flies.jpg"
										/>
									</div>
									<div class="col">
										<p>
											Black flies are common within 1 mile
											of the LA River.
											<a
												href="https://www.glacvcd.org/black-flies/"
												target="_blank"
												>Please visit our black flies
												guide</a
											>
											to verify you have black flies
											before submitting this request.
										</p>
									</div>
								</div>
							</alert>
							<alert
								v-show="
									form.service_request_type ==
										'Standing Water'
								"
								class="mt-4"
							>
								<div class="row">
									<div class="col">
										<p>
											Standing water on your own property
											can often be self-mitigated. Check
											out
											<a
												href="https://www.glacvcd.org/resources/diy-mosquito-solutions/"
												>these resources for preventing,
												removing, or treating standing
												water on your property</a
											>
											before submitting a service request.
										</p>
									</div>
								</div>
							</alert>
							<alert
								v-show="
									form.service_request_type == 'Bees or Wasps'
								"
								class="mt-4"
								variant="danger"
							>
								<div class="row">
									<div class="col">
										<p>
											GLACVCD does not respond to bees.
											You should contact a private pest
											control company, or the
											<a
												href="https://acwm.lacounty.gov/bees-in-our-environment/"
												target="_blank"
												>LA County Agricultural
												Commissioner of Weights and
												Measures</a
											>
											at (626) 575-5471 or their Bee
											Hotline at 1-800-BEE-WARY
											(1-800-233-9279)
										</p>
									</div>
								</div>
							</alert>
							<alert
								v-show="form.service_request_type == 'Rodents'"
								class="mt-4"
								variant="danger"
							>
								<div class="row">
									<div class="col">
										<p>
											GLACVCD does not respond to rodents.
											Instead, contact the
											<a
												href="LA County Department of Health Services, Vector Management Programhttp://www.publichealth.lacounty.gov/eh/SSE/Vector_Management/vmvcontrol.htm"
												>LA County Department of Health
												Services, Vector Management
												Program</a
											>
											at (626) 430-5461
										</p>
									</div>
								</div>
							</alert>
							<alert
								v-show="
									form.service_request_type ==
										'Fire Ants, Cockroaches, or Flies'
								"
								class="mt-4"
								variant="danger"
							>
								<div class="row">
									<div class="col">
										<p>
											GLACVCD does not respond to
											cockroaches, fire ants, or
											run-of-the-mill houseflies. You
											should contact private pest control.
										</p>
									</div>
								</div>
							</alert>
						</b-form-radio-group>
					</b-form-group>
					<input-group label="When are mosquito bites occurring?">
						<b-form-checkbox-group
							name="when_are_bites_occurring"
							v-model="form.when_are_bites_occurring"
							:options="when_are_bites_occurring_options"
							stacked
						></b-form-checkbox-group>
					</input-group>
					<input-group label="Additional details about the situation">
						<b-form-textarea
							name="additional_details"
							v-model="form.additional_details"
						></b-form-textarea>
					</input-group>
				</Step>
				<Step heading="Contact Information">
					<input-group label="Case Number">
						<b-form-input
							name="case_number"
							v-model="form.case_number"
						></b-form-input>
						<b-form-text>If you've been assigned one</b-form-text>
					</input-group>
					<input-group label="Name">
						<b-form-input
							name="name"
							v-model="form.name"
						></b-form-input>
					</input-group>
					<input-group label="Company">
						<b-form-input
							name="company"
							v-model="form.company"
						></b-form-input>
					</input-group>
					<input-group label="Email">
						<b-form-input
							name="email"
							v-model="form.email"
							type="email"
						></b-form-input>
					</input-group>
					<input-group label="Phone">
						<b-form-input
							name="phone"
							v-model="form.phone"
							type="tel"
						></b-form-input>
					</input-group>
					<input-group label="How did you hear about us?">
						<b-form-checkbox-group
							name="how_did_you_hear_about_us"
							v-model="form.how_did_you_hear_about_us"
							:options="how_did_you_hear_options"
							stacked
							style="column-count:2"
						></b-form-checkbox-group>
					</input-group>
					<input-group
						label="How did you hear about us (other)?"
						v-show="
							form.how_did_you_hear_about_us.includes('Other')
						"
					>
						<b-form-input
							name="how_did_you_hear_other"
							v-model="form.how_did_you_hear_other"
						></b-form-input>
					</input-group>
					<input-group label="Address to report">
						<address-verifier
							ref="address_verifier"
						></address-verifier>
					</input-group>
					<input-group label="Additional building info">
						<b-form-input
							name="additional_building_info"
							v-model="form.additional_building_info"
						></b-form-input>
						<b-form-text
							>Building, apartment, or suite number,
							etc.</b-form-text
						>
					</input-group>
					<input-group label="Property Access Information ">
						<b-form-input
							name="property_access_information"
							v-model="form.property_access_information"
						></b-form-input>
						<b-form-text
							>Gate codes, entry codes, etc.</b-form-text
						>
					</input-group>
					<input-group label="Nearest cross street">
						<b-form-input
							name="nearest_cross_street"
							v-model="form.nearest_cross_street"
						></b-form-input>
					</input-group>
					<input-group label="Do you live at this address?">
						<b-form-radio-group
							name="do_you_live_here"
							v-model="form.do_you_live_here"
							:options="[ {text: 'Yes', value: true}, {text: 'No', value: false}, ]"
							stacked
						></b-form-radio-group>
					</input-group>
					<input-group label="Do you have chickens in your yard?">
						<b-form-radio-group
							name="do_you_have_chickens"
							v-model="form.do_you_have_chickens"
							:options="[ {text: 'Yes', value: true}, {text: 'No', value: false}, ]"
							stacked
						></b-form-radio-group>
					</input-group>
				</Step>
				<Step heading="Last">
					<input
						type="hidden"
						name="Pitter-Patter"
						value="Let's get at 'er"
					/>
				</Step>
			</div>
			<button type="submit">Submit</button>
		</form>
	</div>
</template>

<script>
import Step from "./components/Kwes/Step.vue";
import Alert from "./components/Alert.vue";
import InputGroup from "./components/Form/InputGroup.vue";
import ImageRadioButton from "./components/Form/ImageRadioButton.vue";
import kwesforms from "kwesforms";
import AddressVerifier from "./components/Form/AddressVerifier.vue";

export default {
	name: "App",
	components: {
		Alert,
		Step,
		ImageRadioButton,
		InputGroup,
		AddressVerifier,
	},
	data() {
		return {
			form_id: "glacvcd-form",
			form: {
				service_request_type: false,
				when_are_bites_occurring: [],
				additional_details: "",
				case_number: "",
				name: "",
				company: "",
				email: "",
				phone: "",
				how_did_you_hear_about_us: [],
				additional_building_info: '',
				property_access_information: '',
				nearest_cross_street: '',
				do_you_live_here: null,
				do_you_have_chickens: null,
			},
			when_are_bites_occurring_options: [
				"Night",
				"Day/Afternoon",
				"Not getting bites",
			],
			how_did_you_hear_options: [
				"From prior experience",
				"Word of mouth",
				"Google search",
				"Heard/read in news",
				"Nextdoor",
				"Social media",
				"Community event",
				"Advertisement",
				"Other",
			],
		};
	},
	mounted() {
		console.log(kwesforms.init());
		setTimeout(() => {
			kwesforms.setCustomRule(
				this.form_id,
				"address_json",
				'The address you entered is not in our service area. Please visit <a style="text-decoration:underline;" href="https://www.glacvcd.org/resources/helpful-links/">our resources page</a> for more details and helpful resources.',
				(value) => {
					return value == "vague" || value == "outside";
				}
			);
		}, 1);

		this.$refs.form.addEventListener("kwMultistepNextClicked", () => {
			/**
			 * bubbles: false
				cancelBubble: false
				cancelable: false
				composed: false
				currentTarget: null
				defaultPrevented: false
				detail: Object { cancelSubmitEvents: false }
				eventPhase: 0
				explicitOriginalTarget: <button class="kw-multistep-button kw-multistep-button-next" type="button">
				isTrusted: false
				originalTarget: <form class="kwes-form" action="https://kwes.io/api/fore...rms/tKYcmMgyhd7a7R2fq6Xw" multistep="" method="post" novalidate="novalidate">
				returnValue: true
				srcElement: <form>
				target: <form>
				timeStamp: 180320
				type: "kwMultistepNextClicked"
			 */
			this.$refs.address_verifier.refresh();
		});
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}

@import "assets/scss/variables";
@import "node_modules/bootstrap/scss/bootstrap.scss";
@import "node_modules/bootstrap-vue/src/index.scss";

.alert-transparent {
	@include alert-variant(transparent, theme-color("primary"), $body-color);
}
</style>
