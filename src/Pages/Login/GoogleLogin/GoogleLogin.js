import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../Images/extra/google.png'
import Loading from '../../Shared/Loading/Loading';



const GoogleLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (user) {
        navigate('/home');
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
        console.log(error)
        // return <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading) {
        <Loading></Loading>
    }

    return (

        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>

    );
};

export default GoogleLogin;