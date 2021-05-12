import React, { Component } from "react";
import { connect } from 'react-redux';


class GetTotalData extends Component {
    state = {
        totalSlots: this.props.submittedValue.reduce((accumulator, currentValue) => accumulator + currentValue.totalSlots, 0),
        totalOccupiedSlots: this.props.submittedValue.reduce((accumulator, currentValue) => accumulator + currentValue.occupiedSlots, 0)
    }

    render() {
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
                        <td>{ this.props.submittedValue.length }</td>
                    </tr>
                    <tr>
                        <th>Total slots:</th>
                        <td>{ this.state.totalSlots }</td>
                    </tr>
                    <tr>
                        <th>Total occupied slots:</th>
                        <td>{ this.state.totalOccupiedSlots }</td>
                    </tr>
                    <tr>
                        <th>Total available slots:</th>
                        <td>{ this.state.totalSlots - this.state.totalOccupiedSlots }</td>
                    </tr>
                </tbody>
            </table>

        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(GetTotalData);