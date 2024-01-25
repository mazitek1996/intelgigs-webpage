import React from "react";
import "./services.css";
import Featuredservices from "./featured_services";
import ServiceIntroImage from "../../../assets/images/representation-user-experience-interface-design.jpg";

function ServicesPage() {
  return (
    <div className="services_page_root">
      <section>
        <div className="services_intro_container text-center">
          <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
                <img
                  src={ServiceIntroImage}
                  class="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
              <div class="col-lg-6">
                <h1 class="display-5 lh-1 mb-3">Empowering Businesses with Innovative Solutions</h1>
                <p class="lead">
                  At Nivarix, we offer a range of cutting-edge services to meet the diverse needs of businesses. Our expertise lies in crafting innovative solutions that drive success in the digital landscape. Whether you're looking for web development, mobile app solutions, or custom software, we have you covered.
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                    Explore Services
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-lg px-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section> 

      {/* Featured Services */}
     <section className="featured_services_section">
       <div className="service_items_container">


       <div class="bg-dark text-secondary px-4 py-5 text-center">
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Dark color hero</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
        </div>
      </div>
    </div>
  </div>
       </div>
      </section> 

     <div>
     <Featuredservices  />

     </div>

      {/* Additional Sections for More Services or Details */}
    </div>
  );
}

export default ServicesPage;
