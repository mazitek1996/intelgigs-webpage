
// // AnnouncementBar.js
// import React, { useState, useEffect } from 'react';
// import { FaInfoCircle } from 'react-icons/fa';
// import { BsArrowUpRight , BsArrowUpRightSquare } from "react-icons/bs";

// import "./announcement_bar.css";

// const AnnouncementBar = () => {
//   const [announcements, setAnnouncements] = useState([
//     {
//       text: "Exciting News Coming Soon!",
//       link: "/news",
//     },
//     {
//       text: "Don't Miss Out on the Latest Updates!",
//       link: "/updates",
//     },
//     {
//       text: "Stay Tuned for Big Announcements!",
//       link: "/big-news",
//     },
//   ]);

//   const [activeAnnouncementIndex, setActiveAnnouncementIndex] = useState(0);

//   useEffect(() => {
//     const announcementInterval = setInterval(() => {
//       setActiveAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
//     }, 5000); // Change announcement every 5 seconds

//     return () => clearInterval(announcementInterval);
//   }, [announcements.length]);

//   return (
//     <div className="announcement-bar">
//       <span>
//       <p>
//         <FaInfoCircle /> 
//         <a href={announcements[activeAnnouncementIndex].link}>{announcements[activeAnnouncementIndex].text}</a>
//       </p>
//       <p>
//         Learn More 
//       </p>
//       </span>
//       <BsArrowUpRightSquare />
//     </div>
//   );
// };

// export default AnnouncementBar;


// AnnouncementBar.js
import React, { useState, useEffect } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { BsArrowUpRightSquare } from "react-icons/bs";

import "./announcement_bar.css";

const AnnouncementBar = () => {
  const [announcements, setAnnouncements] = useState([
    {
      text: "Exciting News Coming Soon!",
      link: "/news",
    },
    {
      text: "Don't Miss Out on the Latest Updates!",
      link: "/updates",
    },
    {
      text: "Stay Tuned for Big Announcements!",
      link: "/big-news",
    },
  ]);

  const [activeAnnouncementIndex, setActiveAnnouncementIndex] = useState(0);

  useEffect(() => {
    const announcementInterval = setInterval(() => {
      setActiveAnnouncementIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 5000); // Change announcement every 5 seconds

    return () => clearInterval(announcementInterval);
  }, [announcements.length]);

  return (
    <div className="announcement-bar">
      <span>
        <p>
          <a href={announcements[activeAnnouncementIndex].link}>{announcements[activeAnnouncementIndex].text}       <BsArrowUpRightSquare />
</a>
        </p>
        
      </span>
    </div>
  );
};

export default AnnouncementBar;
