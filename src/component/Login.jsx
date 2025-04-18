import React from 'react'
import { Link } from 'react-router-dom'
import "./../scss/component/login.scss"

function Login() {
    return (
        <div className="login">
            <div className="card log border">
                <h1>Login</h1>
                <div className="card-body login-border shadow-sm p-3 bg-body-tertiary rounded">
                    <form action="">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                        <div className="d-flex justify-content-between my-3">
                            <div className="check">
                                <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                <label className="form-check-label" for="checkDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="line-down text-primary">
                                <a href="">Forget your password?</a>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary card-shadow mb-3">Login</button>
                    </form>
                </div>
                <div className="create text-center">
                <Link to="/register" className="text-center account-create line-down">Create an account</Link>
                </div>
                <Link to='/'><i class="bi bi-house-door-fill"></i> Home</Link>
            </div>
        </div>
    )
}

export default Login
