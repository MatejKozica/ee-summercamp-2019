import React from "react";
import "./WeatherCard.css";

const WeatherCard = props => {
  return (
    <div className="card" style={props.style}>
      <h1>{props.day}</h1>
      <img src={props.img} width="64px" height="64px" />
      <h1>{props.temperature} °C</h1>
    </div>
  );
};

export default WeatherCard;
