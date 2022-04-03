import s from './InformationContent.module.css'
import greenEllipse from './../../../icons/content/greenEllipse.svg'
import redEllipse from './../../../icons/content/redEllipse.svg'

let sysData = {
    device: false,
    mqtt: true,
    wifi: false,
}

let power = 70


let InformationContent = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.infoContent}>
                <div className={s.systemStatus}>
                    <span>
                        <h2>Состояние системы</h2>
                        <h1>Уровень заряда батареи</h1>
                        <div className={s.power}>
                            <div className={s.powerValue}>{power} %</div>
                            <div className={s.activePower} style={{width: `${power}%`}} />
                        </div>
                    </span>
                    <span className={s.status}>
                        <div className={s.device}>
                            Устройство: {sysData.device ? `включено` : `выключено`}
                            <img src={sysData.device ? greenEllipse : redEllipse} />
                        </div>
                        <div className={s.mqtt}>
                            MQTT веб-сервер: {sysData.mqtt ? `включен` : `выключен`}
                            <img src={sysData.mqtt ? greenEllipse : redEllipse} />
                        </div>
                        <div className={s.wifi}>
                            Wi-Fi соединение: {sysData.wifi ? `активно` : `не активно`}
                            <img src={sysData.wifi ? greenEllipse : redEllipse} />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}



export default InformationContent;
