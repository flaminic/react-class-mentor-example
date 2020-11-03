import React, { useEffect, useState } from "react";

function Weather(props) {
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        console.log("running useEffect")
        fetch(
            `https://api.weatherbit.io/v2.0/current?lat=${props.lat}&lon=${props.lon}&key=94732983488740c7ac18361880e08e1d`
            // "https://api.weatherbit.io/v2.0/current?lat= " + props.lat + "&lon=" + props.lon+ "&key=94732983488740c7ac18361880e08e1d"

            )
            .then((res) => res.json())
            .then((data) => {
                if (data.data){
                    setWeather(data.data[0].weather.description)
                } 
            })
        
        }, 
        [props.lat, props.lon]
    )

    // weather && <p>{weather}</p> 

    return weather != null 
    ? <p>{weather}</p> 
    : <p>Fetching weather...</p>
    
    // if (weather != null){
    //    return  <p>{weather}</p>;
    // } else {
    //     return null
    // }
    
  }

  export default Weather