import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
    const login = props.handleLogin;
    const error = props.error;
    const [details, setDetails] = useState({name : "", email: "", password: ""});

    const submitHandler = (e) => {
        e.preventDefault();
        login(details);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 form-div">
                    <div className="form-container">
                        <form className="p-4" onSubmit={submitHandler}>
                            <h1 className="text-white pb-3">Login</h1> 
                            {
                                error ? <h3 className="text-danger">{error}</h3> : ""
                            }
                            <div className="mb-3">
                                <label className="form-label text-white">Name</label>
                                <input type="text" name="name" className="form-control input-background" id="" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} />
                                <p className="text-warning"><small>Test Name : Write any name</small></p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Email Address</label>
                                <input type="email" name="email" className="form-control input-background" id="" onChange={e => setDetails({...details, email:e.target.value})} value={details.email}/>
                                <p className="text-warning"><small>Test Email : admin@admin.com</small></p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white">Password</label>
                                <input type="password" name="password" className="form-control input-background" id="" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                                <p className="text-warning"><small>Test Password : admin123</small></p>
                            </div>
                            <button type="submit" className="submit-button" onClick={login}>Login</button>
                            
                        </form>
                    </div>
                </div>    
            </div>
      </div>
    );
};

export default LoginForm;