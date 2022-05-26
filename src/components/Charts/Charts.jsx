import s from './Charts.module.css'
import React from "react";
import Chart from "./Chart/Chart";
import {setCO2Data} from "../../redux/ChartsReducer";


class Charts extends React.Component {

    componentDidMount() {
        this.props.setTemperatureData()
        this.props.setCO2Data()
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
