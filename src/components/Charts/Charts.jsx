import s from './Charts.module.css'
import React, {useEffect} from "react";
import Chart from "./Chart/Chart";
import {setSensorsData} from "../../redux/ChartsReducer";

const updateTime = 1 //сек

let Charts = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.setSensorsData()
        }, updateTime * 1000);
    });

    const sortFunction = (object, param) => {
        if (object == null) return []
        if (param == 'date_and_time_of_measurement') {
            let correction = 4 // поправка на время сервера
            let hour = Number(object[0][param].slice(11,13)) + correction
            if (hour > 23) hour = hour - 24
            if (hour < 10) hour = '0' + hour
            return object.map(el => hour + el[param].slice(13).slice(0, 3))
        }
        else return object.map(el => el[param])
    }


    return (
        <div className={s.wrapper}>
            <script>window.scrollTo(0, 0)</script>
            <div className={s.chartsArea}>

                <Chart
                    title={'MHZ19B'}
                    label={'Концентрация CO2, ppm'}
                    values={sortFunction(props.sensorsData.mhz19b, 'co2_concentration')}
                    dates={sortFunction(props.sensorsData.mhz19b, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'TGS2611'}
                    label={'Концентрация CH4, ppm'}
                    values={sortFunction(props.sensorsData.tgs2611, 'ch4_concentration')}
                    dates={sortFunction(props.sensorsData.tgs2611, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'SDS011'}
                    label={'Количество взвешенных частиц pm2,5, мг/м^3'}
                    values={sortFunction(props.sensorsData.sds011, 'pm_2_5_concentration')}
                    dates={sortFunction(props.sensorsData.sds011, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'SDS011'}
                    label={'Количество взвешенных частиц pm10, мг/м^3'}
                    values={sortFunction(props.sensorsData.sds011, 'pm_10_concentration')}
                    dates={sortFunction(props.sensorsData.sds011, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'BMP280'}
                    label={'Атмосферное давление, мм. рт. ст.'}
                    values={sortFunction(props.sensorsData.bmp280, 'pressure')}
                    dates={sortFunction(props.sensorsData.bmp280, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'BMP280'}
                    label={'Температура, °C'}
                    values={sortFunction(props.sensorsData.bmp280, 'temperature')}
                    dates={sortFunction(props.sensorsData.bmp280, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'BMP280'}
                    label={'Высота над уровнем моря, м'}
                    values={sortFunction(props.sensorsData.bmp280, 'attitude')}
                    dates={sortFunction(props.sensorsData.bmp280, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'SHT30'}
                    label={'Относительная влажность, %'}
                    values={sortFunction(props.sensorsData.sht30, 'humidity')}
                    dates={sortFunction(props.sensorsData.sht30, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'SHT30'}
                    label={'Температура, °C'}
                    values={sortFunction(props.sensorsData.sht30, 'temperature')}
                    dates={sortFunction(props.sensorsData.sht30, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'DS18B20'}
                    label={'Температура с первого датчика, °C'}
                    values={sortFunction(props.sensorsData.ds18b20, 'temperature_1')}
                    dates={sortFunction(props.sensorsData.ds18b20, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'DS18B20'}
                    label={'Температура со второго датчика, °C'}
                    values={sortFunction(props.sensorsData.ds18b20, 'temperature_2')}
                    dates={sortFunction(props.sensorsData.ds18b20, 'date_and_time_of_measurement')}
                />
                <Chart
                    title={'DS18B20'}
                    label={'Температура с третьего датчика, °C'}
                    values={sortFunction(props.sensorsData.ds18b20, 'temperature_3')}
                    dates={sortFunction(props.sensorsData.ds18b20, 'date_and_time_of_measurement')}
                />
            </div>
        </div>

    )
}


export default Charts;
