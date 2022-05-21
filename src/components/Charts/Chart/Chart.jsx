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

    let chartsData = props.data[0]
    console.log(`Кол-во записей:\t${chartsData.length}`)
    const temperatures = chartsData.map(el => el.temperature)
    const times = chartsData.map(el => el.date.slice(11).slice(0, 5))
    console.log(temperatures)
    console.log(times)

    const datapoints = [3, 5, 2, 7, 5, 4];
    const labelsData = ['10:30', '14:30', '20:30', '00:30', '04:30', '10:30']

    const data = {
        labels: times,
        datasets: [{
            label: 'Unfilled',
            fill: false,
            backgroundColor: 'rgb(200,220,250)',
            borderColor: 'rgb(200,220,250)',
            data: temperatures,
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
                    textDecorationColor: 'rgb(200,220,250)',
                },
            },
            interaction: {
                mode: 'index',
                intersect: false
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