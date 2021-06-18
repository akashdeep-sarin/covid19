import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card" style={{width:`${props.width}vw`}}onClick={props.onClick}>
      <div
        className="card-image"
        style={{
          backgroundImage: "url(" + props.image + ")",
        }}
      ></div>
      <div className="card-text-heading">{props.heading}</div>
      <div className="card-text-desc">{props.text}</div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  width:PropTypes.number.isRequired,
};

export default Card;