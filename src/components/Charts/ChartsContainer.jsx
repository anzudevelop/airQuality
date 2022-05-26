import {connect} from "react-redux";
import Charts from "./Charts";
import {setCO2Data, setTemperatureData} from "../../redux/ChartsReducer";

let mapStateToProps = (state) => {
    return {
        temperatureData: state.chartsPage.temperatureChartData,
        co2Data: state.chartsPage.co2ChartData,
    }
}

const ChartsContainer = connect(mapStateToProps, {
    setTemperatureData, setCO2Data,
})(Charts)

export default ChartsContainer