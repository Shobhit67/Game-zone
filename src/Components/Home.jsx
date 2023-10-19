import React from "react";
import Common from "./Common";
import web from "../images/goku2.png";


function Home() {
  return (
    <div>
      <Common 
      Title =" Welcome to the "
      brandname ="ultimate gaming destination!"
      visit ="/services"
      imgSrc ={web}
      btnname="Get started"/>
    </div>
  );
}

export default Home;