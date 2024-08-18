import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';
import ContactForm from "./ContactForm"; // Import the ContactForm component
import styles from '../css/ContactForm.module.css'; // Import the CSS for ContactForm

export default function Footer(props) {
  /*const location = useLocation();
  const currentPath = location.pathname;*/
  const handPointerStyle = {
    cursor: 'pointer',
  };
  return (
    <section className="px-0 footer z-50 relative">
      <footer className="bg-black py-8 pl-0 sm:px-8 lg:px-24 xl:px-20 w-screen">
        <div className="w-screen">
          <div className="px-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 items-start">
            <div className="flex flex-col space-y-4 pr-0">
              <div className="flex  space-x-2 w-92 ">
                <div className="w-[50%] space-x-2 flex">
                  <img src="/logo_ecell.svg" alt="Logo" className="w-12 h-[auto]"/>


                  <div className="flex flex-col space-y-1 ">
                    <span className="text-[#0060A1] font-bold text-sm">Ecell</span>
                    <span className="text-gray-200 font-bold text-sm">IIT Indore</span>
                  </div>
                </div>
                <div className="w-[50%]">
                  <img src="/logo_e-summit_final.png" alt="Logo" className="h-[auto]" />
                </div>
              </div>
              {/* <p className="text-gray-400 pr-4">
              {props.description}
            </p> */}
              <div className="text-gray-400 text-lg pt-9 pb-7">
              E-SUMMIT 2023 welcomes all the enthusiasts who believe that it's all about making the right choices and taking the plunge.
              
              LET'S INNOVATE, LETS TRANSFORM, LETS break the monotony.
              </div>
              <div className="md:flex space-x-2 w-96 justify-between px-4">
                <div className="my-8 md:my-0">
              <div className="text-white font-bold text-lg">Follow us:</div>
              <div className="flex space-x-4 ">
                <a href={props.linkedin} target="_blank">
                  <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                    <FaLinkedin className="text-black text-xl" />
                  </div>
                </a>
                <a href={props.twitter} target="_blank">
                  <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                    <FaTwitter className="text-black text-xl" />
                  </div>
                </a>
                <a href={props.instagram} target="_blank">
                  <div className="w-10 h-10 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                    <FaInstagram className="text-black text-xl" />
                  </div>
                </a>
              </div>
              </div>
              <div>
              <div className="text-gray-200 text-lg font-bold ">Email :</div >
              <div className="text-gray-400">esummit@iiti.ac.in</div>
              </div>
            </div>
            </div>
            <div className=" flex flex-col space-y-3 pl-5 py-4">
              <div className="text-gray-200 text-lg font-bold ">
                Address :
              </div >
              <div className="text-gray-400">Room 302-B, PHY-1,</div>
              <div className="text-gray-400"> Academic POD,</div>
              <div className="text-gray-400"> IIT Indore,</div>
              <div className="text-gray-400">Madhya Pradesh-452020</div>


              <div className="text-gray-200 text-lg font-bold ">Phone :</div >
              <div className="text-gray-400">Sahil Yardi:  +91 7566669892</div>
              <div className="text-gray-400">Khushi Sawla:  +91 8989542652</div>
              <div className="text-gray-400 pb-3">Ayush Shukla:  +91 7267815996</div>
              
            </div>
            <div className={`flex flex-col space-y-4 pr-36 ${styles.ContactForm}`}>
              <ContactForm />
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            &copy; 2023 {props.copyright}
          </div>
        </div>
      </footer>
    </section>
  )
};
