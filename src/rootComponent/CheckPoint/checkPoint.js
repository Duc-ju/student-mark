import React from "react";
import FullCourse from "../../components/FullCourse";
import classes from "./checkPoint.module.scss";

function CheckPoint(props) {
    React.useEffect(() => {
        document.title = "Tính toán điểm tích luỹ";
    });
    const [major, setMajor] = React.useState();
    const handleChange = (e) => {
        const value = e.target.value;
        setMajor(value);
    };
    return (
        <section className={classes.root}>
            <div className={classes.selectMajor}>
                <select onChange={handleChange}>
                    <option value="">Chọn chuyên ngành</option>
                    <option value="cntt">Công nghệ thông tin</option>
                    <option value="ttdpt">Truyền thông đa phương tiện</option>
                </select>
            </div>

            {!!major && <FullCourse major={major} />}
        </section>
    );
}

export default CheckPoint;
