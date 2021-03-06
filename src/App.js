import React from 'react';
import Store from "./Store";
import GetEachFloorData from "./components/GetEachFloorData";
import GetTotalData from "./components/GetTotalData";
import UpdateParkingLots from "./components/UpdateParkingLots";

import './App.scss';

function App() {

    return (
        <Store>
            <div className="main-content">
                <header>
                    <div className="grid-container">
                        <div className="grid-x grid-margin-x">
                            <div className="cell">
                                <h1>iPark - Automated Parking</h1>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main">
                    <div className="grid-container">
                        <div className="grid-x grid-margin-x">
                            <div className="cell small-12 medium-6">
                                <GetTotalData />
                                <UpdateParkingLots />
                            </div>
                            <div className="cell small-12 medium-6">
                                <GetEachFloorData />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Store>
    );
}

export default App;
