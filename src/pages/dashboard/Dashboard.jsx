import React from "react";
import { Navbar, ProjectDescription, Sidebar } from "../../components";
import { Columns } from "./Columns";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <Navbar />

      <div className=" w-full h-full flex gap-[10px] px-2">
        <Sidebar />
        <div className="flex flex-col gap-[10px] p-2 grow">
          <ProjectDescription />

          <Columns />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
