"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link, { menuSlide } from "./link";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Photography",
    href: "/photography",
  },
  {
    title: "Stories",
    href: "/stories",
  },
  // {
  //   title: "Projects",
  //   href: "/projects", // Updated to new projects page
  // },
  {
    title: "Visitors Board", // Added visitors board link
    href: "/visitors-board",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export default function NavMenu({
  setIsActive,
}: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-screen xl:w-[40%] bg-primary dark:bg-background fixed top-0 right-0 text-white"
    >
      <div className="flex flex-col justify-between h-full px-10 pb-10 md:pb-20 md:px-20 ">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col gap-4 hero-typography-normal"
        >
          <div className="border-b h-20 md:h-40 flex items-center w-full justify-between mb-20">
            <p className="text-2xl">Navigation</p>

            <Button
              title="Close"
              onClick={() => {
                setIsActive(false);
              }}
              className="p-0 rounded-full"
            >
              <X className="w-10 h-10 rounded-full bg-red-600 p-2 dark:text-white" />
            </Button>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                setIsActive={setIsActive} // Pass setIsActive to close menu on click
              ></Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
