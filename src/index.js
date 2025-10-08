import React from "react";
import * as ReactDOMCLient from "react-dom/client";

const inputEnter = () => console.log('input enter');
const mouseOver = () => console.log('mouse over');

const inp = <input placeholder="help text" onClick={inputEnter} onMouseEnter = {mouseOver} />

const app = ReactDOMCLient.createRoot(document.getElementById('root'));

app.render(inp)