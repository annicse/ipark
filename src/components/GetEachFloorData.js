import React, {useContext} from "react";
import {Context} from "../Store";

const GetEachFloorData = () => {
    const [state, setState] = useContext(Context);
    console.log(state);

    return (
        <table className="data-table each-floor-data">
            <thead>
                <tr>
                    <th>FLOOR DATA</th>
                </tr>
            </thead>

            <tbody>
            {
                state.parkings.map( (pd, index) => {
                    return(
                        <tr key={index}>
                            <td>
                                <table>
                                    <thead>
                                    <tr>
                                        <th colSpan="2">Floor #{pd.floorNr}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Total slots:</th>
                                            <td>{pd.totalSlots}</td>
                                        </tr>
                                        <tr>
                                            <th>Occupied slots:</th>
                                            <td>{pd.occupiedSlots}</td>
                                        </tr>
                                        <tr>
                                            <th>Available slots:</th>
                                            <td>{pd.totalSlots - pd.occupiedSlots}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}

export default GetEachFloorData;