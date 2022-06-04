import s from './SensorsStatus.module.css'
import greenEllipse from './../../../icons/content/greenEllipse.svg'
import redEllipse from './../../../icons/content/redEllipse.svg'

let SensorsStatus = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.sensorsContent}>
                <h2>Датчики</h2>
                <div style={{marginTop: '20px'}}>Датчик CO2 - MH-Z19B: {props.status.mhz19b < props.time ? 'активен' : 'не активен'} <img src={props.status.mhz19b < props.time ? greenEllipse : redEllipse}/></div>
                <div>Датчик температуры - DS18B20: {props.status.ds18b20 < props.time ? 'активен' : 'не активен'} <img src={props.status.ds18b20 < props.time ? greenEllipse : redEllipse}/></div>
                <div>Датчик пыли - PM Sensor SDS011: {props.status.sds011 < props.time ? 'активен' : 'не активен'} <img src={props.status.sds011 < props.time ? greenEllipse : redEllipse}/></div>
                <div>Датчик метана - TGS2611: {props.status.tgs2611 < props.time ? 'активен' : 'не активен'} <img src={props.status.tgs2611 < props.time ? greenEllipse : redEllipse}/></div>
                <div>Датчик температуры и относительной влажности - SHT30: {props.status.sht30 < props.time ? 'активен' : 'не активен'} <img src={props.status.sht30 < props.time ? greenEllipse : redEllipse}/></div>
                <div>Датчик температуры и атмсоферного давления - BMP280: {props.status.bmp280 < props.time ? 'активен' : 'не активен'} <img src={props.status.bmp280 < props.time ? greenEllipse : redEllipse}/></div>
            </div>
        </div>
    );
}



export default SensorsStatus;
