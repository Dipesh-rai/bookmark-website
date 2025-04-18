import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import "./../scss/pages/blog.scss"

function Blog() {
    return (
        <>
            <Header />
            <section className="blog-section">
                <div className="container my-3">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2><div className="heading-title"></div>Latest Article</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex flex-column gap-2">
                                <div className="card border-0 shadow-sm">
                                    <div class="card-body">
                                        <div className="heading-title">All Post</div>
                                    </div>
                                </div>
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body">
                                        <div className="heading-title">Categories</div>
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </div>
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

export default Blog
