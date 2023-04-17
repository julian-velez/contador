import React, { useState, useEffect }  from 'react';
import './App.css'

function App() {
 const [time, setTime] = useState({
  hours: 0,
  minutes: 0,
  seconds: 0,
 });

 useEffect(() => {
  const interval = setInterval(() => {
    setTime((prevTime) => {
      const seconds = prevTime.seconds + 1;
      const minutes = prevTime.minutes + Math.floor(seconds / 60 );
      const hours = prevTime.hours + Math.floor(minutes / 60);
      return {
        seconds: seconds % 60,
        minutes: minutes % 60,
        hours:hours,
      };
    });
  }, 1000);
  return () => clearInterval(interval);
}, []);

return (
  <div>
  <h1>
  {time.hours.toString().padStart(2,"0")}:
  {time.minutes.toString().padStart(2,"0")}:
  {time.seconds.toString().padStart(2,"0")}
  </h1>
  </div>
  );
}


export default App;
