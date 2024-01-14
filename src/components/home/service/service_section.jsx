import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./service_section.css";

import { Link } from "react-router-dom";

const ServiceSection = () => {
  // Sample data for services
  const services = [
    {
      title: "Web Development",
      text: "Crafting immersive digital landscapes that captivate, engage, and inspire.",
      image:
        "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mobile App Development",
      text: "Empower your audience with cutting-edge mobile experiences, tailored for impact.",
      image:
        "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Web Designing",
      text: "Create visually stunning websites that leave a lasting impression on your audience.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "AI & ML Integration",
      text: "Harness the power of Artificial Intelligence and Machine Learning for intelligent solutions.",
      image:
        "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Digital Marketing",
      text: "Boost your online presence with strategic digital marketing campaigns that deliver results.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Software Development",
      text: "Innovative and scalable software solutions tailored to meet your business needs.",
      image:
        "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more services as needed
  ];

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 5000,
  };

  // return (
  //   <div className="service_section_root">
  //     <div className="service_section_container container">
  //       <div className="row">
  //         <div className="col-lg-4 col-md-4 service_section_left">
  //           <h3>
  //             <span>Intelgigs -</span> Where Innovation Meets Aspiration
  //           </h3>
  //           <p>
  //             At Intelgigs, we don't just create solutions; we craft
  //             transformative experiences that propel your vision into the
  //             digital future. Embrace innovation, embrace success.
  //           </p>
  //           <div className="service_section_left_btn">
  //             <Link to="/service" className="learn-more-btn">
  //               Learn More
  //             </Link>
  //           </div>
  //         </div>
  //         <div className="col-lg-8 col-md-8 service_section_right">
  //           {/* Carousel */}
  //           <Slider {...carouselSettings}>
  //             {services.map((service, index) => (
  //               <div key={index} className="carousel_card card">
  //                 <div className="card-body">
  //                   <h4>{service.title}</h4>
  //                   <p>{service.text}</p>
  //                 </div>
  //                 <div
  //                   className="card-image"
  //                   style={{ backgroundImage: `url(${service.image})` }}
  //                 ></div>
  //               </div>
  //             ))}
  //           </Slider>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );


  return (
    <div className="service_section_root">
      <div className="service_section_container container">
        <div className="row">
          <div className="col-lg-4 col-md-4 service_section_left">
            <h3>
              <span>Intelgigs -</span> Where Innovation Meets Aspiration
            </h3>
            <p>
              At Intelgigs, we don't just create solutions; we craft
              transformative experiences that propel your vision into the
              digital future. Embrace innovation, embrace success.
            </p>
            <div className="service_section_left_btn">
              <Link to="/service" className="learn-more-btn">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 service_section_right">
            <Slider {...carouselSettings}>
              {services.map((service, index) => (
                <div key={index} className="carousel_card card">
                  <div className="card-overlay">
                    <div className="card-body">
                      <h4>{service.title}</h4>
                      <p>{service.text}</p>
                    </div>
                  </div>
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
