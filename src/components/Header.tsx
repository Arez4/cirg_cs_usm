'use client'

import UnstyledLink from '@/components/links/UnstyledLink';
import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    const [openNav, setOpenNav] = React.useState(false);

  const links = [
    { href: '/', label: 'About' },
    { href: '/researchers', label: 'Researchers' },
    { href: '/publications', label: 'Publications' },
    { href: '/awards', label: 'Grants & Awards' },
    { href: '/tools', label: 'Tools & Downloads' },
    { href: '/external', label: 'External Links' },
  ];

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className='mb-4 mt-0 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 '>
      {links.map((link, index) => (
        <Typography
          key={index}
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 sm:mt-0 md:mt-0 mt-2 font-normal text-center'
        >
          <a href={link.href} className={pathname===link.href? 'block p-4 rounded-xl bg-[#9747FF] duration-150 text-black  ' : 'p-4 rounded-xl text-black hover:bg-[#9747FF] duration-150 block '}>
            {link.label}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar className='fixed z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-transparent border-none'>
        <div className='flex items-center justify-between'>
          <UnstyledLink
            href='/'
            className='w-1/3'
          >
            <Image priority quality={100} src={'/images/USM+APEX+CS Logo.png'} width={300} height={300} alt='USM Logo'></Image>
          </UnstyledLink>
          <div className='flex items-center gap-4'>
            <div className='mr-4 hidden lg:block'>{navList}</div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='black'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='black'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </>
  );
}