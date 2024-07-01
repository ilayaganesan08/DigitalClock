import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrenTime] = useState(new Date());
  useEffect(() =>{
    const timer = setInterval(() =>{
      setCurrenTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }
  const formatHour = (hour) =>{
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };

  const formatDate = (date) =>{
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
    <div className='app-container'>
      <h1>Digital Clock</h1>
      <div className="time">{formatTimeWithLeadingZero(formatHour(currentTime.getHours()))}:{formatTimeWithLeadingZero(formatHour(currentTime.getMinutes()))}:{formatTimeWithLeadingZero(formatHour(currentTime.getSeconds()))} {currentTime.getHours() >= 12? "PM" : "AM"}</div>
      <div className="date">{formatDate(currentTime)}</div>
    </div>
    </>
  )
}

export default App
