import React from "react";
import { Show } from "../../blocks/Show";

export const UsersList = ({ users = [], extra, order, size = "md" }) => {
  const sizeClass = size === "lg" ? "h-[38px] w-[38px]" : "h-[24px] w-[24px]";

  return (
    <div className="relative flex">
      {users.map((user, index) => {
        const zIndex = order === "reverse" ? (5 - index) * 10 : index * 10;

        return (
          <div
            className={`relative `}
            style={{
              left: -index * 6,
              zIndex,
            }}
          >
            <img
              src={user.imageUrl}
              alt={user.username}
              className={sizeClass}
            />
          </div>
        );
      })}
      <Show iff={!!extra}>
        <div
          className={`relative bg-red-300 text-red-400 flex items-center justify-center gap-[2px] rounded-[50%] text-[15px] leading-[18px] font-[500] p-[1px] ${sizeClass}`}
          style={{
            left: -36,
            zIndex: order === "reverse" ? 20 : 30,
          }}
        >
          +{extra}
        </div>
      </Show>
    </div>
  );
};
