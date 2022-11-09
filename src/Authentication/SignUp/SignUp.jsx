import React from 'react';
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='my-10 border border-gray-800 rounded-md'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">


                        <div className="hero min-h-screen ">
                            <div className="hero-content flex-col">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Please Signup</h1>
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                            <label className="label">
                                                <Link to='/signin' className="label-text-alt link link-hover">Already Have An Account</Link>
                                            </label>
                                        </div>
                                        <div className="form-control mt-1">
                                            <Link><button className="btn btn-primary">Sign Up</button></Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;