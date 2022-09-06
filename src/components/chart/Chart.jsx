import React from 'react'
import './Chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'Feb 14',
            Total: 1200,
            pv: 1100,
        },
        {
            name: 'Feb 15',
            Total: 2100,
            pv: 2300,
        },
        {
            name: 'Feb 16',
            Total: 800,
            pv: 2500,
        },
        {
            name: 'Feb 17',
            Total: 1600,
            pv: 1400,
        },
        {
            name: 'Feb 18',
            Total: 900,
            pv: 650,
        },
        {
            name: 'Feb 19',
            Total: 1700,
            pv: 1800,
        },
        {
            name: 'Feb 20',
            Total: 3000,
            pv: 2500,
        },
    ];
    return (
        <div className='chart p-4 bg-charts'>
            <div className='d-flex justify-content-between'>
                <h4 className='mb-3 mt-2'>Revenue</h4>
                <p className="fw-light mt-3">Last 7 days VS prior week</p>
            </div>

            <ResponsiveContainer className='' width="100%" aspect={2 / 1}>
                <AreaChart data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient> */}
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} strokeWidth={3} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    )
}

export default Chart