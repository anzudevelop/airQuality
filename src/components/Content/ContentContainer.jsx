import {connect} from "react-redux";
import Content from "./Content";
import {setSensorsStatus, updateSensorsData, updateSysData} from "../../redux/ContentReducer";

let mapStateToProps = (state) => {
    return {
        data: state.contentPage,
        sensorsStatus: state.contentPage.sensorsStatus
    }
}

const ContentContainer = connect(mapStateToProps, {
    updateSysData,
    updateSensorsData,
    setSensorsStatus
})(Content)

export default ContentContainer