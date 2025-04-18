import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

function Inner() {
    return (
        <>
            <Header />

            <section>
                <div className="container">
                    <div className="card">
                    <div className="top-naving">
                        <ul>
                            <li><a href="">Overview</a></li>
                            <li><a href="">Info & Prices</a></li>
                            <li><a href="">Facilities</a></li>
                            <li><a href="">House rent</a></li>
                            <li><a href="">Guest Reviews</a></li>
                        </ul>
                    </div>
                        <div class="overview">
                            <h2>Overview</h2>
                    <div className="row p-0 my-3">
                        <div className="col-lg-8">
                            <div className="card card-shadow mt-2">
                                <div class="gallery">
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/461518638.jpg?k=d53e92c1ee83dc5aaf2b677392698817351bec5dc5c494554d38fa9033b457c0&o=" alt="" />
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max500/644083959.jpg?k=cf59906df6301b6a25cc93484857a4583fc0ee8e9e626fc414845560ed8d2f2f&o=" alt="" />
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max500/644079895.jpg?k=2c3ad71c98e170881efa18a4fb32d7574e9198d0ce5a00f25034422939cb5019&o=" alt="" />
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max300/644081881.jpg?k=b86c43755dc2711c0ab41197dfb6cde164ed3482ad336a840c7e135a5e831929&o=" alt="" />
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max300/613316372.jpg?k=2b09319c40f3c40cb2a46e7ef3848e721da513650c875491a42bae05ec876b7a&o=" alt="" />
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max300/644082536.jpg?k=cf34d32bc9f7ee1e8813cd7a23fbd6a137892f4521634447471d16b827a4a281&o=" alt="" />
                                </div>
                                <div className="card-body ">
                                    <div class="gallery-section content-part">
                                        <p>HOTEL FORESTWAY Hostel & Backpackers features a garden, shared lounge, a terrace and bar in Pokhara. Located around a 18-minute walk from Pokhara Lakeside, the hostel with free WiFi is also one mile away from Fewa Lake. The property provides room service, a 24-hour front desk and luggage storage for guests.</p>

                                        <p>Guests at the hostel will be able to enjoy activities in and around Pokhara, like hiking.</p>

                                        <p>Devi's Falls is 3.7 miles from HOTEL FORESTWAY Hostel & Backpackers, while World Peace Pagoda is 6.7 miles away. Pokhara Airport is 2.5 miles from the property.</p>

                                        <p>Couples in particular like the location – they rated it <b>9.3</b> for a two-person trip.</p>

                                        <p><span className="grey-text">Distance in property description is calculated using © OpenStreetMap</span></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 border">
                            This is additional
                        </div>
                        </div>
                        </div>
                        </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Inner
