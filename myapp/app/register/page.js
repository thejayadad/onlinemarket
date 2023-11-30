'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'


const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
  
    const handleSubmit = async(e) => {
      e.preventDefault()
  
      if(username === '' || email === '' || password === ''){
          toast.error("Fill all fields")
          return
      }
  
      if(password.length < 6){
          toast.error("Password must be at least 6 characters")
          return
      }
  
      try {
          const res = await fetch('http://localhost:3000/api/register', {
              headers: {
                  'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({username, email, password})
          })
  
          console.log(await res.json())
          if(res.ok){
              toast.success("Successfully registered the user")
              setTimeout(() => {
                  signIn()
              }, 1500)
              return
          } else {
              toast.error("Error occured while registering")
              return
          }
      } catch (error) {
          console.log(error)
      }
    }
  return (
    <section className="min-h-screen border p-6 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
       <div className='bg-white max-w-screen-md mx-auto p-8 rounded-lg shadow-lg'>
            <h2 className='text-center'>SignUp Below</h2>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                    <button>Register</button>
                    <Link  
                    href={'/login'}
                    >
                        Already Have An Account? <br /> Login Now.
                    </Link>
                </form>
            <ToastContainer />
        </div>
    </section>
  )
}

export default Register