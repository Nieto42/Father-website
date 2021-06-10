import Image from "next/image";

export default function Services() {
  return (
    <div className="services">
      <h2>Des services de Proximité </h2>
      <div className="container-service">
        <div className="container-item">
          <Image
            src="/home/renovation.svg"
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
            src="/home/construction-worker.svg"
            alt="illustration renovation batiment guyanais"
            width="56"
            height="56"
            quality={100}
          ></Image>
          <h3>Construction durable</h3>
          <p>
            Vous voulez construire une terrasse, une maison ou simplement mettre
            un grillage à votre maison. Nos artisans de SLM s'en chargent de
            tout.
          </p>
        </div>
        <div className="container-item">
          <Image
            src="/home/Illustration_demolition_du_mur.svg"
            alt="illustration d'une démolition d'un mur"
            width="56"
            height="56"
            quality={100}
          ></Image>
          <h3>Démolition</h3>
          <p>
            Vous voulez faire une pièce unique qui regroupe le salon et cuisine
            ? Cependant, vous avez un mur qui les sépare ? Nos artisans guyanais
            vous aideront dans vos travaux.
          </p>
        </div>
      </div>
    </div>
  );
}
