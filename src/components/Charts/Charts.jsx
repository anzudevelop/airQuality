import s from './Charts.module.css'
import chartExample from './exampleOfGraph.png'
import Chart from "./Chart/Chart";

let Charts = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.chartsArea}>
                <Chart />
                <Chart />
                <Chart />
            </div>
        </div>
    );
}



export default Charts;
