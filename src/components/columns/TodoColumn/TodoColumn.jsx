import React from "react";
import { ColumnContainer } from "../ColumnContainer";
import { BiPlus } from "react-icons/bi";
import { TaskCard } from "../../cards";

export const TodoColumn = ({ tasks, setTasks }) => {
  return (
    <ColumnContainer type="todo" setTasks={setTasks}>
      <div className="flex justify-between">
        <div className="flex gap-[10px] items-center">
          <div className="h-[8px] w-[8px] rounded-[50%] bg-blue-300"></div>
          <div>Todo</div>
          <div className="text-neutral-lighter bg-neutral-lightest h-[20px] w-[20px] rounded-[50%] flex items-center justify-center">
            <p className="text-[12px] leading-[15px] font-[500]">{tasks.length}</p>
          </div>
        </div>
        <div className="h-[20px] w-[20px] p-[2px] bg-blue-100 flex justify-center items-center rounded">
          <BiPlus className="stroke-blue" />
        </div>
      </div>
      <div className="border-[2px] border-blue-300"></div>
      <div className="flex flex-col gap-[20px]">
        {tasks.map((task) => {
          return <TaskCard task={task} key={crypto.randomUUID()} type="todo" />;
        })}
      </div>
    </ColumnContainer>
  );
};
