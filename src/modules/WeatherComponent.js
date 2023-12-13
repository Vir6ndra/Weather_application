import React from "react";
import styled from "styled-components";
import Wind from  "../icons/wind.svg"
import Day from "../icons/day.svg";
import Night from "../icons/night.svg";
import Humidity from "../icons/humidity.svg";
import Pressure from "../icons/pressure.svg";
// import Cloud from "../icons/cloudy.svg";
// import CloudNight from "../icons/cloudy-night.svg";
// import Rain from "../icons/rain.svg";
// import RainNight from "../icons/rain-night.svg";



const WeatherCondition =styled.div`
display : flex;
flex-direction : row;
align-items: center;
width : 100%;
justify-content:space-between;
margin: 30px auto;



`
const Condition =styled.span`
margin: 20px auto;
font-size: 14px;
& span {
     font-size : 28px;
}




`
const WeatherIcon =styled.img`
width: 100px;
height: 100px;
margin: 5px auto;

`
const Location =styled.span`
font-size : 28px;
font-weight : bold;


`
const WeatherInfo =styled.span`
font-size : 14px;
font-weight : bold;
margin: 20px 25px 10px;
text-align: start;



`

const WeatherinfoContainer = styled.div`
display : flex;
width ; 90%;
flex-direction: row;
justify-content: space-evenly;
align-item= center;
flex-wrap:wrap;
`
const InfoContainer = styled.div`
     display : flex;
     margin: 5px 10px;
     flex-direction: row;
     justify-content: space-evenly;
     align-items:center;
`
const InfoIcon = styled.img`
width: 36px;
height: 36px;
`
const InfoLable = styled.span`
display : flex;
flex-direction: column;
font-size: 14px;
margin: 15px;
& span {
     font-size: 12px;
     text-transform: capitalize;

}
`
const WeatherinfoComponent= (props) => {
     return(
          <InfoContainer>
               <InfoIcon src={props.icon}/>
               <InfoLable>
                    <span>{props.value}</span> 
                    <span>{props.name}</span>
               </InfoLable>
          </InfoContainer>
     )
}



const WeatherComponent = (props) => {
     const{weather} = props;
     const isDay = weather?.weather[0].icon?.includes("d");
     
     
     const getTime = (timeStamp) => {
          return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
     }
     return(
        <>
          <WeatherCondition>
               <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)} C` }</span><span>
          {`| ${weather?.weather[0].description}`}</span>
          </Condition>
               <WeatherIcon src={Wind}/>
          </WeatherCondition>
          <Location>{`${weather?.name}, ${weather?.sys?.country} `}</Location>
          <WeatherInfo>Weather Information</WeatherInfo>
               <WeatherinfoContainer>
                    <WeatherinfoComponent icon={isDay ? Day : Night} name={isDay ? "sunset" : "sunrise"} value={` ${getTime(weather?.sys[isDay ?"sunset" : "sunrise"])} ${isDay ? "pm" : "am"}`}/>
                    <WeatherinfoComponent icon={Humidity} name="humidity" value={weather?.main?.humidity} />
                    <WeatherinfoComponent icon={Wind}name="wind" value={` ${weather?.wind?.speed} | ${weather.wind?.deg}`}  />
                    <WeatherinfoComponent icon={Pressure} name="pressure" value={`${weather?.main?.pressure} Pa`} />
               </WeatherinfoContainer>
        </>
     )

};
export default WeatherComponent;
