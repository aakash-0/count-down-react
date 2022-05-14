import './App.css';

import {useEffect,useState} from "react"


function App() {
   
  const [time,setTime] = useState(0);
  const [start,setStart] = useState(false);
  const [timeIntervelId,setTimeIntervelId] = useState(0);
  
  useEffect(()=>{
    if(start){
      let timerid = setInterval(()=>{
        setTime(prev=>prev+1);
      },1000)
      setTimeIntervelId(timerid);
    }
    else{
      
      clearInterval(timeIntervelId)

    }
  },[start])

  return (
    <div className="App">
      <div className = "counter" >{time}</div>
        <button className = {`start ${start && "disabled"} `} onClick={()=>{setStart(true)}}>start</button>
        <button className={`stop ${!start && "disabled"}`} onClick={()=>{setStart(false)}}> stop</button>
    </div>
  );
}

export default App;
