import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import "./../scss/pages/real-state.scss"

function Real_State() {
  return (
    <>
      <Header />
      <section className='property'>
        <div className="container">
          <div className="d-flex my-5">
            <div className="dream-property">
              <div className="property-items">
                <h2>Find Your Dream Property</h2>
                <p>Browse thousands of homes, apartments, and commercial properties for sale or rent.</p>
              </div>
            </div>
            <div className="search-property">
              <div className="category-heading">Search Properties</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Real_State
