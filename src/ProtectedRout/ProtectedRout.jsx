import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ProtectedRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
};

export default ProtectedRout;