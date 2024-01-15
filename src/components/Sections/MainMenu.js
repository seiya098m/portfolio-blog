import Link from "next/link";
import React from "react";

export const navigation = [
  { name: "HOME", href: "/" },
  { name: "PROFILE", href: "/profile" },
  { name: "DEV", href: "/dev" },
];

function MainMenu() {
  return (
    <nav>
      <ul className="flex gap-x-6">
        {navigation.map((item, index) => (
          <li key={index} className="  ">
            <Link
              href={item.href}
              className="bg-link hover:bg-hover-link rounded-xl border-2 p-2 text-sm font-semibold shadow-md duration-200 active:shadow-none"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;
