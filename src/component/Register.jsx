import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <div className="login">
            <div className="card log border">
                <h1>Register</h1>
                <div className="card-body login-border shadow-sm p-3 bg-body-tertiary rounded">
                    <form action="">
                        <div class="d-flex gap-2">
                            <div class="name">
                                <label for="">First Name</label>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                            <div class="last">
                                <label for="">Last Name</label>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                        </div>
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                        <label for="inputPassword4" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                        <button type="button" className="btn btn-primary card-shadow my-3">Register</button>
                    </form>
                </div>
                <div className="create text-center">
                      <span>Already Have Account </span><Link to="/login" className='text-center account-create line-down'>login</Link>  
                </div>
                <Link to='/'><i class="bi bi-house-door-fill"></i> Home</Link>
            </div>
        </div>
    )
}

export default Register
