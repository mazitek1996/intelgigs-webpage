
import React from 'react'
import "./cta_section.css"
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
function CtaSection() {
  return (
    <div>


<div class="container cta_root col-xxl-8  ">
    <div class="row flex-lg-row-reverse align-items-center g-5  cta_container">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://getbootstrap.com/docs/5.3/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6 cta_contents">
        <h3 class="  mb-3">Empower Your Success Journey with Nivarix</h3>
        <p class="lead">Unleash the potential of your business with Nivarix – your strategic partner for digital excellence. Elevate your brand, captivate your audience, and thrive in the online realm. Collaborate with us and turn aspirations into achievements. Your success story begins here. Ready to elevate your digital game?</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn  btn-lg px-4 me-md-2"> <Link to="/contact" >Let's make it happen <BsBoxArrowInUpRight/></Link></button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default CtaSection