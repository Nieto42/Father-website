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
            <button>Call me</button>
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
        </div>
        <div className="services-">
          <h3>Nos services</h3>
          <ul className="List-1">
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

          <ul className="List-2">
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
        <div className="horaire">
          <ul>
            <li></li>
          </ul>
        </div>

        <div className="contact">
          <span>0694 00 00 93</span>
          <button>Call me</button>
        </div>
      </footer>
    </div>
  );
}
