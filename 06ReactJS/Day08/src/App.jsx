import React from "react";
import ReactDom from "react-dom/client"
import Main from "./Components/Main/Main";
import "./App.css";

const App = () => {
    return (
        <>
        <div className="heading">
            <h1>ZeroDay Password Factory</h1>
        </div>
        <div className="Main-container">
            <Main/>
        </div>
        <footer>&copy; All Rights Reserved by <a href="https://www.linkedin.com/in/mostakin-mondal-a935a9270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Mostakin Mondal</a> </footer>
        </>
    );
};

ReactDom.createRoot(document.querySelector("#root")).render(<App/>)