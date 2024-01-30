import React from "react";
import { BOARD } from "@/data/static/Board";
import Profile from "./Profile";
import Betty from "../../../public/svgs/board/Betty.svg";
import Image from "next/image";
import commVine1 from "../../../public/svgs/team/commVine1.svg";
import commVine2 from "../../../public/svgs/team/commVine2.svg";
import leadMushroom from "../../../public/svgs/team/leadMushroom.svg";
import leadLeafR from "../../../public/svgs/team/leadLeafR.svg";
import leadLeafL from "../../../public/svgs/team/leadLeafL.svg";
import leadBear from "../../../public/svgs/team/leadBear.svg";

function Leads() {
  return (
    <div className="bg-design-green-100 relative">
      <div className="h-1/6 bg-design-green-100 md:h-2/6 flex flex-col items-center w-10/12 mx-auto">
        <div className="text-white flex-col font-workSans flex w-full h-2/6">
          {/* <div className=" "> */}
          <p className="text-center justify-center md:justify-start md:items-start font-bold text-5xl md:text-6xl lg:text-6xl mb-0">
            MEET THE TEAM
          </p>
          <br />
          <div className="bg-red-500 relative text-center text-design-brown-400 font-bold text-3xl lg:text-4xl">
            <p>Leads</p>
            <Image src={commVine1} className="absolute left-0 top-0" />
            <Image src={commVine2} className="absolute right-0 top-0" />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center text-white w-full">
          {BOARD[0].map((item, index) => (
            <Profile
              key={index}
              image={Betty}
              name={item.name}
              position={item.position}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center text-white w-full">
          {BOARD[1].map((item, index) => (
            <Profile
              key={index}
              image={Betty}
              name={item.name}
              position={item.position}
            />
          ))}
        </div>
      </div>

      {/* Absolute images and pics */}
      <Image src={leadMushroom} className="absolute left-0 top-[15%]" />
      <Image src={leadLeafR} className="absolute right-0 top-[15%]" />
      <Image src={leadLeafL} className="absolute left-0 bottom-0" />
      <Image src={leadBear} className="absolute right-0 bottom-0" />
    </div>
  );
}

export default Leads;