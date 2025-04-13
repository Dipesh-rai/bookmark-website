import React from 'react'
import { Link } from 'react-router-dom'
function Category() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/real-estate"> Real-estate</Link></li >
            <li><Link to="/jobs"> Jobs</Link></li >
            <li><Link to="/blogs"> Blogs</Link></li >
            <li><Link to="/news"> News</Link></li >
            <li><Link to="/contact"> Contact</Link></li>
    </ul >
  )
}

export default Category
