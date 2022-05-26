import s from './Chart.module.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"

import { Line } from "react-chartjs-2";

let Chart = (props) => {
    let chartsData = props.data
    const dataPoints = chartsData.map(el => el.value)
    const times = chartsData.map(el => el.date.slice(11).slice(0, 5))

    const data = {
        labels: times,
        datasets: [{
            label: props.label,
            fill: true,
            backgroundColor: 'rgb(196,206,218)',
            borderColor: 'rgb(196,206,218)',
            data: dataPoints,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    textDecorationColor: 'rgb(196,206,218)',
                },
            },
            interaction: {
                mode: 'index',
                intersect: true
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month',
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            },
        },
    };

    return (
        <div className={s.chartBody}>
            <Line data={data} options={config}/>
        </div>
    );
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default Chart;