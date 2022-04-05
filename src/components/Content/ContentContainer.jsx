import {connect} from "react-redux";
import Content from "./Content";
import {updateSensorsData, updateSysData} from "../../redux/ContentReducer";

let mapStateToProps = (state) => {
    return {
        data: state.contentPage,
    }
}

const ContentContainer = connect(mapStateToProps, {
    updateSysData,
    updateSensorsData,
})(Content)

export default ContentContainer