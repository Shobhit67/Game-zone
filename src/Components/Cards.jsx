import React from "react";
import { NavLink } from "react-router-dom";

function Cards(props) {
  const isLinkPaid = props.link === "Paid";

  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "70%" }}>
        <div className="embed-responsive embed-responsive-16by9">
          <img src={props.imgSrc} className="card-img-top" alt={props.imgSrc}/>
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-uppercase">{props.title}</h5>
            <NavLink to={props.link} className="btn btn-outline-success btn-lg">
              {isLinkPaid ? "Paid" : "Play"}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
