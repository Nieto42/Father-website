import Image from "next/image";

export default function Team() {
  return (
    <div className="team">
      <h2>Les artisans de Saint Laurent du Maroni</h2>
      <div className="container-deco">
        <div className="line"></div>
        <Image
          src="/home/Logo équipe artisan guyanais.svg"
          alt="illustration d'un visage souriant des couleur de la guyane"
          width="56"
          height="56"
          quality={100}
        ></Image>
        <div className="line"></div>
      </div>
      <div className="container-team">
        <div className="container-item">
          <div className="imgi">
            <Image
              src="/photo/name.jpeg"
              alt="Photo d'un artisan guyanais"
              width="300"
              height="300"
              quality={100}
              objectFit="cover"
            ></Image>
          </div>
          <div className="description">
            <h5>Neto Pompeu</h5>
            <p>FullStack </p>
          </div>
        </div>
        <div className="container-item">
          <div className="imgi">
            <Image
              src="/photo/freitas.jpg"
              alt="Photo d'un artisan guyanais"
              width="300"
              height="300"
              quality={100}
              objectFit="cover"
            ></Image>
          </div>
          <div className="description">
            <h5>Freitas Soares</h5>
            <p>CEO & Maçon</p>
          </div>
        </div>
        <div className="container-item">
          <div className="imgi">
            <Image
              src="/photo/siba.jpg"
              alt="Photo d'un artisan guyanais"
              width="300"
              height="300"
              quality={100}
              objectFit="cover"
            ></Image>
          </div>
          <div className="description">
            <h5>Siba Da Costa</h5>
            <p>Plombier</p>
          </div>
        </div>
      </div>
    </div>
  );
}
