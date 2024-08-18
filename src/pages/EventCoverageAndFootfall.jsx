import React, { useEffect, useRef, useState } from 'react'
import "../css/eventCoverageandFootfall.css";
import CountUp from 'react-countup';
import { set } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';

export default function EventCoverageAndFootfall() {
  const containerRef = useRef(null);
  const [cnt ,setcnt]=useState(0);
  console.log(cnt);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  useEffect(()=>{
    if(inView){
      if(cnt === 0){
        setcnt(1);
      }
    }
  } ,[inView])
  const [animate , setanimate] = useState("box");

  const [animated , setanimated] = useState("box");
  return (
    <div className='contain' ref={ref}>
      <div className='con1' onMouseEnter={()=>{
        setanimate("box animate");
        setcnt(1);
      }}>
        {/* <CountUp start={0} end={1000} duration={2}>{({countUpRef , start})=>(<div><span className='count'></span></div>)}</CountUp> */}
        <div><div className={animate}><div className="item item1">{cnt ? <CountUp start={0} end={700000} suffix ="+" className='text-white text-2xl ' duartion={3}/> : <p className='count'>100 <span>+</span></p>}</div></div>
          <h1 className='item_title'><span className='opacity-0'>.....</span>Fest Reach<span className="opacity-0">.......</span></h1>
        </div>
        <div><div className={animate}><div className="item item2">{cnt ? <CountUp start={0} end={3000} suffix ="+" className='text-white text-2xl ' duartion={3}/> : <p className='count'>100 <span>+</span></p>}</div></div>
          <h1 className='item_title'><span className='opacity-0'>......</span>Attendees<span className="opacity-0">.......</span></h1>
        </div>
        <div><div className={animate}><div className="item item3">{cnt ? <CountUp start={0} end={5000} suffix ="+" className='text-white text-2xl ' duartion={3}/> : <p className='count'>100 <span>+</span></p>}</div></div>
          <h1 className='item_title'>Registrations and<br></br> Competitions</h1>
        </div>
        <div><div className={animate}><div className="item item3">{cnt ? <CountUp start={0} end={5000} suffix ="+" className='text-white text-2xl ' duartion={3}/> : <p className='count'>100 <span>+</span></p>}</div></div>
          <h1 className='item_title'><span className='opacity-0'>.</span>Campus Strength<span className="opacity-0">.</span></h1>
        </div>
      </div>
      <div className='con2' onMouseEnter={()=>{
        setanimated("box animate");
      }}>
        {/* <div><div className={animated}><div className="item item4"><p className='count'>100 <span>+</span></p></div></div>
          <h1 className='item_title'>Campus Strength</h1>
        </div>
        <div><div className={animated}><div className="item item5"><p className='count'>100 <span>+</span></p></div></div>
          <h1 className='item_title'>Campus Strength</h1>
        </div>
        <div><div className={animated}><div className="item item6"><p className='count'>100 <span>+</span></p></div></div>
          <h1 className='item_title'>Campus Strength</h1>
        </div> */}
      </div>
     
    </div>
  )
}
