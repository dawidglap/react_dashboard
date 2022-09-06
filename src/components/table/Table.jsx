import React from 'react'
import './Table.scss'
import TableData from './TableData'

const Table = () => {
    return (
        <div>
            <div className="row p-3 m-3 bg-table">
                <h4 className='mb-1 mt-1'>Recent emails</h4>
                <TableData type="p1" />
                <TableData type="p2" />
                <TableData type="p3" />
                <TableData type="p4" />
            </div>
        </div>
    )
}

export default Table