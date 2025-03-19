import { useState } from "react"


export default function Hooks(){
    const [count,setCount] = useState(0);
    function positive(){
        setCount(count+1)
    }
    function negative(){
        setCount(count-1)
    }
    return(
    <>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",background:"#F9F9F9;",width:"500px",borderRadius:"10px",flexDirection:"column", padding:"20px 0"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center", color:"wheat"}}>
            <h1>Count:</h1>
            <h1>{count}</h1>
            </div>
            <div style={{display:"flex",gap:"10px"}}>
                <button style={{width:"60px",height:"30px",border:"none",borderRadius:"5px"}} onClick={positive}>+1</button>
                <button style={{width:"60px",height:"30px",border:"none",borderRadius:"5px"}} onClick={negative}> -1</button>
            </div>
        </div>
    </>
    )
}