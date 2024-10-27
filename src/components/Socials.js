import React from 'react';
//social data

import { socialData } from '../data'


const Socials = () => {
  return <ul className='flex justify-center items-center gap-x [30px]'>
    {socialData.map((items,index)=>{
      return <li key={index}>
        <a href={items.href} >{items.icon} </a>
      </li>
    })}
  </ul>;
};

export default Socials;
