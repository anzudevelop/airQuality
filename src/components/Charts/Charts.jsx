import s from './Charts.module.css'
import chartExample from './exampleOfGraph.png'

let Charts = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.chartsArea}>
                <div className={s.chartBody}>
                    <img src={chartExample} />
                </div>
                <div className={s.chartBody}>
                    <img src={chartExample} />
                </div>
                <div className={s.chartBody}>
                    <img src={chartExample} />
                </div>
                <div className={s.chartBody}>
                    <img src={chartExample} />
                </div>
            </div>
        </div>
    );
}



export default Charts;
