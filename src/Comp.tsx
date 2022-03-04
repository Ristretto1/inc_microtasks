import React from 'react';
import {FilterType} from "./App";
import Button from "./Button";

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
                <Button name={'all'} callback={() => props.onClickFilterHandler('all')}/>
                <Button name={'RUBLS'} callback={() => props.onClickFilterHandler('RUBLS')}/>
                <Button name={'Dollars'} callback={() => props.onClickFilterHandler('Dollars')}/>
            </div>
        </>
    );
};

export default Comp;