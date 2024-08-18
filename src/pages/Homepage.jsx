import React from "react";
import { useContext, useEffect } from "react";
import style from "../css/homepage.module.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import About from "./About";
import EventCoverageAndFootfall from "./EventCoverageAndFootfall";
import Theme from "./Theme";
import Events from "./Events";
import Speaker from "./Speakers";
import PastSpeakers from "./PastSpeakers";
import speakerData from "../data/speakers.json";
import pastspeakerData from "../data/pastspeaker.json";
import Merchandise from "./Merchandise";
import ContactForm from "./ContactForm";

// import Sponsors from './Sponsors'
import { TailSpin } from "react-loader-spinner";
import { LoginContext } from "../helpers/context/Context";
import RegisterPopup from "./RegisterPopup";

export default function Homepage() {
  // const { loading, setLoading } = useContext(LoginContext);
  // useEffect(() => {
  //   setLoading(true)
  //   const Load = async () => {
  //     await new Promise((r) => setTimeout(r, 4000))

  //     setLoading(false);
  //   }

  //   Load()
  // }, [])
  return (
    <>
      {/* {loading && <div class={style.preloader}>
        
        <span class={style.loader}></span>
        
      </div>} */}
        <div>
          <Navbar />
          <Banner />
          <About />
          <EventCoverageAndFootfall />
          <Theme />
          <Events />
          <Speaker  {...speakerData}/>
          <PastSpeakers {...pastspeakerData} />
          <RegisterPopup/>
        </div>
    
    </>
  );
}
