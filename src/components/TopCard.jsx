import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bounce } from "react-activity";
import DoughNutGraph from "../utlis/Doughnut";
import LineGraph from "../utlis/LineGraph";
import "./styles/TopCard.css";

function TopCard({ days }) {
  const [androidData, setandrodiData] = useState(null);
  //const [iosData, setiosData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [data, setData] = useState(null);

  useEffect(() => {
    getDAUData();
    getAUData();
  }, []);

  const getDAUData = async () => {
    axios.get(`http://192.168.56.1:8080/ProjectX/api/dau`).then((res) => {
      setandrodiData(res.data);
    });
  };
  const getAUData = async () => {
    axios.get(`http://192.168.56.1:8080/ProjectX/api/au`).then((res) => {
      setData(res.data);
    });
  };
  return (
    <div className="main">
      <div className="main-graph-card">
        <div className="main-graph">
          {androidData == null ? (
            <div className="graph-loader">
              <Bounce />
            </div>
          ) : (
            <div className="line-graph">
              <LineGraph
                days={days}
                data1={androidData}
                data2={iosData}
                data1label={"Android Users"}
                data2label={"IOS Users"}
              />
            </div>
          )}
        </div>
        <div className="graph-title">
          <h4>Daily Active Users</h4>
        </div>
      </div>

      <div className="top-card">
        <div className="top-card-graph">
          <div className="doughnut-graph">
            <DoughNutGraph data={data} />
          </div>
          {/* <div className="graph-loader">
            <Sentry />
          </div> */}
        </div>

        <div className="card-title">
          <h4>
            <b>Current Active Users</b>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default TopCard;
