// import React from "react";
// import { Link } from "react-router-dom";
// import "./css/header.css";
// import AnnouncementBar from "../home/announcement/announcement_bar";
// function Header() {
//   return (
//     <div>
//       <AnnouncementBar />
//       <div className="container">
//         <nav className="navbar navbar-expand-md">
//           <Link to="/" className="navbar-brand">
//             <svg className="bi me-2" width="40" height="32">
//               <use xlinkHref="#bootstrap" />
//             </svg>
//             <span className="fs-4">IntelGigs</span>
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav ">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link " aria-current="page">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/features" className="nav-link">
//                   Features
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/pricing" className="nav-link">
//                   Pricing
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/faqs" className="nav-link">
//                   FAQs
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/about" className="nav-link">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item header_btn">
//                 <p className=" header_contact_btn">
//                   <Link to="/contact">Contact Us</Link>
//                 </p>
//               </li>
//             </ul>
//           </div>
//         </nav>
//         <div
//           className="b-example-divider header_divider"
//         ></div>
//       </div>
//     </div>
//   );
// }

// export default Header;


// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import AnnouncementBar from "../home/announcement/announcement_bar";

function Header() {
  return (
    <div className="header-container">
      <AnnouncementBar />
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <Link to="/" className="navbar-brand header-brand">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4 header-brand-text">IntelGigs&trade;</span>
          </Link>

          <button
            className="navbar-toggler header-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse header-nav" id="navbarNav">
            <ul className="navbar-nav ms-auto header-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link header-link" aria-current="page">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/features" className="nav-link header-link">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link header-link">
                  Quotes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faqs" className="nav-link header-link">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link header-link">
                  Career
                </Link>
              </li>
              <li className="nav-item header-btn">
                <p className="header-contact-btn">
                  <Link to="/contact" className="header-link">
                    Contact Us
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header-divider"></div>
      </div>
    </div>
  );
}

export default Header;
