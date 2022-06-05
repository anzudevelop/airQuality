import s from './Charts.module.css'
import React from "react";
import Chart from "./Chart/Chart";
import {setSensorsData} from "../../redux/ChartsReducer";

const updateTime = 3 //сек

class Charts extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        //this.props.setTemperatureData()
        //this.props.setCO2Data()
        this.props.setMhz19b()
        this.props.setTgs2611()
        this.props.setSds011()
        this.props.setBmp280()
        this.props.setSht30()
        this.props.setDs18b20Data()
        //this.props.setSensorsData()
        this.interval = setInterval(() => {
            this.props.setMhz19b()
            this.props.setTgs2611()
            this.props.setSds011()
            this.props.setBmp280()
            this.props.setSht30()
            this.props.setDs18b20Data()
            //this.props.setSensorsData()
            //this.props.setTemperatureData()
            //this.props.setCO2Data()
            //console.log('temp:\t' + this.props.temperatureData.length + '\nco2:\t' + this.props.co2Data.length)
        }, updateTime * 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <>
            <div className={s.wrapper}>
                <div className={s.chartsArea}>
                    {/*<Chart label={'Температура'} values={this.props.temperatureData.map(el => el.value)} dates={this.props.temperatureData.map(el => el.date.slice(11).slice(0, 5))}/>
                    <Chart label={'CO2'} values={this.props.co2Data.map(el => el.value)} dates={this.props.co2Data.map(el => el.date.slice(11).slice(0, 5))}/>*/}
                    <Chart
                        label={'Концентрация CO2, ppm'}
                        values={this.props.mhz19bData.map(el => el.co2_concentration)}
                        dates={this.props.mhz19bData.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Концентрация CH4, ppm'}
                        values={this.props.tgs2611Data.map(el => el.ch4_concentration)}
                        dates={this.props.tgs2611Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Количество взвешенных частиц pm2,5, мг/м^3'}
                        values={this.props.sds011Data.map(el => el.pm_2_5_concentration)}
                        dates={this.props.sds011Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Количество взвешенных частиц pm10, мг/м^3'}
                        values={this.props.sds011Data.map(el => el.pm_10_concentration)}
                        dates={this.props.sds011Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Атмосферное давление, мм. рт. ст.'}
                        values={this.props.bmp280Data.map(el => el.pressure)}
                        dates={this.props.bmp280Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Температура, °C'}
                        values={this.props.bmp280Data.map(el => el.temperature)}
                        dates={this.props.bmp280Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Высота над уровнем моря, м'}
                        values={this.props.bmp280Data.map(el => el.attitude)}
                        dates={this.props.bmp280Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Относительная влажность, %'}
                        values={this.props.sht30Data.map(el => el.humidity)}
                        dates={this.props.sht30Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Температура, °C'}
                        values={this.props.sht30Data.map(el => el.temperature)}
                        dates={this.props.sht30Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Температура с первого датчика, °C'}
                        values={this.props.ds18b20Data.map(el => el.temperature_1)}
                        dates={this.props.ds18b20Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Температура со второго датчика, °C'}
                        values={this.props.ds18b20Data.map(el => el.temperature_2)}
                        dates={this.props.ds18b20Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                    <Chart
                        label={'Температура с третьего датчика, °C'}
                        values={this.props.ds18b20Data.map(el => el.temperature_3)}
                        dates={this.props.ds18b20Data.map(el => el.date_and_time_of_measurement.slice(11).slice(0, 5))}
                    />
                </div>
            </div>
        </>
    }
}


export default Charts;
