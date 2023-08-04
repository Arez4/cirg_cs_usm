'use client';

import * as React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
export default function HomePage() {
  return (
  <main>
      <Header/>
      <section className='bg-home bg-no-repeat py-20 bg-cover bg-center bg-scroll flex flex-col items-center justify-center min-h-screen md:h-screen text-white '>
        <div className='text-center w-1/2'>
          <h1 className='font-bold text-center mb-4 md:text-[60px] leading-snug'>COMPUTATIONAL INTELLIGENCE RESEARCH GROUP COMPUTER SCIENCE</h1>
          <Button className='bg-[#ED7829] hover:bg-[#A0A0A0]'>Read More</Button>
        </div>
      </section>

      <div className='container mx-auto my-16 px-10'>
        <section className='sm:grid sm:grid-cols-2'>
          <div className='mx-2'>
            <h1>WELCOME TO CIRG</h1>
            <p className='my-4'>CIRG, which stands for Computational Intelligence Research Group, operates within the University Sains Malaysia. Our group is dedicated to conducting research on computationally intelligent methods and techniques that have practical applications aimed at improving people's lives and benefiting society. </p>
            <p className='my-4'>The Computational Intelligence Research Group specializes in analyzing and utilizing artificial intelligence methods, such as artificial neural networks, evolutionary algorithms, and data analysis, to address real-world challenges in various scientific and engineering domains. We also possess extensive knowledge in areas such as smart environments, ambient assistive technologies, pervasive computing, intelligent modeling, control systems, and robotics.</p>
            <p className='my-4'>To support our research endeavors, we have access to state-of-the-art research facilities. These include high-performance computing resources, a diverse range of sensors, actuators, and communication devices, various assistive robotic platforms, and a smart home facility.</p>
          </div>

          <div className='mx-2'>
          <NextImage
                  useSkeleton
                  src='/images/researching.png'
                  className='max-w-screen'
                  classNames={{image:'max-w-screen'}}
                  width='1080'
                  height='320'
                  alt='Phantom V1 by Vector Motors'
                />
          </div>
        </section>
        
      </div>
      <Footer/>
  </main>
  );
}
