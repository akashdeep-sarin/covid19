import React from "react";
import logo from "../logo.png"

const HeaderBar = () => {
  return (
    <div className="header-container">
      <div className="header-bar" > 
        {/* <div className="header-element logo-image" > */}
        <img className="header-element logo-image" src={logo} alt="#StopTheSpread"  href="#" />
        {/* </div> */}
        <div className="header-element text-element right-logo">#StopTheSpread</div>
        <div className="header-element text-element" href="#" >def </div>
        <div className="header-element text-element" href="#" >ghi </div>
        <div className="header-element text-element" href="#" >jkl </div>
      </div>
    </div>
  );
};

export default HeaderBar;
