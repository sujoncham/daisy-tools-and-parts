import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../Firebase/Firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const RequireAdmin = ({children}) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)

    if(loading || adminLoading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(error){
        return <p className='text-red-500'>Error: error?.message</p>
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to='/login' state={{from:location}}  replace />
    }

    return children;
};

export default RequireAdmin;