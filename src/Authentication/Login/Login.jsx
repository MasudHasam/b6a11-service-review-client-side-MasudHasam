import React from 'react';
import { Link } from 'react-router-dom'
import google from '../../Assets/google.png'

const Login = () => {





    return (
        <div className='my-10 border border-gray-800 rounded-md'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">


                        <div className="hero min-h-screen ">
                            <div className="hero-content flex-col">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Please Login</h1>
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form className="card-body">
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
                                                <Link to='/signup' className="label-text-alt link link-hover">New Hear</Link>
                                            </label>
                                        </div>
                                        <div className="form-control mt-1">
                                            <Link><button className="btn btn-primary">Login</button></Link>
                                        </div>
                                    </form>
                                    <div>
                                        <h1 className='underline text-slate-600'>Sign In With Google</h1>
                                        <Link className='bg-slate-5s00'><button className='btn btn-outline w-11/12 mx-1 my-1'><img className='w-10 h-10 mx-auto ' src={google} alt="" /></button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;