import React from "react";
import "./testimonial.css";
import ReactDOM from "react-dom";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonial = () => {
  const Thoughts = [
    {
      id: 1,
      avatar: AVTR1,
      name: "Chongyun",
      thoughts:
        "I met her once, back I'd just become an exorcist. I'd taken a commission to perform an exorcism in someones home, and was just leaving at the end when I ran into her. She wrote my name down in a booklet — I guess she just wanted to confirm I wasnt doing anything suspicious. Anyway, it was just that one time, I never saw her again after that.",
    },
    {
      id: 2,
      avatar: AVTR2,
      name: "Ganyu",
      thoughts:
        "Even though Ms. Yelan is absent from work for the majority of the year, I'm sure Lady Ningguang must have her reasons for making exceptions for her. Of course, it wouldn't be my place to ask, so I don't know the details of their arrangement. I remember seeing her one day on my way back to Yuehai Pavilion, she was having breakfast with a group of people — they were all talking and laughing, eating, drinking tea... I must admit, I found myself feeling a little envious in that moment.",
    },
    {
      id: 3,
      avatar: AVTR3,
      name: "Keqing",
      thoughts:
        "Ms. Yelan's ancestors used to serve the Qixing. My grandfather and her family had academic collaborations in the past. All in all, she's reliable, efficient, and provides important intel to the Ministry of Civil Affairs. I can't say for sure how Ms. Yelan actually gets her intel, however...",
    },
    {
      id: 4,
      avatar: AVTR4,
      name: "Ningguang",
      thoughts:
        " She's a very interesting character. I can say with the utmost confidence that she is someone I trust unreservedly. She handles herself impeccably, which means she stays beyond reproach. Hehe, since you both have high intelligence in common, hopefully you will get along very well. ",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Yelan Voicelines</h5>
      <h2>Thoughts About Yelan</h2>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={40}
        modules={[Pagination]}
        className="mySwiper container testimonials__container"
      >
        {Thoughts.map(({ id, avatar, name, thoughts }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{thoughts}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonial;
