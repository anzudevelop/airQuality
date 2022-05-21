import {connect} from "react-redux";
import Charts from "./Charts";
import {updateChartsData} from "../../redux/ChartsReducer";

let mapStateToProps = (state) => {
    return {
        data: state.chartsPage.charts,
    }
}

const ChartsContainer = connect(mapStateToProps, {
    updateChartsData
})(Charts)

export default ChartsContainer