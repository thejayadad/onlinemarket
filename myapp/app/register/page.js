'use client'
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === '' || email === '' || password === '') {
      toast.error('Fill all fields');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    try {
      setLoading(true); // Set loading to true when starting the registration process

      const res = await fetch('http://localhost:3000/api/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
      });

      console.log(await res.json());
      if (res.ok) {
        toast.success('Successfully registered the user');
        setTimeout(() => {
          signIn();
        }, 1500);
        return;
      } else {
        toast.error('Error occurred while registering');
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false when the registration process is completed
    }
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <section className='min-h-screen border p-6 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white max-w-screen-md mx-auto p-8 rounded-lg shadow-lg'>
        <h2 className='text-center text-gray-500 font-medium tracking-tight cursor-pointer'>
          Sign Up
        </h2>

        {loading ? (
          <div className='flex items-center justify-center'>
            <RingLoader
              color='#f97316'
              loading={loading}
              css={override}
              size={50}
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
              type='text'
              placeholder='Username...'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email...'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password...'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='px-1 py-2 border bg-transparent border-orange-300'>
              Register
            </button>
            <Link className='mt-2 text-center' href={'/login'}>
              Already Have An Account? <br />
            </Link>
            <span className='text-center'>Login Now</span>
          </form>
        )}

        <ToastContainer />
      </div>
    </section>
  );
};

export default Register;
