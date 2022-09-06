import React from 'react'

const TableData = ({ type }) => {
    let data;

    switch (type) {
        case "p1":
            data = {
                name: "Mario Perry",
                message: "Go to the grocery",
                time: "1:24 PM",
                img: "https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg",
            };
            break;
        case "p2":
            data = {
                name: "Frank Wisky",
                message: "Remember to feed the cat",
                time: "9:46 AM",
                img: "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg",
            };
            break;
        case "p3":
            data = {
                name: "Peppe Gerry",
                message: "Meeting with the Boss",
                time: "8:54 AM",
                img: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__480.jpg",
            };
            break;
        case "p4":
            data = {
                name: "Robert Rossi",
                message: "Packages are looking for funding",
                time: "6:44 AM",
                img: "https://cdn.pixabay.com/photo/2016/01/17/14/23/albert-einstein-1144965__480.jpg",
            };
            break;
        default:
            break;
    }
    return (
        <div className="col-12 d-flex">
            <div className='col-3'>
                <img src={data.img} alt="person-profile-img" className='img-email me-5 ' />
            </div>
            <div className="col-3">
                <p className='fw-light text-start '>{data.name}</p>
            </div>
            <div className="col-3">
                <p className='fw-light text-start'>{data.message}</p>
            </div>
            <div className='col-3'>
                <p className='fw-light text-end'>{data.time}</p>
            </div>
        </div >
    )
}

export default TableData