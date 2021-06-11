import Image from "next/image";

export default function Partner() {
  return (
    <div className="partner">
      <Image
        src="/home/renovation.svg"
        alt="illustration renovation batiment guyanais"
        width="56"
        height="56"
        quality={100}
      ></Image>
    </div>
  );
}
