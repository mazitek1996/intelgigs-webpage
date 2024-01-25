// import React, { useState, useEffect } from 'react';
// import './display_screen.css';

// function DisplayScreen() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`card ds_card ${scrolled ? 'scrolled' : ''}`}>
//       {/* video content goes here */}
//     </div>
//   );
// }

// export default DisplayScreen;



import React, { useState, useEffect } from 'react';
import './display_screen.css';
import videoSource from '../../../assets/video/184489-1080p.mp4'; 

function DisplayScreen() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`card ds_card ${scrolled ? 'scrolled' : ''}`}>
      <video className="video-bg" autoPlay loop muted>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        {/* Add your card content here */}
        <h2>Nivarix Technologies &trade;</h2>
        <p>Empowering Innovations, Transforming Realities</p>
      </div>
    </div>
  );
}

export default DisplayScreen;
