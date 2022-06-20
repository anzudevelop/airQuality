import s from './Chart.module.css'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

let Chart = (props) => {
    const dataPoints = props.values
    const times = props.dates

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

     const data = {
        labels: times,
        datasets: [
            {
                label: props.label,
                data: dataPoints,
                fill: true,
                borderColor: 'rgb(255,255,255)',
                backgroundColor: 'rgba(255,255,255,1)',
                tension: 0.2,
            },
        ]
    };

    let titleFontSize = '20vw'
    let titleColor = 'rgb(227,227,227)'
    let xScaleFontSize = '15vw'
    let xLabelColor = 'rgb(227,227,227)'
    let yScaleLabelFontSize = '15vh'
    let yScaleFontSize = '12vh'
    let yLabelColor = 'rgb(227,227,227)'
    let gridColor = 'rgb(87,87,87)'

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            axis: 'x'
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: true,
                text: props.title,
                color: titleColor,
                font: {
                    size: titleFontSize,
                }
            },
        },
        scales: {
            y: {
                title: {
                    display: true,
                    align: 'center',
                    text: props.label,
                    color: yLabelColor,
                    font: {
                        size: yScaleLabelFontSize,
                    },
                },
                grid: {
                    color: gridColor,
                },
                ticks: {
                    color: yLabelColor,
                    font: {
                        size: yScaleFontSize,
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    align: 'center',
                    text: 'Время, с',
                    color: xLabelColor,
                    font: {
                        size: xScaleFontSize,
                    },
                },
                grid: {
                    color: gridColor,
                },
                ticks: {
                    color: xLabelColor,
                    font: {
                        size: xScaleFontSize,
                    }
                }
            }
        }
    };

    return (
        <div className={s.chartBody}>
            <Line options={options} data={data}/>
        </div>
    );
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default Chart;