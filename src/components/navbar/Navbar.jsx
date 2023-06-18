import React from "react";
import {
  Calendar2,
  CloseSidebarIcon,
  Logo,
  MessageQuestionIcon,
  NotificationIcon,
  UserIcon,
} from "../../assets";
import { BsSearch } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="h-[88px] border-b-[1px] border-gray-100 flex w-full justify-between px-2">
      <div className="flex gap-[30px]">
        <div className="w-[225px] flex border-r-[1px] border-gray-100 px-[10px] gap-[40px] items-center">
          <div className="flex gap-[5px]">
            <div>
              <img src={Logo} className="w-[100%]" alt="" />
            </div>
            <h3 className="text-neutral-darkest font-[600] text-[20px] leading-[24px]">
              Project M.
            </h3>
          </div>
          <div className="h-[20px] w-[20px] cursor-pointer">
            <img src={CloseSidebarIcon} className="h-full w-full" alt="" />
          </div>
        </div>
        <div className="flex items-center w-[300px] py-2">
          <div className="flex items-center gap-[10px] bg-neutral-dark p-3 rounded-[6px]">
            <BsSearch />
            <input
              type="text"
              className="w-full rounded-[6px] outline-none bg-transparent"
              placeholder="Search for anything..."
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] items-center py-2">
        <div className="flex gap-[10px]">
          <div>
            <img src={Calendar2} alt="" />
          </div>
          <div>
            <img src={MessageQuestionIcon} alt="" />
          </div>
          <div>
            <img src={NotificationIcon} alt="" />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-col gap-[5px]">
            <p className="font-[400] text-[16px] leading-[19px] text-neutral-darkest">
              Abhinandan Mishra
            </p>
            <span className="font-[400] text-[14px] leading-[17px] text-neutral-light self-end">
              UP, India
            </span>
          </div>
          <div className="text-gray-200 flex gap-[8px] items-center">
            <img
              src={UserIcon}
              alt=""
              className="h-[30px] w-[30px] rounded-[50%]"
            />
            <BsChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};
