// TechStackContainer.js
import React, { useState } from "react";
import TechStackItem from "./TechStackItem";

// Import images for Frontend

import ReactImage from "../../../assets/brands/react.svg";
import AngularImage from "../../../assets/brands/angular.svg";
import BootstrapImage from "../../../assets/brands/bootstrap.svg";
import VueImage from "../../../assets/brands/vue.svg";
import JavascriptImage from "../../../assets/brands/javascript.svg";
import TypescriptImage from "../../../assets/brands/typescript.svg";

// Import images for UI/UX
import FigmaImage from "../../../assets/brands/figma.svg";
import SketchImage from "../../../assets/brands/sketch.svg";
import IllustratorImage from "../../../assets/brands/illustrator.svg";
import PhotoshopImage from "../../../assets/brands/photoshop.svg";

// Import images for Mobile
import ReactNativeImage from "../../../assets/brands/ReactNative.svg";
import FlutterImage from "../../../assets/brands/Flutter.svg";
import AndroidImage from "../../../assets/brands/Android.svg";
import IOSImage from "../../../assets/brands/IOS.svg";
import XamarinImage from "../../../assets/brands/Xamarin.svg";
import SwiftImage from "../../../assets/brands/Swift.svg";

// Import images for Backend
import NodeJs from "../../../assets/brands/NodeJS.svg";
import DjangoImage from "../../../assets/brands/django.svg";
import PythonImage from "../../../assets/brands/Python.svg";
import RubyonrailsImage from "../../../assets/brands/ruby.svg";
import GolangImage from "../../../assets/brands/Golang.svg";
import FirebaseImage from "../../../assets/brands/Firebase.svg";

// Import images for DataBase

import MongoDBImage from "../../../assets/brands/MongoDB.svg";
import PostgreSQLImage from "../../../assets/brands/PostgreSQL.png";
import MySQLImage from "../../../assets/brands/MySQL.svg";

import { Container, Button, Row, Col } from "react-bootstrap";
import "./techStack_container.css";

const TechStacks = () => {
  const techStacks = [
    {
      title: "Frontend",
      technologies: [
        { image: ReactImage, link: "https://reactjs.org/" },
        { image: AngularImage, link: "https://angular.io/" },
        {
          image: BootstrapImage,
          link: "https://getbootstrap.com/",
        },
        { image: VueImage, link: "https://vuejs.org/" },
        {
          image: JavascriptImage,
          link: "https://www.javascript.com/",
        },
        {
          image: TypescriptImage,
          link: "https://www.typescriptlang.org/",
        },
      ],
    },
    {
      title: "UX/UI Design",
      technologies: [
        {
          image: FigmaImage,
          link: "https://www.figma.com/",
        },
        {
          image: SketchImage,
          link: "https://www.sketch.com/",
        },
        {
          image: IllustratorImage,
          link: "https://www.adobe.com/products/illustrator.html",
        },
        {
          image: PhotoshopImage,
          link: "https://www.adobe.com/products/photoshop.html",
        },
      ],
    },

    {
      title: "Mobile",
      technologies: [
        {
          image: ReactNativeImage,
          link: "https://reactnative.dev/",
        },
        {
          image: FlutterImage,
          link: "https://flutter.dev/",
        },
        {
          image: AndroidImage,
          link: "https://reactnative.dev/",
        },
        {
          image: IOSImage,
          link: "https://flutter.dev/",
        },
        {
          image: XamarinImage,
          link: "https://reactnative.dev/",
        },
        {
          image: SwiftImage,
          link: "https://flutter.dev/",
        },
        // Add more mobile technologies
      ],
    },
    {
      title: "Backend",
      technologies: [
        {
          image: NodeJs,
          link: "https://nodejs.org/",
        },
        {
          image: DjangoImage,
          link: "https://www.djangoproject.com/",
        },

        {
          image: PythonImage,
          link: "https://www.python.org/",
        },

        {
          image: RubyonrailsImage,
          link: "https://www.ruby-lang.org/",
        },

        {
          image: GolangImage,
          link: "https://go.dev/",
        },

        {
          name: "Firebase",
          image: FirebaseImage,
          link: "https://firebase.google.com/",
        },

        // Add more backend technologies
      ],
    },

    {
      title: "Database",
      technologies: [
        {
          image: MongoDBImage,
          link: "https://www.mongodb.com/",
        },
        {
          image: PostgreSQLImage,
          link: "https://www.postgresql.org/",
        },
        {
          image: MySQLImage,
          link: "https://www.postgresql.org/",
        },

        // Add more database technologies
      ],
    },
    {
      title: "Cloud",
      technologies: [
        {
          image: "aws-image-url",
          link: "https://aws.amazon.com/",
        },
        {
          image: "azure-image-url",
          link: "https://azure.microsoft.com/",
        },
        // Add more cloud technologies
      ],
    },

    {
      title: "DeveOps",
      technologies: [
        {
          image: "aws-image-url",
          link: "https://aws.amazon.com/",
        },
        {
          image: "azure-image-url",
          link: "https://azure.microsoft.com/",
        },
        // Add more cloud technologies
      ],
    },

    {
      title: " Trending Technologies",
      technologies: [
        {
          image: "aws-image-url",
          link: "https://aws.amazon.com/",
        },
        {
          image: "azure-image-url",
          link: "https://azure.microsoft.com/",
        },
        // Add more cloud technologies
      ],
    },
    // Add more tech stacks as needed
  ];

  const [selectedTechStack, setSelectedTechStack] = useState("Frontend");

  const handleTechStackSelect = (title) => {
    setSelectedTechStack(title);
  };

  return (
    <Container>
      <div className="ts_sections_contents">
        <div className="ts_section_text">
          <h2>Explore Our Tech Stacks</h2>
          <Row>
            {techStacks.map((techStack, index) => (
              <Col key={index} md={4} sm={6}>
                <TechStackItem
                  title={techStack.title}
                  onSelect={handleTechStackSelect}
                  isActive={selectedTechStack === techStack.title}
                />
              </Col>
            ))}
          </Row>
        </div>
        <div className="tech-stack-technologies">
          {techStacks
            .find((stack) => stack.title === selectedTechStack)
            .technologies.map((tech) => (
              <div key={tech.name} className="tech-item">
                <a
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center"
                >
                  <img src={tech.image} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default TechStacks;
