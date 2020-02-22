import React from 'react';
import styled from '@emotion/styled'

const WeatherCard = (props) => {

  const card = styled.div `
    background: linear-gradient(to bottom, red, pink);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `
    return (
          <div className="card">
              <div className="location">
                <h1 className="city">Sydney</h1>
                <h3 className="country" >Australia </h3>
              </div>
                <img className="icon" src="./img/cloudy.png" alt="Weather Icon" />
                <h1 className="temp">20 °C</h1>
                <h3 className="condition">Clouds</h3>
          </div>
     );  
}
 
export default WeatherCard;  