<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<form
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
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
									<image-radio-button
										value="Mosquitoes"
										src="images/mosquitoes.jpg"
										:selected="
											'Mosquitoes' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
									<image-radio-button
										value="Black Flies"
										src="images/black-flies.jpg"
										:selected="
											'Black Flies' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
									<image-radio-button
										value="Midges"
										src="images/midges.jpg"
										:selected="
											'Midges' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
									<image-radio-button
										value="Mosquitofish Request"
										src="images/mosquitofish.jpg"
										:selected="
											'Mosquitofish Request' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
									<image-radio-button
										value="Standing Water"
										src="images/standing-water.jpg"
										:selected="
											'Standing Water' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
									<image-radio-button
										value="Neglected Pool"
										src="images/neglected-pool.jpg"
										:selected="
											'Neglected Pool' ==
												form.service_request_type
										"
									></image-radio-button>
								</div>
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
									<image-radio-button
										value="Other"
										src="images/other.jpg"
										:selected="
											'Other' == form.service_request_type
										"
									></image-radio-button>
								</div>
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
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
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
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
								<div class="col mt-4 d-flex flex-column justify-content-stretch">
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
import InputGroup from './components/Form/InputGroup.vue';
import ImageRadioButton from "./components/Form/ImageRadioButton.vue";
import kwesforms from "kwesforms";

export default {
	name: "App",
	components: {
		Alert,
		Step,
		ImageRadioButton,
        InputGroup,
	},
	data() {
		return {
			form: {
				service_request_type: false,
                when_are_bites_occurring: [],
                additional_details: '',
			},
            when_are_bites_occurring_options: [
                'Night',
                'Day/Afternoon',
                'Not getting bites',
            ]
		};
	},
	mounted() {
		kwesforms.init();
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
