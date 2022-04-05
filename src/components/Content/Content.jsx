import s from './Content.module.css'
import icon from "../../icons/content/icon.svg";
import arrow from "../../icons/content/arrow.svg";
import squarePicture from "../../icons/content/squarePicture.svg";
import SystemStatus from "./SystemStatus/SystemStatus";
import SensorsStatus from "./SensorsStatus/SensorsStatus";
import {NavLink} from "react-router-dom";

let Content = (props) => {
    return (
        <div className={s.content}>
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
                <SystemStatus sysData={props.data.sysData}/>
                <SensorsStatus sensorsData={props.data.sensorsData}/>
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
