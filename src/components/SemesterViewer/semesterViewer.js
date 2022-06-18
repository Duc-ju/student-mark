import React from "react";
import classes from "./semesterViewer.module.scss";
import SubjectViewer from "../SubjectViewer";

function SemesterViewer(props) {
    const { semester, setSemesterState } = props;
    const summary = (() => {
        if (semester.subjects.find((subject) => subject.mark === undefined))
            return null;
        const sumProduct = semester.subjects.reduce((prev, curr) => {
            return prev + curr.credit * curr.mark;
        }, 0);
        const sumPass = semester.subjects.reduce((prev, curr) => {
            if (curr.mark == 0) return prev;
            return prev + curr.credit;
        }, 0);
        const sumCredit = semester.subjects.reduce((prev, curr) => {
            return prev + curr.credit;
        }, 0);
        return {
            sum: sumCredit,
            sumPass: sumPass,
            average: sumProduct / sumCredit
        };
    })();
    const summaryNew = (() => {
        const sumProduct = semester.subjects.reduce((prev, curr) => {
            return (
                prev + curr.credit * (curr.newMark ? curr.newMark : curr.mark)
            );
        }, 0);
        const sumPass = semester.subjects.reduce((prev, curr) => {
            if (curr.mark == 0 && !curr.newMark) return prev;
            return prev + curr.credit;
        }, 0);
        const sumCredit = semester.subjects.reduce((prev, curr) => {
            return prev + curr.credit;
        }, 0);
        return {
            sumPass: sumPass,
            average: sumProduct / sumCredit
        };
    })();

    return (
        <div className={classes.root}>
            <h2 className={classes.name}>{semester.name}</h2>
            <div className={classes.subjects}>
                {semester.subjects.map((subject) => (
                    <SubjectViewer
                        key={subject.code}
                        semesterId={semester.id}
                        subject={subject}
                        setSemesterState={setSemesterState}
                    />
                ))}
            </div>
            <div className={classes.summary}>
                {summary ? (
                    <>
                        <p>
                            Điểm trung bình học kì:{" "}
                            <span
                                className={
                                    summary.average !== summaryNew.average
                                        ? classes.lineThrough
                                        : ""
                                }
                            >
                                {summary.average}
                            </span>
                            {summary.average !== summaryNew.average && (
                                <span className={classes.newSumary}>
                                    {summaryNew.average}
                                </span>
                            )}
                        </p>
                        <p>
                            Số tín học kì: <span>{summary.sum}</span>
                        </p>
                        <p>
                            Số tín chỉ đạt:{" "}
                            <span
                                className={
                                    summary.sumPass !== summaryNew.sumPass
                                        ? classes.lineThrough
                                        : ""
                                }
                            >
                                {summary.sumPass}
                            </span>
                            {summary.sumPass !== summaryNew.sumPass && (
                                <span className={classes.newSumary}>
                                    {summaryNew.sumPass}
                                </span>
                            )}
                        </p>
                    </>
                ) : (
                    <div>Thông tin không đầy đủ</div>
                )}
            </div>
        </div>
    );
}

export default SemesterViewer;
