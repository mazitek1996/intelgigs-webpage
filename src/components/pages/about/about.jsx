import React from "react";
import "./about.css";
import AWSLogo from "../../../assets/company/aws-2.svg";
import GoogleLogo from "../../../assets/company/google-1-1.svg";
import MetaLogo from "../../../assets/company/meta-1.svg";
import OpenaiLogo from "../../../assets/company/ChatGPT_logo.svg";
import GithubLogo from "../../../assets/company/github.svg";
import AzureLogo from "../../../assets/company/azure-1.svg";
import MicrosoftLogo from "../../../assets/company/microsoft-5.svg";
import TechStacks from "../../home/tech_stack/tech_stacks";
import AboutHeroImage from "../../../assets/images/about-hero-1-opt-1920.webp";
import CtaSection from "../../home/cta/cta_section";

import AboutVissionImage from "../../../assets/images/tech-company-amico.svg";
import AboutImpactImage from "../../../assets/images/Data-extraction-amico.svg";
import TestimonialSection from "../../home/testimonial_section/testimonial_section";

function About() {
  return (
    <div className="about_page_root">
      {/* Section 1: Introduction */}
      <section className="about_intro_container text-center">
        <div class="container col-xxl-8 px-4 ">
          <div class="row flex-lg-row-reverse align-items-center  ">
            <div class=" col-lg-6">
              <img
                src={AboutHeroImage}
                class="img-fluid  "
                alt="About intro image"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5  lh-1 -mb3">
                Welcome to Nivarix Technologies
              </h1>
              <p class="lead">
                Empowering businesses through innovative software solutions. At
                Nivarix, we believe in the transformative power of technology
                to drive success and make a positive impact.
              </p>
              <section className="about_partners_container text-center">
                <h2>Our Partnerships</h2>
                <div className="about_partners_logos">
                  <img src={AWSLogo} alt="AWS" className="img-fluid" />
                  <img src={GoogleLogo} alt="Google" className="img-fluid" />
                  <img src={MetaLogo} alt="Meta" className="img-fluid" />
                  <img src={OpenaiLogo} alt="OpenAI" className="img-fluid" />
                  <img src={GithubLogo} alt="Github" className="img-fluid" />
                  <img src={AzureLogo} alt="Azure" className="img-fluid" />
                  <img
                    src={MicrosoftLogo}
                    alt="Microsoft"
                    className="img-fluid"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Journey */}
      <section className="about_journey_container text-center">
        <h2>
          Proudly partnering with industry leaders to bring cutting-edge
          solutions to our clients.
        </h2>
      </section>

      {/* Section 3: Partnerships */}

      {/* Section 4: Tech Stacks */}
      <section className="about_tech_stacks_container text-center ">
        <div className="container card shadow ">
          <TechStacks />
        </div>
      </section>
      {/* Section 5: Vision and Impact */}
      {/* Section 5: Vision and Impact */}
      <section className="about_vision_container container">
        <div className="row">
          <div className="col-lg-6 col-md-6 about_vision_content-left">
            <h2>Our Vision</h2>
            <img
              src={AboutVissionImage}
              alt="Vision Illustration"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 col-md-6 about_vision_content-right">
         

<p>
              At Nivarix Technologies, our vision extends beyond the horizon.
              We are pioneers of innovation, envisioning a future where
              technology transcends boundaries, unlocking unprecedented
              opportunities, and empowering individuals across the globe.
            </p>
            <p>
              Rooted in Nigeria, our journey is a testament to the potential and
              resilience of the African spirit. We aim to lead the charge in
              driving technological advancements that not only transform local
              landscapes but also echo across the continent and resonate
              globally.
            </p>
            <p>
              Our commitment to excellence goes hand-in-hand with our dedication
              to fostering a tech-savvy ecosystem right here in Nigeria. By
              nurturing talent, fostering collaborations, and championing
              innovation, we aspire to position Nigeria as a hub for
              groundbreaking technological solutions that impact lives on a
              global scale.
            </p>
            <p>
              Embracing our roots, we envision a world where the brilliance of
              African innovation shines brightly, leaving an indelible mark on
              the technological landscape. Join us on this transformative
              journey, where possibilities are limitless, and together, we shape
              the future.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Impact on Society */}
      <section className="about_impact_container container ">
        <div className="row">
          <div className="col-lg-6 col-md-6 about_impact_content-left ">
            <img
              src={AboutImpactImage}
              alt="Impact Illustration"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-6 col-md-6 about_impact_content-right">
            <h2>Impact on Society</h2>
            <p>
              At Nivarix, our impact goes beyond technology; we are a
              catalyst for positive change. Rooted in Nigeria, we take pride in
              steering technological advancements that transcend borders,
              creating opportunities, and empowering individuals across the
              continent.
            </p>
            <p>
              Our commitment to societal impact is ingrained in our mission. We
              believe that technology can be a force for good, addressing
              challenges and fostering inclusive growth. By leveraging our
              expertise, we aim to bridge the digital divide, unlocking the
              potential of communities in Nigeria and beyond.
            </p>
            <p>
              As a responsible corporate citizen, we actively engage in
              initiatives that uplift communities, promote education, and drive
              sustainable development. We envision a future where technology
              acts as an equalizer, bringing positive change to every corner of
              Africa.
            </p>
            <p>
              Join us in this journey of impact. Together, let's build a legacy
              where technological advancements are synonymous with positive
              societal transformation, starting right here in Nigeria and
              radiating throughout the African continent.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Team and Culture */}
      <section className="about_team_container">
        {/* Include details about your team and company culture */}
      </section>

      {/* Section 7: Gallery */}
      <section className="about_gallery_container">
        {/* Include images representing your workspace, events, or team-building activities */}
      </section>

      {/* Section 8: Testimonials */}
      <section className="about_testimonials_container">
        {/* Include testimonials from clients or partners */}
        <TestimonialSection />
      </section>

      {/* Section 9: Call to Action */}
      <section className="about_cta_container text-center">
        <CtaSection />
        {/* Add a CTA button linking to your services page */}
      </section>

      {/* Section 10: Contact Information */}
    </div>
  );
}

export default About;
