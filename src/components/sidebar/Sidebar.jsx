import React, { useState } from "react";
import {
  CategoryIcon,
  MessageIcon,
  SettingIcon,
  TaskSquareIcon,
  UsersIcon,
} from "../../assets";
import { CiSquarePlus } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { Thought } from "./Thought";

export const Sidebar = () => {
  const sidebarData = [
    {
      name: "Home",
      imageUrl: CategoryIcon,
    },
    {
      name: "Messages",
      imageUrl: MessageIcon,
    },
    {
      name: "Tasks",
      imageUrl: TaskSquareIcon,
    },
    {
      name: "Members",
      imageUrl: UsersIcon,
    },
    {
      name: "Settings",
      imageUrl: SettingIcon,
    },
  ];

  const dummmyProjects = [
    {
      name: "Mobile App",
      color: "#7AC555",
    },
    {
      name: "Website Redesign",
      color: "#FFA500",
    },
    {
      name: "Design System",
      color: "#E4CCFD",
    },
    {
      name: "Wireframes",
      color: "#76A5EA",
    },
  ];

  const [projects, setProjects] = useState(dummmyProjects);

  return (
    <div className="w-[225px] border-r-[1px] border-gray-100 py-[32px] px-[16px] flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[32px] px-2">
        {sidebarData.map(({ name, imageUrl }) => {
          return (
            <div className="flex gap-[16px]">
              <img src={imageUrl} alt="" />
              <p className="text-neutral-light">{name}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full border-[1px] border-gray-100"></div>
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-between items-center text-neutral-light px-2">
          <p className="font-[700] text-[12px] leading-[15px] uppercase">
            My Projects
          </p>
          <CiSquarePlus />
        </div>
        <div className="flex flex-col gap-[20px]">
          {projects.map((project) => {
            return (
              <div className="flex justify-between items-center hover:bg-blue-100 cursor-pointer p-2 rounded-[6px]">
                <div className="flex gap-[10px] items-center">
                  <div
                    className="h-[8px] w-[8px] rounded-[50%]"
                    style={{ backgroundColor: project.color }}
                  ></div>
                  <div>{project.name}</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/*  */}
      <Thought />
    </div>
  );
};
