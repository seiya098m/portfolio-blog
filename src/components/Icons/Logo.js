import Link from "next/link";

const Logo = ({ height }) => {
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
        <img src="images/logo-o.png" alt="logo" className={`${height}`} />
        <img
          src="images/logo-s-removebg-preview.png"
          alt="logo"
          className={`${height} -ml-5 w-auto`}
        />
      </Link>
    </>
  );
};

export default Logo;
