import React from 'react';
// Import hero data
import { heroData } from '../data';

// Import motion
import { motion } from 'framer-motion';

// Import variants
import { fadeIn } from '../variants';

const container = {
  hidden: {},
  show: {
    Transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  }

}

const Hero = () => {
  // Destructure hero data
  const { title, subtitle, btnText, btnIcon } = heroData;

  return (
    <section className='bg-hero  bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className='mx-auto  min-h-[40vh] lg:h-full flex items-center justify-center xl-justify-end'>
        {/* Text & button */}
        <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
          {/* Text */}
          < motion.h1
            variants={fadeIn('down')}
            className='h1'>{title}</motion.h1>
          <motion.p
            variants={fadeIn('down')}
            className='mb-8 lg:mb-16 max-w-lg leading-relaxed'>{subtitle}</motion.p>

          {/* Button */}
          < motion.div
            variants={fadeIn('down')}>
            <button className='btn btn-sm lg: btn-lg btn-outline mx-auto lg:mx-o'>
              {btnText}
              <div className='text-xl'>{btnIcon}</div>
            </button>
          </motion.div>
      </div>

      {/* Outline text */}
      <div className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'></div>
    </motion.div>
    </section >
  );
};

export default Hero;