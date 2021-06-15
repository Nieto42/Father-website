import Image from "next/image";

export default function Partner() {
  return (
    <div className="partner">
      <h3>Ils nous font confiance à SLM</h3>
      <div className="image-partner">
        <div className="image">
          <Image
            src="/home/partner/logo-action-sociale.svg"
            alt="logo de action sociale a saint laurent du maroni"
            width="72"
            height="72"
            quality={100}
          ></Image>
        </div>
        <div className="image">
          <Image
            src="/home/partner/logo-mairie_st_laurent.jpeg"
            alt="Logo de la mairie de saint laurent du maroni"
            width="72"
            height="72"
            className="img"
            quality={100}
          ></Image>
        </div>
        <div className="image">
          <Image
            src="/home/partner/logo_DEAL_Guyane.jpeg"
            alt="logo de action sociale a saint laurent du maroni"
            width="72"
            height="72"
            quality={100}
          ></Image>
        </div>
        {/* <Image
          src="/home/partner/logo_DEAL_Guyane.jpeeg"
          alt="logo de action sociale a saint laurent du maroni"
          width="64"
          height="64"
          quality={100}
        ></Image> */}
      </div>
    </div>
  );
}
