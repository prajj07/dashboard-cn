/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  LogOut,
  LayoutDashboard,
  UsersRound,
  Settings,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";


export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {mobileWidth && (
        <div className="absolute left-4 top-4">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <Menu />
          </Button>
        </div>
      )}
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight
              className={`transition-transform ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      )}
      <Avatar className="left-2">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <Nav
        isCollapsed={mobileWidth ? isCollapsed : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },

          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
      <div
        className={`absolute bottom-10 ${
          isCollapsed ? "left-2" : "left-4"
        } transition-all duration-300`}
      >
        <Button
          variant="ghost"
          onClick={() => console.log("Logout")}
          className="flex items-center"
        >
          <LogOut
            className={`${
              isCollapsed ? "mr-0" : "mr-2"
            } transition-all duration-300`}
          />
          {!isCollapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
}
