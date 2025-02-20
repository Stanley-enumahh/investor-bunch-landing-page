import logo from "../assets/Frame 1618873769.png";
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import profileImg from "../assets/Frame 1618873793.png";
import { useEffect, useState } from "react";

export function TopBar() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  function ToogleDarkmode() {
    setDark((d) => !d);
  }

  useEffect(
    function () {
      if (dark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
    [dark]
  );

  return (
    <div className="flex flex-row gap-2 h-[70px] w-full shadow-lg dark:bg-[#323131] rounded-3xl border dark:border-[#6F6F6F] border-gray-300 bg-[#f8f8f8] justify-between px-3">
      <div className="flex flex-row gap-5 items-center">
        <img src={logo} alt="logo" className="h-[45px] w-[45px] object-cover" />
        <div className="flex flex-row justify-between items-center text-sm rounded-4xl border border-gray-300 dark:border-gray-500 w-[350px] h-[45px] px-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search events"
            className="px-2 py-2 outline-none border-none font-normal "
          />
          <div className="flex flex-row gap-2 h-full items-center">
            <p>Location</p>
            <IoLocationOutline
              size={20}
              className="dark:text-white text-black"
            />
            <CiSearch className="bg-gradient-to-r from-gray-500 dark:text-black to-black text-white  p-1 rounded-full text-3xl font-bold dark:from-[#9E9E9E] dark:to-white " />
          </div>
        </div>
      </div>

      <ul className=" flex flex-row gap-3 h-full cursor-pointer items-center text-sm">
        <li className="px-2 py-1 hover:border dark:border-white  rounded-md transition-all duration-200">
          Explore events
        </li>
        <li className="px-2 py-1 hover:border dark:border-white border-black rounded-md transition-all duration-200">
          Create events
        </li>
        <li className="px-2 py-1 hover:border dark:border-white  rounded-md transition-all duration-200">
          Communities
        </li>
        <li className="px-2 py-1 hover:border dark:border-white rounded-md transition-all duration-200">
          Calendars
        </li>
        <li className="px-2 py-1 hover:border dark:border-white  rounded-md transition-all duration-200">
          Pricing
        </li>
      </ul>

      <div className="flex flex-row gap-2 items-center">
        <span className="p-2 rounded-full bg-white dark:bg-[#343434] h-fit">
          <IoNotificationsOutline className="text-lg cursor-pointer" />
        </span>

        <span className="bg-white dark:bg-[#343434] rounded-3xl flex flex-row gap-2 h-fit px-3 py-2">
          <button
            onClick={ToogleDarkmode}
            className="p-2 rounded-full cursor-pointer bg-gradient-to-r dark:from-[#9E9E9E] dark:to-white"
          >
            <IoMoonOutline className="text-lg dark:text-black" />
          </button>
          <button className="bg-gradient-to-r from-gray-500 to-black text-white p-2 rounded-full ">
            <MdOutlineWbSunny className="text-lg cursor-pointer" />
          </button>
        </span>
        <img src={profileImg} alt="" className="w-[45px] h-[45px]" />
      </div>
    </div>
  );
}
