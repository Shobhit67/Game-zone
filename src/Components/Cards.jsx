import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Cards(props) {
  const isLinkPaid = props.link === "Paid";

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to update the class based on the viewport width
    const updateClass = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 1195px)").matches);
    };

    // Initial update on component mount
    updateClass();

    // Add event listener for window resize
    window.addEventListener("resize", updateClass);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateClass);
    };
  }, []); // Empty dependency array means this effect runs once on mount
  // margin:"5rem"

  return (
    <div
      className={`Card-box ${isSmallScreen ? "col-md-12" : "col-md-4"}`}
      style={{ margin: isSmallScreen ? "5rem" : "0rem" }}
    >
      <div className="card" style={{ width: "70%", border: "none" }}>
        <div className="embed-responsive embed-responsive-16by9">
          <img src={props.imgSrc} className="card-img-top" alt={props.imgSrc} />
          <div className="card-body" style={{ border: "1px solid lightBlue" }}>
            <h5 className="card-title font-weight-bold text-uppercase">
              {props.title}
            </h5>
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
