import React, { useState } from "react";
import classes from "./fullCourse.module.scss";
import SemesterViewer from "../SemesterViewer";
import semesters from "./semesters";

function FullCourse(props) {
    const { major } = props;
    const [length, setLength] = useState();
    const getLocalSemesters = () => {
        const localSemester = JSON.parse(
            window.localStorage.getItem("semesters")
        );
        if (!!localSemester && !localSemester.cntt) {
            const newSemester = { ttdpt: semesters.ttdpt, cntt: localSemester };
            window.localStorage.setItem(
                "semesters",
                JSON.stringify(newSemester)
            );
            return newSemester[major];
        }
        if (!!localSemester && localSemester.cntt) return localSemester[major];
        else return { ...semesters }[major];
    };
    const [semesterState, setSemesterState] = useState(getLocalSemesters());
    React.useEffect(() => {
        setSemesterState(getLocalSemesters);
    }, [major]);
    const handleChange = (e) => {
        const value = e.target.value;
        if (value === "") setLength();
        else setLength(parseInt(value));
    };
    const summary = (() => {
        if (!length) return null;
        const semesterMap = semesterState.slice(0, length).map((semester) => {
            if (semester.subjects.find((subject) => subject.mark === undefined))
                return null;
            const sumProduct = semester.subjects.reduce((prev, curr) => {
                return prev + curr.credit * curr.mark;
            }, 0);
            const sumPass = semester.subjects.reduce((prev, curr) => {
                if (curr.mark === 0) return prev;
                return prev + curr.credit;
            }, 0);
            const sumCredit = semester.subjects.reduce((prev, curr) => {
                return prev + curr.credit;
            }, 0);
            return {
                sum: sumCredit,
                sumPass: sumPass,
                sumProduct
            };
        });
        if (semesterMap.filter((semesterI) => semesterI === null).length > 0)
            return null;
        const sumProduct = semesterMap.reduce((prev, curr) => {
            return prev + curr.sumProduct;
        }, 0);
        const sumCredit = semesterMap.reduce((prev, curr) => {
            return prev + curr.sum;
        }, 0);
        const sumPass = semesterMap.reduce((prev, curr) => {
            return prev + curr.sumPass;
        }, 0);
        return {
            sum: sumCredit,
            sumPass,
            average: sumProduct / sumPass
        };
    })();
    const summaryNew = (() => {
        if (!length) return null;
        const semesterMap = semesterState.slice(0, length).map((semester) => {
            if (semester.subjects.find((subject) => subject.mark === undefined))
                return null;
            const sumProduct = semester.subjects.reduce((prev, curr) => {
                return (
                    prev +
                    curr.credit * (curr.newMark ? curr.newMark : curr.mark)
                );
            }, 0);
            const sumPass = semester.subjects.reduce((prev, curr) => {
                if (curr.mark === 0 && !curr.newMark) return prev;
                return prev + curr.credit;
            }, 0);
            const sumCredit = semester.subjects.reduce((prev, curr) => {
                return prev + curr.credit;
            }, 0);
            return {
                sum: sumCredit,
                sumPass: sumPass,
                sumProduct
            };
        });
        if (semesterMap.filter((semesterI) => semesterI === null).length > 0)
            return null;
        const sumProduct = semesterMap.reduce((prev, curr) => {
            return prev + curr.sumProduct;
        }, 0);
        const sumCredit = semesterMap.reduce((prev, curr) => {
            return prev + curr.sum;
        }, 0);
        const sumPass = semesterMap.reduce((prev, curr) => {
            return prev + curr.sumPass;
        }, 0);
        return {
            sum: sumCredit,
            sumPass,
            average: sumProduct / sumPass
        };
    })();
    const handleSave = () => {
        window.localStorage.setItem(
            "semesters",
            JSON.stringify({
                ttdpt: semesters.ttdpt,
                cntt: semesters.cntt,
                [major]: semesterState
            })
        );
        window.alert("L??u th??ng tin th??nh c??ng!");
    };

    const handleReset = () => {
        window.localStorage.removeItem("semesters");
        window.alert("???? xo?? b??? nh???, reload n???u b???n mu???n m???i th??? nh?? m???i!");
    };

    const handleInfo = () => {
        window.alert(
            "M???i ng?????i nh???p ??i???m c???a m??nh trong c??c k?? h???c v??o app, sau ???? m???i ng?????i c?? th??? ch???nh ??i???m c???a t???ng m??n ????? bi???t r???ng n???u m??nh h???c c???i thi???n m???t m??n t??? D l??n A+ th?? GPA t??ng th??m bao nhi??u ch???ng h???n, ho???c nh???p th??? ??i???m c??c k?? t???i ????? bi???t m??nh ph???i c??? g???ng ?????t bao nhi??u ch???m ????? ???????c b???ng gi???i, xu???t s???c..."
        );
    };
    return (
        <div className={classes.root}>
            <div className={classes.control}>
                <select onChange={handleChange}>
                    <option value="">Ch???n m???c th???i gian xem</option>
                    <option value="1">K?? 1 n??m 1</option>
                    <option value="2">K?? 2 n??m 1</option>
                    <option value="3">K?? 1 n??m 2</option>
                    <option value="4">K?? 2 n??m 2</option>
                    <option value="5">K?? 1 n??m 3</option>
                    <option value="6">K?? 2 n??m 3</option>
                    <option value="7">K?? 1 n??m 4</option>
                    <option value="8">K?? 2 n??m 4</option>
                    <option value="9">K?? th???c t???p</option>
                    <option value="10">T???t c??? c??c h???c k??</option>
                </select>
                <div className={classes.description}>
                    ????? tr??nh ph???i nh???p l???i ??i???m nhi???u l???n h??y nh???n n??t l??u ??i???m
                    ??? d?????i c??ng!
                </div>
                {length && semesterState && (
                    <div className={classes.resetContainer}>
                        <button
                            onClick={handleReset}
                            className={classes.resetButton}
                        >
                            Reset t???t c??? ??i???m
                        </button>
                        <button
                            onClick={handleInfo}
                            className={classes.infoButton}
                        >
                            C??i n??y d??ng ????? l??m g???
                        </button>
                    </div>
                )}
            </div>
            {length && semesterState && (
                <>
                    <div className={classes.semester}>
                        {semesterState.slice(0, length).map((semester) => (
                            <SemesterViewer
                                key={semester.id}
                                semester={semester}
                                setSemesterState={setSemesterState}
                            />
                        ))}
                    </div>
                    <div className={classes.summary}>
                        <p>
                            <button
                                onClick={handleSave}
                                className={classes.saveButton}
                            >
                                L??u v??o b??? nh???
                            </button>
                        </p>
                        {summary ? (
                            <>
                                <p>
                                    ??i???m trung b??nh t??ch lu???:{" "}
                                    <span
                                        className={
                                            summary.average !==
                                            summaryNew.average
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
                                    S??? t??n ch??? t??ch lu???:{" "}
                                    <span
                                        className={
                                            summary.sumPass !==
                                            summaryNew.sumPass
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
                            <div className={classes.error}>
                                Ch??a ?????y ????? th??ng tin
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default FullCourse;
