import React, { useEffect, useState } from 'react';
import '../css/Theme.css';


function Theme() {

  return (

    <div className='theme-div'>
    <div className='theme bg-slate-600 sm:p-4 p-1 absolute '>
      <l1><img src="./theme1.png" className='theme_img theme1 '></img></l1>
      <l1><img src="./theme1.png" className='theme_img theme2 '></img></l1>
      <l1><img src="./theme1.png" className='theme_img theme3'></img></l1>
      <l1><img src="./theme1.png" className='theme_img theme4'></img></l1>
      <l1><img src="./theme1.png" className='theme_img theme5'></img></l1>
      <l1><img src="./theme1.png" className='theme_img theme6'></img></l1>
      <l1><img src="./theme1.png" className='theme_img theme7'></img></l1>
      <l1><img src="./theme1.png" className='theme_img theme8'></img></l1>
      <l1><img src="./theme1.png" className='theme_img theme9'></img></l1>
   
      </div>
    <h1 className='text-white font-semibold pb-0 sm:text-2xl lg:text-4xl text-lg z-50 relative theme_title wow animate__animated animate__fadeInDown' >OUR THEME</h1>
  
    <div className='wow animate__animated animate__fadeInUp'>
    <div className='theme_text  ' >
      <h1 className='theme_heading sm:text-2xl pt-10 pb-1 lg:text-3xl font-semibold text-lg'>PARADOX OF CHOICES</h1>
      <p className='text_p text-center text-sm sm:text-lg md:text-xl lg:text-xl opacity-[70%]'>The theme of E-SUMMIT 2023  is “ Paradox Of Choices”, which represents the seamless choices an entrepreneur has to come across in his journey towards building something that can potentially change how we live.
      <br></br>
      We will dive deeper into what it really takes to be an entrepreneur and celebrate a mindset that does not fear taking risks while it turns every obstacle into an opportunity.
      </p>
    
    </div>
    </div>
    </div>
  );
}

export default Theme;



