
import React from 'react'
import "./case_study.css"
import CaseStudyIntroImage from "../../../assets/images/representation-user-experience-interface-design.jpg"


function Casestudy() {
  return (
    <div className="case_study_root">

        <section>
            <div className="c_s_intro_container container-fluid">


            <div className="px-4 pt-5 text-center border-bottom">
    <h1 className="display-4 fw-bold text-body-emphasis">Centered screenshot</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
     
    </div>
    <div className="overflow-hidden c_s_intro_window">
      <div className="container px-5">
        <img src={CaseStudyIntroImage} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image"   loading="lazy"/>
      </div>
    </div>
  </div>


            </div>
        </section>

        <section>
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={CaseStudyIntroImage} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
        </div>
      </div>
    </div>
  </div>
        </section>
    </div>
  )
}

export default Casestudy


