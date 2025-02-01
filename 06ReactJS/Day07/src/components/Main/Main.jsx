import React,{useEffect,useState} from "react";
import "./Main.css";
function Main(){
    const[color,SetColor] = useState("black")

    useEffect(()=>{
        document.body.style.background = color
    },[color]);
    return(
        <div className="content">
            <h1>Colour Canger</h1>
            <div className="button-con">
                <button style={{background:"red"}} onClick={()=>SetColor('red')}></button>
                <button style={{background:"yellow"}} onClick={()=>SetColor('yellow')} ></button>
                <button style={{background:"green"}} onClick={()=>SetColor('green')}></button>
                <button style={{background:"blue"}} onClick={()=>SetColor('blue')}></button>
            </div>
        </div>
    )
}
export default Main;