import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import CheckPoint from "../CheckPoint";
import classes from "./rootApp.module.css";

function RootApp() {
    return (
        <div className={classes.root}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkpoint" element={<CheckPoint />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RootApp;
