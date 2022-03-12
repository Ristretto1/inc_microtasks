import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff";
import {Rating} from "./components/Rating";


function App() {
    return (
        <div>
            <OnOff/>
            <Rating/>
        </div>
    )
}

export default App;
