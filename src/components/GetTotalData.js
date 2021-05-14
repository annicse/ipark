import React, {useContext, useEffect} from "react";
import {Context} from "../Store";

const GetTotalData = () => {
    const [parkingState, setParkingState] = useContext(Context);

    let prevState = parkingState;

    prevState.totalSlots = parkingState.parkings.reduce((accumulator, currentValue) => accumulator + currentValue.totalSlots, 0);
    prevState.occupiedSlots = parkingState.parkings.reduce((accumulator, currentValue) => accumulator + currentValue.occupiedSlots, 0);
    prevState.totalFloors = parkingState.parkings.length;

    useEffect(() => {
        setParkingState(prevState);
    });

    return (
        <table className="data-table summary">
            <thead>
                <tr>
                    <th colSpan="2">SUMMARY:</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>Total floors:</th>
                    <td>{parkingState.totalFloors}</td>
                </tr>
                <tr>
                    <th>Total slots:</th>
                    <td>{parkingState.totalSlots}</td>
                </tr>
                <tr>
                    <th>Total occupied slots:</th>
                    <td>{parkingState.occupiedSlots}</td>
                </tr>
                <tr>
                    <th>Total available slots:</th>
                    <td>{parkingState.totalSlots - parkingState.occupiedSlots}</td>
                </tr>
            </tbody>
        </table>

    );
}

export default GetTotalData;