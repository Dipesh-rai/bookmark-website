import React from 'react'
import Navbar from './component/Navbar'
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
              <label for="">Currency:</label>
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
            <div className="search">
              <button type="button" className="btn btn-primary p-2">Types</button>
              <div className="search-input d-flex">
                <input type="text" className="form-control" aria-label="Text input with checkbox" placeholder='Search availability' />
                <button type="button" className="btn btn-primary"><i className="bi bi-search"></i></button>
              </div>


            </div>
            <div class="right-content">
              <div class="dropdown d-flex gap-2">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-cart-check-fill"></i>
                </button>
                <div class="dropdown-menu">
                  <li className='d-flex'><img src="file:///C:/Users/User/Downloads/limupa-digital-products-store-ecommerce/limupa-digital-products-store-ecommerce/images/product/small-size/5.jpg" alt=""/></li>
                </div>
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
