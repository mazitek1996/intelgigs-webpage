import React from "react";
import "./about_section.css";
import AWSLogo from "../../../assets/company/aws-2.svg";
import GoogleLogo from "../../../assets/company/google-1-1.svg";
import MetaLogo from "../../../assets/company/meta-1.svg";
import OpenaiLogo from "../../../assets/company/openai-wordmark.svg";
import GithubLogo from "../../../assets/company/github-2.svg";
import AzureLogo from "../../../assets/company/azure-1.svg";
import MicrosoftLogo from "../../../assets/company/microsoft-5.svg";
import AboutContent from "./about_content";
import TechStacks from "../tech_stack/tech_stacks";

function AboutSection() {
  return (
    <div className="about_root">
      <div className="about_container container">
        <div className="about_us_icons_container px-4 py-5  text-center">
          <div className="about_us_icons_text">
            <p>Partnering with leading enterprises</p>
          </div>

          <div className="about_us_icons px-4 py-4  text-center">
            <img src={AWSLogo} alt="AWS" className="img-fluid" />
            <img src={GoogleLogo} alt="Google" className="img-fluid" />
            <img src={MetaLogo} alt="Meta" className="img-fluid" />
            <img src={OpenaiLogo} alt="OpenAI" className="img-fluid" />
            <img src={GithubLogo} alt="Github" className="img-fluid" />
            <img src={AzureLogo} alt="Azure" className="img-fluid" />
            <img src={MicrosoftLogo} alt="Mircosoft" className="img-fluid" />
          </div>
        </div>

<div className="about_us_content_container mb-4">

<AboutContent/>
<TechStacks/>

</div>

      </div>
    </div>
  );
}

export default AboutSection;
