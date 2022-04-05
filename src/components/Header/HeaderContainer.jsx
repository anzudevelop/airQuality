import {connect} from "react-redux";
import Header from "./Header";
import {clickOnMenu, updateTime} from "../../redux/HeaderReducer";

let mapStateToProps = (state) => {
    return {
        data: state.headerElement,
    }
}

const ContentContainer = connect(mapStateToProps, {
    updateTime,
    clickOnMenu,
})(Header)

export default ContentContainer