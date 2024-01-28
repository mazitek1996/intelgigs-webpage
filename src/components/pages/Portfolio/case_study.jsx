import React from "react";
import "./case_study.css";
import CaseStudyIntroImage from "../../../assets/images/representation-user-experience-interface-design.jpg";
import { BsBoxArrowUpRight } from "react-icons/bs";

function CaseStudy() {
  return (
    <div className="case_study_root">
      {/* Case Study Introduction Section */}
      <section className="c_s_intro_container container-fluid">
        <div className="px-4 pt-5 text-center border-bottom">
          <h1 className="display-4 ">
            Empowering Businesses with Innovative Solutions
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              At Nivarix, we go beyond conventional solutions. Our team crafts
              innovative strategies that drive success in the digital landscape.
              Discover how our expertise can elevate your business.
            </p>
          </div>
          <div className="overflow-hidden c_s_intro_window">
            <div className="container px-5">
              <img
                src="https://images.unsplash.com/photo-1601237660277-479ac7b5d764?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Case Study Introduction"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Showcase Section */}
      <section>
        <div className="container Strategies_showcase_section col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block mx-lg-auto img-fluid"
                alt="Strategies Showcase"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="  lh-1 mb-3">Strategies Showcase</h1>
              <p className="Strategies_showcase_section_p">
                Explore our diverse range of strategies that demonstrate our
                team's capabilities. From hypothetical case studies to internal
                projects, skills showcase, and educational content, we showcase
                our commitment to excellence.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                {/* <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Explore Strategies
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognitions Section */}

      <section className="awards_recognitions_section">
        <div className="awards_recognitions_container container">
          <div class="p-5 mb-4  rounded-3 celebrating-section">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-8 ">
                  <h2>
                    Celebrating Technological Visionaries and Achievements
                  </h2>
                  <p>
                    At Nivarix, our success is a collective journey marked by
                    the visionaries, innovators, and bright minds who make up
                    our community. While we may not boast a wall of corporate
                    awards, our greatest recognition lies in the growth and
                    accomplishments of the individuals we work with.
                  </p>

                  <p>
                    At Nivarix, our success is a collective journey marked by
                    the visionaries, innovators, and bright minds who make up
                    our community. While we may not boast a wall of corporate
                    awards, our greatest recognition lies in the growth and
                    accomplishments of the individuals we work with.
                  </p>
                </div>
                <div class="col-md-4">
                  <img
                    src="https://images.unsplash.com/photo-1659284652601-7ac13e5750d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Image"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-md-stretch empower_section">
            <div class="col-md-6">
              <div class="h-100 p-5 text-bg-dark rounded-3">
                <h2>Empowering Tech Trailblazers</h2>
                <p>
                  We celebrate the achievements of the young, brilliant minds
                  who contribute to Nivarix's vibrant ecosystem. Our focus is on
                  fostering an environment where visionary individuals can
                  flourish, gain experiences, and contribute meaningfully to
                  innovative projects. Our greatest reward is seeing our
                  community members thrive and leave a lasting impact on the
                  tech landscape.
                </p>
                <p>
                  Nivarix is not just a company; it's a community of learners,
                  collaborators, and forward-thinkers. We prioritize recognizing
                  the efforts of those who strive for excellence, providing them
                  with opportunities to shine and contribute to groundbreaking
                  projects. Our commitment to empowering the next generation of
                  tech leaders is reflected in every success story within our
                  community.
                </p>
              </div>
            </div>
            <div class="col-md-6 bg-with-image awards_recognitions_section_bg_image">
              <div class="h-100 p-5 shadow border rounded-3">
                <h2>Building a Legacy of Innovation</h2>
                <p>
                  Join us in celebrating the visionaries, the creators, and the
                  trailblazers who are defining the future of technology at
                  Nivarix. Together, we're not just achieving milestones; we're
                  building a legacy of innovation and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Industry Collaborations Section */}
      <section className="industry_collaborations_section ">
        <div className="industry_collaborations_container container">
          <h2>Empowering the African Future through Collaborations</h2>

          <div className="row ">
            <div className="col-lg-6 col-md-6 industry_collaborations_top_left">
              <img
                src="https://images.unsplash.com/photo-1583770539147-581738d1310a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA3fHx0ZWNobm9sb2d5fGVufDB8fDB8fHww"
                alt=""
                className="img-fluid"
              />
            </div>

            <div className="col-lg-6 col-md-6 industry_collaborations_top_right">
              <p>
                Welcome to Nivarix, where our mission extends beyond technology
                – it's about transforming ideas into opportunities, empowering
                businesses, and shaping the future of Africa. As a company at
                the forefront of innovation, our journey is marked by a
                commitment to excellence, collaboration, and uplifting small and
                medium-sized enterprises (SMEs).
              </p>
              <p>
                At Nivarix, we firmly believe in the transformative power of
                technology. Our vision is to harness this power to uplift
                businesses across Africa, driving economic growth and fostering
                innovation. Even in our early stages, our focus remains
                unwavering – we aspire to be catalysts for positive change,
                bringing about a digital revolution that empowers businesses of
                all sizes.
              </p>
            </div>
          </div>

          <div className="industry_collaborations_down">
            <div className="text-center">
              <p>
                Our core principles are rooted in collaboration, integrity, and
                innovation. While our client portfolio is taking shape, our
                dedication to uplifting SMEs is unwavering. We are actively
                seeking partnerships with industry influencers, associations,
                and organizations that share our vision. Through these
                collaborations, we aim to co-create solutions that address the
                unique challenges faced by businesses in the African context.
              </p>
              <p>
                Join us as we embark on a journey to redefine the technological
                landscape. Through strategic collaborations, Nivarix seeks to
                pioneer advancements that not only propel businesses forward but
                also contribute to the socio-economic development of Africa.
                Together, we can build a future where innovation knows no
                bounds, and businesses thrive with the support of cutting-edge
                solutions crafted by Nivarix.
              </p>
            </div>
          </div>
          <div className="industry_collaborations_bottom_text text-center">
            <p>
              Be part of our story, and let's shape the African future together{" "}
              <BsBoxArrowUpRight />.
            </p>
          </div>
        </div>
      </section>

      {/* Employee Spotlights Section */}
      <section className="employee_spotlights_section  card">
        <div className="employee_spotlights_container container">
          <h2>Spotlighting Visionary Minds</h2>
          <p>
            At Nivarix, our strength lies not just in the technology we build
            but in the brilliant minds that power our innovations. Our employee
            spotlights feature the diverse and visionary individuals who form
            the heart of our community. We don't just work together; we grow
            together, learn together, and celebrate each other's successes.
          </p>
          <p>
            Meet our community members — young, brilliant minds with a shared
            passion for pushing boundaries and creating meaningful impact. We
            believe in providing a platform for newbies to thrive, learn, and
            contribute to groundbreaking projects. Our focus is on nurturing
            talent, fostering a collaborative spirit, and ensuring that
            everyone, regardless of experience, plays a crucial role in our
            journey.
          </p>
          <p>
            In our spotlights, we share stories of growth, challenges overcome,
            and the innovative contributions of our community members. From
            coding enthusiasts to design mavens, each spotlight showcases the
            unique skills and perspectives that make Nivarix a vibrant and
            dynamic workplace.
          </p>
          <p>
            Join us in celebrating the next generation of tech leaders. Whether
            you're an experienced professional or a newcomer eager to learn,
            Nivarix is more than a workplace – it's a community where visionary
            minds come together to shape the future.
          </p>
        </div>
      </section>

      {/* Future Projects and Roadmap Section */}
      <section className="future_projects_section container">
        <div className="future_projects_container">
          <div
            id="myCarousel"
            class="carousel slide mb-6"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <svg
                  class="bd-placeholder-img"
                  width="100%"
                  height="300px"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="300px" fill="var(--bs-success)" />
                </svg>
                <div class="container">
                  <div class="carousel-caption text-start">
                    <h2>Embarking on the Future</h2>

                    <p class="opacity-75">
                      At Nivarix, our journey is not just about where we are now
                      but where we aim to be. The "Future Projects and Roadmap"
                      section is a glimpse into our ambitious vision and the
                      exciting initiatives that will shape our path forward.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <svg
                  class="bd-placeholder-img"
                  width="100%"
                  height="300px"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="300px" fill="var(--bs-info)" />
                </svg>
                <div class="container">
                  <div class="carousel-caption text-start">
                    <h1>Charting the Nivarix Journey</h1>
                    <p>
                      At Nivarix, we are on a journey of constant innovation and
                      evolution. Our commitment to transparency is unwavering,
                      and we take pride in sharing our future plans with you.
                      The upcoming projects showcased here embody our dedication
                      to continuous improvement, keeping us at the forefront of
                      technology. We are focused on creating solutions that not
                      only meet but anticipate the needs of tomorrow.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <svg
                  class="bd-placeholder-img"
                  width="100%"
                  height="300px"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="300px" fill="var(--bs-primary)" />
                </svg>
                <div class="container">
                  <div class="carousel-caption text-start">
                    <h1>One more for good measure.</h1>
                    <p>
                      We're excited to unveil upcoming ventures that reflect our
                      dedication to pushing boundaries, exploring new horizons,
                      and making a lasting impact. From groundbreaking software
                      solutions to cutting-edge technologies, each project in
                      our roadmap aligns with our core values of excellence,
                      innovation, and client satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="c_s_join_section pb-4">
          <p>
            Join us as we navigate the future. Whether you're a client, partner,
            or enthusiast, this section is an invitation to be part of our
            journey. Stay tuned for updates, announcements, and the unveiling of
            projects that define the next chapter in the Nivarix story.
            <BsBoxArrowUpRight />
          </p>
        </div>
      </section>
      {/* Add details of upcoming projects */}
    </div>
  );
}

export default CaseStudy;
