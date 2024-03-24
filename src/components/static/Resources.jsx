import React from "react";
import Resource from "./Resource";
import resource1 from "@/public/svgs/support/figma.webp";
import resource2 from "@/public/svgs/support/dribble.webp";
import resource3 from "@/public/svgs/support/miro.webp";
import Image from "next/image";
import river from "@/public/svgs/river.svg";

const Resources = () => {
  return (
    <div className="flex font-workSans flex-col bg-[#D3E6EC] relative">
      <Image src={river} alt="river" className=" w-screen " />
      <div className="flex flex-col items-center justify-center absolute bottom-0 bg-gradient-to-b from-[#0D6F73] to-[#034444]">
        <div className="flex font-bold text-2xl lg:text-5xl text-white lg:mb-8 justify-end items-end">
          RESOURCES
        </div>
        <div className="grid grid-cols-3 justify-center w-8/12 text-white mt-12 gap-8">
          <Resource
            title="Figma"
            description="A tool for designing and building prototypes for user interfaces."
            image={resource1}
          />
          <Resource
            title="Dribble"
            description="An online platform for designers to find and share inspirations!"
            image={resource2}
          />
          <Resource
            title="Mico"
            description="A remote collaboration tool to build large scale design projects."
            image={resource3}
          />
        </div>
      </div>
    </div>
  );
};

export default Resources;
