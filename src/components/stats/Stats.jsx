import React from 'react'
import './Stats.scss'

const Stats = () => {
    return (
        <div className='statsWrapper d-flex flex-column'>
            <div className='stats mb-3 p-3'>
                <div className="stats-left d-flex flex-column justify-content-between">
                    <h4 class="fw-bolder pt-3">New clients</h4>
                    <h2 class="fw-bolder display-4 mb-4">54 <span className='fs-6 fw-light ms-3  p-2 bg-custom '>+ 18.7%</span></h2>
                </div>
            </div>
            <div className='stats p-3'>
                <div className="stats-left d-flex flex-column justify-content-between">
                    <h4 class="fw-bolder pt-3">Invoices overdue</h4>
                    <h2 class="fw-bolder display-4 mb-4">6 <span className='fs-6 fw-light ms-5  p-2 bg-custom-neg '>-2.7%</span></h2>
                </div>
            </div>

        </div>

    )
}

export default Stats