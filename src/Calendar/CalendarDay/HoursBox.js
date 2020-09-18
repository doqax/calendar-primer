import React from "react";
import { BorderBox } from "@primer/components";

import moment from "moment";

import "./minutes.css";

function HoursBox({ date, isSameHour }) {
  let minutes = false;
  if (isSameHour) {
    minutes = parseInt(moment(isSameHour).format("m")) / 60 * 100;
  }

  return (
    <div className="hour">
      <BorderBox
        height={50}
        borderRadius={0}
        borderWidth={1}
        borderTopWidth={1}
        borderBottomWidth={0}
        borderRightWidth={0}
        onClick={() => console.log(date)}
      >
        {isSameHour && (<div className="minutes" style={{top: `${minutes}%`}}></div>)}
      </BorderBox>
    </div>
  );
}

export default HoursBox;
