import Layout from "../components/Layout";
import Image from "next/image";
import Services from "../components/home/Services";
import Team from "../components/home/Team";
import Partner from "../components/home/Partner";
import Instagram, { CarrocelContainer } from "../components/home/Instagram";

export default function Home({ result }) {
  return (
    <Layout page="Artisan Guyanais">
      <div className="home">
        <div className="hero-container">
          <h1>L'artisan des petits chantiers</h1>

          <div className="img">
            <Image
              src="/home/Illustration_construction_slm.svg"
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
        <div className="project-container">
          <Instagram result={result}></Instagram>
        </div>
        <div className="team-container">
          <Team></Team>
        </div>
        <div className="Google-container"></div>
        <div className="partner-container">
          <Partner></Partner>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const token =
    "IGQVJYd1VaSFJpcnFkT1M5MkV1ZAHNTWTZAmYWFPRGh5NllEUTdOQzJDaEZAmLU9ZAMkFnSXJySEZAIRjcyWnNEOVZAIdFNtM2IycmxyN29lQ3NjUS12dDF4MXZApcF9yWHZArbmx5ZAlhRUTRBS1ZATTUMtNWpOYQZDZD";
  const fields = [
    "caption",
    "children{media_type,media_url,thumbnail_url}",
    "id",
    "media_type",
    "media_url",
    "permalink",
    "thumbnail_url",
    "timestamp",
  ].join(",");

  try {
    const data = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`
    );
    const result = await data.json();
    console.log(result);

    return {
      props: { result },
    };
  } catch (err) {
    console.error(err);
  }
}

// https://graph.instagram.com/me/media?fields=id,username&access_token=IGQVJXZA0xxU0ZAURjlQUndpajdIX1lHd3VVREg2RjRjeEt5MlJaZAEwtYUpDajI3RmloNGlDMHhocjR3OFZAua2R1ZAk8tRmRxRmRtRC1sSndoZA2dvbWpkNlBsMV96RTI5V3FBS1I3TmptV3Q4YWhLYmhMWgZDZD
// https://graph.instagram.com/17842812493026794?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJXZA0xxU0ZAURjlQUndpajdIX1lHd3VVREg2RjRjeEt5MlJaZAEwtYUpDajI3RmloNGlDMHhocjR3OFZAua2R1ZAk8tRmRxRmRtRC1sSndoZA2dvbWpkNlBsMV96RTI5V3FBS1I3TmptV3Q4YWhLYmhMWgZDZD
