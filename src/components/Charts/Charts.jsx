import s from './Charts.module.css'
import React from "react";
import Chart from "./Chart/Chart";
import {chartsAPI} from "../../api/api";


class Charts extends React.Component {

    componentDidMount() {
        //this.props.toggleIsFetching(true)
        chartsAPI.getCharts().then(data => {
            /*this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)*/
            this.props.updateChartsData(data)
        })
    }

    /*onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })
    }*/

    render() {
        return <>
            <div className={s.wrapper}>
                <div className={s.chartsArea}>
                    <Chart data={this.props.data}/>
                </div>
            </div>
        </>
    }
}


export default Charts;
