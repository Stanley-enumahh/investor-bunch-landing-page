import NFTimg from "../assets/10.png";
import URUX from "../assets/2.png";
import TECHTIPS from "../assets/4.png";
import JOINUS from "../assets/9.png";
import { FaStar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuTicket } from "react-icons/lu";

export function SimilarEvents() {
  return (
    <div className="w-full  items-center flex  flex-col h-fit ">
      <div className="flex flex-col gap-[22px] w-[90%]">
        <h1 className="font-bold">Explore Similar events</h1>
        <div className="flex flex-row gap-4">
          <Event>
            <div className="flex cursor-grab dark:bg-black flex-col gap-4 w-[288px] h-[387px] bg-white rounded-2xl p-4 dark:bg-black">
              <img
                src={NFTimg}
                alt="banner image"
                className="w-[248px] h-[248px] object-cover rounded-md"
              />
              <div className="flex flex-row items-start">
                <h3 className="text-xl">Pudgy Penguins - Los Angeles</h3>
                <FaStar className="text-[#F7931A] text-2xl mt-1" />
              </div>

              <div className="flex flex-row justify-between text-gray-400 text-[14px]">
                <span className="flex flex-row gap-2 items-center">
                  <FaRegCalendarAlt /> <p>TUE. 20 NOV | 4:00PM</p>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <LuTicket /> <p>Free</p>
                </span>
              </div>
            </div>
          </Event>
          <Event>
            <div className="flex cursor-grab dark:bg-black flex-col gap-4 w-[298px] h-[387px] bg-white rounded-2xl p-4">
              <img
                src={URUX}
                alt=" banner image"
                className="w-[248px] h-[248px] object-cover rounded-md"
              />
              <div className="flex flex-row items-start">
                <h3 className="text-xl">Pudgy Penguins - Los Angeles</h3>
                <FaStar className="text-[#F7931A] text-2xl mt-1" />
              </div>

              <div className="flex flex-row justify-between text-gray-400 text-[14px]">
                <span className="flex flex-row gap-2 items-center">
                  <FaRegCalendarAlt /> <p>TUE. 20 NOV | 4:00PM</p>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <LuTicket /> <p>Free</p>
                </span>
              </div>
            </div>
          </Event>
          <Event>
            <div className="flex cursor-grab dark:bg-black flex-col gap-4 w-[298px] h-[387px] bg-white rounded-2xl p-4">
              <img
                src={TECHTIPS}
                alt=" banner image"
                className="w-[248px] h-[248px] object-cover rounded-md"
              />
              <div className="flex flex-row items-start">
                <h3 className="text-xl">Pudgy Penguins - Los Angeles</h3>
                <FaStar className="text-[#F7931A] text-2xl mt-1" />
              </div>

              <div className="flex flex-row justify-between text-gray-400 text-[14px]">
                <span className="flex flex-row gap-2 items-center">
                  <FaRegCalendarAlt /> <p>TUE. 20 NOV | 4:00PM</p>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <LuTicket /> <p>Free</p>
                </span>
              </div>
            </div>
          </Event>
          <Event>
            <div className="flex cursor-grab dark:bg-black flex-col gap-4 w-[298px] h-[387px] bg-white rounded-2xl p-4">
              <img
                src={JOINUS}
                alt=" banner image"
                className="w-[248px] h-[248px] object-cover rounded-md"
              />
              <div className="flex flex-row items-start">
                <h3 className="text-xl">Pudgy Penguins - Los Angeles</h3>
                <FaStar className="text-[#F7931A] text-2xl mt-1" />
              </div>

              <div className="flex flex-row justify-between text-gray-400 text-[14px]">
                <span className="flex flex-row gap-2 items-center">
                  <FaRegCalendarAlt /> <p>TUE. 20 NOV | 4:00PM</p>
                </span>
                <span className="flex flex-row gap-2 items-center">
                  <LuTicket /> <p>Free</p>
                </span>
              </div>
            </div>
          </Event>
        </div>
      </div>
    </div>
  );
}

function Event({ children }) {
  return children;
}
