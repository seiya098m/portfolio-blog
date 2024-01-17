import Link from "next/link";
import Image from "next/image";
import autoprefixer from "autoprefixer";

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex items-center">
        {/* <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://em-content.zobj.net/source/telegram/386/face-in-clouds_1f636-200d-1f32b-fe0f.webp"
              alt=""
            /> */}
        {/* <h1 className="text-font-color text-2xl font-bold">SAMPLE</h1> */}
        <Image src="/images/logo-o.png" width={100} height={100} alt="logo" />
        <Image
          src="/images/logo-s-removebg-preview.png"
          width={100}
          height={100}
          alt="logo"
          className="-ml-5"
        />
      </Link>
    </>
  );
};

export default Logo;
