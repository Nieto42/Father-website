import Layout from "../components/Layout";
import Image from "next/image";
import Services from "../components/home/Services";
import Team from "../components/home/Team";

export default function Home() {
  return (
    <Layout page="Artisan Guyanais">
      <div className="home">
        <div className="hero-container">
          <h1>L'artisan des petits chantiers</h1>

          <div className="img">
            <Image
              src="/Illustration_construction_slm.svg"
              alt="Image d'une construction d'un batiment pour représente les artisans locaux guyanais "
              width="400"
              height="200"
            ></Image>
          </div>
          <div className="call-action">
            <p>Echanger avec un artisant de saint laurent du maroni </p>
            <button className="btn">Demander un devis 📞</button>
          </div>
        </div>
        <div className="service-container">
          <Services></Services>
        </div>
        <div className="project-container"></div>
        <div className="team-container">
          <Team></Team>
        </div>
        <div className="Google-container"></div>
        <div className="partner-container"></div>
      </div>
    </Layout>
  );
}
