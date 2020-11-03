import './App.css';
import React, {useState} from "react";
import HelloMentor from './HelloMentor'
import HelloMentors from './HelloMentors'
import Weather from './Weather'
import SimpleReminder from './SimpleReminder'
import CreateAccountForm from './CreateAccountForm'

function App() {
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)

  const changeWeather = (newLat, newLon) => () => {
    console.log("Running change wether")
    setLat(newLat)
    setLon(newLon)

  }

  return (
    <div className="App">
      {/* <HelloMentor name="Flaminia" sayHello={() => alert("Ciao!")}/> */}
       {/* <HelloMentors names={["Flaminia", "Henriette"]}/> */}
       <Weather lat={lat} lon={lon}/>
       <button onClick={changeWeather("41.41", "2.19")}>Weather in Barcelona</button>
       <button onClick={changeWeather("66.41", "87.19")}>Weather in Tokyo</button>
       <button onClick={changeWeather("41.41", "87.19")}>Weather in Dar es salaam</button>
       <SimpleReminder />
       <CreateAccountForm />

    </div>
  );
}

export default App;
