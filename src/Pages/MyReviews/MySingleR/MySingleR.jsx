import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const deletedToast = () => toast('Deleted SuccessFully');

const MySingleR = ({ rvw, hadelDelete }) => {
    const { name, serviceName, picture, userMail, details, _id } = rvw;

    return (
        <div className="card w-full h-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="w-32" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="">{name}</h2>
                <h2 className="card-title">{serviceName}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <div>
                        <button className="btn btn-success">Update</button>
                        <Toaster />
                    </div>
                    <div onClick={deletedToast}>
                        <button onClick={() => hadelDelete(_id)} className="btn btn-warning">Delete</button>
                        <Toaster />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySingleR;