import React,{useState} from 'react';
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

import img1 from "../images/sponsors/newzera_new.png"
import img2 from "../images/sponsors/Tea-Factory-new.png"
import img3 from "../images/sponsors/ito-new.png"
import img4 from "../images/sponsors/mp_agro.png"
import img5 from "../images/sponsors/unstop-logo.png"
import img6 from "../images/sponsors/gfg-new.png"
import img7 from "../images/sponsors/stockgro-new.png"
import img8 from "../images/sponsors/Pabrais-nknskfn.webp"
import img9 from "../images/sponsors/dsc.png"
import img10 from "../images/sponsors/cfa.jpg"
import img11 from "../images/sponsors/quiz.jpg"
import img12 from "../images/sponsors/e cell mits.png"
import img13 from "../images/sponsors/E-cell Avantika University.png"
import img14 from "../images/sponsors/E-cell GGITS.jpg"
import img15 from "../images/sponsors/E-cell iiit gwalior.png"
import img16 from "../images/sponsors/E-cell JEC.png"
import img17 from "../images/sponsors/E-Cell Medicaps.png"
import img18 from "../images/sponsors/E-Cell NIT Warangal .png"
import img19 from "../images/sponsors/E-Cell SGSITS.png"
import img20 from "../images/sponsors/E-Cell SVVV.jpg"
import img21 from "../images/sponsors/E-Cell VIT Bhopal White.png"
import img22 from "../images/sponsors/ecell IIITDMJ.jpg"
import img23 from "../images/sponsors/ECell Logo vnit.png"
import img24 from "../images/sponsors/Ecell Nit Rourkela.png"
import img25 from "../images/sponsors/EcellREC.PNG"
import img26 from "../images/sponsors/EcellSATI.PNG"
import img27 from "../images/sponsors/EcellUECUjjain.JPG"
import img28 from "../images/sponsors/EDC_ACROPOLIS.jpeg"
import img29 from "../images/sponsors/entiisc logo.png"
import img30 from "../images/sponsors/IIIT Pune.jpg"
import img31 from "../images/sponsors/NIT Jamshedpur.jpg"
import img32 from "../images/sponsors/NIT SURATHKAL.png"
import img33 from "../images/sponsors/ECELLIETDAVV.PNG"
import img34 from "../images/sponsors/offi Store.png"
import img35 from "../images/sponsors/pandey cab new logo.jpg"
import img36 from "../images/sponsors/001_LWT_logo.png"
import img37 from "../images/sponsors/Engineersab logo.png"
import img38 from "../images/sponsors/KOED Learning LOGO (1).png"
import img39 from "../images/sponsors/metvylogo.png"
import img40 from "../images/sponsors/shekunj.png"
import img41 from "../images/sponsors/Slammit.png"
import img42 from "../images/sponsors/stck.png"
import img43 from "../images/sponsors/SW Logo - Only Text.png"
import img44 from "../images/sponsors/TIME+logo.png"
import img45 from "../images/sponsors/wedesi.jpg"
import img46 from "../images/sponsors/wowmomo.jpg"
import img47 from "../images/sponsors/havmor.jpeg"
import img48 from "../images/sponsors/wedesinew.jpg"
import img49 from "../images/sponsors/ecellietdavvnew.jpg"
import Navbar from './Navbar';
// import i1 from "../images/sponsors/back/1.png"
// import i2 from "../images/sponsors/back/2.png"
// import i3 from "../images/sponsors/back/3.png"
// import i4 from "../images/sponsors/back/4.png"
// import i5 from "../images/sponsors/back/5.png"
// import i6 from "../images/sponsors/back/6.png"
// import i7 from "../images/sponsors/back/7.png"
import "../css/sponsors.css"
const sponsorsData = {
  titleSponsors: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img1,
      description: '',
    }
    
  ],
  associateSponsors1: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img2,
      description: '',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img3,
      description: '',
    }
    
  ],
  newSponsors1: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img5,
      description: 'Online Hosting Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img46,
      description: 'Food Partner',
    }
    
  ],
  newSponsors2: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img7,
      description: 'Trading Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img47,
      description: 'Food Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img41,
      description: 'Scoring Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img44,
      description: 'CAT ED Partner',
    }
    
  ],
  newSponsors3: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img38,
      description: 'C A Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img39,
      description: 'Official Learning Partner',
    }
    
  ],
  newSponsors4: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img36,
      description: 'Ecosystem Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img37,
      description: 'UI/UX Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img35,
      description: 'Travelling Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img40,
      description: 'SheKunj',
    }
    
  ],
  newSponsors5: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img34,
      description: 'Gifting Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img48,
      description: 'Food Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img43,
      description: 'Technology Partner',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img49,
      description: 'Ecosystem Partner',
    }
    
  ],
  newSponsors3: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img38,
      description: 'C A Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img39,
      description: 'Official Learning Partner',
    }
    
  ],
  associateSponsors2: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img4,
      description: 'Agro partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img5,
      description: 'Online Hosting Partner',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img6,
      description: 'Coding Partner',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img7,
      description: 'Online Trading Partner',
    }
    
  ],
  associateSponsors3: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img33,
      description: 'Ecosystem Partner',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img34,
      description: 'Gifting Partner',
    }
  
  ],
  associateSponsors5: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img8,
      description: 'Food and Beverages Partner',
    }
  
  ],
  associateSponsors4: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img9,
      description: 'Technology Partner',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img10,
      description: 'Case Study Partner',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img11,
      description: 'Quiz Partner',
    }
    
  ],
  outreachSponsors: [
    {
      name: 'Title Sponsor 1',
      logoUrl: img12,
      description: 'E-Cell MITS',
    },
    {
      name: 'Title Sponsor 1',
      logoUrl: img13,
      description: 'E-Cell Avantika University',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img14,
      description: 'E-Cell GGITS',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img15,
      description: 'E-Cell IIIT Gwalior',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img16,
      description: 'E-Cell JEC',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img17,
      description: 'E-Cell Medicaps',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img18,
      description: 'E-Cell NIT Warangal',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img19,
      description: 'E-Cell SGSITS',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img20,
      description: 'E-Cell SVVV',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img21,
      description: 'E-Cell VIT Bhopal',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img22,
      description: 'E-Cell IIITDMJ',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img23,
      description: 'E-Cell VNIT',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img24,
      description: 'E-Cell NIT Rourkela',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img25,
      description: 'E-Cell REC',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img26,
      description: 'E-Cell SATI',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img27,
      description: 'E-Cell UEC Ujjain',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img28,
      description: 'EDC ACROPOLIS',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img29,
      description: 'ENTIISC',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img30,
      description: 'E-Cell IIIT Pune',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img31,
      description: 'E-cell NIT Jamshedpur',
    },{
      name: 'Title Sponsor 1',
      logoUrl: img32,
      description: 'E-Cell NIT Surathkal',
    }
    
  ],

};

const SponsorCard = ({ sponsor }) => {
  return (
    <div className="text-white p-4 ">
      {/* <h3 className="text-lg font-semibold">{sponsor.name}</h3> */}
      <p className="text-white text-2xl font-bold pb-8">{sponsor.description}</p>
      <img src={sponsor.logoUrl} alt={sponsor.name} className="w-[100%] h-auto  mx-auto mb-4" />
      
    </div>
  );
};
const SponsorCard2 = ({ sponsor }) => {
  return (
    <div className="text-white p-4 ">
      {/* <h3 className="text-lg font-semibold">{sponsor.name}</h3> */}
      <p className="text-white text-xl font-bold pb-8">{sponsor.description}</p>
      <img src={sponsor.logoUrl} alt={sponsor.name} className="w-[100%] h-[60%] mx-auto mb-4" />
      
    </div>
  );
};
const SponsorCard3 = ({ sponsor }) => {
  return (
    <div className="text-white p-4 ">
      {/* <h3 className="text-lg font-semibold">{sponsor.name}</h3> */}
      <p className="text-white text-4xl font-bold pb-2">{sponsor.description}</p>
      <img src={sponsor.logoUrl} alt={sponsor.name} className="w-[50%] h-auto sm:w-[60%] sm:h-auto  mx-auto mb-4" />
      
    </div>
  );
};
const SponsorCard4 = ({ sponsor }) => {
  return (
    <div className="text-white p-4 ">
      {/* <h3 className="text-lg font-semibold">{sponsor.name}</h3> */}
      <p className="text-white text-2xl font-bold pb-8">{sponsor.description}</p>
      <img src={sponsor.logoUrl} alt={sponsor.name} className="w-[100%] h-auto mx-auto mb-4" />
      
    </div>
  );
};
const SponsorCard5 = ({ sponsor }) => {
  return (
    <div className="text-white p-4 ">
      {/* <h3 className="text-lg font-semibold">{sponsor.name}</h3> */}
      <p className="text-white text-2xl font-bold pb-8">{sponsor.description}</p>
      <img src={sponsor.logoUrl} alt={sponsor.name} className="w-[60%] sm:w-[30%] h-auto mx-auto mb-4" />
      
    </div>
  );
};
const SponsorCard6 = ({ sponsor }) => {
  return (
    <div className="text-white p-4 ">
      {/* <h3 className="text-lg font-semibold">{sponsor.name}</h3> */}
      <p className="text-white text-2xl font-bold pb-8">{sponsor.description}</p>
      <img src={sponsor.logoUrl} alt={sponsor.name} className="w-[70%] h-auto mx-auto mb-4" />
      
    </div>
  );
};
const SponsorCard7 = ({ sponsor }) => {
  return (
    <div className="text-white p-4 ">
      {/* <h3 className="text-lg font-semibold">{sponsor.name}</h3> */}
      <p className="text-white text-s font-bold pb-2">{sponsor.description}</p>
      <img src={sponsor.logoUrl} alt={sponsor.name} className="w-[50%] h-auto sm:w-[60%] sm:h-[70%]  mx-auto mb-4" />
      
    </div>
  );
};

export default function Sponsors() {
  
  // const particlesInit = async (main) => {
  //   console.log(main);
  //   await loadFull(main);
  // };

  
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
  return (
    <>
    <Navbar />
    
    <div className="grads text-white h-[100%]">
    
    {/* <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": false,
                    "value_area": 100
                }
            },
            "color": {
                "value": "#fff"
            },
            "shape": {
                "type": "circle",
                "options": {
                    "sides": 1
                }
            },
            "opacity": {
                "value": 0.8,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "random": true,
                "direction": "clockwise",
                "animation": {
                    "enable": true,
                    "speed": 5,
                    "sync": false
                }
            },
            // "line_linked": {
            //     "enable": true,
            //     "distance": 600,
            //     "color": "#ffffff",
            //     "opacity": 0.4,
            //     "width": 2
            // },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        // "retina_detect": true,
        "background": {
          gradient: {
            start: { value: 'red' }, // Starting color
            stop: { value: 'blue' }, // Ending color
          },
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
    />
       */}
    {/* <Particles params={particlesConfig} /> */}
    
      <div className=" container pt-[100px]  text-center">
      <h1 className={`text-6xl font-semibold mb-24 relative cursor-pointer text-[#CB77FF] ${
          isHovered ? 'hovered' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>SPONSORS
        <div className="red-line absolute bg-red-500 h-1 w-0 transition-all duration-300 origin-left top-0 left-0"></div></h1>

      

      <section className="mb-8 ">
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-[200px] mx-[20px] sm:mx-[100px] md:mx-[200px]">
          {sponsorsData.newSponsors1.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {sponsorsData.newSponsors2.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {sponsorsData.newSponsors4.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {sponsorsData.newSponsors5.map((sponsor, index) => (
            <SponsorCard4 key={index} sponsor={sponsor} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-[200px] mx-[20px] sm:mx-[100px] md:mx-[200px] mb-20">
          {sponsorsData.newSponsors3.map((sponsor, index) => (
            <SponsorCard6 key={index} sponsor={sponsor} />
          ))}
        </div>
        
        
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-[100px] mx-[20px] sm:mx-[100px] md:mx-[200px]">
          {sponsorsData.associateSponsors5.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </div> */}
         {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:mx-[200px] mx-[20px] gap-8 sm:mx-[100px] md:mx-[200px]">
          {sponsorsData.associateSponsors3.map((sponsor, index) => (
            <SponsorCard4 key={index} sponsor={sponsor} />
          ))}
        </div> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
          {sponsorsData.associateSponsors3.map((sponsor, index) => (
            <SponsorCard2 key={index} sponsor={sponsor} />
          ))}
        </div> */}
        
        <h2 className="text-5xl font-semibold mb-4 text-[#CB77FF]">Outreach Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 mt-20">
          {sponsorsData.outreachSponsors.map((sponsor, index) => (
            <SponsorCard2 key={index} sponsor={sponsor} />
          ))}
        

        </div>
        <h2 className="text-5xl font-semibold mb-4 text-[#CB77FF]">PAST PARTNERS</h2>
        <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">Title Sponsor</h2>
        <div className="grid grid-cols-1 ">
          {sponsorsData.titleSponsors.map((sponsor, index) => (
            <SponsorCard3 key={index} sponsor={sponsor} />
          ))}
        </div>
      </section>
      <section className="mb-8 ">
        <h2 className="text-3xl font-semibold mb-4 text-white">Associate Sponsor</h2>
        <div className="grid grid-cols-2 justify-items-center mb-4">
          {sponsorsData.associateSponsors1.map((sponsor, index) => (
            <SponsorCard7 key={index} sponsor={sponsor} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {sponsorsData.associateSponsors2.map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          {sponsorsData.associateSponsors5.map((sponsor, index) => (
            <SponsorCard5 key={index} sponsor={sponsor} />
          ))}
        </div>
        <div className="grid grid-cols-1 pb-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sponsorsData.associateSponsors4.map((sponsor, index) => (
            <SponsorCard4 key={index} sponsor={sponsor} />
          ))}
        </div>
        </section>
      </section>
      
    </div>

    </div>
    </>
    
  )
}

