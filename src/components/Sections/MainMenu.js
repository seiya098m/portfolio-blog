import Link from "next/link";

export const navigation = [
  { name: "HOME", href: "/" },
  { name: "PROFILE", href: "/profile" },
  { name: "DEV", href: "/dev" },
];

const MainMenu = () => {
  return (
    <nav>
      <ul className="flex gap-x-6">
        {navigation.map((item, index) => (
          <li key={index} className="  ">
            <Link
              href={item.href}
              className="rounded-xl border-2 bg-link p-3 text-sm font-semibold drop-shadow-2xl  duration-200 hover:bg-hover-link active:shadow-none"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
