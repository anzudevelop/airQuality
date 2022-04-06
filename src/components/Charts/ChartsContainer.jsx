import {connect} from "react-redux";
import Charts from "./Charts";
import {updateChartsData} from "../../redux/ChartsReducer";

let mapStateToProps = (state) => {
    return {
        data: state.chartsPage,
    }
}

const ChartsContainer = connect(mapStateToProps, {
    updateChartsData
})(Charts)

export default ChartsContainer