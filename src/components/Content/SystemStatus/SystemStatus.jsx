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
                            Устройство: {props.sysData.device ? `включено` : `выключено`}
                            <img src={props.sysData.device ? greenEllipse : redEllipse} />
                        </div>
                        <div className={s.mqtt}>
                            MQTT веб-сервер: {props.sysData.mqtt ? `включен` : `выключен`}
                            <img src={props.sysData.mqtt ? greenEllipse : redEllipse} />
                        </div>
                        <div className={s.wifi}>
                            Wi-Fi соединение: {props.sysData.wifi ? `активно` : `не активно`}
                            <img src={props.sysData.wifi ? greenEllipse : redEllipse} />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}



export default SystemStatus;
