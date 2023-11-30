'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdPerson } from 'react-icons/io';

const AuthLinks = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          className='inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-800 focus:outline-none focus:ring focus:border-blue-300'
          id='user-menu'
          aria-haspopup='true'
          onClick={toggleDropdown}
        >
          <IoMdPerson className='h-8 w-8' />
        </button>
      </div>

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
