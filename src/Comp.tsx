import React from 'react';
import {FilterType} from "./App";

export type currentMoneyType = {
    banknots: string,
    value: number,
    number: string,
}

type currentMoneyPropsType = {
    currentMoney: Array<currentMoneyType>,
    onClickFilterHandler: (value: FilterType) => void
}


const Comp = (props: currentMoneyPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    );
};

export default Comp;