import s from './SensorsStatus.module.css'
import greenEllipse from './../../../icons/content/greenEllipse.svg'
import redEllipse from './../../../icons/content/redEllipse.svg'

let sensorData = {
    co2: false,
    temp: true,
    dust: false,
    methane: false,
    tempWet: true,
    tempPres: true,
}

let SensorsStatus = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.sensorsContent}>
                <h2>Датчики</h2>
                <div style={{marginTop: '20px'}}>Датчик CO2 - MH-Z19B: {sensorData.co2 ? 'активен' : 'не активен'} <img src={sensorData.co2 ? greenEllipse : redEllipse}/></div>
                <div>Датчик температуры - DS18B20: {sensorData.temp ? 'активен' : 'не активен'} <img src={sensorData.temp ? greenEllipse : redEllipse}/></div>
                <div>Датчик пыли - PM Sensor SDS011: {sensorData.dust ? 'активен' : 'не активен'} <img src={sensorData.dust ? greenEllipse : redEllipse}/></div>
                <div>Датчик метана - TGS2611: {sensorData.methane ? 'активен' : 'не активен'} <img src={sensorData.methane ? greenEllipse : redEllipse}/></div>
                <div>Датчик температуры и относительной влажности - SHT30: {sensorData.tempWet ? 'активен' : 'не активен'} <img src={sensorData.tempWet ? greenEllipse : redEllipse}/></div>
                <div>Датчик температуры и атмсоферного давления - BMP280: {sensorData.tempPres ? 'активен' : 'не активен'} <img src={sensorData.tempPres ? greenEllipse : redEllipse}/></div>
            </div>
        </div>
    );
}



export default SensorsStatus;
