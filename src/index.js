import React from "react";
import * as ReactDOMClient  from "react-dom/client";
import App from "./components/App";
import './css/content.css'

const app = ReactDOMClient.createRoot(document.getElementById('root'))

app.render(<App />)