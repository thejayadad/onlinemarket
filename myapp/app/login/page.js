'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from 'next-auth/react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === '' || email === '') {
      toast.error('Fill all fields!');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    try {
      setLoading(true); // Set loading to true when starting the login process

      const res = await signIn('credentials', { email, password, redirect: false });

      if (res?.error == null) {
        router.push('/');
      } else {
        toast.error('Error occurred while logging in');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false when the login process is completed
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
          Log In
        </h2>

        {loading ? (
          <div className='flex items-center justify-center'>
            <RingLoader color='#f97316' loading={loading} css={override} size={50} />
          </div>
        ) : (
          <form className='flex flex-col' onSubmit={handleSubmit}>
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
            <button className='mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700'>
              Log in
            </button>
            <Link href='/register' className='mt-2 text-center'>
              Don&apos;t have an account? <br /> Register now.
            </Link>
          </form>
        )}

        <ToastContainer />
      </div>
    </section>
  );
};

export default Login;
