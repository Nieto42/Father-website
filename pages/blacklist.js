import Layout from "../components/Layout";
import Image from "next/image";

export default function BlackList() {
  return (
    <Layout page="BlackList">
      <div className="blocklist">
        <h1>
          Liste des guyanais qui doivent de l'argent aux artisans Guyanais
        </h1>
        <p>Vous etes Artisan ?</p>
        <p>
          Voici la liste des personnes a éviter pour ne pas vous faire arnaquer
        </p>

        <ul>
          <li>Madame *** ****</li>
          <p>Photo du mauvais payeur</p>
          <h4>Locatlisation</h4>
          <p>Saint Laurent du Maroni</p>
          <h4>Travaux impayer</h4>
          <p>Photo des travaux</p>
          <p>Description du travaux</p>
          <p>Vous souhaitez regler votre compte, contactez nous</p>
          <button>Payer</button>
        </ul>
      </div>
    </Layout>
  );
}
