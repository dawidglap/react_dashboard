import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Rightbar from '../../components/rightbar/Rightbar'
import Stats from '../../components/stats/Stats'
import Chart from '../../components/chart/Chart'

import './Home.scss'
import Table from '../../components/table/Table'

const Home = () => {
    return (
        <>
            <Navbar />

            <div className='home'>
                <Sidebar />
                <div className="homeContainer">
                    <div className="widgets">
                        <Widget type='wallet' />
                        <Widget type='cake-chart' />
                        <Widget type='team' />
                        <Widget type='spendings' />
                    </div>
                    <div className="charts">
                        <Stats />
                        <Chart />
                    </div>
                    <div className="table">
                        <Table />
                    </div>
                </div>
                <Rightbar />


            </div>
        </>
    )
}

export default Home