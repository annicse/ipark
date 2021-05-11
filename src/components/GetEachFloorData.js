import React, {Component} from "react";
import ParkingData from '../data/ipark-data.json';

class GetEachFloorData extends Component{
    render() {
        return (
            <table className="data-table each-floor-data">
                <thead>
                    <tr>
                        <th>FLOOR DATA</th>
                    </tr>
                </thead>

                <tbody>
                {
                    ParkingData.map( pd => {
                        return(
                            <tr>
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
}

export default GetEachFloorData;