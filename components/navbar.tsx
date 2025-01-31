import Link from "next/link";
import React from "react";

const navLinks = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/contact", title: "Contact" },
];
const Navbar = () => {
  return (
    <div className="flex justify-between py-2 px-4 bg-gray-400 mx-2 rounded-b-md items-center">
      <Link href="/" className="font-bold text-xl text-slate-800">
        Zapier
      </Link>

      <div className="flex gap-8">
        {navLinks.map((links, index) => (
          <Link
            key={index}
            href={links.link}
            className="hover:bg-red-100 hover:transition ease-in-out p-1 rounded-md hover:scale-105 hover:shadow-md">
            {links.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
