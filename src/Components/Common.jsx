import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <div>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row partition">

                <div className="col-md-6 pt-5 pt-lg-0 d-flex order-2 order-lg-1 flex-column">
                  <h1>{props.Title}<strong className="brand-name"> {props.brandname}</strong></h1>
                  <h2 className="my-3">{props.subtitle }</h2>
                  <h3>{props.feedbacktext}</h3>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-info">{props.btnname}</NavLink>
                  </div> 
                </div>
                
                <div className="col-lg-6 order-1 order-2 header-img">
                  <img src={props.imgSrc} alt="" className="animated" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;