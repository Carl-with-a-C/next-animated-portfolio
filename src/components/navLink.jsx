"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-[#271624] text-[#EFEFDC]"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default navLink;
