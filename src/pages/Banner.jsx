import React from 'react'
import styles from "../css/banner.module.css"
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import pdf from "../AccomodationInstruction.pdf"
const Banner = () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd6qSoHWwJJZV_xOYGyU69ap4Y6QrmqZoU1tnNBlWBbyDtMmw/viewform?usp=sf_link" ;
    return (
        <>
            <div className={styles.banner}>
                <div>
                    <center>
                        <video autoPlay muted loop id="myVideo">
                            <source src="https://res.cloudinary.com/dheskw46y/video/upload/v1694457403/E_summit_banner/bgAni_droped_l9bfur.mp4" type="video/mp4" />
                        </video>
                        <div className={styles.bannerContent}>
                            <img className={styles.logoImg} src="/logo.png" alt="logo" />
                            <h1 className={styles.banner_date}>7th - 8th OCTOBER 2023</h1>
                            {/* <div className={styles.registerBtn}><Link to="/merchandise" >Buy Your Merchandise</Link></div> */}
                            <div className='md:flex place-content-center md:my-10'>
                                <Link to={formUrl} className="text-white  hover:no-underline"><div className='md:m-8 w-64 text-xl py-2 bg-[#ab40d67c] rounded-2xl border-2 m-8 border-[#ab5ada] font-semibold no-underline text-yellow-50 '><sapn className="formButtons">Accomodation Form</sapn></div></Link>
                                <a href='https://drive.google.com/file/d/1OHHB_1YoaW56DrR3YxGgGUr1FIB82wko/view?usp=sharing' className="text-white  hover:no-underline"><div className='md:m-8 w-64 text-xl py-2 bg-[#ab40d67c] rounded-2xl border-2 m-8 border-[#ab5ada] font-semibold no-underline text-yellow-50'><sapn className="formButtons">Accomodation Instructions</sapn></div></a>
                            </div>
                        </div>
                    </center>
                </div >
            </div >
        </>
    )
}

export default Banner