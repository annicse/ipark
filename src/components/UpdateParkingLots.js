import React, {useContext, useState} from "react";
import {Context} from "../Store";

function UpdateParkingLots() {
    const [state, setState] = useContext(Context);

    const handleChange = (event) => {
        setState(count => count + 1);
        //event.preventDefault();
        let prevState = state;
        let floorNr = parseInt(document.getElementById("floor-number").value);
        prevState.parkings[floorNr].totalSlots = parseInt(document.getElementById("number-of-lots").value);
        setState({
            ...state,
            prevState
        });
        //setState(prevState);
    }

    return (

            <fieldset>
                <legend>Update:</legend>
                <label htmlFor="floor-number">Floor number:</label>
                <select name="floorNumber" id="floor-number">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <label htmlFor="number-of-lots">Number of lots:</label>
                <input type="number" id="number-of-lots" name="numberOfLots" />
                <button className="button" onClick={handleChange}>Update</button>
            </fieldset>

    )
}

export default UpdateParkingLots;