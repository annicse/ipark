import React, {Component} from "react";
import { connect } from 'react-redux';

class GetEachFloorData extends Component {
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
                    this.props.submittedValue.map( (pd, index) => {
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
                                                <td colSpan="2">

                                                </td>
                                            </tr>
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

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(GetEachFloorData);