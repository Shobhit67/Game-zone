import React from "react";
import Cards from "./Cards";
import ImagesData from "./ImagesData";

function Services() {

  console.log(ImagesData.link);

  return (
    <div>
      <div className="my-5">
        <h2 className="text-center fs-1">Welcome to Our Gaming World<br/><br/></h2>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                  {
                      ImagesData.map( (val, index) => {
                        return <Cards
                        key = {index}
                        imgSrc = {val.imgSrc}
                        title={val.title} 
                        link = {val.link}
                        />
                      })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;