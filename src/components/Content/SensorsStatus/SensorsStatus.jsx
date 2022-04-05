import s from './SensorsStatus.module.css'
import greenEllipse from './../../../icons/content/greenEllipse.svg'
import redEllipse from './../../../icons/content/redEllipse.svg'

let SensorsStatus = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.sensorsContent}>
                <h2>Датчики</h2>
                <div style={{marginTop: '20px'}}>Датчик CO2 - MH-Z19B: {props.sensorsData.co2 ? 'активен' : 'не активен'} <img src={props.sensorsData.co2 ? greenEllipse : redEllipse}/></div>
                <div>Датчик температуры - DS18B20: {props.sensorsData.temp ? 'активен' : 'не активен'} <img src={props.sensorsData.temp ? greenEllipse : redEllipse}/></div>
                <div>Датчик пыли - PM Sensor SDS011: {props.sensorsData.dust ? 'активен' : 'не активен'} <img src={props.sensorsData.dust ? greenEllipse : redEllipse}/></div>
                <div>Датчик метана - TGS2611: {props.sensorsData.methane ? 'активен' : 'не активен'} <img src={props.sensorsData.methane ? greenEllipse : redEllipse}/></div>
                <div>Датчик температуры и относительной влажности - SHT30: {props.sensorsData.tempWet ? 'активен' : 'не активен'} <img src={props.sensorsData.tempWet ? greenEllipse : redEllipse}/></div>
                <div>Датчик температуры и атмсоферного давления - BMP280: {props.sensorsData.tempPres ? 'активен' : 'не активен'} <img src={props.sensorsData.tempPres ? greenEllipse : redEllipse}/></div>
            </div>
        </div>
    );
}



export default SensorsStatus;
