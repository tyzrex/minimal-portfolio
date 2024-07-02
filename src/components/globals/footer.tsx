import React from "react";
import MaxWidthWrapper from "../wrappers/max-width-wrapper";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiGmail,
  SiGithub,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-primary dark:bg-transparent py-8 w-full flex flex-col  justify-center overflow-hidden h-full">
      <MaxWidthWrapper>
        <Section2 />
        <Section1 />
      </MaxWidthWrapper>
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-center mb-20">
      <h1 className="text-[14vw] averta-bold leading-[0.8] mt-10 text-white">
        <span className="dark:text-gradient">Sulav Baral</span>
        <span className="text-accent-red">.</span>
      </h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div>
      <div className="text-3xl flex flex-row items-center justify-center w-full gap-10 text-white">
        <p>Home</p>
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-10 mt-10">
        <SiFacebook size={30} className="text-white" />
        <SiInstagram size={30} className="text-white" />
        <SiX size={30} className="text-white" />
        <SiGmail size={30} className="text-white" />
        <SiGithub size={30} className="text-white" />
      </div>
    </div>
  );
};
