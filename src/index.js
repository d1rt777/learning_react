import React from "react";
import * as ReactDOMCLient from "react-dom/client";
import App from './App'
import './css/main.css'

const app = ReactDOMCLient.createRoot(document.getElementById("root"))

app.render(<App />)