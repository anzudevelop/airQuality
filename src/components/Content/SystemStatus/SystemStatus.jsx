import s from './SystemStatus.module.css'
import greenEllipse from './../../../icons/content/greenEllipse.svg'
import redEllipse from './../../../icons/content/redEllipse.svg'

let SystemStatus = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.infoContent}>
                <div className={s.systemStatus}>
                    <span>
                        <h2>Состояние системы</h2>
                        <h1>Уровень заряда батареи</h1>
                        <div className={s.power}>
                            <div className={s.activePower} style={{width: `${props.sysData.power}%`}} />
                            <div className={s.powerValue}>{props.sysData.power} %</div>
                        </div>
                    </span>
                    <span className={s.status}>
                        <div className={s.device}>
                            Устройство: {props.status.power < props.time ? `включено` : `выключено`}
                            <img src={props.status.power < props.time ? greenEllipse : redEllipse} />
                        </div>
                        <div className={s.mqtt}>
                            MQTT веб-сервер: {props.status.mqtt < props.time ? `включен` : `выключен`}
                            <img src={props.status.mqtt < props.time ? greenEllipse : redEllipse} />
                        </div>
                        <div className={s.wifi}>
                            Wi-Fi соединение: {props.status.wifi < props.time ? `активно` : `не активно`}
                            <img src={props.status.wifi < props.time ? greenEllipse : redEllipse} />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}



export default SystemStatus;
