import React, {Component, useState} from "react";
import '../styles/App.css';
import FlamesGame from "./flames";

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <FlamesGame/>
            </div>
        )
    }
}


export default App;
