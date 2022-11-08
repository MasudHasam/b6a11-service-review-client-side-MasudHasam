import React from 'react';

const UsesTechnology = () => {
    return (
        <div>
            <h1 className='text-center my-4 font-bold italic text-2xl  text-slate-500'>Which Technology I Use<br />To Coock These Food?</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className="card w-full h-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full' src="https://images.unsplash.com/photo-1609211373254-b52e03ba0c85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>I use highly secured gas stove to coock these delicious food</p>
                    </div>
                </div>
                <div className="card w-full h-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full' src="https://images.unsplash.com/photo-1580929753603-10519c6e480a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b3ZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p>I use all premium quality accessories and instrument while coocking.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsesTechnology;