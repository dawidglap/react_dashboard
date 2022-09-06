import React from 'react'
import './Rightbar.scss'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Rightbar = () => {

    return (
        <div className='rightbar me-4'>
            <div class=" pt-4 col-12  text-white  pb-3 ">
                <div className="bg-dark pt-3 mt-custom">
                    <h4 class="ps-4 ">Formation status</h4>
                    <p class="ps-4  fw-light">In progress</p>
                    <div class="ms-4 me-4 bg-dark-grey">
                        <div class="loading-bar">
                            <p class="text-dark-grey"> . </p>
                        </div>
                    </div>
                    <p class="fw-bold text-center pt-3">Estimated processing</p>
                    <p class="text-center fw-light"> 4-5 business days</p>
                    <div class="ps-4 pe-4 pb-3">
                        <div class="btn btn-light btn-custom">View status</div>
                    </div>

                </div>
                <div className='ps-4 text-dark pt-3 pb-3'>
                    <h3 className='fs-5'>Your to-Do list</h3>
                </div>
                <div className='to-do-items d-flex'>
                    <div className="custom-icon mt-icon">
                        <ReceiptOutlinedIcon fontSize='large' />
                    </div>
                    <div className=" text-dark ps-3">
                        <h6 className=''>Run payroll</h6>
                        <p className='fw-light'>Mar 4 at 6:00 pm</p>
                    </div>
                </div>
                <div className='to-do-items d-flex mt-2'>
                    <div className="custom-icon mt-icon">
                        <AccessTimeOutlinedIcon fontSize='large' />
                    </div>
                    <div className=" text-dark ps-3">
                        <h6 className=''>Review time off request</h6>
                        <p className='fw-light'>Mar 7 at 6:00 pm</p>
                    </div>
                </div>
                <div className='to-do-items d-flex mt-2'>
                    <div className="custom-icon mt-icon">
                        <ContentPasteOutlinedIcon fontSize='large' />
                    </div>
                    <div className=" text-dark ps-3">
                        <h6 className=''>Sign board resolution</h6>
                        <p className='fw-light'>Mar 12 at 6:00 pm</p>
                    </div>
                </div>
                <div className='to-do-items d-flex mt-2'>
                    <div className="custom-icon mt-icon">
                        <AssignmentTurnedInOutlinedIcon fontSize='large' />
                    </div>
                    <div className=" text-dark ps-3">
                        <h6 className=''>Finish onboarding Tony</h6>
                        <p className='fw-light'>Mar 4 at 6:00 pm</p>
                    </div>
                </div>
                <div className="bg-dark p-3   mt-3">
                    <h5 className='fs-6 ps-3'>Board meeting</h5>
                    <FiberManualRecordIcon className='d-inline color-custom' /><p className='text-grey d-inline'> Feb 22 at 6:00 pm</p>
                    <p className='text-grey ps-3'>You have been invited to attend a meeting of the Board Directors</p>
                </div>
            </div>

        </div>
    )
}

export default Rightbar