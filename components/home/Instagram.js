import moment from "moment";
import Image from "next/image";
import "moment/locale/fr";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper/core";
SwiperCore.use([EffectCoverflow, Autoplay]);

export default function Instagram({ result }) {
  // const formatDate = (text) => {
  //   const date = new Date(text).toString(); //Wed Aug 22 2018 20:49:08
  //   const weekDay = /^\w+/.exec(date)[0];
  //   const month = /\s\w+/.exec(date)[0].trim();
  //   const day = /\s\d+/.exec(date)[0].trim();
  //   const hour = /\d+:\d+/.exec(date)[0].trim();
  //   const dateAsText = `${weekDay}, ${month} ${day} ${hour}`; // Create this  : Wed Aug 22 2018 20:49:08

  //   return dateAsText;

  // };
  console.log(result);
  const formatDate = (text, format) => {
    return moment(new Date(text)).format(format); // Biblitheque de Moment.js
  };

  return (
    <div className="instagram">
      <h2>Nos dernière réalisation sur Saint Laurent Du Maroni</h2>
      <Swiper
        slidesPerView={"auto"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="container-insta"
      >
        {result.data.map((post, index) => (
          <SwiperSlide key={index} className="container-post">
            <div className="item-date">
              <div className="img-date">
                <Image
                  src="/home/Icon_coeur_publication_instagram.svg"
                  alt="illustration renovation batiment guyanais"
                  width="32"
                  height="32"
                  quality={100}
                ></Image>

                <p className="item-day">
                  {moment(new Date(post.timestamp)).format("ddd, MMM")}
                </p>
              </div>
              <p className="item-hour">
                {moment(new Date(post.timestamp)).format("H:mm")}
              </p>
            </div>
            <div className="item-photo">
              <iframe
                width="320"
                height="460"
                src={post.permalink + "embed"}
                frameborder="0"
              ></iframe>
              {/* <a
                href={post.permalink}
                target="_blank"
                rel="noreferrer noopener"
              >
                {post.media_type === "IMAGE" ? (
                  <Image
                    alt="photo ou video qui provient du compte instagram"
                    src={post.media_url}
                    width="700"
                    height="700"
                    quality={100}
                  ></Image>
                ) : (
                  <video
                    src={post.media_url}
                    alt="video instagram contenu artisan de saint laurent du maroni"
                    type="video/mp4"
                    className="video"
                    controls
                    width="100%"
                  ></video>
                )}
              </a> */}
            </div>
            <div className="item-caption">{post.caption}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
