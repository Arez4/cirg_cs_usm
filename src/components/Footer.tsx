'use client'

import React from 'react';
import UnstyledLink from './links/UnstyledLink';

export default function Footer() {
  return (
    <>
        <footer className='pt-12 pb-6 bg-black w-full flex justify-evenly items-center text-white'>
            <section className='flex'>
                <UnstyledLink href='#' className='mr-4'>
                    <svg className='w-6 sm:w-12 h-6 sm:h-12' viewBox="0 0 128 128" >
                    <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                    </svg>
                </UnstyledLink>
                <UnstyledLink href='#' className='mr-4'>
                    <svg className='w-6 sm:w-12 h-6 sm:h-12' viewBox="0 0 128 128" >
                    <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                    </svg>
                </UnstyledLink><UnstyledLink href='#' className='mr-4'>
                    <svg className='w-6 sm:w-12 h-6 sm:h-12' viewBox="0 0 128 128" >
                    <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                    </svg>
                </UnstyledLink><UnstyledLink href='#' className='mr-4'>
                    <svg className='w-6 sm:w-12 h-6 sm:h-12' viewBox="0 0 128 128" >
                    <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                    </svg>
                </UnstyledLink><UnstyledLink href='#' className='mr-4'>
                    <svg className='w-6 sm:w-12 h-6 sm:h-12' viewBox="0 0 128 128" >
                    <rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"></rect><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"></path>
                    </svg>
                </UnstyledLink>
            </section>

            <section className='w-1/3'>
                <p className='text-[10px] sm:text-xs md:text-base'>Copyright © 2023 Computational Intelligence Research Group Computer Science Universiti Sains Malaysia</p>
            </section>
        </footer>
    </>
  )
}