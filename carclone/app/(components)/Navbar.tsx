"use client";
import { useUser } from "@clerk/nextjs";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from '.'
import { UserButton } from "@clerk/nextjs";


const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <header className='w-full absolute  z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 py-4'>
            <Link href="/" className='flex justify-center items-center'>
            <Image
            src="/logo.svg"
            alt='Car Hub Logo'
            width={118}
            height={18}
            className='object-contain'
            />
            </Link>
            <CustomButton
            title={`Hello, ${user ? user?.firstName :  "User"}`}
           
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
            {user ? <div className="px-2 w-28 bg-orange-400 rounded-lg  flex ms-8 justify-between items-center text-white" >
              Account
              <UserButton  afterSignOutUrl="/"/>
              </div> : <p>""</p> }
            
           
        </nav>
    </header>
  )
}

export default Navbar