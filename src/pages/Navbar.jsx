import React, { useState ,useEffect, useRef } from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom';
import {Link as Link2} from 'react-scroll';


export default function Navbar() {
 
  const target = useRef();
  const [vis ,setvis] = useState(false);
  const [sticky ,setsticky] = useState(false);
  const [resp ,setresp] = useState(false);

  const checked = ()=>{
    target.current.checked = false;
  }

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(window.scrollY);
      if(scrollTop > window.innerHeight){
        setsticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if(window.location.pathname === "/gallery"){
    return (
      <>
      <div className = {`navbar ${scrollTop || vis ? 'sticky' : ''} z-50 pt-1.2 pb-0 px-0`}>
        <div className="nav_img">
          <img src="./ecell.png" alt="Logo"/>
          </div>
        <div className={vis ? "nav_list1 " : "nav_list1 list"}>
          <li className='li_item px-2'><Link onClick={()=>{setvis(false) ; checked()}} to="/" className='nav_item'>HOME</Link></li>
          <li className='li_item px-5'><Link onClick={()=>{setvis(false) ; checked()}} to="/team" className='nav_item'>TEAM</Link></li>
        </div>
        <div className="registration">
          {/* <li><a className="log_in" href="#">LOG IN</a></li>
          <li><a className="register" href="#">REGISTER</a></li> */}
          <li className='resp_nav'>
          <input id="toggle" ref={target}  type="checkbox" onClick={()=>{
            setvis(!vis);
          }}></input>
  
  <label for="toggle" class="hamburger">
    <div class="top-bun"></div>
    <div class="meat"></div>
    <div class="bottom-bun"></div>
  </label>
  </li>
        </div>
      </div>
      </>
    );
  }

  else if(window.location.pathname === "/team"){
    return (
      <>
      <div className = {`navbar ${scrollTop || vis ? 'sticky' : ''} z-50 pt-1.2 pb-0 px-0`}>
        <div className="nav_img">
          <img src="./ecell.png" alt="Logo"/>
          </div>
        <div className={vis ? "nav_list1 " : "nav_list1 list"}>
          <li className='li_item px-5'><Link onClick={()=>{setvis(false) ; checked()}} to="/" className='nav_item'>HOME</Link></li>
          <li className='li_item px-2'><Link onClick={()=>{setvis(false) ; checked()}} to="/gallery" className='nav_item'>GALLERY</Link></li>
        </div>
        <div className="registration">
          {/* <li><a className="log_in" href="#">LOG IN</a></li>
          <li><a className="register" href="#">REGISTER</a></li> */}
          <li className='resp_nav'>
          <input id="toggle" ref={target}  type="checkbox" onClick={()=>{
            setvis(!vis);
          }}></input>
  
  <label for="toggle" class="hamburger">
    <div class="top-bun"></div>
    <div class="meat"></div>
    <div class="bottom-bun"></div>
  </label>
  </li>
        </div>
      </div>
      </>
    );
  }else if(window.location.pathname === "/sponsors"){
    return (
      <>
      <div className = {`navbar ${scrollTop || vis ? 'sticky' : ''} z-50 pt-1.2 pb-0 px-0`}>
        <div className="nav_img">
          <img src="./ecell.png" alt="Logo"/>
          </div>
        <div className={vis ? "nav_list1 " : "nav_list1 list"}>
          <li className='li_item px-5'><Link onClick={()=>{setvis(false) ; checked()}} to="/" className='nav_item'>HOME</Link></li>
          <li className='li_item px-2'><Link onClick={()=>{setvis(false) ; checked()}} to="/team" className='nav_item'>TEAM</Link></li>
        </div>
        <div className="registration">
          {/* <li><a className="log_in" href="#">LOG IN</a></li>
          <li><a className="register" href="#">REGISTER</a></li> */}
          <li className='resp_nav'>
          <input id="toggle" ref={target}  type="checkbox" onClick={()=>{
            setvis(!vis);
          }}></input>
  
  <label for="toggle" class="hamburger">
    <div class="top-bun"></div>
    <div class="meat"></div>
    <div class="bottom-bun"></div>
  </label>
  </li>
        </div>
      </div>
      </>
    );
  }
  else if(window.location.pathname === "/merchandise"){
    return (
      <>
      <div className = {`navbar ${scrollTop || vis ? 'sticky' : ''} z-50 pt-1.2 pb-0 px-0`}>
        <div className="nav_img">
          <img src="./ecell.png" alt="Logo"/>
          </div>
        <div className={vis ? "nav_list1 " : "nav_list1 list"}>
          <li className='li_item px-5'><Link onClick={()=>{setvis(false) ; checked()}} to="/" className='nav_item'>HOME</Link></li>
          <li className='li_item px-2'><Link onClick={()=>{setvis(false) ; checked()}} to="/gallery" className='nav_item'>TEAM</Link></li>
        </div>
        <div className="registration">
          {/* <li><a className="log_in" href="#">LOG IN</a></li>
          <li><a className="register" href="#">REGISTER</a></li> */}
          <li className='resp_nav'>
          <input id="toggle" ref={target}  type="checkbox" onClick={()=>{
            setvis(!vis);
          }}></input>
  
  <label for="toggle" class="hamburger">
    <div class="top-bun"></div>
    <div class="meat"></div>
    <div class="bottom-bun"></div>
  </label>
  </li>
        </div>
      </div>
      </>
    );
  }
  else if(window.location.pathname === "/faqs"){
    return (
      <>
      <div className = {`navbar ${scrollTop || vis ? 'sticky' : ''} z-50 pt-1.2 pb-0 px-0`}>
        <div className="nav_img">
          <img src="./ecell.png" alt="Logo"/>
          </div>
        <div className={vis ? "nav_list1 " : "nav_list1 list"}>
          <li className='li_item px-5'><Link onClick={()=>{setvis(false) ; checked()}} to="/" className='nav_item'>HOME</Link></li>
          <li className='li_item px-2'><Link onClick={()=>{setvis(false) ; checked()}} to="/team" className='nav_item'>TEAM</Link></li>
        </div>
        <div className="registration">
          {/* <li><a className="log_in" href="#">LOG IN</a></li>
          <li><a className="register" href="#">REGISTER</a></li> */}
          <li className='resp_nav'>
          <input id="toggle" ref={target}  type="checkbox" onClick={()=>{
            setvis(!vis);
          }}></input>
  
  <label for="toggle" class="hamburger">
    <div class="top-bun"></div>
    <div class="meat"></div>
    <div class="bottom-bun"></div>
  </label>
  </li>
        </div>
      </div>
      </>
    );
  }
  return (
    <>
    <div className = {`navbar ${scrollTop || vis ? 'sticky' : ''} z-50 pt-1.2 pb-0 px-0`}>
      <div className="nav_img">
        <img src="./ecell.png" alt="Logo"/>
        </div>
      <div className={vis ? "nav_list" : "nav_list list"}>
        <li className='li_item'><Link2 onClick={()=>{setvis(false) ; checked()}} activeClass='active' className='nav_item' to="banner" spy={true} smooth={true} duration={500} >HOME</Link2></li>
        <li className='li_item'><Link2 onClick={()=>{setvis(false) ; checked()}} activeClass='active' className='nav_item' to="about" spy={true} smooth={true} duration={500} >ABOUT</Link2></li>
        <li className='li_item'><Link2 onClick={()=>{setvis(false) ; checked()}} activeClass='active' className='nav_item' to="events" spy={true} smooth={true} duration={500} >EVENTS</Link2></li>
        <li className='li_item'><Link2 onClick={()=>{setvis(false) ; checked()}} activeClass='active' className='nav_item' to="speakers" spy={true} smooth={true} duration={800} >SPEAKERS</Link2></li>
        <li className='li_item'><Link onClick={()=>{setvis(false) ; checked()}} to="/team" className='nav_item'>TEAM</Link></li> 
        <li className='li_item'><Link onClick={()=>{setvis(false) ; checked()}} to="/gallery" className='nav_item'>GALLERY</Link></li>
        <li className='li_item'><Link onClick={()=>{setvis(false) ; checked()}} activeClass='active' className='nav_item' to="/sponsors" >PARTNERS</Link></li>
        <li className='li_item'><Link onClick={()=>{setvis(false) ; checked()}} to="/faqs" className='nav_item'>FAQs</Link></li>
        
        
        
      </div>
      <div className="registration">
        {/* <li><a className="log_in" href="#">LOG IN</a></li>
        <li><a className="register" href="#">REGISTER</a></li> */}
        <li className='resp_nav'>
        <input id="toggle" ref={target}  type="checkbox" onClick={()=>{
          setvis(!vis);
        }}></input>

<label for="toggle" class="hamburger">
  <div class="top-bun"></div>
  <div class="meat"></div>
  <div class="bottom-bun"></div>
</label>
</li>
      </div>
    </div>
    </>
  )
}
