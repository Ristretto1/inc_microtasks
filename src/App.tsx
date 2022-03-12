import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff";


function App() {
    return (
        <div>
            <OnOff on={false}/>
            <OnOff on={true}/>
        </div>
    )
}

export default App;
