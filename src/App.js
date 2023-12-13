import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import City from "./modules/CityComponent";
import Weather from "./modules/WeatherComponent";

const API_KEY = "aa892e0878154fc99cec98fc13b4879c";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 300px;

  background: #f2ffff;
  font-family: Ubuntu;
`;

// const Heading = styled.span`
//   color: black;
//   font-size: 20 px;
//   font-weight: bold;
// `;

const App = () => {
  const [city, setCity] = useState("");
  const [weatherapi, setweatherapi] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );

    setweatherapi(response.data);
  };

  return (
    <Container>
      <h1>Weather App</h1>
      {weatherapi ? (
        <Weather weather ={weatherapi} />
      ) : (
        <City updatecity={setCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
};

export default App;
