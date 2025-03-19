import { useEffect, useRef, useState } from "react"

export default function Stopwatch(){
    const [time,setTime] = useState(0);
    const intervalref = useRef(null);
    const [isRunning,setIsRunning] = useState(false)
    const ms = Math.floor(time%60);
    const sec = Math.floor((time/100)%60);
    const min = Math.floor((time/6000)%60);
    const hour = Math.floor((time/60000)%60);

    function startBtn(){
        if(!isRunning){
            intervalref.current=setInterval(()=>{
                setTime(prevTime=>prevTime+1)
            },10)
            setIsRunning(true);
        }
    }
    function stop(){
        if(isRunning){
            clearInterval(intervalref.current);
            intervalref.current=null;
            setIsRunning(false);
        }
    }

    function restartBtn(){
        clearInterval(intervalref.current);
        intervalref.current=null;
        setTime(0);
    }

    useEffect(()=>{

    },[])
    return(
        <>
        <div style={{display:"flex",width:"500px",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <div>
                <h1>{hour}</h1>
                <h1>{min}</h1>
                <h1>{sec}</h1>
                <h1>{ms}</h1>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
                <button onClick={startBtn} >Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={restartBtn} >Restart</button>
            </div>
        </div>
        </>
    )
}