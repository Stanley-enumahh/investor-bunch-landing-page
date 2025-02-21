import logo from "../assets/Frame 1618873769.png";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

export function Footer() {
  return (
    <footer className="flex flex-col gap-8 w-full items-center border-t border-gray-500 h-[380px]">
      <div className="flex justify-between flex-row w-[85%] py-10 gap-28">
        <div className="flex flex-col gap-8">
          <span className="flex flex-row items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-[50px] h-[50px] object-cover"
            />
            <h1 className="font-bold text-xl  transition-all duration-150">
              Bloc Social
            </h1>
          </span>
          <p className="text-sm">
            Turn events into unforgettable experiences <br /> with Bloc Social
          </p>

          <ul className="flex flex-row gap-4">
            <span className="p-2 rounded-full dark:bg-[#343434] cursor-pointer dark:text-white bg-neutral-100">
              <FaTwitter className="hover:scale-95 duration-200 transition-all" />{" "}
            </span>
            <span className="p-2 rounded-full dark:bg-[#343434] cursor-pointer dark:text-white bg-neutral-100">
              <FaFacebookF className="hover:scale-95 duration-200 transition-all" />
            </span>

            <span className="p-2 rounded-full dark:bg-[#343434] cursor-pointer dark:text-white bg-neutral-100">
              <FaInstagram className="hover:scale-95 duration-200 transition-all" />
            </span>
            <span className="p-2 rounded-full dark:bg-[#343434] cursor-pointer dark:text-white bg-neutral-100">
              <IoLogoGithub className="hover:scale-95 duration-200 transition-all" />
            </span>
          </ul>
        </div>

        <div className="flex flex-col h-full gap-8 text-sm">
          <h1 className="font-bold">Help</h1>
          <ul className="flex flex-col gap-4">
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="font-bold  transition-all duration-150">
            Subscribe to Newsletter
          </h1>
          <div className="h-[56px] flex flex-row">
            <input
              type="text"
              className="w-[350px] h-full text-sm px-5 border border-gray-300 outline-none rounded-tl-lg rounded-bl-lg dark:bg-[#343434] dark:border-none bg-neutral-100 dark:text-neutral-200 text-black  transition-all duration-150"
              placeholder="Enter email address "
            />
            <button className="bg-gradient-to-r dark:to-[#a4a4a4] dark:from-white to-[#a4a4a4] from-black text-neutral-200 px-9 cursor-pointer hover:opacity-80 transition-all duration-200 text-sm h-full justify-center rounded-tr-lg rounded-br-lg dark:text-black ">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[58px] flex justify-center items-center">
        <div className="w-[85%] flex h-full justify-center items-center border-t border-t-gray-500">
          <p className="text-xs">
            © Copyright 2024, All Rights Reserved by bloc digital ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
