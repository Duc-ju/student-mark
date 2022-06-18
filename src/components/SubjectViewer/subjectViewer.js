import React from "react";
import classes from "./subjectViewer.module.scss";

function SubjectViewer(props) {
    const { subject, setSemesterState, semesterId } = props;
    const handleChangeOldMark = (e) => {
        setSemesterState((semesterState) => {
            const newState = [...semesterState];
            const newSemester = newState[semesterId - 1];
            const newSubject = newSemester.subjects[subject.id - 1];
            newSubject.mark =
                e.target.value === "" ? undefined : parseFloat(e.target.value);
            newSubject.newMark = undefined;
            return newState;
        });
    };
    const hangleChangeNewMark = (e) => {
        setSemesterState((semesterState) => {
            const newState = [...semesterState];
            const newSemester = newState[semesterId - 1];
            const newSubject = newSemester.subjects[subject.id - 1];
            newSubject.newMark = parseFloat(e.target.value);
            return newState;
        });
    };
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.info}>
                    <h2>{subject.name}</h2>
                    <span
                        className={classes.badge}
                    >{`${subject.credit} tín chỉ`}</span>
                </div>
                <div className={classes.value}>
                    <select
                        onChange={handleChangeOldMark}
                        value={
                            subject.mark !== undefined ? subject.mark + "" : ""
                        }
                    >
                        <option value="">Điểm hiện tại</option>
                        <option value="4">A+</option>
                        <option value="3.7">A</option>
                        <option value="3.5">B+</option>
                        <option value="3">B</option>
                        <option value="2.5">C+</option>
                        <option value="2">C</option>
                        <option value="1.5">D+</option>
                        <option value="1">D</option>
                        <option value="0">Tạch</option>
                    </select>
                    {((!!subject.mark && subject.mark !== 4) ||
                        subject.mark === 0) && (
                        <select
                            onChange={hangleChangeNewMark}
                            value={subject.newMark ? subject.newMark + "" : ""}
                        >
                            <option value="">Điểm cải thiện</option>
                            {((subject.mark && subject.mark < 4) ||
                                !subject.mark) && <option value="4">A+</option>}
                            {((subject.mark && subject.mark < 3.7) ||
                                !subject.mark) && (
                                <option value="3.7">A</option>
                            )}
                            {((subject.mark && subject.mark < 3.5) ||
                                !subject.mark) && (
                                <option value="3.5">B+</option>
                            )}
                            {((subject.mark && subject.mark < 3) ||
                                !subject.mark) && <option value="3">B</option>}
                            {((subject.mark && subject.mark < 2.5) ||
                                !subject.mark) && (
                                <option value="2.5">C+</option>
                            )}
                            {((subject.mark && subject.mark < 2) ||
                                !subject.mark) && <option value="2">C</option>}
                            {((subject.mark && subject.mark < 1.5) ||
                                !subject.mark) && (
                                <option value="1.5">D+</option>
                            )}
                            {((subject.mark && subject.mark < 1) ||
                                !subject.mark) && <option value="1">D</option>}
                        </select>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SubjectViewer;
