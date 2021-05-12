import React, {useContext} from "react";
import {Context} from "../Store";

const UpdateParkingLots = () => {
    const [parkingState, setParkingState] = useContext(Context);

    const handleChange = (event) => {
        setParkingState(count => count + 1);
        let prevState = parkingState;
        let floorNr = parseInt(document.getElementById("floor-number").value);
        prevState.parkings[floorNr].totalSlots = parseInt(document.getElementById("number-of-lots").value);

        setParkingState({
            ...parkingState,
            prevState
        });
    }

    return (
        <fieldset>
            <legend><b>Update number of slots in each floor:</b></legend>
            <label htmlFor="floor-number">Floor number:</label>
            <select name="floorNumber" id="floor-number">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <label htmlFor="number-of-lots">Number of slots:</label>
            <input type="number" id="number-of-lots" name="numberOfLots" />
            <button className="button" onClick={handleChange}>Update</button>
        </fieldset>
    )
}

export default UpdateParkingLots;