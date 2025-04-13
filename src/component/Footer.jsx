import React from 'react'
import"./../scss/component/footer.scss"
import Category from './component/Category'
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>AdSpot</h2>
                        <p>The #1 marketplace for all your needs. Find or sell homes, jobs, services, and more.</p>

                    </div>
                    <div className="col-md-2">
                        <h2>Category</h2>
                        <Category />
                    </div>
                    <div className="col-md-2">
                        <h2>Quick Links</h2>
                        <Category />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
