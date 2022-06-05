import s from './Content.module.css'
import icon from "../../icons/content/icon.svg";
import arrow from "../../icons/content/arrow.svg";
import squarePicture from "../../icons/content/squarePicture.svg";
import SystemStatus from "./SystemStatus/SystemStatus";
import SensorsStatus from "./SensorsStatus/SensorsStatus";
import {NavLink} from "react-router-dom";
import {setSensorsStatus} from "../../redux/ContentReducer";
import {useEffect, useState} from "react";

let Content = (props) => {
    const time = 60 //seconds

    useEffect(() => {
        props.setSensorsStatus()
    }, []);

    return (
        <div className={s.content}>
            <script>window.scrollTo(0, 0)</script>
            <p>Система мониторинга и анализа качества воздуха в закрытом помещении</p>
            <div className={s.info}>
                <div className={s.logo}>
                    <img src={icon} />
                </div>
                <div className={s.air}>
                    Сделано в Томске
                </div>
                <div className={s.scrollDown}>
                    Листай ниже ↓
                </div>
                <SystemStatus sysData={props.data.sysData} status={props.sensorsStatus} time={time}/>
                <SensorsStatus sensorsData={props.data.sensorsData} status={props.sensorsStatus} time={time}/>
                <NavLink to="/data" className={s.navlink}>
                    <img src={arrow} />
                    <h3>Перейти к данным о качестве воздуха</h3>
                </NavLink>
                <div className={s.decoration}>
                    <img src={squarePicture}/>
                    <h3>
                        Качество воздуха – состав воздуха в помещении, при котором при длительном воздействии на человека обеспечивается оптимальное или допустимое состояние организма человека.
                    </h3>
                </div>
            </div>
        </div>
    );
}



export default Content;
