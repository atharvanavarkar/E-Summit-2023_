import React, { useEffect, useState } from 'react'
import "../css/events.css"
import img1 from "../images/events/tradingvault.png"
import img2 from "../images/events/entrivia.png"
import img3 from "../images/events/case.png"
import img4 from "../images/events/ipl.png"
import img5 from '../images/events/design.png'
import img6 from '../images/events/pitchX.png'
import img7 from '../images/events/Intern_Fair.png'
import img8 from '../images/events/Start-up-expo.png'
export default function Events() {
    
    // const [open ,setopen] = useState(0);
    const events =[
        {
            image : img1,
            link : "https://unstop.com/o/3lavBcy?lb=e80isJa",
            description : "E-Cell IIT Indore’s flagship event, E-Summit 2023, presents Trading Vault: The Virtual Trading Competition. If you are a Finance Enthusiast and want to try your hands in the world of stock trading, then this is your chance. The competition will be held on our partner platform."

        },
        {
            image:img2,
            link:"https://unstop.com/o/9OmpRkg?lb=e80isJa",
            description : "E-Cell, IIT Indore's flagship annual event E-Summit 2023, in association with The Quiz Club, IIT Indore presents Entrivia, a business quiz competition that gives you many questions about entrepreneurship, finance, marketing, fundraising, and more. So do participate and show what you are made of!"
        },
        {
            image:img3,
            link:"https://unstop.com/o/LfwzZTA?lb=e80isJa",
            description : "This is a case-based challenge wherein the participating teams are required to assess the nuances of the company and provide their recommendations based on an in-depth study of the market being operated in, identifying the opportunities and scale of impact they can create."
        },
        {
            image:img4,
            link:"https://unstop.com/competitions/ipl-auction-e-summit-2023-iit-indore-iit-indore-748122",
            description : "Total 8 teams will pass on to this round and will participate in the Offline IPL Auction which will be held at IIT Indore."
        },
        {
            image:img5,
            link:"https://unstop.com/competitions/product-design-competition-e-summit-2023-iit-indore-iit-indore-762726",
            description : "The time has come to showcase your creativity and marketing skills! E-Summit '23 has come up with the 'Product Design Competition', so set your strategy, form new ideas, and convert them into tangible inventions and products. Err on the side of caution because the design should be aesthetic to look, convenient to use, and satisfying to customers."
        },
        {
            image:img6,
            link:"",
            description : "E-Summit'23 is happy to announce our event PITCH-X where various startup founders and budding entrepreneurs can come up to present their ideas and startups and they will be judged by an expert panel. So get ready to witness the heart-throbbing environment in PITCH-X"
        },
        {
            image:img7,
            link:"",
            description : "Elevate your career aspirations at InternFair, E-Summit'23! Connect with industry leaders, explore diverse internship opportunities, and ignite your professional journey. Seize this chance to unlock your potential and shape your future."
        },
        {
            image:img8,
            link:"https://unstop.com/workshops-webinars/start-up-expo-e-summit-2023-iit-indore-iit-indore-765849",
            description : "Join us at E-Summit'23, IIT Indore, for an electrifying Startup Expo featuring a diverse array of game-changing startups. Connect with visionary entrepreneurs, witness groundbreaking ideas, and fuel your entrepreneurial spirit. Don't miss the chance to be part of this innovation extravaganza - mark your calendar and get ready for a day filled with inspiration. See you at the Startup Expo!"
        }
        

    ]
    
    const [flipState, setFlipState] = useState(Array(events.length).fill(0));
    const openLink = (link) =>{
        window.open(link,"_blank");
    }
    const handleFlip = (index) => {
        const newFlipState = [...flipState];
        for(var i=0 ; i<events.length ;i++){
            newFlipState[i] =0;
        }
        newFlipState[index] = newFlipState[index] === 0 ? 1 : 0;
        setFlipState(newFlipState);
    };
    const handleClick = (obj,index) =>{
        handleFlip(index);
        openLink(obj.link);
    }
    

  return (
    <div className='events'>

        <h1 className='events_heading text-center  pb-2 px-2 w-full wow animate__animated animate__fadeInUp'>Events & Competitions</h1>
        {events.map((obj ,idx)=>{

            return(
            <div className='cont  wow animate__animated animate__fadeInUp '>
            {/* <div className='heading'>
                <div><h1>E Summit</h1></div>
                <div><h1>2023</h1></div>
            </div> */}
            <div class="flip-card">
                <div class={"flip-card-inner " + (`${flipState[idx] === 1 ? 'flipped' : ''}`)}>
                    <div class="flip-card-front">

                        <img src={obj.image} alt="Avatar" />
                        <button className='btn' onClick={()=> handleFlip(idx)
                        } >Read More</button>
                    </div>
                    <div class="flip-card-back h-max" onClick={()=>{
                         const newFlipState = [...flipState];
                         for(var i=0 ; i<events.length ;i++){
                             newFlipState[i] =0;
                         }
                        //  newFlipState[index] = newFlipState[index] === 0 ? 1 : 0;
                         setFlipState(newFlipState);
                    }}>
                        <p className='data2' >{obj.description}</p>
                        <button className='btn'  onClick={()=>{handleClick(obj,idx)}}>Register</button>

                        
                        
                    </div>
                </div>
                </div>
            </div>
            )
        })}
        
    </div>
  )
}



