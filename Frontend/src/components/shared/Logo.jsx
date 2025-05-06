import React from "react";
import { FcTwoSmartphones } from "react-icons/fc";

export const Logo = ({ textSize = null, bg = true }) => {
  return (
    <div
      className={`${bg && "bg-slate-900 shadow rounded"
        } w-full flex justify-center items-center p-2  select-none`}
    >
      <FcTwoSmartphones className="-mr-2" size={45} />
      <span
        className={`${textSize ? textSize : "text-2xl"
          } p-1  text-yellow-400 font-bold`}
      >
        e-BANK
      </span>
    </div>
  );
};
