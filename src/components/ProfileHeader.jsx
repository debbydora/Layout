import React from "react";

import { IoPersonAddSharp } from "react-icons/io5";

const ProfileHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center sticky z-50   px-8 py-4 w-full font-quicksand bg-white">
      <div className="flex items-center gap-2">
        <p className="font-bold text-textBlack text-[24px]">Welcome</p>
      </div>
      <div className="flex items-center md:gap-x-6 gap-x-4">
        <div className="flex md:gap-x-2 gap-x-4 items-center">
          <div className="h-[44px] w-[44px] md:ml-0 -ml-3">
            <IoPersonAddSharp className="h-[44px] w-[44px] rounded-full border-[#F2FAFF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
