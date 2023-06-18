import React, { useState } from "react";
import { DoneColumn, ProgressColumn, TodoColumn } from "../../components";

import { data } from "../../data";

export const Columns = () => {
  const [tasks, setTasks] = useState(data);
  return (
    <div className="flex gap-[20px] h-full">
      <TodoColumn tasks={tasks.todo} setTasks={setTasks} />
      <ProgressColumn tasks={tasks.progress} setTasks={setTasks} />
      <DoneColumn tasks={tasks.done} setTasks={setTasks}/>
    </div>
  );
};
