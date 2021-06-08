import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout page="Artisan Guyanais">
      <h1>L'artisan des petits chantiers</h1>
      <Image
        src="/Illustration_construction_slm.svg"
        alt="Image de couverture"
        width="400"
        height="200"
      ></Image>
    </Layout>
  );
}
