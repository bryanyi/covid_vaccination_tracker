import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/App.css";

// COMPONENTS
import Navigation from "./components/Navigation";
import CountryStats from "./components/CountryStats";
import InfoDetails from "./components/InfoDetails";
import Chart from "./components/Chart";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get("http://127.0.0.1:8000");
    setCountries(data);
  }, [setCountries]);

  return (
    <div className="App">
      <div className="left__screen">
        <Navigation />
        <CountryStats />
        <Chart />
      </div>

      <div className="right__screen">
        <InfoDetails />
      </div>
    </div>
  );
};

export default App;
