import {connect} from "react-redux";
import Charts from "./Charts";
import {
    setBmp280,
    setCO2Data,
    setDs18b20Data,
    setMhz19b,
    setSds011, setSht30,
    setTemperatureData,
    setTgs2611,
} from "../../redux/ChartsReducer";

let mapStateToProps = (state) => {
    return {
        temperatureData: state.chartsPage.temperatureChartData,
        co2Data: state.chartsPage.co2ChartData,
        mhz19bData: state.chartsPage.mhz19bData,
        tgs2611Data: state.chartsPage.tgs2611Data,
        sds011Data: state.chartsPage.sds011Data,
        bmp280Data: state.chartsPage.bmp280Data,
        sht30Data: state.chartsPage.sht30Data,
        ds18b20Data: state.chartsPage.ds18b20Data,
    }
}

const ChartsContainer = connect(mapStateToProps, {
    setTemperatureData, setCO2Data, setMhz19b, setTgs2611, setSds011, setBmp280, setSht30, setDs18b20Data
})(Charts)

export default ChartsContainer