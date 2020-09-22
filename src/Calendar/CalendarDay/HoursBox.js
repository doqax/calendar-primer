import React from "react";
import { BorderBox } from "@primer/components";
import dayjs from "dayjs";
import "./minutes.css";

function HoursBox({ date, isSameHour, children }) {
  let minutes = false;
  if (isSameHour) {
    minutes = parseInt(dayjs(isSameHour).format("m")) / 60 * 100;
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
        {children}
      </BorderBox>
    </div>
  );
}

export default HoursBox;
