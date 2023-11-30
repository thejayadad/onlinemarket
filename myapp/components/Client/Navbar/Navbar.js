'use client'
import Logo from '@/components/Logo/Logo'
import React from 'react'
import AuthLinks from './AuthLinks'

const Navbar = () => {
  return (
    <header className='px-4 py-12'>
        <div className='flex justify-between max-w-screen-xl mx-auto'>
            <Logo />
            <AuthLinks />
        </div>
    </header>
  )
}

export default Navbar