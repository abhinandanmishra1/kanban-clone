import React from "react";
import { LampIcon } from "../../assets";

export const Thought = () => {
  return (
    <div className="bg-neutral-lightest h-[200px] w-[200px] relative rounded-[16px]">
      <div className="h-[66px] w-[66px] bg-gray-300 absolute left-[65px] top-[-15%] rounded-[50%] flex flex-col justify-center items-center">
        <div className="bg-yellow-400 absolute h-[33px] w-[33px] top-1 blur-lg">
          {" "}
        </div>
        <img
          src={LampIcon}
          alt=""
          className="h-[30px] w-[30px] relative z-[10]"
        />
      </div>
      <div className="p-[20px] pt-[35px] flex flex-col gap-[15px] items-center">
        <h4 className="font-[500] text-[14px] leading-[17px]">Thoughts Time</h4>
        <p className="font-[400] text-[12px] leading-[15px] text-neutral-light text-center">
          We don’t have any notice for you, till then you can share your
          thoughts with your peers.
        </p>
        <div className="bg-white px-4 py-2 rounded-[4px] font-[500] text-[14px] leading-[17px]">
          Write a message
        </div>
      </div>
    </div>
  );
};
