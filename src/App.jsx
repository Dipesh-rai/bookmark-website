import React, { useState, useEffect } from 'react'
import "./scss/component/header.scss"
import Header from './component/Header'
import Footer from './component/Footer'
import "./scss/pages/home.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// carousel banner
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 464 },
    items: 1
  },
};

// category
const category = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

//feature
const feature = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 2
  }
};

// testimonial
const testimonial = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1
  }
};

function App() {


  return (
    <>
      <Header />

      <section className='banner-section mt-2'>
        <div className="banner">
          <div className="container">
            <div className="banner-article">
              <Carousel responsive={responsive}>
                <div className="banner-part">
                  <div className="card card-shadow card-banner">
                    <img src="https://plus.unsplash.com/premium_photo-1672252617539-878656f17efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="banner-items">
                      <div className="heading">MEHMED APARTMANTs</div>
                      <button type="button" className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
                <div className="banner-part ">
                  <div className="card card-shadow card-banner">
                    <img src="https://media.istockphoto.com/id/2152254782/photo/new-modern-apartment-building-with-balconies-and-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=QfJtr7CmwtHINREWRG9tNC73UBOGW38t1UW7fDSvgGc=" alt="" />
                    <div className="banner-items">
                      <div className="heading">MEHMED APARTMANTs</div>
                      <button type="button" className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
                <div className="banner-part">
                  <div class="card card-shadow card-banner">
                    <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="banner-items">
                      <div className="heading">MEHMED APARTMANTs</div>
                      <button type="button" className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
              </Carousel>

              <div className="side-banner">
                <div class="card card-shadow">
                  <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww" alt="" />
                  <div className="side-article">
                    <div className="heading-side">Monte HotelOpens</div>
                    <button type="button" class="btn btn-primary">Primary</button>
                  </div>
                </div>
              </div>
              <div className="side-banner">
                <div className="card card-shadow">
                  <div className="side-banner">
                    <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="side-article">
                      <div className="heading-side">
                        Northgate Hotel Kazbegi
                      </div>
                      <button type="button" class="btn btn-primary">Primary</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section >


      <section className="category">
        <div className="container">
          <div className="category-heading d-flex justify-content-between">

            Homes
          </div>
          <div className="tab-content mt-3" id="myTabContent">
            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
              <Carousel responsive={category}>
                <div className="card card-shadow">
                  <img src="https://media.istockphoto.com/id/2157928643/photo/buildings-by-the-river-near-durbar-square-bhaktapur-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=y8__tWmOvjZvr6owNg8tO81qFQt6ElqaIemTs4NY-nI=" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <div className="card card-shadow">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <div className="card card-shadow">
                  <img src="https://images.unsplash.com/photo-1509592149237-bc44977d96d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhvbWVzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <div className="card card-shadow">
                  <img src="https://images.unsplash.com/photo-1623005329287-0848374575d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvbWVzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <div className="card card-shadow">
                  <img src="http://images.unsplash.com/photo-1722491945502-abb7235593f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvbWVzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </Carousel>

            </div>
          </div>
          
          <a href="" className="line-down link-css">View All</a>
        </div>

      </section>



      <section className="add my-3">
        <div className="container">
          <div className="row align-items-center">
            <article className='col-lg-8'>
              <h2>Ready to Post your Add</h2>
              <div className='add-text'>Join thousands of users who find what they need on AdSpot every day.</div>
            </article>
            <div className='col-lg-4 text-lg-end'>
              <button type="button" className="btn btn-light">Post Your add</button>
            </div>
          </div>
        </div>
      </section>


      <section className="apartment my-3">
        <div className="container">
          <div className="category-heading d-flex justify-content-between">
            <div className='heading-title my-3'>Apartments</div>
          </div>
          <Carousel responsive={feature}>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1460408037948-b89a5e837b41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1705874930275-83ff45ad2ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1686157688871-64b55ce8c373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxhcGFydG1lbnRzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card card-shadow ">
              <img src="https://images.unsplash.com/photo-1705874930275-83ff45ad2ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1686157688871-64b55ce8c373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxhcGFydG1lbnRzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1705874930275-83ff45ad2ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1686157688871-64b55ce8c373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxhcGFydG1lbnRzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </Carousel>
          <a href="" className="link-css"> <span className="line-down">View All</span></a>
        </div>
      </section>


      <section className="add my-3">
        <div className="container">
          <div className="row align-items-center">
            <article className='col-lg-8'>
              <h2>Ready to Post your Add</h2>
              <div className='add-text'>Join thousands of users who find what they need on AdSpot every day.</div>
            </article>
            <div className='col-lg-4 text-lg-end'>
              <button type="button" className="btn btn-light">Post Your add</button>
            </div>
          </div>
        </div>
      </section>

      <section className="news my-3">
        <div className="container">
          <div className="category-heading d-flex justify-content-between">
            <div className='heading-title'>Jobs</div>
          </div>
          <div className="jobs">
            <div className="card card-shadow col-lg-4 col-sm-12">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpvYnN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card card-shadow col-lg-4 col-sm-12">
              <img src="https://images.unsplash.com/photo-1506784926709-22f1ec395907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGpvYnN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card card-shadow col-lg-4 col-sm-12">
              <img src="https://plus.unsplash.com/premium_photo-1673830185623-6ee0d12489a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxqb2JzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <a href="" className="link-css"> <span className="line-down">View All</span></a>
        </div>
      </section>

      <section className="add my-3">
        <div className="container">
          <div className="row align-items-center">
            <article className='col-lg-8'>
              <h2>Ready to Post your Add</h2>
              <div className='add-text'>Join thousands of users who find what they need on AdSpot every day.</div>
            </article>
            <div className='col-lg-4 text-lg-end'>
              <button type="button" className="btn btn-light">Post Your add</button>
            </div>
          </div>
        </div>
      </section>

      <section className="blog my-3">
        <div className="container">
          <div className="category-heading d-flex justify-content-between">
            <div className='heading-title'>Blog</div>

          </div>
          <div className="blog-articles my-3">
            <div className=" card card-shadow card-first">
              <img src="https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3N8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title py-2">Card title</h5>
                <div className="d-flex gap-3 py-3">
                  <div class="blog-admin">
                    <a href=""><i class="bi bi-person-fill"></i>
                      <span>  Admin</span></a>
                  </div>
                  <div class="blog-admin">
                    <a href=""><i class="bi bi-chat"></i>
                      <span>  Comment</span></a>
                  </div>
                  <div class="blog-admin">
                    <a href=""><i class="bi bi-calendar3"></i>
                      <span>  Calender</span></a>
                  </div>
                </div>
                <p className="card-text py-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card card-shadow card-second">
              <img src="https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFkZHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
            <div className="card card-shadow card-second">
              <img src="https://plus.unsplash.com/premium_photo-1664475347754-f633cb166d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWRkfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
            <div className="card card-shadow card-second">
              <img src="https://images.unsplash.com/photo-1625296276397-3bc8839c688f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFkZHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>

                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
            <div className="card card-shadow card-second">
              <img src="https://media.istockphoto.com/id/1372048548/photo/professional-cook-hold-saltcellar-and-add-salt-to-soup-against-kitchen-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=rOnmBF_rSmKzrEIbEWViVLxNxN0OWTaOzPbPe39b7b4=" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Add</a>
              </div>
            </div>
          </div>
          <a href="" className="link-css"> <span className="line-down">View All</span></a>
        </div>
      </section>


      <section className="add my-3">
        <div className="container">
          <div className="row align-items-center">
            <article className='col-lg-8'>
              <h2>Ready to Post your Add</h2>
              <div className='add-text'>Join thousands of users who find what they need on AdSpot every day.</div>
            </article>
            <div className='col-lg-4 text-lg-end'>
              <button type="button" className="btn btn-light">Post Your add</button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial my-3">
        <div className="container">
          <div className="category-heading d-flex justify-content-between">
            <div className='heading-title'>Testimonial</div>
          </div>

          <Carousel responsive={testimonial}>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1654723011763-a1602273e7ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVzdGltb25pYWx8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">John</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1654723011763-a1602273e7ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVzdGltb25pYWx8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Johnn</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1654723011763-a1602273e7ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVzdGltb25pYWx8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Johnnn</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card card-shadow">
              <img src="https://images.unsplash.com/photo-1654723011763-a1602273e7ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVzdGltb25pYWx8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Johnnnn</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

          </Carousel>

        </div>
      </section>

      <section className="add my-3">
        <div className="container">
          <div className="row align-items-center">
            <article className='col-lg-8'>
              <h2>Ready to Post your Add</h2>
              <div className='add-text'>Join thousands of users who find what they need on AdSpot every day.</div>
            </article>
            <div className='col-lg-4 text-lg-end'>
              <button type="button" className="btn btn-light">Post Your add</button>
            </div>
          </div>
        </div>
      </section>
      <section className='black-box my-3'>
        <div className="container">
          <div className="category-heading ">

            <div className='row justify-content-between'>
              <div className="col-lg-5">
                <div className="card card-shadow">

                  <h2 className='text-center'>Meet our Agents</h2>
                  <div className="card-body text-center">
                    <div className="sub-heading">Meet our Clients</div>
                    <p>Our team of experienced real estate professionals is here to help you</p>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                          </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                          </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                          <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                      
              <div class="col-lg-5">
                <div className="card card-shadow">
                  <h2 className="text-center my-2">Contact Us</h2>
                  <div className="card-body p-0">
                    <form action="">
                      <div className="d-flex gap-3">
                        <div className="form-floating mb-3">
                          <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label for="floatingInput">First Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label for="floatingInput">Last Name</label>
                        </div>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="name" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                      </div>
                      <textarea name="" id="" className='form-control'></textarea>
                      <button type="button" className="btn btn-primary my-3">Contact us</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section >
      <Footer />
    </>
  )
}

export default App
