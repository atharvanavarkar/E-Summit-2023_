import React, { useState, useEffect,useContext } from "react";
import { LoginContext } from "../helpers/context/Context";
import { Box, Center, useMediaQuery, Heading } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Gallery.css"
import StackedImageAnimation from "./StackedImageAnimation";
import Navbar from "./Navbar";
import style from "../css/homepage.module.css";

const images = [
  "https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  "https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  "https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  "https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  "https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  "https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  "https://images.unsplash.com/photo-1576398289164-c48dc021b4e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  "https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
];

export default function Gallery() {
  const isSmallScreen = window.innerWidth <= 768;
  const isMiddleScreen = window.innerWidth <= 1190;

  const arrowVariants = {
    initial: { y: 0 },
    animate: { y: [0, 10, 0] },
  };

  const arrowTransition = {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  };
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowArrow(true);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // const arrowVariants = {
  //   initial: { y: 0 },
  //   animate: { y: [0, 10, 0] }, 
  // };

  // const arrowTransition = {
  //   duration: 2,
  //   repeat: Infinity,
  //   ease: 'easeInOut',
  // };

  const [isClickable, setIsClickable] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [arrowClicked, setArrowClicked] = useState(false);
  const circleVariants = {
    initial: { scale: 1, borderColor: '#8a2be2', backgroundColor: 'transparent', opacity: 0 },
    animate: { scale: 1, borderColor: '#8a2be2', backgroundColor: 'transparent', opacity: isClicked ? 1 : 0 },
    hovered: { scale: 0.8, borderColor: '#8a2be2', backgroundColor: '#8a2be2' },
    transition: { duration: 1 }
  };
  // const []
  // const [scale, setScale] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClickable(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [])
  const handleClickable = () => {
    setIsClicked(true);
    // setScale(0.18);
  };
  const handleArrowClicked = () => {
    setArrowClicked(true);
    // setScale(0.18);
  };


  const containerVariants = {
    initial: {
      scale: 1,
      opacity: 1,
      // paddingLeft:"480px",
      // paddingRight:"480px",
      // paddingTop:"42px",
      // paddingBottom:"42px",
      rotate: 0,
      borderRadius: "0px"

    },
    animate: { opacity: 0 },
    transition: { duration: isClicked ? 1 : 2, delay: 0 }
  };

  const [isGrid, setIsGrid] = useState(false);
  const [isDesktop, isTablet] = useMediaQuery("(min-width: 1024px)", "(min-width: 768px) and (max-width: 1023px)");

  useEffect(() => {
    // Automatically switch to grid after a delay of 5 seconds
    const delay = 2500; // 5 seconds in milliseconds

    const delayTimeout = setTimeout(() => {
      setIsGrid(true);
    }, delay);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(delayTimeout);
  }, []);

  const columns = isDesktop ? 3 : (isTablet ? 2 : 1);

  // Adjust column width and height for tablet view
  const columnWidth = isDesktop ? 60 / columns : (isTablet ? 30 / columns : 80);
  const columnHeight = isDesktop ? 200 / columns : (isTablet ? 120 / columns : 80);

  const { loading, setLoading } = useContext(LoginContext);
  useEffect(() => {
    setLoading(true)
    const Load = async () => {
      await new Promise((r) => setTimeout(r, 4000))

      setLoading(false);
    }

    Load()
  }, [])

  return (
    <>
      {loading && <div class={style.preloader}>
        
        <span class={style.loader}></span>
        
      </div>}
      {!loading && (
    <>
    <Navbar />
    <div className='bg-neutral-950  w-screen h-[100vh]'>
      <div className=" pt-[250px] justify-center items-center">
        <motion.div initial="initial" animate="animate" variants={containerVariants} transition={{ duration: 1, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#550CDF] text-[128px] w-full text-white font-bold text-center">
          <motion.div
            initial={{
              opacity: 1
            }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1 }}


            className="text-[32px] md:text-[128px] text-white font-bold"
          > GALLERY</motion.div>
        </motion.div>
      </div>
      <div className='pt-[100px]'>

        <motion.div className='justify-center items-center' animate={{ y: arrowClicked ? "-1000%" : 0 }} transition={{ duration: 3 }}>

          <div className="flex justify-center items-center">
            <motion.div className="absolute" initial={{ opacity: 0, x: "100%", y: "-20%" }}
              animate={{ opacity: 1, y: isSmallScreen ? "-160%" : "-570%", x: isSmallScreen ? '148%' : "207%" }}
              transition={{ duration: 1, delay: 1 }}>
              {showArrow &&
                <div style={{ display: isSmallScreen ? 'block' : 'flex' }}>
                  <motion.div
                    className="arrow"
                    initial="initial"
                    animate="animate"
                    variants={arrowVariants}
                    transition={arrowTransition}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.1"
                    >
                      <path d="M12 22L1 11h6V2h10v9h6z" />
                    </svg>
                  </motion.div>
                  <div className="click-text md:pl-2 text-white"><br></br>CLICK HERE</div>
                </div>}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: "100%", y: "-20%" }}
              animate={{ opacity: 1, y: isSmallScreen ? (isClicked ? "-6%" : "-10%") : (isClicked ? "-25%" : "-30%"), x: isSmallScreen ? "1240%" : "680%" }}
              transition={{ duration: 1, delay: isClicked ? 0 : 1 }} style={{ cursor: isClickable ? 'pointer' : 'not-allowed', position: 'absolute' }} onClick={isClickable ? handleClickable : null} className="bg-[#550CDF] w-[10px] h-[184px] md:w-[37px] md:h-[310px] items-center rounded-3xl"></motion.div>
            <motion.div initial={{ opacity: 0, x: '100%', y: "-15%" }}
              animate={{ opacity: 1, y: '-15%', x: 0 }}
              transition={{ duration: 1, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#272727] w-[174px] h-[192px] md:w-[342px] md:h-[378px] items-center rounded-3xl"></motion.div>
            <motion.div initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#DDDDDD] w-[297px] h-[186px] md:w-[655px] md:h-[440px] items-center rounded-3xl"></motion.div>
            <motion.div initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#272727] w-[297px] h-[103px] md:w-[655px] md:h-[243px]"></motion.div>
            <motion.div initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#3E444E] w-[138px] h-[138px] md:w-[306px] md:h-[306px] rounded-[50%]"></motion.div>
            <motion.div initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#DDDDDD] w-[104px] h-[104px] md:w-[224px] md:h-[224px] rounded-[50%]"></motion.div>
            <motion.div initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#272727] w-[77px] h-[77px] md:w-[172px] md:h-[172px] rounded-[50%]"></motion.div>
            <motion.div initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#DDDDDD] w-[50px] h-[50px] md:w-[120px] md:h-[120px] rounded-[50%]"></motion.div>
            <motion.div initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: isClicked ? 0 : 1, scale: isClicked ? 9 : 1, x: '-550%', y: '-340%' }}
              transition={{ duration: isClicked ? 2 : 1, delay: isClicked ? 0 : 1 }} style={{ position: 'absolute' }} className="bg-[#FFFFFF] w-[26px] h-[26px] md:w-[50px] md:h-[50px] rounded-[50%]"></motion.div>
            <motion.div initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, x: '-50%', y: '40%' }}
              transition={{ duration: 1, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#FFFFFF] w-[16px] h-[16px] md:w-[40px] md:h-[40px] rounded-[50%]"></motion.div>
            <motion.div initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, x: '10%', y: '-50%' }}
              transition={{ duration: 1, delay: 1 }} style={{ position: 'absolute' }} className="bg-[#FFFFFF] w-[8px] h-[8px] md:w-[20px] md:h-[20px] rounded-[50%]"></motion.div>
          </div>

          {/* <div className = "justify-center items-center"> */}
          <motion.div className="flex px-14 py-40 md:py-28" style={{ width: "50", y: isMiddleScreen ? "100%" : 0, marginLeft: isMiddleScreen ? "auto" : 0, marginRight: isMiddleScreen ? "auto" : 0, cursor: "pointer" }} onClick={handleArrowClicked}>
            <motion.div
              className="circle"
              initial="initial"
              whileHover="hovered"
              animate="animate"
              variants={circleVariants}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="50"
                // height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-up"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </motion.div>
          </motion.div>
          {/* </div> */}
        </motion.div>

      </div>
    <StackedImageAnimation/>

    </div>
    </>)}
    </>




  )
}

