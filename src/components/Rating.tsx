import React, {useState} from 'react';

type RatingPropsType = {}

export const Rating = (props: RatingPropsType) => {

    let [value, setValue] = useState(3)

    const reValue = (value: number) => {
        setValue(value)
    }

    return (
        <div>
            <Star reValue={() => reValue(1)} selected={value > 0}/>
            <Star reValue={() => reValue(2)} selected={value > 1}/>
            <Star reValue={() => reValue(3)} selected={value > 2}/>
            <Star reValue={() => reValue(4)} selected={value > 3}/>
            <Star reValue={() => reValue(5)} selected={value > 4}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    reValue: () => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={props.reValue}>{props.selected ? <b>star</b> : 'star'}</span>
    )
}

