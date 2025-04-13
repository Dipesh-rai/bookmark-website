import React from 'react'
import "./../scss/component/footer.scss"
import Category from './component/Category'
import Linkk from './component/Linkk'
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-top row">
                    <div className="col-md-4">
                        <h2>AdSpot</h2>
                        <p>The #1 marketplace for all your needs. Find or sell homes, jobs, services, and more.</p>
                        <div class="d-flex gap-3 mt-3">
                            <a href=""><i class="bi bi-facebook"></i></a>
                            <a href=""><i class="bi bi-twitter"></i></a>
                            <a href=""><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h2>Category</h2>
                        <Category />
                    </div>
                    <div className="col-md-2">
                        <h2>Quick Links</h2>
                        <Linkk />
                    </div>
                    <div className="col-md-4">
                        <h2>Newslatter</h2>
                        <p>Subscribe to our newsletter for the latest listings and updates. </p>
                        <div className="input-group mt-3">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-4">
                    <div>© 2025 AdSpot. All rights reserved.</div>
                    <div>Designed with  for our users</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
