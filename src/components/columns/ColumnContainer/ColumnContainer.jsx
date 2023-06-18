import React, { useState } from "react";

export const ColumnContainer = ({
  children,
  onDragLeave,
  onDragStart,
  type,
  setTasks,
}) => {
  const [borderClass, setBorderClass] = useState("");
  return (
    <div
      onDragEnter={(e) => {
        console.log("onDragEnter", type);
        setBorderClass("border-[2px] border-green-200");
      }}
      onDragLeave={(e) => {
        console.log("onDragLeave", type);
        setBorderClass("");
      }}
      onDragOver={(e) => {
        e.preventDefault();
        console.log("onDragOver", type);
        setBorderClass("border-[2px] border-green-200");
      }}
      onDrop={(e) => {
        const item = e.dataTransfer.getData("item");
        if (!item) return;
        console.log(item);
        const itemData = JSON.parse(item);
        const { task, type: startType } = itemData;
        if (startType === type) return;
        console.log("onDrop", startType, type);
        setTasks((tasks) => {
          const newTasks = { ...tasks };
          newTasks[startType] = newTasks[startType].filter(
            (t) => t.id !== task.id
          )
          newTasks[type] = [...newTasks[type], task];
          return newTasks;
        });

        setBorderClass("");
      }}
      className={`grow min-w-[350px] max-w-[500px] rounded-tl-[16px] rounded-tr-[16px]
     bg-neutral-dark p-6 flex flex-col gap-[20px] ${borderClass}`}
    >
      {children}
    </div>
  );
};
