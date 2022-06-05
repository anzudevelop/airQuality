import {connect} from "react-redux";
import Charts from "./Charts";
import {
    setSensorsData
} from "../../redux/ChartsReducer";

let mapStateToProps = (state) => {
    return {
        sensorsData: state.chartsPage.sensorsData,
    }
}

const ChartsContainer = connect(mapStateToProps, {
    setSensorsData
})(Charts)

export default ChartsContainer