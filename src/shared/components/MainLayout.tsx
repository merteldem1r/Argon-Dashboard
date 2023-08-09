import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./UI/Header/Header.tsx";
import { Footer } from "./UI/Footer/Footer.tsx";
import { SideMenu } from "./Navigation/SideMenu.tsx";

export function MainLayout() {
  return (
    <React.Fragment>
      <div className="blue-layout"></div>

      <SideMenu />

      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </React.Fragment>
  )
}