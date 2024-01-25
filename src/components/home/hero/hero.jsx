import React from "react";
import "./hero.css";
import {
  BsArrowUpRight,
  BsArrowRight,
  BsCloudDownload,
  BsDatabaseAdd,
  BsCodeSlash,
  BsMegaphone,
  BsLaptop,
  BsQrCodeScan,
  BsFingerprint,
  BsGithub,
  BsArrowUpRightCircle,
} from "react-icons/bs";
import { FaBrain } from "react-icons/fa";

import Typewriter from "typewriter-effect";
import DisplayScreen from "../display_screen/display_screen";
import FeatureSection from "../../pages/services/featured_services";

function Hero() {
  return (
    <div>
      <div className="hero_root">
        <div className="hero_container">
          <div className="hero_content">
            <div class="px-4 py-5  text-center">
              <div className="hero_heading">
                <h1 class="col-lg-8 mx-auto">
                  Empowering Dreams, Transforming Realities - Welcome to
                  Nivarix
                </h1>
                
              </div>
              <div class="col-lg-6 mx-auto">
                <div className="hero_subheading">
                  <p className="lead mb-4 max-w-4xl text-lg mx-auto mt-6 md:text-xl">
                    <Typewriter
                      options={{
                        strings: [
                          `Where Innovation Meets Purpose ${String.fromCharCode(
                            8599
                          )}`,

                          "Pioneering Software Excellence in the Heart of Nigeria",
                          "Unlocking creativity and innovation with our cutting-edge solutions",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
                </div>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center hero_button">
                  <div class="hero_btn_text px-4 gap-3">
                    <p>
                      {" "}
                      Explore <BsArrowRight />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4  text-center">
              <div className="hero_icons_section">
                <div className="col-lg-6 mx-auto">
                  <p>
                    <BsCloudDownload className="hero_icon" />
                    <FaBrain className="hero_icon" />

                    <BsDatabaseAdd className="hero_icon" />
                    <BsCodeSlash className="hero_icon" />
                    <BsMegaphone className="hero_icon" />
                    <BsLaptop className="hero_icon" />
                    <BsQrCodeScan className="hero_icon" />
                    <BsFingerprint className="hero_icon" />
                    <BsGithub className="hero_icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="display_screen ">
          <DisplayScreen />

          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;
