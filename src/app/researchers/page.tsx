'use client';

import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Profile from '@/components/Profile';

export default function Researchers() {
  return (
  <main>
      <Header/>
      <div className='bg-researcher bg-no-repeat py-20 bg-cover bg-center bg-scroll flex flex-col items-center justify-center min-h-screen md:h-screen text-white '>
        <section className='text-center w-1/2'>
          <h1 className='font-bold text-center mb-4 md:text-[60px] leading-snug'>Researchers</h1>
          <div className='flex justify-center'>
            <Button className='bg-[#ED7829] mx-4 hover:bg-[#A0A0A0] w-32 h-12 text-center block'>Team</Button>
            <Button className='bg-[#ED7829] mx-4 hover:bg-[#A0A0A0] w-32 h-12 text-center block'>Researcher</Button>
          </div>
        </section>
      </div>

      <div className='text-xs sm:text-base container mx-auto my-16 px-10'>
        <section className='text-black flex flex-col items-center'>
          <h1>Group Lead</h1>
          <NextImage
            useSkeleton
            src='/images/profile_picture.png'
            className='max-w-xs my-6'
            classNames={{image:'max-w-screen'}}
            width='1080'
            height='320'
            alt='Profile picture'
          />
          <div className='w-2/3'>
            <h2 className='text-center my-4'>Assoc. Prof. Dr. Li-Pei Wong</h2>
            <p className='my-4'>A senior lecturer in the School of Computer Sciences, Universiti Sains Malaysia, Penang, Malaysia since 2012.</p>
            <div className='my-4'>
              <p>Education:</p>
              <ul className='list-disc list-inside'>
                <li>Doctor of Philosophy (PhD), Nanyang Technological University, Singapore - 2012.</li>
                <li>Master of Science (Computer Science), Universiti Sains Malaysia - 2004.</li>
                <li>Bachelor of Computer Science (Hons), Universiti Sains Malaysia - 2001.</li>
              </ul>
            </div>
            <p>Research Interest: Single-objective & multi-objective optimization, nature inspired metaheuristics, hyper-heuristics, soft computing, manufacturing & transportation scheduling.</p>
            <p className='my-4'>Email: ​lpwong@usm.my</p>
          </div>

          <section className='sm:grid sm:grid-cols-3'>
            <Profile className='mx-4'/>
            <Profile className='mx-4'/>
            <Profile className='mx-4'/>
          </section>
        </section>


      </div>
      <Footer/>
  </main>
  );
}
