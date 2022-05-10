import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bounce } from "react-activity";
import DoughNutGraph from "../utlis/Doughnut";
import LineGraph from "../utlis/LineGraph";
import "./styles/TopCard.css";

function TopCard({ days }) {
  const [androidData, setandrodiData] = useState(null);
  const [iosData, setiosData] = useState(null);
  const [data, setData] = useState(null);
  const baseUrl = `https://erp.ctuniversity.in/ProjectXWebAPI/`;
  //const baseUrl = `https://localhost:44333/ProjectX/`;
  //const baseUrl = `http://192.168.132.127/ProjectXWebAPI/`;

  useEffect(() => {
    getDAUData();
    getAUData();
  }, []);

  const getDAUData = async () => {
    axios.get(baseUrl + `api/dau`).then((res) => {
      setandrodiData(res.data);
      setiosData([0, 0, 0, 0, 0, 0, 0]);
    });
  };
  const getAUData = async () => {
    axios.get(baseUrl + `api/au`).then((res) => {
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
          <h2>Daily Active Users</h2>
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
            <h3>Current Active Users</h3>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default TopCard;
