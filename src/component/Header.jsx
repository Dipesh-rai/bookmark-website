import React, { useState } from 'react'
// import "react-multi-carousel/lib/styles.css";
import Navbar from './component/Navbar'

// const responsive = {
//   desktop: {
//     breakpoint: { max: 4000, min: 464 },
//     items: 1
//   }
// };
// function Banner_components() {
  
// }

function Header() {
  return (
    <header>
      <div className="topheader p-1">
        <div className="container">
          <div className="topheader-section d-flex justify-content-between align-items-center">
            <div className="tel">Telephone Enquiry:(+123) 123 456</div>
            <div className="top-right">
              <select name="" className='select-headerpart' id="">
                <option value="" disabled>Setting</option>
                <option value="">Setting 1</option>
                <option value="">Setting 2</option>
                <option value="">Setting 3</option>
              </select>
              <label>Currency:</label>
              <select name="" className='select-headerpart' id="">
                <option value="">USD</option>
                <option value="">RS</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="second-header p-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <a href="">Booking System</a>
            </div>
            <div className="search d-flex">
              <select className="form-select form-select-lg" aria-label="Large select example">
                <option selected>All</option>
                <option value="1">Real State</option>
                <option value="2">Vehicles</option>
                <option value="3">Job</option>
              </select>
              <div className="search-input d-flex">
                <input type="text" className="form-control" aria-label="Text input with checkbox" placeholder='Search availability' />
                <button type="button" className="btn btn-primary"><i className="bi bi-search"></i></button>
              </div>


            </div>
            <div className="right-content">
              <div className="dropdown d-flex gap-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-cart-check-fill"></i>
                </button>
                <a href="" type="button" className="btn btn-outline-primary">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-header">
        <div className="container">
          <div className="right-header d-flex justify-contnet-center">
            <Navbar />

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
