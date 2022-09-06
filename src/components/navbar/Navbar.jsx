import React from 'react'
import './Navbar.scss'


const Navbar = () => {
    return (
        <div>
            <div className="container pt-4">
                <div className="row d-flex">
                    <div className="col ms-custom">
                        <h1 className='fs-2'>Good morning, Dawid!</h1>
                    </div>
                    <div className="col-4 ps-5 ms-5 ">
                        <ul className="d-flex justify-content-end">
                            <li className="ps-3 pe-3 cursor-pointer"><i className="far fa-calendar-alt fa-xl"></i></li>
                            <li className="ps-3 pe-3 cursor-pointer"><i className="far fa-comment-dots fa-xl"></i></li>
                            <li className="ps-3 pe-3 cursor-pointer"><i className="fa-solid fa-bell fa-xl"></i></li>
                            <li className=''><img src="https://media-exp1.licdn.com/dms/image/D4E35AQFwCwKtstbnkg/profile-framedphoto-shrink_400_400/0/1658938979891?e=1663016400&v=beta&t=562kYTB7bKWqZGqbu-nXRIcKaYMvgE6jYPcc7QFpmfI" className="nav-photo ms-2 me-2 cursor-pointer"
                                alt="profile-pic" width="42px" /></li>
                            <li className="ps-3 pe-3 cursor-pointer"><i className="fa-solid fa-chevron-down "></i>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar