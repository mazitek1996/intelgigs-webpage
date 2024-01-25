import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featured_services.css";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting immersive digital landscapes that captivate, engage, and inspire.",
    coverUrl:
      "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mobile App Development",
    description:
      "Empower your audience with cutting-edge mobile experiences, tailored for impact.",
    coverUrl:
      "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Web Designing",
    description:
      "Create visually stunning websites that leave a lasting impression on your audience.",
    coverUrl:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI & ML Integration",
    description:
      "Harness the power of Artificial Intelligence and Machine Learning for intelligent solutions.",
    coverUrl:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with strategic digital marketing campaigns that deliver results.",
    coverUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Software Development",
    description:
      "Innovative and scalable software solutions tailored to meet your business needs.",
    coverUrl:
      "https://images.unsplash.com/photo-1678995632928-298d05d41671?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function FeatureSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: false,
  };

  return (
    <div className="f_s_root">
      <div className="f_s_container container">
        <div className="f_s_heading">
          <p>
          <span className="f_s_heading_text">
  Explore our innovative services designed to elevate your digital presence and drive success. 
  We are dedicated to crafting immersive experiences that captivate, engage, and inspire.
  Partner with us to harness cutting-edge solutions and transform your ideas into reality.
</span>

          </p>
        </div>

        <Slider {...settings} className="f_s_carousel_card_container">
          {services.map((service, index) => (
            <div key={index} className="card mx-2 ">
              <img
                src={service.coverUrl}
                className="card-img img-fluid"
                alt={`Service ${index + 1}`}
              />
              <div className="card-img-overlay">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FeatureSection;
