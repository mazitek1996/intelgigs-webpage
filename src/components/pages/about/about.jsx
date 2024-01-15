

import React from "react";
import "./about.css"
import AWSLogo from "../../../assets/company/aws-2.svg";
import GoogleLogo from "../../../assets/company/google-1-1.svg";
import MetaLogo from "../../../assets/company/meta-1.svg";
import OpenaiLogo from "../../../assets/company/ChatGPT_logo.svg";
import GithubLogo from "../../../assets/company/github.svg";
import AzureLogo from "../../../assets/company/azure-1.svg";
import MicrosoftLogo from "../../../assets/company/microsoft-5.svg";
import TechStacks from "../../home/tech_stack/tech_stacks";
import AboutHeroImage from "../../../assets/images/about-hero-1-opt-1920.webp"
import CtaSection from "../../home/cta/cta_section";

function About() {
  return (
    <div className="about_page_root">
      {/* Section 1: Introduction */}
      <section className="about_intro_container text-center">
      
      <div class="container col-xxl-8 px-4 ">
    <div class="row flex-lg-row-reverse align-items-center  ">
      <div class=" col-lg-6">
      <img src={AboutHeroImage} class="img-fluid  " alt="About intro image"  loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5  lh-1 -mb3">Welcome to Intellgigs Technologies</h1>
        <p class="lead">Empowering businesses through innovative software solutions. At
          Intellgigs, we believe in the transformative power of technology to
          drive success and make a positive impact.</p>
          <section className="about_partners_container text-center">
        <h2>Our Partnerships</h2>
        <div className="about_partners_logos">
          <img src={AWSLogo} alt="AWS" className="img-fluid" />
          <img src={GoogleLogo} alt="Google" className="img-fluid" />
          <img src={MetaLogo} alt="Meta" className="img-fluid" />
          <img src={OpenaiLogo} alt="OpenAI" className="img-fluid" />
          <img src={GithubLogo} alt="Github" className="img-fluid" />
          <img src={AzureLogo} alt="Azure" className="img-fluid" />
          <img src={MicrosoftLogo} alt="Microsoft" className="img-fluid" />
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
    <section className="about_vision_container text-center">
      <h2>Our Vision</h2>
      <p>
        Envisioning a future where technology transcends boundaries, creating
        opportunities and empowering individuals across the globe.
      </p>
      <h2>Impact on Society</h2>
      <p>
        IntelGigs is more than a company; it's a catalyst for positive change.
        We take pride in contributing to technological advancements that
        transcend borders, creating opportunities and empowering individuals
        across the continent.
      </p>
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
    </section>

    {/* Section 9: Call to Action */}
    <section className="about_cta_container text-center">
      <CtaSection/>
      {/* Add a CTA button linking to your services page */}
    </section>

    {/* Section 10: Contact Information */}
    <section className="about_contact_container text-center">
      <p>For inquiries, contact us at info@intellgigs.com</p>
    </section>
    
    </div>
  );
}

export default About;
