import React from "react";
import WeatherCard from "../weatherCard/WeatherCard";

const days = [
  "Nedjelja",
  "Ponedjeljak",
  "Utorak",
  "Srijeda",
  "Četvrtak",
  "Petak",
  "Subota"
];

const cards = props => {
  return props.data.map(day => {
    let date = new Date(day.date);
    return (
      <WeatherCard
        day={days[date.getDay()]}
        temperature={day.day.avgtemp_c}
        img={day.day.condition.icon}
      />
    );
  });
};
export default cards;
