import React, { useState } from 'react';
import { login, register } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(register(formData, history));
    } else {
      dispatch(login(formData, history));
    }
  };

  const handleChange = (e) => {
    // only update the target fields with their respective names
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <section className='min-h-screen flex items-stretch text-white '>
      <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url('https://images.unsplash.com/photo-1631148820840-2327119cde7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80')]">
        <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
        <div className='w-full px-24 z-10'>
          <h1 className='text-5xl font-bold text-left tracking-wide'>
            Your memories, recaptured
          </h1>
        </div>
      </div>
      <div className='lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-[#7D887C]'>
        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center bg-[url('https://images.unsplash.com/photo-1631148820840-2327119cde7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80')]">
          <div className='absolute bg-black opacity-60 inset-0 z-0'></div>
        </div>
        <div className='w-full py-6 z-20'>
          {isSignUp ? (
            <>
              <h1 className='my-2'>Welcome</h1>
              <p className='text-gray-100 text-4xl'>
                Let's create your account!
              </p>
            </>
          ) : (
            <>
              <h1 className='my-2'>Welcome Back</h1>
              <p className='text-gray-100 text-4xl'>Login to your account</p>
            </>
          )}

          <form
            onSubmit={handleSubmit}
            className='sm:w-2/3 w-full px-4 lg:px-0 mx-auto'
          >
            {isSignUp && (
              <div className='pb-2 pt-4'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Username'
                  onChange={handleChange}
                  required
                  className='block w-full p-4 text-lg rounded-md bg-black'
                />
              </div>
            )}
            <div className='pb-2 pt-4'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                onChange={handleChange}
                required
                className='block w-full p-4 text-lg rounded-md bg-black'
              />
            </div>
            <div className='pb-2 pt-4'>
              <input
                className='block w-full p-4 text-lg rounded-md bg-black'
                type='password'
                name='password'
                id='password'
                onChange={handleChange}
                required
                placeholder='Password'
              />
            </div>
            <div className='text-gray-300 hover:underline hover:text-gray-100'>
              <p>
                <button onClick={switchMode}>
                  {isSignUp
                    ? 'Have an account? Sign In'
                    : "Don't have an account? Sign Up"}
                </button>
              </p>
            </div>
            <div className='px-4 pb-2 pt-4'>
              {/* <button className='uppercase block w-full p-4 text-lg rounded-full outline hover:bg-indigo-600 focus:outline-none'> */}
              <button
                type='submit'
                className='uppercase block w-full p-4 text-lg rounded-full outline hover:bg-gray-400'
              >
                {isSignUp ? 'sign up' : 'sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;
