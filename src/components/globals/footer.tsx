import React from "react";
import MaxWidthWrapper from "../wrappers/max-width-wrapper";

export default function Footer() {
  return (
    <div className="bg-primary dark:bg-transparent py-8 h-full w-full flex flex-col justify-between overflow-hidden">
      <MaxWidthWrapper>
        <Section1 />
        <Section2 />
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
    <div className="flex justify-between items-end">
      <h1 className="text-[14vw] averta-bold leading-[0.8] mt-10 text-white">
        Sulav Baral
      </h1>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
