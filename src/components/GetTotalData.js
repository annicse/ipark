import React, {Component} from "react";
import ParkingData from '../data/ipark-data.json';

class GetTotalData extends Component{
    state = {
        // here we are preparing the state copying all the
        // information of a product plus a quantity property set to 0
        parkings: ParkingData.map( p => ({ ...p }) )
    }

    totalParkings = () => {
        return this.state.parkings.reduce((accumulator, currentValue) => accumulator + currentValue.totalSlots, 0);
    }

    totalOccupiedParkings = () => {
        return this.state.parkings.reduce((accumulator, currentValue) => accumulator + currentValue.occupiedSlots, 0);
    }

    render() {
        return (
            <table className="data-table">
                <thead>
                    <tr>
                        <th colSpan="2">SUMMARY</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th>Total floors:</th>
                        <td>{ ParkingData.length }</td>
                    </tr>
                    <tr>
                        <th>Total slots:</th>
                        <td>{ this.totalParkings() }</td>
                    </tr>
                    <tr>
                        <th>Total occupied slots:</th>
                        <td>{ this.totalOccupiedParkings() }</td>
                    </tr>
                    <tr>
                        <th>Total available slots:</th>
                        <td>{ this.totalParkings() - this.totalOccupiedParkings() }</td>
                    </tr>
                </tbody>
            </table>

        );
    }
}

export default GetTotalData;