import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import Custom from "./components/Custom";

const root = ReactDOM.createRoot(document.getElementById('root'))
const app = <App />
// const app = <Custom/>
root.render(app)