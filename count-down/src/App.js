import './App.css';

import {useEffect,useState} from "react"


function App() {
   
  const [time,setTime] = useState(0);
  const [start,setStart] = useState(false);
  const [timeIntervelId,setTimeIntervelId] = useState(0);
  const [reset,setReset]= useState(false);
  
  useEffect(()=>{
    if(start && !reset){
      let timerid = setInterval(()=>{
        setTime(prev=>prev+1);
      },1000)
      setTimeIntervelId(timerid);
    }
    else if((!start ||start) && reset){
      setTime(0);
      setStart(false)
      setReset(false);
      clearInterval(timeIntervelId)
    }
    else{
      
      clearInterval(timeIntervelId)

    }
  },[start,reset])

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='timer-div'>
          <div className = "counter" >{time}</div>
        </div>
        <div className='buttons-div'>
          <button className = {`btn ${start?"disabled":"start"} `} onClick={()=>{setStart(true)}}>start</button>
          <button className = {"btn reset"} onClick={()=>{ setReset(true)}}>reset</button>
          <button className={`btn ${!start?"disabled":"stop"} `} onClick={()=>{setStart(false)}}> stop</button>
        </div>
       
      </div>
    </div>
  );
}

export default App;
