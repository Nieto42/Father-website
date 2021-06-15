import Layout from "../components/Layout";
import Image from "next/image";

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper/core";
SwiperCore.use([EffectCoverflow, Autoplay]);

export default function realisation() {
  return (
    <Layout page="Réalisation">
      <div className="realisation">
        <h1>Nos dernier travaux sur Saint Laurent du Maroni</h1>
        <div className="container">
          <h2>Container amenagement</h2>
          <div className="image-carousel">
            Nos travaux en photo et video
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
              <SwiperSlide></SwiperSlide>
            </Swiper>
            <Image
              src="/home/partner/logo-action-sociale.svg"
              alt="logo de action sociale a saint laurent du maroni"
              width="72"
              height="72"
              quality={100}
            ></Image>
            <div className="description">
              <p>Description des travaux</p>
              <p>Nombre de jour: </p>
              <p>Cout total: </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
