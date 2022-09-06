import React from 'react'
import './Sidebar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = () => {
    return (
        <div className='sidebar text-white ms-2 pt-5 text-center'>
            <div className='top'>
                <span className="logo fs-5  ">dappr</span>
            </div>

            <div className="center pt-5 pb-5">
                <ul>
                    <li><HomeOutlinedIcon fontSize='medium' /></li>
                    <li><InsertChartOutlinedTwoToneIcon fontSize='medium' /></li>
                    <li><AccountBalanceOutlinedIcon fontSize='medium' /></li>
                    <li><EmailOutlinedIcon fontSize='medium' /></li>
                    <li><SlideshowOutlinedIcon fontSize='medium' /></li>
                    <li><GroupsOutlinedIcon fontSize='medium' /></li>
                    <li><DescriptionOutlinedIcon fontSize='medium' /></li>
                    <li><CurrencyExchangeOutlinedIcon fontSize='medium' /></li>
                </ul>
            </div>
            <div className="bottom pb-5 pt-5">
                <p className='icon'><SettingsOutlinedIcon fontSize='medium' className='icon' /></p>
            </div>
        </div>
    )
}

export default Sidebar