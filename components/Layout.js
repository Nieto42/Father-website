import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="layout">
      <Head>
        <title>{page}</title>
      </Head>

      <header className="header">
        <div className="nav">
          <Link href="/">
            <Image
              src="/Logo_Artisan_guyanais.svg"
              alt="Logo Artisan guyanais"
              width="150"
              height="20"
              className="img"
              quality={100}
            ></Image>
          </Link>
          <div className="contact">
            <span>0694 00 00 93</span>
            <button>Appeller 📞</button>
          </div>
        </div>
      </header>

      <main className="children">{children}</main>

      <footer className="footer">
        <div className="web-Identity">
          <Image
            src="/Logo_Artisan_guyanais.svg"
            alt="Logo Artisan guyanais"
            width="150"
            height="20"
            className="img"
            quality={100}
          ></Image>
          <div className="faya">
            <h6>
              © Copyright 2021 -{" "}
              <a
                href="https://www.linkedin.com/in/neto-pompeu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neto Pompeu
              </a>
            </h6>
          </div>
        </div>
        <div className="services">
          <h3>Nos services</h3>
          <div className="list-services">
            <ul>
              <li>
                <h6>Couverture-toiture</h6>
              </li>
              <li>
                <h6>Jardin et extérieur</h6>
              </li>
              <li>
                <h6>Electricité</h6>
              </li>
              <li>
                <h6>Isolation</h6>
              </li>
              <li>
                <h6>Peinture</h6>
              </li>
              <li>
                <h6>Plomberie</h6>
              </li>
            </ul>

            <ul>
              <li>
                <h6>Façadier</h6>
              </li>
              <li>
                <h6>Maçon</h6>
              </li>
              <li>
                <h6>Terrassiers</h6>
              </li>
              <li>
                <h6>carreleurs</h6>
              </li>
              <li>
                <h6>Plaquistes - Plâtriers</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="horaire">
          <h3>Les horaires</h3>
          <div className="list-horaire">
            <ul>
              <li>✅ Lun 10h-19h</li>
              <li>✅ Mar 10h-19h</li>
              <li>✅ Mer 10h-19h</li>
              <li>✅ jeu 10h-19h</li>
              <li>✅ Ven 10h-19h</li>
              <li>✅ Sam 10h-19h</li>
              <li>❌ Dim fermé</li>
            </ul>
          </div>
        </div>

        <div className="contact">
          <span>0694 00 00 93</span>
          <button>Contactez-nous 📞</button>
        </div>
      </footer>
    </div>
  );
}
