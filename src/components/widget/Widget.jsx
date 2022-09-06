import React from 'react'
import './Widget.scss'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Widget = ({ type }) => {
    let data;

    switch (type) {
        case "wallet":
            data = {
                title: "You bank balance",
                counter: "143,624",
                isMoney: true,
                icon: (<AccountBalanceWalletOutlinedIcon fontSize='large' />)
            };
            break;
        case "cake-chart":
            data = {
                title: "Uncategorized transactions",
                counter: "12",
                isMoney: false,
                icon: (<PieChartOutlinedIcon fontSize='large' />)
            }
            break;
        case "team":
            data = {
                title: "Employees working today",
                counter: "7",
                isMoney: false,
                icon: (<GroupAddOutlinedIcon fontSize='large' />)
            }
            break;
        case "spendings":
            data = {
                title: "This week's card spending",
                counter: "3,287.49",
                isMoney: true,
                icon: (<CreditCardOutlinedIcon fontSize='large' />)
            }
            break;

        default: break
    }

    return (
        <div className="widget p-3">
            <div className="left d-flex flex-column justify-content-between">
                <span className="icon-widget pb-4">
                    {data.icon}
                </span>
                <h4 class="fw-bolder counter">{data.isMoney && "$ "}{data.counter}</h4>
                <p class="fw-light title">{data.title}</p>

            </div>
            <div className="right">
                <span className='dots-icon '>
                    <MoreVertOutlinedIcon fontSize='large' className='cursor-pointer dots' />
                </span>
            </div>
        </div>

    )
}

export default Widget