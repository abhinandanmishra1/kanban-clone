import React, { useMemo } from "react";
import { GrFormEdit } from "react-icons/gr";
import { IoLinkSharp } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
import { BiFilterAlt } from "react-icons/bi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi";
import { TbLayoutList } from "react-icons/tb";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { HiOutlineViewGrid } from "react-icons/hi";

import Select from "react-select";
import { data } from "../../data";
import { UsersList } from "../users/UsersList";

export const ProjectDescription = () => {
  const users = useMemo(() => {
    const users = [];
    const columns = ["todo", "progress", "done"];
    const visitedUsers = new Map();

    columns.forEach((column) => {
      data[column].map((task) =>
        task.users.forEach((user) => {
          if (!visitedUsers.has(user.username)) {
            visitedUsers.set(user.username, true);
            users.push(user);
          }
        })
      );
    });

    return users;
  }, []);

  const slicedUsers = users.slice(0, 3);
  const extra = users.length - slicedUsers.length;

  return (
    <div className="h-[220px] flex flex-col w-full gap-[40px]">
      <div className="flex justify-between gap-[10px]">
        <div className="flex gap-[10px] items-center">
          <h2 className="text-neutral-darkest font-[600] text-[46px] leading-[56px]">
            Mobile App
          </h2>
          <div className="h-[25px] w-[25px] p-[2px] bg-blue-100 flex justify-center items-center rounded-lg">
            <GrFormEdit className="stroke-blue " />
          </div>
          <div className="h-[25px] w-[25px] p-[2px] bg-blue-100 flex justify-center items-center rounded-lg">
            <IoLinkSharp className="stroke-blue" />
          </div>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="flex gap-[8px] items-center text-blue-300">
            <div className="h-[15px] w-[15px] p-[2px] bg-blue-100 flex justify-center items-center rounded">
              <BiPlus className="stroke-blue" />
            </div>{" "}
            Invite
          </div>
          <UsersList users={users} size="lg" extra={extra} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-[10px]">
          <div>
            <Select
              classNamePrefix="select"
              placeholder={
                <div className="flex gap-[5px] items-center">
                  <BiFilterAlt /> Filter
                </div>
              }
            />
          </div>
          <div>
            <Select
              classNamePrefix="select"
              placeholder={
                <div className="flex gap-[5px] items-center">
                  <IoCalendarNumberOutline /> Today
                </div>
              }
            />
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="flex gap-[8px] items-center border-[1px] rounded-[6px] px-[12px] py-[8px] border-neutral-light text-neutral-light">
            <HiOutlineUsers />
            Share
          </div>
          <div className="h-[28px] border-[1px] border-neutral-light"></div>
          <div className="w-[40px] h-[40px] flex items-center justify-center bg-blue-300 rounded-[6px] text-white">
            <TfiLayoutColumn2Alt className="rotate-[90deg]" />
          </div>
          <div className="text-neutral-light w-[40px] h-[40px] flex items-center justify-center">
            <HiOutlineViewGrid style={{ height: 25 }} />
          </div>
        </div>
      </div>
    </div>
  );
};
