import "./App.css";

import React from "react";
import logo from "./logo.svg";

function App() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello mom!</h1>
            <button className="btn">neutral</button>
            <button className="btn btn-primary">primary</button>
            <button className="btn btn-secondary">secondary</button>
            <button className="btn btn-accent">accent</button>
            <button className="btn btn-ghost">ghost</button>
            <button className="btn btn-link">link</button>
        </div>
    );
}

export default App;
