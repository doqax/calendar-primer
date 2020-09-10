import React from "react";
import Hour from "./Hour";

function Hours() {
  const hours = [];
  let formatHours;
  for (let i = 0; i <= 23; i++) {
    formatHours = i <= 11 ? " AM" : " PM";
    hours.push(
      <Hour hour={i} format={formatHours} key={i} />
    );
  }
  return <div>{hours}</div>;
}

export default Hours;
