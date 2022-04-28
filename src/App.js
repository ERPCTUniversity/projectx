import axios from "axios";
import React, { useEffect, useState } from "react";

import "./App.css";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import TopCard from "./components/TopCard";

function App() {
  const [dprdata, setdprdata] = useState();
  const [leavedata, setleavedata] = useState(null);
  const [DSGPdata, setDSGPdata] = useState(null);
  const [HGPdata, setHGPdata] = useState(null);
  const [weekDays, setWeekDays] = useState(null);
  const baseUrl = `http://192.168.132.126:8080/ProjectXWebAPI/`;

  useEffect(() => {
    var weekDays = getWeekDays("en-US");
    setWeekDays(weekDays);
    getDPRData();
    getLeaveData();
    getGatePassData();
  }, []);

  const getDPRData = async () => {
    axios.get(baseUrl + `api/dpr`).then((res) => {
      setdprdata(res.data);
    });
  };
  const getLeaveData = async () => {
    axios.get(baseUrl + `api/leave`).then((res) => {
      setleavedata(res.data);
    });
  };
  const getGatePassData = async () => {
    axios.get(baseUrl + `api/gatepass`).then((res) => {
      setDSGPdata(res.data[0]);
      setHGPdata(res.data[1]);
    });
  };

  function getWeekDays(locale) {
    var baseDate = new Date(new Date());
    baseDate.setDate(baseDate.getDate() + 1);
    var weekDays = [];
    var i;
    for (i = 0; i < 7; i++) {
      weekDays.push(baseDate.toLocaleDateString(locale, { weekday: "long" }));
      baseDate.setDate(baseDate.getDate() + 1);
    }
    return weekDays;
  }

  return (
    <div className="home">
      <div className="navbar-top">
        <NavBar />
      </div>
      <div className="home-row">
        <TopCard days={weekDays} />
      </div>
      <div className="home-row">
        <Cards days={weekDays} data1={dprdata} label1="DPR" />

        <Cards
          days={weekDays}
          data1={leavedata}
          label1="Faculty Leave Trend"
          data2={leavedata}
          label2="PDL"
        />
        <Cards
          days={weekDays}
          data1={HGPdata}
          label1="Hostel GatePass Trend"
          data2={DSGPdata}
          label2={"DaySchol GatePass Trend"}
        />
      </div>
    </div>
  );
}

export default App;
