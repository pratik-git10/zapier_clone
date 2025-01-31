import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-2 px-4 bg-gray-400 mx-2 rounded-b-md">
      <Link href="/">Zapier</Link>
      <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
