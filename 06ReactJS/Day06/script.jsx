import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'
function Script() {
    const [a,setA] = useState(9832225840);
    function Increment(){
        setA(a+1);
    }
    function Decrement(){
        if(a>0){
            setA(a-1)
        }
    }
    return (
        <div className='container'>
            <h1>{a}</h1>
            <div>
                <button onClick={Increment}> +1 </button>
                <button onClick={Decrement}> -1 </button>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Script/>)




