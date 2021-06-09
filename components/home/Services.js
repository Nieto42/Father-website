import Image from "next/image";

export default function Services() {
  return (
    <div className="services">
      <h2>Des services de Proximité </h2>
      <div className="container-service">
        <div className="container-item">
          <Image
            src="/renovation.svg"
            alt="illustration renovation batiment guyanais"
            width="56"
            height="56"
            quality={100}
          ></Image>
          <h3>Rénovation</h3>
          <p>
            Nous rénovants salon, chambre, salle de bain, garage et isolation
          </p>
        </div>
        <div className="container-item">
          <Image
            src="/renovation.svg"
            alt="illustration renovation batiment guyanais"
            width="56"
            height="56"
            quality={100}
          ></Image>
          <h3>Rénovation</h3>
          <p>
            Nous rénovants salon, chambre, salle de bain, garage et isolation
          </p>
        </div>
        <div className="container-item">
          <Image
            src="/renovation.svg"
            alt="illustration renovation batiment guyanais"
            width="56"
            height="56"
            quality={100}
          ></Image>
          <h3>Rénovation</h3>
          <p>
            Nous rénovants salon, chambre, salle de bain, garage et isolation
          </p>
        </div>
      </div>
    </div>
  );
}
