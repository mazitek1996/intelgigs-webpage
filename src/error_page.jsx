import React from "react";
import ErrorImage from "./assets/images/errorImage.svg";
import "./error_page.css";
import { BsArrowRightShort } from "react-icons/bs";

function ErrorPage() {
  return (
    <div className="error_page_root">
      <div className="error_page_container text-center">
        <div className="p-5  rounded-3">
          <div className="container-fluid py-5">
            <img src={ErrorImage} alt="Error Image" className="error_image img-fluid" />
            <h1 >Oops! Page Not Found</h1>
            <p >
              It seems like you've encountered a dead end. The page you are
              looking for might have been moved, deleted, or it never existed.
              Let's get you back on track!
            </p>
            <a href="/" className="btn error_btn btn-lg" type="button">
              Go to Home Page <BsArrowRightShort />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
