import React from "react"
import ReactDom from "react-dom/client"
import Main from "./main"


const App = ()=>{
    return(
        <>
        
        <h1>
            I am in Home page.
        </h1>
        <Main/>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App/>);