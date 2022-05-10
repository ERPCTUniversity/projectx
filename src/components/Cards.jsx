import React from "react";
import { Sentry } from "react-activity";
import "./styles/Cards.css";
import "react-activity/dist/library.css";
import LineGraph from "../utlis/LineGraph";
function Cards({ days, data1, label1, data2, label2 }) {
  return (
    <div className="card">
      <div className="card-graph">
        {data1 != null ? (
          <div className="graph">
            <LineGraph
              days={days}
              data1={data1}
              data1label={label1}
              data2={data2}
              data2label={label2}
            />
          </div>
        ) : (
          <div>
            <Sentry />
          </div>
        )}
      </div>

      <div className="card-title">
        <h3>
          <b>
            {label1 === "Hostel GatePass Trend" ? "GatePass Trend" : label1}
          </b>
        </h3>
      </div>
    </div>
  );
}

export default Cards;
