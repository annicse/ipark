import React, {Component} from "react";
import { connect } from 'react-redux';
import { submitValue } from '../Redux/actions/submittedValueActions';

const startData2 = [
    {
        "floor": 1,
        "totalSlots": 50,
        "occupiedSlots": 45
    }, {
        "floor": 2,
        "totalSlots": 60,
        "occupiedSlots": 30
    }
];

class UpdateParkingLots extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'inputValue': this.props.defaultInput,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.props.submittedValue);
        this.setState({ inputValue: event.target.value });
        //this.setState({ inputValue: startData2 });
    }

    handleSubmit = (event) => {
        this.props.onSubmitValue(this.state.inputValue);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
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
                    <input type="number" id="number-of-lots" name="numberOfLots" value={this.state.inputValue} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </fieldset>
            </form>
        )
    }

}

const mapStateToProps = (state, props) => {
    return {
        //defaultInput: props.defaultInput + ' ' + state.submittedValue
        //defaultInput: props.defaultInput
        defaultInput: startData2
    };
};

// onSubmitValue is used to avoid naming conflicts with submitValue
const mapActionsToProps = {
    onSubmitValue: submitValue
}
export default connect(mapStateToProps, mapActionsToProps)(UpdateParkingLots);