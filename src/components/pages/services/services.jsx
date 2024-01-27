import React from "react";
import "./services.css";
import FeaturedServices from "./featured_services";
import ServiceIntroImage from "../../../assets/images/representation-user-experience-interface-design.jpg";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import FaqSection from "./components/FaqSection";

function ServicesPage() {
  return (
    <div className="services_page_root">
      {/* Service Introduction Section */}
      <section className="service_intro_section">
        <div className="services_intro_container text-center">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={ServiceIntroImage}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Service Intro"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 lh-1">
                  Empowering Businesses with Innovative Solutions
                </h1>
                <p className="lead">
                  At Nivarix, we offer cutting-edge services to meet diverse
                  business needs. Our expertise lies in crafting innovative
                  solutions that drive success in the digital landscape. Whether
                  you're seeking web development, mobile app solutions, or
                  custom software, we have you covered.
                </p>
                <div className=" s_i_btn_container d-grid gap-2 d-md-flex justify-content-center">
                  <button className="s_i_btn">Explore Services</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="featured_services_section">
        <div className="service_items_container">
          <div className=" px-4 py-5 text-center">
            <div className="py-5">
              <h1 className="display-5">Discover Our Featured Services</h1>
              <div className="col-lg-6 mx-auto">
                <p className=" mb-4">
                  Explore a variety of services designed to meet your specific
                  needs. Our team is committed to delivering high-quality
                  solutions that elevate your digital presence. Get started with
                  Nivarix today.
                </p>
                <div className=" s_i_btn_container d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button className="s_i_btn px-4 me-sm-3 ">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why_choose_us_section">
        <WhyChooseUsSection />
      </section>

      {/* FAQ Section */}
      <section className="faq_section text-center">
        <FaqSection />
      </section>

      {/* Additional Sections for More Services or Details */}
      <div>
        <FeaturedServices />
      </div>
      
    </div>
  );
}

export default ServicesPage;
