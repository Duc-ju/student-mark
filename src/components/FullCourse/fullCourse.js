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
        window.alert("Lưu thông tin thành công!");
    };

    const handleReset = () => {
        window.localStorage.removeItem("semesters");
        window.alert("Đã xoá bộ nhớ, reload nếu bạn muốn mọi thứ như mới!");
    };

    const handleInfo = () => {
        window.alert(
            "Mọi người nhập điểm của mình trong các kì học vào app, sau đó mọi người có thể chỉnh điểm của từng môn để biết rằng nếu mình học cải thiện một môn từ D lên A+ thì GPA tăng thêm bao nhiêu chẳng hạn, hoặc nhập thử điểm các kì tới để biết mình phải cố gắng đạt bao nhiêu chấm để được bằng giỏi, xuất sắc..."
        );
    };
    return (
        <div className={classes.root}>
            <div className={classes.control}>
                <select onChange={handleChange}>
                    <option value="">Chọn mốc thời gian xem</option>
                    <option value="1">Kì 1 năm 1</option>
                    <option value="2">Kì 2 năm 1</option>
                    <option value="3">Kì 1 năm 2</option>
                    <option value="4">Kì 2 năm 2</option>
                    <option value="5">Kì 1 năm 3</option>
                    <option value="6">Kì 2 năm 3</option>
                    <option value="7">Kì 1 năm 4</option>
                    <option value="8">Kì 2 năm 4</option>
                    <option value="9">Kì thực tập</option>
                    <option value="10">Tất cả các học kì</option>
                </select>
                <div className={classes.description}>
                    Để tránh phải nhập lại điểm nhiều lần hãy nhấn nút lưu điểm
                    ở dưới cùng!
                </div>
                {length && semesterState && (
                    <div className={classes.resetContainer}>
                        <button
                            onClick={handleReset}
                            className={classes.resetButton}
                        >
                            Reset tất cả điểm
                        </button>
                        <button
                            onClick={handleInfo}
                            className={classes.infoButton}
                        >
                            Cái này dùng để làm gì?
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
                                Lưu vào bộ nhớ
                            </button>
                        </p>
                        {summary ? (
                            <>
                                <p>
                                    Điểm trung bình tích luỹ:{" "}
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
                                    Số tín chỉ tích luỹ:{" "}
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
                                Chưa đầy đủ thông tin
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default FullCourse;
