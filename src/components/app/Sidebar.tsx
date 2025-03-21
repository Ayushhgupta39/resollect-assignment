import { useState } from "react";
import {
  Bell,
  FilePlus,
  LayoutGrid,
  Lock,
  Mail,
  MessageSquare,
  UserRound,
  Users,
  Workflow,
} from "lucide-react";

export function Sidebar() {
  const [activeTab, setActiveTab] = useState("Portfolio"); // Set default active tab to Portfolio

  const sidebarItems = [
    { label: "Dashboard", icon: LayoutGrid },
    { label: "Portfolio", icon: UserRound },
    { label: "Notifications", icon: Bell },
    { label: "Notices", icon: Mail },
    { label: "Auction", icon: MessageSquare },
    { label: "Data Upload", icon: FilePlus },
    { label: "Control Panel", icon: Workflow },
    { label: "User Management", icon: Users },
    { label: "Permissions", icon: Lock },
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        {sidebarItems.map((item, index) => {
          const isActive = item.label === activeTab;
          const IconComponent = item.icon;

          return (
            <div
              key={index}
              className={`flex flex-row px-8 items-center gap-4 p-4  mx-4 cursor-pointer ${
                isActive ? "bg-blue-500 rounded-lg" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(item.label)}
            >
              <IconComponent
                className={isActive ? "text-white" : "text-gray-700"}
              />
              <p
                className={
                  isActive ? "text-white font-medium" : "text-gray-800"
                }
              >
                {item.label}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-center gap-2 p-4">
        <p className="text-sm text-gray-500">powered by </p>
        <img
          className="size-16"
          src="https://www.resollect.com/assets/company-logo-BU8PUDQC.png"
          alt="Resollect logo"
        />
      </div>
    </div>
  );
}
