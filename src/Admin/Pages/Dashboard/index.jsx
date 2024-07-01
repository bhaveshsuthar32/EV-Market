import React, { useContext } from "react";
import Sidebar from "@Admin/Layouts/Sidebar";
import Header from "@Admin/Layouts/Header";

export default function Dashboard() {

  return (
    <>
      <div className="">
        <Sidebar />
        <Header />
        <div
          className={`bg-white dark:bg-dark-bg text-gray-800 dark:text-dark-text`}
        >
          <h1>This is the dashboard</h1>
        </div>
      </div>
    </>
  );
}
