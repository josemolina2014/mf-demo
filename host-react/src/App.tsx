import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { load } from "growlers/store";
import Taps from "growlers/Taps";
import Search from "growlers/Search";

load("hv-taplist");

const App = () => 
    <div>
        <Search />
        <Taps />
    </div>;

ReactDOM.render(<App />, document.getElementById("app"));
