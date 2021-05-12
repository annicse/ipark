import React, { useState } from 'react';

const initialState = {
    totalSlots: 0,
    occupiedSlots: 0,
    totalFloors: 0,
    parkings: [
        {
            "floorNr": 0,
            "totalSlots": 50,
            "occupiedSlots": 45
        }, {
            "floorNr": 1,
            "totalSlots": 60,
            "occupiedSlots": 30
        }, {
            "floorNr": 2,
            "totalSlots": 70,
            "occupiedSlots": 30
        }, {
            "floorNr": 3,
            "totalSlots": 80,
            "occupiedSlots": 40
        }, {
            "floorNr": 4,
            "totalSlots": 90,
            "occupiedSlots": 50
        }
    ]
};

//initialState.totalSlots = initialState.parkings.reduce((accumulator, currentValue) => accumulator + currentValue.totalSlots, 0);
//initialState.occupiedSlots = initialState.parkings.reduce((accumulator, currentValue) => accumulator + currentValue.occupiedSlots, 0);
//initialState.totalFloors = initialState.parkings.length;

export const Context = React.createContext(null);

const Store = ({ children }) => {
    const [parkingState, setParkingState] = useState(initialState);

    return (
        <Context.Provider value={[parkingState, setParkingState]}>
            {children}
        </Context.Provider>
    );
}

export default Store;