import React from 'react';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const updatedToast = () => toast('Updated SuccessFully');


const Update = () => {
    const data = useLoaderData();
    const { name, picture, details, serviceName, _id } = data;


    const updateReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const serviceName = form.serviceName.value;
        const picture = form.picture.value;
        const details = form.details.value;

        const reviewInfo = {
            name,
            serviceName,
            picture,
            details,
            _id
        }



        fetch(`https://b6a11-service-review-server-mu.vercel.app/updateReview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCoutn > 0) {
                    event.target.reset();
                }
            });
    }


    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card  shadow-2xl">
                        <form onSubmit={updateReview} className="card-body">
                            <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={name} required placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo url</span>
                                    </label>
                                    <input type="text" name='picture' defaultValue={picture} required placeholder="input a photo link" className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input type="text" name='serviceName' defaultValue={serviceName} readOnly required placeholder="type your ratings out of 5" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name='details' defaultValue={details} required placeholder="details" className="input input-bordered" />
                                </div>
                            </div>
                            <div onClick={updatedToast} className="form-control mt-6">
                                <button className="btn btn-outline btn-primary">Update </button>
                                <Toaster></Toaster>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;