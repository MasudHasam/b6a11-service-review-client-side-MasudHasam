import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';


const Additems = () => {
    const { count, setCount } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handelAddItems = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const ratings = form.ratings.value;
        const details = form.details.value;
        const index = count + 1;

        const itemsInfo = {
            picture: photo,
            name,
            ratings,
            details,
            index,
        }


        fetch('http://localhost:5000/topfood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemsInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                navigate(from, { replace: true })
            })


    }

    return (
        <div className='my-10'>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card  shadow-2xl">
                        <form onSubmit={handelAddItems} className="card-body">
                            <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo' required placeholder="input a photo link" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="text" name='ratings' required placeholder="type your ratings out of 5" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name='details' required placeholder="details" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary">ADD </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Additems;