import React from "react";
import Common from "./Common";
import web from "../images/goku2.png";
import { useEffect } from "react";
function Home() {

  return (
    <div>
      <Common
        Title=" Welcome to the "
        brandname="ultimate gaming destination!"
        visit="/services"
        imgSrc={web}
        subtitle="We provide you with an excellent Gaming experience 🔥"
        btnname="Get started"
      />
    </div>
  );
}

export default Home;
