'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdPerson, IoMdCart } from 'react-icons/io';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { data: session } = useSession();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='relative inline-block text-left'>
      {session?.user ? (
        // If there is a session, show shopping cart and log out button
        <div className='flex items-center space-x-4'>
          <button
            type='button'
            className='inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-800 focus:outline-none border border-blue-300 focus:ring focus:border-blue-300'
          >
            <IoMdCart className='h-8 w-8 text-blue-300' />
          </button>
          <button
            type='button'
            className='inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-800 focus:outline-none border border-blue-300 focus:ring focus:border-blue-300'
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
      ) : (
        // If there is no session, show the user icon
        <div>
          <button
            type='button'
            className='inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-800 focus:outline-none border border-blue-300 focus:ring focus:border-blue-300'
            id='user-menu'
            aria-haspopup='true'
            onClick={toggleDropdown}
          >
            <IoMdPerson className='h-8 w-8 text-blue-300' />
          </button>
        </div>
      )}

      {isDropdownOpen && (
        <div
          className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu'
        >
          <div className='py-1' role='none'>
            <Link
              href={'/login'}
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              role='menuitem'
            >
              Login
            </Link>
            <Link
              href={'/register'}
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              role='menuitem'
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
