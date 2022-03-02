import React from 'react';

type CarsPropsType = {
        topCars: Array<topCarsPropsType>,
}

type topCarsPropsType = {
    manufacturer: string,
    model: string,
}

const Table = (props: CarsPropsType) => {

    return (
        <table>
            {props.topCars.map( (ObjectFromTopCarArray, index) => {
                return (
                    <tr key ={index}>
                        <td>{ObjectFromTopCarArray.manufacturer}</td>
                        <td>{ObjectFromTopCarArray.model}</td>
                    </tr>
                )
            })}
        </table>
    );
};

export default Table;