import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Team from '../css/team.module.css';
import TeamsData from "../data/team.json";
import PeopleCard from "../Teams/PeopleCard";
import Navbar from './Navbar';
import { useContext, useEffect } from "react";
import style from "../css/homepage.module.css";
import { LoginContext } from "../helpers/context/Context";

const TeamPage = (props) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {

    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

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
      <div className={Team.teambg} style={{ backgroundImage: `url("./data/img/speakersBg.gif")`, }}>
        <div className='container mx-auto px-5 m-auto pb-20 pt-8'>

          <div className={Team.header}>
            <h1><span className={Team.text_color}>Our</span><span className={Team.text_white}> Team</span></h1>
          </div>

          <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-12 lg:gap-20 py-12 lg:px-24 ml-6' >
            {props.Professors.map((item, i) => (
              <PeopleCard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={process.env.PUBLIC_URL + item.Pic} mainWidth={'100%'} imageHeight={'42vh'} imageWidth={'100%'} textWidth={'100%'} isProfessor={true} position={item.Position} />
            ))}
          </div>

          <section >
            <div className="flex-row min-h-screen items-center justify-center ">
              <div className=" items-center justify-center ">

                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20'>Team Leaders</h1>

                <Swiper
                  // spaceBetween={10}
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-2 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>
                      {props.Team_Leaders.map((item, i) => (
                        <SwiperSlide>
                          <PeopleCard position={item.Position} name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={process.env.PUBLIC_URL + item.Pic} isProfessor={true} imageHeight={'44vh'}/>
                        </SwiperSlide>
                      ))}
                    </section>
                  </div>
                      </Swiper>

                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20'>Marketing </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-20  w-full '
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 70,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{props.Marketing.map((item, i) => (
                      <SwiperSlide>
                        <PeopleCard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={process.env.PUBLIC_URL + item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>                                

                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20'>Outreach </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{props.Outreach.map((item, i) => (
                      <SwiperSlide>
                        <PeopleCard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>



                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20'>Technicals </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{props.Technicals.map((item, i) => (
                      <SwiperSlide>
                        <PeopleCard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>                

                  </div>
                </Swiper>


                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20'>Content & Social Media </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{props.ContentSocialMedia.map((item, i) => (
                      <SwiperSlide>
                        <PeopleCard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>


                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20'>Creatives</h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{props.Creatives.map((item, i) => (
                      <SwiperSlide>
                        <PeopleCard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>


                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20'>Video Production</h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },

                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{props.VideoProduction.map((item, i) => (
                      <SwiperSlide>
                        <PeopleCard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>


                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20'>Operation & Logistic</h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{props.OperationLogistic.map((item, i) => (
                      <SwiperSlide>
                        <PeopleCard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>



                {/* intern Fair */}
                <h1 className='text-white text-center font-bold pt-10 text-4xl pb-20'>Events </h1>


                <Swiper
                  modules={[Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={false}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className='px-8 w-full'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    680: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                ><div className="px-8 md:px-2 lg:px-0" style={{ width: width + 55 }}>
                    <section className='text-center justify-center'>{TeamsData.Events.map((item, i) => (
                      <SwiperSlide>
                       <PeopleCard name={item.Name} linkedin={item.LinkedIn} insta={item.Instagram} mail={item.GitHub} pic={item.Pic} />
                      </SwiperSlide>
                    ))}
                    </section>

                  </div>
                </Swiper>




              </div>
            </div>
          </section>
        </div>
      </div>
      </>
      )
}
      </>
   
  )
}


export default TeamPage;