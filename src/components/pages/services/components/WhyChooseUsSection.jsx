import React, { useRef, useEffect, useState } from "react";
import { FaUsers, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import "./WhyChooseUsSection.css";

function WhyChooseUsSection() {
  const uniqueSellingPoints = [
    {
      title: "Expert Team",
      description:
        "Embark on a transformative journey with our elite team of seasoned professionals, each a maestro in their field. We go beyond mere expertise; we are architects of innovation, creators of seamless solutions. Collaborate with our experts, and witness the fusion of your visionary ideas with our technical prowess, resulting in software that transcends functionality – a true masterpiece of ingenuity that leaves an indelible mark in the digital landscape.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Quality Assurance",
      description:
        "Quality isn’t a mere checkbox; it’s the very essence of what defines us. With an unwavering commitment to excellence, we meticulously ensure that every line of code, every feature, and every user interaction is a testament to perfection. Entrust your software requirements to us, and witness not just reliability but a standard-setting experience that elevates your digital presence and sets the bar for industry standards.",
      image:
        "https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=604&format=webpll",
    },
    {
      title: "Innovative Approach",
      description:
        "Step into a realm of innovation where your dreams seamlessly collide with groundbreaking technology. We don’t just solve problems; we reimagine them. Through an avant-garde approach, we transform complexities into elegant, user-centric solutions that redefine possibilities. Your software isn’t merely functional; it’s a testament to forward-thinking brilliance, providing your users with an experience that transcends the ordinary and positions your brand at the forefront of technological innovation.",
      image:
        "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const sectionRefs = useRef(uniqueSellingPoints.map(() => React.createRef()));
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      const newActiveSection = sectionRefs.current.findIndex(
        (ref) => ref.current.offsetTop > scrollPosition
      );

      setActiveSection(
        newActiveSection === -1
          ? uniqueSellingPoints.length - 1
          : newActiveSection
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="why_choose_us_section">
      <div className="why_choose_us_container container">
        <h2>Why Choose Us</h2>
        {uniqueSellingPoints.map((point, index) => (
          <div
            key={index}
            className={`row unique_selling_point ${
              index === activeSection ? "active" : ""
            }`}
            ref={sectionRefs.current[index]}
          >
            <div className="col-lg-6 col-md-6">
              <div className="icon">{point.icon}</div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                src={point.image}
                className="img-fluid"
                alt={`Image for ${point.title}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
