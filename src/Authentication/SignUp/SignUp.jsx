import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const { register } = useContext(AuthContext);

    const handelSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form?.name.value;

        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))

    }


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
                                    <form onSubmit={handelSignUp} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name='name' placeholder="name" className="input text-gray-900 input-bordered " />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name='email' placeholder="email" className="input text-gray-900 input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" name='password' placeholder="password" className="input text-gray-900 input-bordered" />
                                            <label className="label">
                                                <Link to='/signin' className="label-text-alt link link-hover">Already Have An Account</Link>
                                            </label>
                                        </div>
                                        <div className="form-control mt-1">
                                            <button className='btn btn-success'>Sign Up</button>
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