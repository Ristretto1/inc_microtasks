import React from 'react';
import './App.css';
import Button from "./components/Button";


function App() {

    const Button1Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }
    const Button2Foo = (sub: string, city: string) => {
        console.log(sub, city)
    }
    const Button3Foo = () => {
        console.log('BTN')
    }

    return (
        <div>
            {/*<button>My YouTubeChanel-1</button>*/}
            {/*<button>My YouTubeChanel-2</button>*/}
            <Button name={'My YouTubeChanel-1'} callBack={() => Button1Foo('Kirill', 28)}/>
            <Button name={'My YouTubeChanel-2'} callBack={() => Button2Foo('Ivan', 'Sugrut')}/>
            <Button name={'My YouTubeChanel-3'} callBack={Button3Foo}/>
        </div>
    );
}

export default App;
