import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/clodkitchen.png'


const Navbar = () => {

    const menue = <div className='flex flex-col lg:flex-row gap-2'>
        <Link className='btn btn-outline btn-info' to='/home'>Home</Link>
        <Link className='btn btn-outline btn-info' to='/allfoods'>Food Items</Link>
        <Link className='btn btn-outline btn-info'>About</Link>
    </div>

    return (
        <div className="navbar bg-slate-700 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <div>
                            {menue}
                        </div>

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-32 h-10' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <div>
                        {menue}
                    </div>

                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full lg:mr-5">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link>Settings</Link></li>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;