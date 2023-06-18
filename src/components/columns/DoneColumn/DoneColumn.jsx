import React from "react";
import { ColumnContainer } from "../ColumnContainer";
import { TaskCard } from "../../cards/TaskCard";

export const DoneColumn = ({ tasks, setTasks }) => {
  return (
    <ColumnContainer type="done" setTasks={setTasks}>
      <div className="flex justify-between">
        <div className="flex gap-[10px] items-center">
          <div className="h-[8px] w-[8px] rounded-[50%] bg-green-200"></div>
          <div>Completed</div>
          <div className="text-neutral-lighter bg-neutral-lightest h-[20px] w-[20px] rounded-[50%] flex items-center justify-center">
            <p className="text-[12px] leading-[15px] font-[500]">
              {tasks.length}
            </p>
          </div>
        </div>
      </div>
      <div className="border-[2px] border-green-200"></div>
      <div className="flex flex-col gap-[20px]">
        {tasks.map((task) => {
          return <TaskCard task={task} key={crypto.randomUUID()} type="done" />;
        })}
      </div>
    </ColumnContainer>
  );
};
