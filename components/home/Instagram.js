import moment from "moment";
import Image from "next/image";
import "moment/locale/fr";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper/core";
SwiperCore.use([EffectCoverflow]);

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

  const formatDate = (text, format) => {
    return moment(new Date(text)).format(format); // Biblitheque de Moment.js
  };

  return (
    <div className="instagram">
      <h2>Nos dernière réalisation sur Saint Laurent Du Maroni</h2>
      <Swiper
        slidesPerView={"auto"}
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
              <a
                href={post.permalink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  alt="photo ou video qui provient du compte instagram"
                  src={post.media_url}
                  width="500"
                  height="500"
                  quality={100}
                ></Image>
              </a>
            </div>
            <div className="item-caption">{post.caption}</div>
            <div className="item-username">
              <Image
                src="/home/icon_arobase_nom_de_compte_instagram.svg"
                alt="icon d'un arobase pour représenter le nom de compte instagram"
                width="32"
                height="32"
                quality={100}
              ></Image>
              <p>{post.username}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
