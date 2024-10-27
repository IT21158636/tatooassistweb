import React, { useState, useEffect } from 'react';
import { headerData } from '../data';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Social from './Socials';
import { TiThMenuOutline } from 'react-icons/ti';

const Header = () => {
  const { logo } = headerData;
  const [isActive, setIsActive] = useState(false);
  const [isNavMobileActive, setIsNavMobileActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isActive
          ? 'h-[100px] lg:h-[110px] shadow-lg'
          : 'h-[120px] lg:h-[150px]'
      } fixed left-0 right-0 z-10 max-w-[1920px]
        w-full max-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        {/* logo */}
        <a href='/'>
          <img className='w-[100px] h-[80px]' src={logo} alt='' />
        </a>
        {/* nav - initially hidden, show on desktop */}
        <div className='hidden xl:flex'>
          <Nav />
        </div>

        {/* nav menu btn showing */}
        <div onClick={()=> setNavMobile (!NavMobile)} className='xl:hidden absolute right-[5%]
         bg-dark text-white p-2 rounded-md cursor-pointer'>
          <TiThMenuOutline className='text-3xl' onClick={() => setIsNavMobileActive(!isNavMobileActive)} />
        </div>
        {/* nav mobile - showing by default */}
        <div className={`${isNavMobileActive ? 'max-h-full' : 'max-h-0'
          } ${isActive 
          ? 'top-[100px] lg:top-[110px]' 
          : 'top-[120px] lg:top-[150px]'}
           fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}>
          <NavMobile />
        </div>
        {/* soicial icon -intially hidden  show on dextop*/}
        <div>
        <Social/>  
        </div>
      </div>
    </header>
  );
};

export default Header;
