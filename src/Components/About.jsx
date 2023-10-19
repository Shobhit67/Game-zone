import React from "react";
import Common from "./Common";
import web from "../images/cartoon.png";

function About() {
  return (
    <div>
      <Common
        Title="Who We "
        brandname="Are?"
        visit="/login"
        imgSrc={web}
        btnname="Feedback"
        feedbacktext="We are a passionate team of developers behind an innovative React and Node.js application
         that offers a diverse selection of games within a unified platform. 
         Committed to providing a seamless gaming experience, our team is dedicated to 
         creating, maintaining, and improving this platform. We greatly appreciate your valuable feedback,
          as it plays a crucial role in our ongoing efforts to enhance the gaming experience for our community."
      />
    </div>
  );
}

export default About;
