import React, {Component} from 'react';
import GetEachFloorData from "./components/GetEachFloorData";
import GetTotalData from "./components/GetTotalData";

import './App.scss';

class App extends Component {
    render() {
        return (
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
                    <div className="grid-container total-data">
                        <GetTotalData />
                    </div>

                    <div className="grid-container individual-data">
                        <GetEachFloorData />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;