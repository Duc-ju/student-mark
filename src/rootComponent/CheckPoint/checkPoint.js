import React from "react";
import FullCourse from "../../components/FullCourse";
import classes from "./checkPoint.module.scss";

function CheckPoint(props) {
    return (
        <section className={classes.root}>
            <FullCourse />
        </section>
    );
}

export default CheckPoint;
