import React, {useContext, useState} from "react";
import {Context} from "../Store";

function UpdateParkingLots() {
    const [state, setState] = useContext(Context);

    const handleChange = (event) => {
        event.preventDefault();
        let prevState = state;
        let floorNr = document.getElementById("floor-number").value;
        prevState.parkings[floorNr].totalSlots = document.getElementById("number-of-lots").value;
        setState(prevState);
    }

    return (
        <form>
            <fieldset>
                <legend>Update:</legend>
                <label htmlFor="floor-number">Floor number:</label>
                <select name="floorNumber" id="floor-number">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label htmlFor="number-of-lots">Number of lots:</label>
                <input type="number" id="number-of-lots" name="numberOfLots" />
                <button className="button" onClick={handleChange}>Generae</button>
            </fieldset>
        </form>
    )
}

export default UpdateParkingLots;