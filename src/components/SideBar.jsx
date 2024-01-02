import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const sideBarArr = [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <RxDashboard />,
      },
      {
        title: "Settings",
        path: "/settings",
        icon: <IoSettingsOutline />,
      },
    ];
     const defaultClass =
       "flex w-full justify-start items-center gap-[16px]  my-[2rem] pl-4 py-2 text-base hover:bg-lightBlue cursor-pointer transition-all duration-[200ms] ease-in-out transform hover:scale-[.98]";
  return (
    <div className="bg-white  w-[20%] hidden top-0 sticky lg:block h-screen box-border py-[3rem] px-6 shadow-custom-light ">
      <div className="mt-16">
        {sideBarArr.map((barItem, index) => (
            <NavLink
                key={index}
            to={barItem.path}
            className={({ isActive }) =>
              isActive
                ? `${defaultClass} text-primary border-l-4 border-primary h-[48px] bg-lightBlue rounded-lg`
                : defaultClass
            }
          >
            {" "}
            {barItem.icon}
            <span className="text-sm">{barItem.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideBar
