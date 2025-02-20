import bannerImg from "../assets/Component 160.png";
import { IoLocationOutline } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";
import greenDot from "../assets/Ellipse 5.png";
import { useState } from "react";

export function Hero() {
  const [amtFree, setAmtFree] = useState(1);
  const [amtPaid, setAmtPaid] = useState(1);
  function handleAdd() {
    setAmtFree((s) => s + 1);
  }
  function handleMinus() {
    if (amtFree > 1) setAmtFree((s) => s - 1);
  }

  function handleAddPaid() {
    setAmtPaid((s) => s + 1);
  }
  function handleMinusPaid() {
    if (amtPaid > 1) setAmtPaid((s) => s - 1);
  }
  return (
    <div className="w-full h-[500px] flex justify-center ">
      <div className=" w-[90%]  h-[942px] rounded-lg flex flex-row justify-between">
        <img
          src={bannerImg}
          alt=""
          className="w-[490px] h-[467px] object-cover border border-gray-300 rounded-lg"
        />

        <div className="w-[620px] h-fit flex flex-col gap-5 p-">
          <div className="flex flex-col gap-5 w-full">
            <h1 className="font-bold text-3xl">Investor Brunch - New York</h1>
            <div className="w-full flex flex-row justify-between ">
              <div className="flex flex-row gap-3 items-center">
                <span className="border font-semibold items-center justify-center flex flex-col rounded-xl overflow-hidden border-gray-300 dark:border-gray-600">
                  <h1 className="bg-[#f8f8f8] dark:bg-[#343434] w-full py-1 px-4 text-sm">
                    Sep
                  </h1>
                  <h2 className="text-lg px-4 py-1">22</h2>
                </span>
                <span className="flex flex-col gap-2 text-sm">
                  <p>Wednesday, 22 September</p>
                  <p>07:AM - 10:00 AM GMT+1</p>
                </span>
              </div>

              <div className="flex flex-row gap-3 items-center">
                <span className="border rounded-xl p-4 border-gray-300 dark:border-gray-600">
                  <IoLocationOutline
                    size={30}
                    className="dark:text-white text-black"
                  />
                </span>
                <span className="flex flex-col gap-1 text-sm">
                  <p>23 Rue de Rivoli, 75001 Paris, .</p>
                  <p>France.</p>
                </span>
              </div>
            </div>
          </div>

          <Ticket
            amtFree={amtFree}
            handleAdd={handleAdd}
            handleMinus={handleMinus}
            handleAddPaid={handleAddPaid}
            handleMinusPaid={handleMinusPaid}
            amtPaid={amtPaid}
          />
        </div>
      </div>
    </div>
  );
}

function Ticket({
  handleMinus,
  handleAdd,
  amtFree,
  handleAddPaid,
  handleMinusPaid,
  amtPaid,
}) {
  return (
    <div className="flex flex-col gap-3 w-full bg-[#f8f8f8] dark:bg-black rounded-xl overflow-hidden">
      <h1 className="font-semibold text-lg p-4 rounded-t-xl dark:text-white dark:bg-[#343434]">
        Tickets
      </h1>
      <div className="flex flex-col gap-2 bg-white p-4 dark:bg-black ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="flex flex-row items-center gap-2 font-bold">
              <LuTicket size={23} />
              Free
            </h1>
            <p className="text-xs text-[#AEAEAE]">Ground floor lounge</p>
          </div>

          <div className="flex flex-row gap-7 justify-center items-center">
            <button
              onClick={handleMinus}
              className="h-fit flex justify-between items-center px-[7px] cursor-pointer border rounded-md"
            >
              -
            </button>
            <span className=" font-bold">{amtFree}</span>
            <button
              onClick={handleAdd}
              className="bg-gradient-to-r h-fit cursor-pointer px-[6px] flex justify-center items-center dark:to-white dark:from-[#AEAEAE] dark:text-black text-white from-[#AEAEAE] to-black rounded-md"
            >
              +
            </button>
          </div>
        </div>

        {/* usd */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="flex flex-row items-center gap-2 font-bold">
              <LuTicket size={23} />
              USD 30
            </h1>
            <p className="text-xs text-[#AEAEAE]">Top floor w/DJ</p>
          </div>

          <div className="flex flex-row gap-7 justify-center items-center">
            <button
              onClick={handleMinusPaid}
              className="h-fit flex justify-between items-center px-[7px] cursor-pointer border rounded-md"
            >
              -
            </button>
            <span className=" font-bold">{amtPaid}</span>
            <button
              onClick={handleAddPaid}
              className="bg-gradient-to-r h-fit cursor-pointer px-[6px] flex justify-center items-center dark:to-white dark:from-[#AEAEAE] dark:text-black text-white from-[#AEAEAE] to-black rounded-md"
            >
              +
            </button>
          </div>
        </div>

        <span className="flex flex-row gap-1 text-xs items-center mt-3">
          <img src={greenDot} alt="" className="w-[15px]" />
          <p className="text-[#a4a4a4]">
            This event would be attended in person
          </p>
        </span>
        <button className="bg-gradient-to-r py-3 text-neutral-200 to-[#a4a4a4] from-black rounded-lg mt-2 dark:from-white dark:to-[#AEAEAE] dark:text-black cursor-pointer hover:opacity-90 duration-200 transition-all">
          Reserve Spot
        </button>
      </div>
    </div>
  );
}
