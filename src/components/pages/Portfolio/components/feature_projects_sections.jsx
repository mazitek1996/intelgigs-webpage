
import React from "react";

const FutureProjectsSection = () => {
  return (
    <section className="future_projects_section container">
      <div className="future_projects_container">
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          {/* ... Carousel Indicators and Inner */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="container"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1698474804175-bea12943ef24?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover' }}
              >
                <div className="carousel-caption text-start">
                  <h2>Embarking on the Future</h2>
                  <p className="opacity-75">
                    At Nivarix, our journey is not just about where we are now
                    but where we aim to be. The "Future Projects and Roadmap"
                    section is a glimpse into our ambitious vision and the
                    exciting initiatives that will shape our path forward.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Repeat the structure for other carousel items */}
            <div className="carousel-item">
              <div
                className="container"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1700173318258-3c0134576743?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover' }}
              >
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  {/* ... Other content */}
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="container"
                style={{ backgroundImage: 'https://images.unsplash.com/photo-1699862160391-97c6e8dcd173?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover' }}
              >
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  {/* ... Other content */}
                </div>
              </div>
            </div>
          </div>
          {/* ... Carousel Controls */}
          {/* Additional content below the carousel */}
          <p>
            Join us as we navigate the future. Whether you're a client, partner,
            or enthusiast, this section is an invitation to be part of our
            journey. Stay tuned for updates, announcements, and the unveiling of
            projects that define the next chapter in the Nivarix story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureProjectsSection;
