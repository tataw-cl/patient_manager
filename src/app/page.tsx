import React from 'react'
import './globals.css'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Patient_form from '@/components/forms/patient_form';
import Link from 'next/link';

 const Home = () => {
  return (
    <div className='flex h-screen max-h-screen'>
      {/*TODO: OTP verification |passkey modal */}
      <section className='remove-scrollnar container my-auto'>

        <div className='sub-container max-w-[496px]'>
          <Image 
          src={'/assets/icons/logo-full.svg'}
          height={1000}
          width={1000}
          alt='Logo'
          className='margin-bottom-12 h-10 w-fit'
          />
          <Patient_form />
          <div className='text-14-regular mt-20 flex jusitfy-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>&copy; 2024 PatenCa</p>
            <Link href={"/?admin=true"} className='text-green-500'> Admin </Link>
          </div>
        </div>
      </section>
      <Image 
      src={"/assets/images/onboarding-img.png"} 
      alt='doctor'
      height={1000}
      width={1000}
      className='side-img max-w-[50%]'
      />
    </div>
  )
};

export default Home;