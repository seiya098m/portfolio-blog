import { useState } from "react";
import Link from "next/link";
import Logo from "../Icons/Logo";
import HamburgerMenu from "../Sections/HamburgerMenu";
import MainMenu from "../Sections/MainMenu";

export default function Example() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="">
          <Logo height="h-16" />
        </div>
        <div className="hidden  lg:block">
          <MainMenu />
        </div>
        <div className="block  lg:hidden">
          <HamburgerMenu />
        </div>
        {/* ログインリンク */}
        {/* <div className="hidden lg:flex">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </div>
    </header>
  );
}
