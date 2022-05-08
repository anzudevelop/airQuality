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

let Chart = () => {

    const datapoints = [3, 5, 2, 7, 5, 4];
    const labelsData = ['10:30', '14:30', '20:30', '00:30', '04:30', '10:30']

    const data = {
        labels: labelsData,
        datasets: [{
            label: 'Unfilled',
            fill: false,
            backgroundColor: 'rgb(200,220,250)',
            borderColor: 'rgb(200,220,250)',
            data: datapoints,
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