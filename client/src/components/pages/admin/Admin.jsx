// Admin.js
import React, { useState } from "react";
import AdminNav from "./components/AdminNav";
import DashboardMain from "./components/DashboardMain";
import DashboardSidebar from "./components/DashboardSideBar";

function Admin({ onClick }) {
  return (
    <section className="flex h-screen flex-col bg-sky-100/20 transition-all duration-200 ease-in">
      <header className="sticky top-0 z-50">
        <AdminNav onClick={onClick} />
      </header>
      <section className="flex h-full flex-col l gap-8 py-6 bg-white  sm:justify-center sm:gap-2 md:gap-4">
        <aside className=" h-full flex-1 ">
          <DashboardSidebar />
        </aside>
        <main className="  h-full flex-1 sm:flex-auto ">
          <DashboardMain />
        </main>
      </section>
    </section>
  );
}

export default Admin;
