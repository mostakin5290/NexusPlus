import React from 'react'
import ReactDom from "react-dom/client"
import "./App.css"
import Main from './components/Main/Main'
const App = () => {
    return (
        <div className='container'>
            <Main/>
        </div>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App/>)


