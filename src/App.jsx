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
    breakpoint: { max: 4000, min: 1024 },
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
    items: 5
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
function App() {


  return (
    <>
      <Header />

      <section className='banner-section'>
        <div className="conatiner">
          <div className="banner">
            <div className="container">
              <div className="banner-article">
                <Carousel responsive={responsive}>
                  <div className="banner-part">
                    <img src="https://plus.unsplash.com/premium_photo-1672252617539-878656f17efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="banner-items">
                      <div className="heading">MEHMED APARTMANTs</div>
                      <button type="button" className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                  <div className="banner-part">
                    <img src="https://media.istockphoto.com/id/2152254782/photo/new-modern-apartment-building-with-balconies-and-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=QfJtr7CmwtHINREWRG9tNC73UBOGW38t1UW7fDSvgGc=" alt="" />
                    <div className="banner-items">
                      <div className="heading">MEHMED APARTMANTs</div>
                      <button type="button" className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                  <div className="banner-part">
                    <img src="https://images.unsplash.com/photo-1460317442991-0ec209397118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <div className="banner-items">
                      <div className="heading">MEHMED APARTMANTs</div>
                      <button type="button" className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </Carousel>

                <div className="side-banner">
                  <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fHww" alt="" />
                  <div className="side-article">
                    <div className="heading-side">Monte HotelOpens</div>
                  </div>
                </div>
                <div className="side-banner">
                  <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
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

                <div className="card">
                  <img src="https://media.istockphoto.com/id/2157928643/photo/buildings-by-the-river-near-durbar-square-bhaktapur-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=y8__tWmOvjZvr6owNg8tO81qFQt6ElqaIemTs4NY-nI=" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1509592149237-bc44977d96d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGhvbWVzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1623005329287-0848374575d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvbWVzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                <div className="card">
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


      <section className="feature my-3">
        <div className="container">
          <div className="category-heading d-flex justify-content-between">
            <div className='heading-title'>Apartments</div>
          </div>
          <Carousel responsive={feature}>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1460408037948-b89a5e837b41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1705874930275-83ff45ad2ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1686157688871-64b55ce8c373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxhcGFydG1lbnRzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1705874930275-83ff45ad2ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1686157688871-64b55ce8c373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxhcGFydG1lbnRzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1705874930275-83ff45ad2ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1686157688871-64b55ce8c373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxhcGFydG1lbnRzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
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

      <section className="news my-3">
        <div className="container">
          <div className="category-heading d-flex justify-content-between">
            <div className='heading-title'>Jobs</div>
          </div>
          <div className="d-flex gap-3 my-3">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpvYnN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1506784926709-22f1ec395907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGpvYnN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="https://plus.unsplash.com/premium_photo-1673830185623-6ee0d12489a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxqb2JzfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="add my-3">
      </section>

      <section className="blog my-3">
        <div className="container">
          <div className="category-heading d-flex justify-content-between">
            <div className='heading-title'>Blog</div>
            <select name="" id="" className='selection'>
              <option value="">All items</option>
            </select>
          </div>
          <div className="blog-articles my-3">
            <div className="card card-first">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="add my-3">
      </section>

      <section className="news my-3">
        <div className="container">
          <div className="category-heading d-flex justify-content-between">
            <div className='heading-title'>Testimonial</div>
          </div>
          <div className="d-flex gap-3 my-3">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="add my-3">
      </section>

      <Footer />
    </>
  )
}

export default App
