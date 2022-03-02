import React from 'react';
import './App.css';
import Button from "./components/Button";


function App() {

    return (
        <div>
            {/*<button>My YouTubeChanel-1</button>*/}
            {/*<button>My YouTubeChanel-2</button>*/}
            <Button name = {'My YouTubeChanel-1'}/>
            <Button name = {'My YouTubeChanel-2'}/>
        </div>
    );
}

export default App;
