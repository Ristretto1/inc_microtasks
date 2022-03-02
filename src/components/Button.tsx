import React from 'react';

type ButtonPropsType = {
    name: string,
}

const Button = (props:ButtonPropsType) => {

    const onClickHandler = () => {
        
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default Button;