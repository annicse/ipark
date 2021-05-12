import React, {useContext} from "react";
import {Context} from "../Store";

function GetTotalData() {
    const [state, setState] = useContext(Context);
    let prevState = state;

    prevState.totalSlots = state.parkings.reduce((accumulator, currentValue) => accumulator + currentValue.totalSlots, 0);
    prevState.occupiedSlots = state.parkings.reduce((accumulator, currentValue) => accumulator + currentValue.occupiedSlots, 0);
    prevState.totalFloors = state.parkings.length;

    setState(prevState);

    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th colSpan="2">SUMMARY:</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>Total floors:</th>
                    <td>{ state.totalFloors }</td>
                </tr>
                <tr>
                    <th>Total slots:</th>
                    <td>{state.totalSlots}</td>
                </tr>
                <tr>
                    <th>Total occupied slots:</th>
                    <td>{state.occupiedSlots}</td>
                </tr>
                <tr>
                    <th>Total available slots:</th>
                    <td>{state.totalSlots - state.occupiedSlots}</td>
                </tr>
            </tbody>
        </table>

    );
}

export default GetTotalData;