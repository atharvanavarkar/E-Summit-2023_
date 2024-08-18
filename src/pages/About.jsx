import React, { useState } from 'react';
import "../css/about.css";
import { useEffect } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

export default function About() {
  const [vid ,setvid] = useState(0);
  const [sound ,setsound] = useState(0);
  const info_variant ={
    hidden :{x:-500 , opacity:0.5},
    visible :{x:0 ,opacity:1 ,transition :{duration:1}}
  }
  const image_variant ={
    hidden :{x:500 , opacity:0.5},
    visible :{x:0 ,opacity:1 ,transition :{duration:1}}
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   }else{
  //     control.start("hidden");
  //   }
  // }, [control, inView]);


  return (
    <div className='about ' ref={ref}>
      <motion.div className='info'>
        <h1 className='title2 wow animate__animated animate__fadeInUp'>About US</h1>
        <p className='p-4 text-center text-lg xl:text-lg font-[Nunito Sans] wow animate__animated animate__fadeInUp'>E-Summit is the flagship event organised by the E-Cell, IIT Indore annually. 
        It is one of the most awaited events hosted by the institute that witnesses massive participation nationwide. 
        Through this event, we aim to ignite the entrepreneur inside students by bringing them together to compete in various competitions 
        exploring all aspects of entrepreneurship.
We also host some of the most seasoned and celebrated entrepreneurs who enlighten our audience with their jaw-dropping journeys.
E-Summit aims to help students develop an entrepreneurial mindset and we aim to go beyond talking just about mere businesses. Entrepreneurship is a spirit and that’s what we celebrate here.
</p>
      </motion.div>
      {/* <motion.div className='image '>
       { sound ?  
        <video className={vid ? "vid_about" : "video"} onClick={()=>{setvid(1);}} src="https://res.cloudinary.com/dioza4kqd/video/upload/f_webm,vc_vp9,q_auto,w_1280,c_limit/v1691237518/Copy_of_ES_AF_UNF_R1_1_yrrhnb.mp4" alt='video' autoPlay loop></video> 
      : <video className={vid ? "vid_about" : "video"} onClick={()=>{setvid(1);}}  src="https://res.cloudinary.com/dioza4kqd/video/upload/f_webm,vc_vp9,q_auto,w_1280,c_limit/v1691237518/Copy_of_ES_AF_UNF_R1_1_yrrhnb.mp4" alt='video' autoPlay muted loop></video> }
        <button className={vid ? "muted" : "mute"} onClick={()=>{setsound(1-sound)}}>{  sound ? <VolumeUpIcon /> : <VolumeOffIcon />}</button>
        {vid ? <button className="close_btn" onClick={()=>{setvid(0)}}>X</button> : null}
      </motion.div> */}
      <div className='transition_theme p-0 m-0 '></div>
    </div>
  )
}