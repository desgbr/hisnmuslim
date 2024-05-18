import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuIcon from "../icons/MenuIcon";

const Header = () => {
  return (
    <header className="shadow-sm bg-sky-950 text-white py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" width={48} height={48} alt="Logo" />
          <h2>حصن المسلم</h2>
        </Link>
        <div className="flex items-center justify-center gap-2 text-sky-100">
          <span className="pt-1">القائمة</span>
          <MenuIcon className="size-9 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
