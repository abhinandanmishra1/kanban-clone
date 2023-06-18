import React, { useMemo } from "react";
import { Tag } from "./elements/Tag";
import { BsThreeDots } from "react-icons/bs";
import { FolderIcon, MessageIcon } from "../../assets";
import { UsersList } from "../users/UsersList";

export const TaskCard = ({ task, type }) => {
  const users = useMemo(() => {
    return [...task.users].slice(0, 3);
  }, [task.users]);

  const extra = task.users.length > 3 ? task.users.length - 3 : 0;

  return (
    <div
      className="w-full bg-white p-[20px] rounded-[16px] flex flex-col gap-[32px]"
      draggable
      onDragStart={(e) =>
        e.dataTransfer.setData(
          "item",
          JSON.stringify({
            task,
            type,
          })
        )
      }
    >
      <div className="flex flex-col gap-[6px]">
        <div className="flex justify-between items-center">
          <Tag tag={task.tag} />
          <BsThreeDots />
        </div>
        <h3 className="font-[600] text-[18px] leading-[22px] text-neutral-darkest">
          {task.title}
        </h3>
        <p className="text-neutral-light font-[400] text-[12px] leading-[15px]">
          {task.description}
        </p>
      </div>
      <div className="flex justify-between">
        <UsersList users={users} extra={extra} order="reverse" />
        <div className="flex gap-[8px]">
          <div className="flex items-center gap-[2px]">
            <img src={MessageIcon} alt="" className="h-[15px] w-[15px]" />
            <p className="text-neutral-light text-[12px] leading-[15px]">
              {task.comments.length} Comments
            </p>
          </div>
          <div className="flex items-center gap-[2px]">
            <img src={FolderIcon} alt="" className="h-[15px] w-[15px]" />
            <p className="text-neutral-light text-[12px] leading-[15px]">
              {task.files.length} Files
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
