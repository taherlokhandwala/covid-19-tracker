import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

import styles from "./App.module.css";
import image from "./images/image.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    getData();
  }, []);

  const handleCountry = async (countryName) => {
    const fetchedData = await fetchData(countryName);
    setData(fetchedData);
    setCountry(countryName);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountry={handleCountry} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
