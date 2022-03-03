import React, {useState} from 'react';
import './App.css';


function App() {

    // let a = 1;
    let [a, setA] = useState(1);

    const incr =()=> {
        setA(++a);
        console.log(a)
    }

    const decr =()=>{
        setA(--a);
    }

    const noll =()=> {
        setA(a=0);
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={incr}>+</button>
            <button onClick={decr}>-</button>
            <button onClick={noll}>0</button>
        </div>
    );
}

export default App;
