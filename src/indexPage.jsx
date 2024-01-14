
import React from 'react'
import Hero from './components/home/hero/hero'
import AboutSection from './components/home/about/about_section'
import ServiceSection from './components/home/service/service_section'
import CtaSection from './components/home/cta/cta_section'
import TestimonialSection from './components/home/testimonial_section/testimonial_section'

function IndexPage() {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <div style={{ background: "linear-gradient(145deg, rgb(26, 35, 46), rgb(46, 56, 66) 70%)" }}>
      <ServiceSection />
      <TestimonialSection />
    </div>

      <CtaSection/>

    </div>
  )
}

export default IndexPage