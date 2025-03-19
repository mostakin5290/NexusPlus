import React from "react"
import ReactDom from "react-dom/client"
import HelloWorld from "./Components/Hello_World/HelloWorld"
import Hooks from "./Components/Hooks/Hooks"
import PasswordGenarator from "./Components/Hooks/PasswordGenarater/PasswordGenarator"
import Stopwatch from "./Components/Hooks/Stopwatch"

const App = ()=>{
    return(
        <>
        <HelloWorld/>
        <Hooks/>
        {/* <PasswordGenarator/> */}
        <Stopwatch/>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App/>)