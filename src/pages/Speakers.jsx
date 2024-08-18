import React, { useEffect, useState } from "react";
import style from "../css/speaker.module.css";
import SpeakerCard from "./Speaker";

function Speaker(props) {
  const [flex, setFlex] = useState("row"); 
  const [vid ,setvid] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 992) {
        setFlex("column");
      } else {
        setFlex("row");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={style.speakers + " speakers"}
        style={{
          backgroundImage: `url("./data/img/speakersBg.gif")`,
        }}
      >
        <div className={style.heading}>
          <span className={style.title}>SPEAKERS</span>
        </div>
        <div className={style.content}>
          {props.speakers.map((val, ind) => {
            const dir = ind % 2 === 0 ? "row" : "row-reverse";
            const flex = window.innerWidth <= 992 ? "column" : dir;
            return(
            <SpeakerCard ind={ind} flex={flex} val={val}/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Speaker;
