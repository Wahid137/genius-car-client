import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const locaton = useLocation()
    if (loading) {
        return <h1 className='text-5xl'>Loading...</h1>
    }
};

export default PrivateRoute;