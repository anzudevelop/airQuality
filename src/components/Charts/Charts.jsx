import s from './Charts.module.css'
import React from "react";
import Chart from "./Chart/Chart";
import {setCO2Data, setTemperatureData} from "../../redux/ChartsReducer";
import {chartsAPI} from "../../api/api";

const updateTime = 3 //сек

class Charts extends React.Component {

    componentDidMount() {
        this.props.setTemperatureData()
        this.props.setCO2Data()
        this.interval = setInterval(() => {
            this.props.setTemperatureData()
            this.props.setCO2Data()
            console.log('temp:\t' + this.props.temperatureData.length + '\nco2:\t' + this.props.co2Data.length)
        }, updateTime * 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <>
            {window.scrollTo(0, 0)}
            <div className={s.wrapper}>
                <div className={s.chartsArea}>
                    <Chart label='Температура' data={this.props.temperatureData}/>
                    <Chart label='CO2' data={this.props.co2Data}/>
                </div>
            </div>
        </>
    }
}


export default Charts;
