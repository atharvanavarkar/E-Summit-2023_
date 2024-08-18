import './App.css';
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Banner from './pages/Banner';
import Gallery from './pages/Gallery';
import Theme from './pages/Theme';
import Speaker from './pages/Speakers';
import Events from './pages/Events';
import EventCoverageAndFootfall from './pages/EventCoverageAndFootfall';
import PastSpeakers from './pages/PastSpeakers';
import Team from './pages/Team';
import RegisterPopup from './pages/RegisterPopup';
import { StackedImageAnimation } from './pages/StackedImageAnimation';
import speakerData from './data/speakers.json';
import pastspeakerData from './data/pastspeaker.json';
import Footer from './pages/Footer';
import FooterData from './data/Footer.json';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from './pages/Homepage';
import PhotoFrame from './helpers/Gallery/PhotoFrame';
import Gallery_Layout from './helpers/Gallery/Gallery_Layout';
import Merchandise from './pages/Merchandise';
import TeamsData from "./data/team.json";
import FAQ from "./pages/FAQ"
import questions from './data/question.json'
import Sponsors from './pages/Sponsors';
import Aos from 'aos'
import { useEffect, useState } from "react";
import {LoginContext} from './helpers/context/Context'

function App() {

  const [loading, setLoading] = useState(false)

  //loading spinner function
  // const loadingSpinner = () => {
  //   setLoading(true)
  //   const Load = async () => {
  //     await new Promise((r) => setTimeout(r, 0.1))

  //     setLoading((loading) => !loading)
  //   }

  //   Load()
  // }

  const location = useLocation()
  const [page, setPage] = useState('');

  useEffect(() => {
      Aos.init({
          once: true,
          duration: '1000',
          anchorPlacement: 'bottom-center'
      })
      setPage(location.pathname.substring(1, location.pathname.length).split('/')[0])
  }, [location.pathname])

  return (
    <LoginContext.Provider value = {{loading, setLoading}}>
    <div className="App">
        <Routes>
          <Route exact element={<Homepage />} path="/" ></Route>
          <Route exact element={<Banner />} path="/banner"></Route>
          <Route exact element={<About />} path="/about"></Route>
          <Route exact element={<EventCoverageAndFootfall />} path="/eventcoverageandfootfall"></Route>
          <Route exact element={<Theme />} path="/theme"></Route>
          <Route exact element={<Events />} path="/events"></Route>
          <Route exact element={<Speaker {...speakerData} />} path="/speakers"></Route>
          <Route exact element={<PastSpeakers {...pastspeakerData} />} path="/pastspeakers"></Route>
          <Route path="/gallery" element={<Gallery_Layout />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/faqs" element={<FAQ {...questions}/>}></Route>
          <Route path='/team' element={<Team {...TeamsData} />}/>
        </Routes>
      {/* {window.location.pathname==='/' && <RegisterPopup />} */}
      {!loading && <Footer {...FooterData} />}
    </div>
    </LoginContext.Provider>
  );
}

export default App;
