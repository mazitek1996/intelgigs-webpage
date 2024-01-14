import React from "react";
import "./testimonial_section.css";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function TestimonialSection() {
  const testimonials = [
    {
      user: "John Adeboye",
      testimony:
        "Working with Intelgigs has been an amazing experience. They delivered exceptional results and exceeded our expectations.",
      rating: 5,
    },
    {
      user: "Musa Yahaya",
      testimony:
        "Intelgigs stands out for their professionalism and commitment to excellence. We are thrilled with the outcomes they have achieved for us.",
      rating: 4,
    },
    {
      user: "Bob Okereke",
      testimony:
        "I highly recommend Intelgigs. Their innovative solutions have added significant value to our projects. A pleasure to work with!",
      rating: 5,
    },
  ];

  return (
    <div className="testimonial_root">
      <div className=" text-secondary  text-center">
        <div className="py-3">
          <h2 className="testimonial-heading">What Our Clients Say</h2>
          <p className="testimonial-subheading">
            Discover the experiences of our satisfied clients.
          </p>
          <div
            id="testimonialCarousel"
            className="carousel carousel-dark slide"
          >
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  data-bs-interval="10000"
                >
                  <div className="testimonial-card card shadow d-block w-100">
                    <div className="card-body">
                      <h5 className="card-title">{testimonial.user}</h5>
                      <p className="card-text">{testimonial.testimony}</p>
                      <p className="card-rating">
                        Rating: {testimonial.rating}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="testimonial_explore_btn">



        <p><Link to="/testimonial" >
Explore more <span><BsBoxArrowInUpRight/></span>
              </Link>
              </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
