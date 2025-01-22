import React from "react";
import ReactDOM from "react-dom/client";


// react element
const me = {
    name:"Mostakin Mondal",
    age:21,
    collage:"Swami Vivekananda University",
    rollNo:"002-BCS-2022-052"
}

const stl = {
        background: "black",
        color: "red",
}

const newElement = (
    <>
    <h1 style={stl}>My name is : {me.name} </h1>
    <h1 style={stl}>My age is : {me.age} </h1>
    <h1 style={stl}>My Roll Number : {me.rollNo} </h1>
    <h1 style={stl}>My Collage Name is  : {me.collage} </h1>
    {greet()}
    </>
)


// React Component 
// function base component
function greet(){
    return <h1 style={stl}>Aur bhai kaisa hai?</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(newElement);
// root.render(greet());