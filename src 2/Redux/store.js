import { createStore, combineReducers } from 'redux';
import submittedValueReducer from './reducers/submittedValueReducer';

const allReducers = combineReducers({
    submittedValue: submittedValueReducer
});

const startData = [
    {
        "floorNr": 1,
        "totalSlots": 50,
        "occupiedSlots": 45
    }, {
        "floorNr": 2,
        "totalSlots": 60,
        "occupiedSlots": 30
    }, {
        "floorNr": 3,
        "totalSlots": 70,
        "occupiedSlots": 30
    }, {
        "floorNr": 4,
        "totalSlots": 80,
        "occupiedSlots": 40
    }, {
        "floorNr": 5,
        "totalSlots": 90,
        "occupiedSlots": 50
    }
];

export const store = createStore(
    allReducers,
    {
        submittedValue: startData
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
