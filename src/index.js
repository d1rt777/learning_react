import React from "react";
import * as ReactDOMCLient from "react-dom/client";

const inputClick = () => console.log('you clicked')
const mouseOver = () => console.log('you clicked')

const helpText = "help text"

const elements = (
    <div className = 'name'>
        <h1>{helpText}</h1>

        <input placeholder={helpText} onclick = {inputClick} onMouseEnter={mouseOver}/>

        <p>{helpText === "help text" ? "yes" : "no"}</p>
    </div>
)

const app = ReactDOMCLient.createRoot(document.getElementById("root"))

app.render(elements)