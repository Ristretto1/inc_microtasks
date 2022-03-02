import React from 'react';
import './App.css';
import Table from "./Table";



function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
            <Table topCars = {topCars}/>
    );
}

export default App;
