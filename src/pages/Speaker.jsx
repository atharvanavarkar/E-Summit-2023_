import React, { useEffect, useState } from "react";
import style from "../css/speaker.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SpeakerCard(props){
    const info_variant ={
          hidden :{x:-500,opacity:1, },
          visible :{x:0 ,opacity:1 ,transition :{duration:1}}
      }
      const image_variant ={
          hidden :{x:500 ,opacity:1 },
          visible :{x:0 ,opacity:1,transition :{duration:1}}
        }
    
      const control = useAnimation()
      const [ref, inView] = useInView()
    
      useEffect(() => {
        if (inView) {
          control.start("visible");
        }
      }, [control, inView]);

      return (
        <div
          key={props.ind}
          className={`${style.speakerCard} ${style.dir}`}
          style={{ flexDirection: props.flex }}
          ref={ref}
        >
          <motion.div className={style.speakerImg} variants={info_variant} animate={control} initial="hidden" whileInView="visible" viewport={{ once: true}}>
            <img
              className={style.image}
              src={props.val.img}
              alt="speaker"
            ></img>
          </motion.div>
          <motion.div className={style.speakerData}  z variants={image_variant} animate={control} initial="hidden" whileInView="visible" viewport={{ once: true}}>
            <div className={style.name}>{props.val.name}</div>
            <div className={style.company}>{props.val.founder}</div>
            <div className={style.info}>{props.val.data}</div>
            </motion.div>
        </div>
      );
}

export default SpeakerCard;