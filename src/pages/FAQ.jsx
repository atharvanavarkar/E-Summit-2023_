import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import "../css/faq.css";
import Navbar from "./Navbar";
import { useContext, useEffect } from "react";
import { LoginContext } from "../helpers/context/Context";
import style from "../css/homepage.module.css";

export default function FrequentlyAskedQuestions(props) {
   const [expandedItemIndex, setExpandedItemIndex] = useState(-1);

   const toggleExpand = (index) => {
      if (expandedItemIndex === index) {
         // Clicked on the already expanded item, so close it
         setExpandedItemIndex(-1);
      } else {
         // Clicked on a new item, close the previously expanded item and open the clicked one
         setExpandedItemIndex(index);
      }
   };

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
      <>
      <Navbar />
         <div className="backgrounds"       
            style={{
               backgroundImage: `url("./data/img/speakersBg.gif")`,
            }}
         >
            <div className="pt-24 text-center justify-center items-center div h-100vh">
               <div className="text-slate-300 pt-12 text-5xl">Frequently Asked Questions</div>
               <div className="mt-12 div py-4 text-white div w-3/5">
                  {props.question.map((val, ind) => (
                     <div className="text-left" key={ind}>
                        <div className="border-b-2 py-6 data">
                           <div className="flex items-center">
                              <div className="w-4/5">
                                 {val.data}
                              </div>
                              <span className="icon">
                                 <div className="text-right">
                                    <button onClick={() => toggleExpand(ind)}>
                                       {expandedItemIndex === ind ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
                                    </button>
                                 </div>
                              </span>
                           </div>
                        
                           {expandedItemIndex === ind && (
                              <div className="answer text-slate-300 text-xl">
                                 {val.answer}
                              </div>
                           )}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>)}
      </>
   );
}

