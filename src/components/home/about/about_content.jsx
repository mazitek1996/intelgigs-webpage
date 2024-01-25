import React from "react";
import "./about_content.css";
import { BsArrowUpRightCircle,BsFeather } from "react-icons/bs";
import OurStoryImage from "../../../assets/company/Businessupport-amico.svg";

function AboutContent() {
  return (
    <div className="ac_root">
      <div className="ac_container">
        <div className="ac_headings">
          <h2>Unleashing Possibilities & Pioneering Innovation</h2>

          <p className="ac_subheadings">
            Embarking on a Transformative Journey, Fueled by Unmatched Passion
            and Endless Drive
          </p>
        </div>
        <div className="ac_contents_root container">
          <div className="row">
            <div className="col-lg-6 col-md-6 ac_content_left">
              {/* About text will be here */}

              <div className="os_content_left_heading">
                <span>
                  <h2>Nivarix Technologies</h2>
                  <h3>
                    A Vision Realized <BsArrowUpRightCircle />
                  </h3>
                </span>
                <div className="os_heading_divider"></div>
              </div>

              <p className="os_content_left">
                At Nivarix, our journey began as a collective of passionate
                individuals driven by a shared vision for innovation and
                technological excellence. It all started with a simple idea—an
                idea that would later evolve into a thriving venture that we
                proudly call Nivarix today.
              </p>

              <div className="os_content_left_heading">
                <span>
                  <h2>
                    Transformation from Ideas to Venture{" "}
                    <BsArrowUpRightCircle />
                  </h2>
                </span>
                <div className="os_heading_divider"></div>
              </div>

              <p className="os_content_left">
                From the conceptualization of our ideas to the realization of a
                full-fledged venture, our path has been marked by dedication,
                hard work, and a relentless pursuit of excellence. We
                transformed our vision into a reality, fueled by the desire to
                make a meaningful impact in the tech industry.
              </p>

              <div className="os_content_left_heading">
                <span>
                  <h2>
                    Impact on African Society <BsArrowUpRightCircle />
                  </h2>
                </span>
                <div className="os_heading_divider"></div>
              </div>

              <p className="os_content_left">
                Nivarix is not just a company; it's a catalyst for positive
                change. Our journey has been intertwined with the vibrant fabric
                of the African society. We take pride in contributing to
                technological advancements that transcend borders, creating
                opportunities, and empowering individuals across the continent.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 ac_content_right">
              {/* the images will be here */}
              <img src={OurStoryImage} alt="our story" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
