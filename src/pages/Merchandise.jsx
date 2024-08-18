import React from 'react'
import "../css/merchandise.css";
import { useState } from 'react';
import Navbar from './Navbar';
import { useContext, useEffect } from "react";
import { LoginContext } from "../helpers/context/Context";
import style from "../css/homepage.module.css";


export default function Merchandise() {
  const [show, setshow] = useState(["m_img1", "m_img2", "m_img1", "m_img2", "m_img1", "m_img2", "m_img1", "m_img2"])
  const { loading, setLoading } = useContext(LoginContext);
  useEffect(() => {
    setLoading(true)
    const Load = async () => {
      await new Promise((r) => setTimeout(r, 2000))

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
    <div className='merchandise'>
      <Navbar />
      <h1 className='merch_title pt-20'>OUR <span>MERCHANDISE</span></h1>
      <div className='btn_div'>
        <button class="merch_btn"><a class="merch_link" href='https://docs.google.com/forms/d/e/1FAIpQLSdMcmgs-OGu3dCCETV4jfGQVZnT6sh-umNJrvaiIp172YrJEA/viewform?pli=1' target='_blank'>BUY NOW</a></button>
      </div>
      <div className='shirts'>
        <div className={(show[0] === 'm_img3') || (show[0] === 'm_img4') ? 'merch merch_show' : 'merch'}
          onMouseOver={() => {
            if ((show[0] === 'm_img3') || (show[0] === 'm_img4')) {
              return;
            }
            var arr = [...show];
            for(var i=0 ;i<7 ;i++){
              if(i%2==0){
                arr[i] = "m_img1";
              }else{
                arr[i] = "m_img2";
              }
            }
            arr[0] = "m_img3";
            arr[1] = "m_img4";
            setshow(arr);
            console.log(show);
          }}
          onMouseLeave={() => {
            var arr = [...show];
            arr[0] = "m_img1";
            arr[1] = "m_img2";
            setshow(arr);
          }}>
          {/* {(show[0] === 'm_img3') || (show[0] === 'm_img4') ?
          <button className='m_close' onClick={()=>{
            var  arr = [...show]; 
          arr[0] = "m_img1";
          arr[1] = "m_img2";
          setshow(arr);
          }}>X</button> : null} */}
          <img className={show[0]} alt="img" src="./data/be1979a9c3eb91224e8fe12107680933.png"></img>
          <img className={show[1]} src="./data/f08dfb54f8ea43a39a942320a82e5f45.png"></img>
          {(show[0] === 'm_img3') || (show[0] === 'm_img4') ?
            <div className='m_btns'>
              <button className={show[0] === 'm_img3' ? 'merch_btn1' : 'merch_btn2'} onClick={() => {
                var arr = [...show];
                arr[0] = "m_img3";
                arr[1] = "m_img4";
                setshow(arr);
                console.log(show);
              }}
              >FRONT</button>
              <button className={show[0] === 'm_img4' ? 'merch_btn1' : 'merch_btn2'}
                onClick={() => {
                  var arr = [...show];
                  arr[0] = "m_img4";
                  arr[1] = "m_img3";
                  setshow(arr);
                  console.log(show);
                }}
              >BACK</button>
            </div> : null}
        </div>
        <div className={(show[2] === 'm_img3') || (show[2] === 'm_img4') ? 'merch merch_show' : 'merch'}
          onMouseOver={() => {
            if ((show[2] === 'm_img3') || (show[2] === 'm_img4')) {
              return;
            }
            var arr = [...show];
            for(var i=0 ;i<7 ;i++){
              if(i%2==0){
                arr[i] = "m_img1";
              }else{
                arr[i] = "m_img2";
              }
            }
            arr[2] = "m_img3";
            arr[3] = "m_img4";
            setshow(arr);
            console.log(show);
          }}
          onMouseLeave={() => {
            var arr = [...show];
            arr[2] = "m_img1";
            arr[3] = "m_img2";
            setshow(arr);
          }}>
          {/* {(show[0] === 'm_img3') || (show[0] === 'm_img4') ?
          <button className='m_close' onClick={()=>{
            var  arr = [...show]; 
          arr[0] = "m_img1";
          arr[1] = "m_img2";
          setshow(arr);
          }}>X</button> : null} */}
          <img className={show[2]} alt="img" src="./data/0586ffc805c4d89dcea41ae1ab739cbf.png"></img>
          <img className={show[3]} src="./data/b69129b88600339f5ce8d3ffbd425240.png"></img>
          {(show[2] === 'm_img3') || (show[2] === 'm_img4') ?
            <div className='m_btns'>
              <button className={show[2] === 'm_img3' ? 'merch_btn1' : 'merch_btn2'} onClick={() => {
                var arr = [...show];
                arr[2] = "m_img3";
                arr[3] = "m_img4";
                setshow(arr);
                console.log(show);
              }}
              >FRONT</button>
              <button className={show[2] === 'm_img4' ? 'merch_btn1' : 'merch_btn2'}
                onClick={() => {
                  var arr = [...show];
                  arr[2] = "m_img4";
                  arr[3] = "m_img3";
                  setshow(arr);
                  console.log(show);
                }}
              >BACK</button>
            </div> : null}
        </div>
        <div className={(show[4] === 'm_img3') || (show[4] === 'm_img4') ? 'merch merch_show' : 'merch'}
          onMouseOver={() => {
            if ((show[4] === 'm_img3') || (show[4] === 'm_img4')) {
              return;
            }
            var arr = [...show];
            for(var i=0 ;i<7 ;i++){
              if(i%2==0){
                arr[i] = "m_img1";
              }else{
                arr[i] = "m_img2";
              }
            }
            arr[4] = "m_img3";
            arr[5] = "m_img4";
            setshow(arr);
            console.log(show);
          }}
          onMouseLeave={() => {
            var arr = [...show];
            arr[4] = "m_img1";
            arr[5] = "m_img2";
            setshow(arr);
          }}>
          {/* {(show[0] === 'm_img3') || (show[0] === 'm_img4') ?
          <button className='m_close' onClick={()=>{
            var  arr = [...show]; 
          arr[0] = "m_img1";
          arr[1] = "m_img2";
          setshow(arr);
          }}>X</button> : null} */}
          <img className={show[4]} alt="img" src="./data/PARAD__Presentation__169___20230821_220441_0000-removebg-preview1.png"></img>
          <img className={show[5]} src="./data/PARAD__Presentation__169___20230821_220441_0000-removebg-preview2.png"></img>
          {(show[4] === 'm_img3') || (show[4] === 'm_img4') ?
            <div className='m_btns'>
              <button className={show[4] === 'm_img3' ? 'merch_btn1' : 'merch_btn2'} onClick={() => {
                var arr = [...show];
                arr[4] = "m_img3";
                arr[5] = "m_img4";
                setshow(arr);
                console.log(show);
              }}
              >FRONT</button>
              <button className={show[4] === 'm_img4' ? 'merch_btn1' : 'merch_btn2'}
                onClick={() => {
                  var arr = [...show];
                  arr[4] = "m_img4";
                  arr[5] = "m_img3";
                  setshow(arr);
                  console.log(show);
                }}
              >BACK</button>
            </div> : null}
        </div>
        <div className={(show[6] === 'm_img3') || (show[6] === 'm_img4') ? 'merch merch_show' : 'merch'}
          onMouseOver={() => {
            if ((show[6] === 'm_img3') || (show[6] === 'm_img4')) {
              return;
            }
            var arr = [...show];
            for(var i=0 ;i<7 ;i++){
              if(i%2==0){
                arr[i] = "m_img1";
              }else{
                arr[i] = "m_img2";
              }
            }
            arr[6] = "m_img3";
            arr[7] = "m_img4";
            setshow(arr);
            console.log(show);
          }}
          onMouseLeave={() => {
            var arr = [...show];
            arr[6] = "m_img1";
            arr[7] = "m_img2";
            setshow(arr);
          }}>
          {/* {(show[0] === 'm_img3') || (show[0] === 'm_img4') ?
          <button className='m_close' onClick={()=>{
            var  arr = [...show]; 
          arr[0] = "m_img1";
          arr[1] = "m_img2";
          setshow(arr);
          }}>X</button> : null} */}
          <img className={show[6]} alt="img" src="./data/P__Presentation__169___20230821_220725_0000-removebg-preview1.png"></img>
          <img className={show[7]} src="./data/P__Presentation__169___20230821_220725_0000-removebg-preview2.png"></img>
          {(show[6] === 'm_img3') || (show[6] === 'm_img4') ?
            <div className='m_btns'>
              <button className={show[6] === 'm_img3' ? 'merch_btn1' : 'merch_btn2'} onClick={() => {
                var arr = [...show];
                arr[6] = "m_img3";
                arr[7] = "m_img4";
                setshow(arr);
                console.log(show);
              }}
              >FRONT</button>
              <button className={show[6] === 'm_img4' ? 'merch_btn1' : 'merch_btn2'}
                onClick={() => {
                  var arr = [...show];
                  arr[6] = "m_img4";
                  arr[7] = "m_img3";
                  setshow(arr);
                  console.log(show);
                }}
              >BACK</button>
            </div> : null}
        </div>

      </div>
    </div>
      )}
      </>
  )
}
