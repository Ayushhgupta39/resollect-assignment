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
  Menu,
  X,
} from "lucide-react";

export function Sidebar() {
  const [activeTab, setActiveTab] = useState("Portfolio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden p-2">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar content - hidden on mobile unless toggled */}
      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} md:block h-full`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            {sidebarItems.map((item, index) => {
              const isActive = item.label === activeTab;
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className={`flex flex-row px-4 md:px-8 items-center gap-2 md:gap-4 p-3 md:p-4 mx-2 md:mx-4 cursor-pointer ${
                    isActive ? "bg-blue-500 rounded-lg" : "hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setActiveTab(item.label);
                    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                  }}
                >
                  <IconComponent
                    className={isActive ? "text-white" : "text-gray-700"}
                    size={20}
                  />
                  <p
                    className={
                      isActive
                        ? "text-white font-medium text-sm md:text-base"
                        : "text-gray-800 text-sm md:text-base"
                    }
                  >
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row items-center justify-center gap-1 md:gap-2 p-2 md:p-4">
            <p className="text-xs md:text-sm text-gray-500">powered by </p>
            <img
              className="size-12 md:size-16"
              src="https://www.resollect.com/assets/company-logo-BU8PUDQC.png"
              alt="Resollect logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
