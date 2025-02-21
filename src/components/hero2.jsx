import { BsChatRightFill } from "react-icons/bs";
import map from "../assets/Rectangle.png";

export function Hero2() {
  return (
    <div className="w-full h-fit flex justify-center">
      <div className="w-[90%] flex flex-row justify-between">
        <Organizer />
        <Description />
      </div>
    </div>
  );
}

function Organizer() {
  return (
    <div className="flex flex-col w-[490px] gap-6">
      <h1 className="font-bold">Organized by</h1>
      <div className="flex flex-row justify-between rounded-2xl dark:bg-[#545454] bg-gray-300 p-4">
        <span className="flex flex-col gap-1">
          <h1>NHD FOUNDATION</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">300 likes</p>
        </span>
        <span className="flex flex-row gap-6 items-center">
          <p className="text-sm">Details</p>
          <button className="bg-gradient-to-r from-black to-[#a4a4a4] rounded-md px-7 h-fit text-neutral-200 py-2 hover:opacity-90 transition-all duration-200 cursor-pointer dark:to-[#a4a4a4] dark:from-white dark:text-black text-sm font-semibold">
            Like
          </button>
        </span>
      </div>

      {/* Tags */}

      <div className="w-full flex flex-col gap-5">
        <h1 className="font-bold">Tags</h1>
        <ul className="flex flex-row flex-wrap gap-4 text-sm w-full">
          <li className="px-2 py-1 bg-neutral-100 rounded-xl dark:bg-[#343434] dark:text-neutral-200">
            random
          </li>
          <li className="px-2 py-1 bg-neutral-100 rounded-xl dark:bg-[#343434] dark:text-neutral-200">
            events
          </li>
          <li className="px-2 py-1 bg-neutral-100 rounded-xl dark:bg-[#343434] dark:text-neutral-200">
            in person
          </li>
          <li className="px-2 py-1 bg-neutral-100 rounded-xl dark:bg-[#343434] dark:text-neutral-200">
            investor
          </li>

          <li className="px-2 py-1 bg-neutral-100 rounded-xl dark:bg-[#343434] dark:text-neutral-200">
            brunch
          </li>
          <li className="px-2 py-1 bg-neutral-100 rounded-xl dark:bg-[#343434] dark:text-neutral-200">
            december
          </li>
          <li className="px-2 py-1 bg-neutral-100 rounded-xl dark:bg-[#343434] dark:text-neutral-200">
            new
          </li>
        </ul>
      </div>

      <div className="w-full flex flex-row border gap-4 dark:bg-[#343434] border-gray-300 dark:border-gray-500 rounded-2xl p-3 py-5">
        <span className="bg-gradient-to-r from-black to-[#a4a4a4] dark:to-[#a4a4a4] dark:from-white rounded-full p-3">
          <BsChatRightFill className="text-white dark:text-black" size={22} />
        </span>
        <input
          type="text"
          name=""
          id=""
          placeholder="Send a message to other attendees"
          className="text-sm text-gray-600 dark:text-white w-[300px] outline-none"
        />
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="flex flex-col gap-6 w-[620px]">
      <h1 className="font-bold">Event Description</h1>
      <p className="text-sm text-justify dark:text-neutral-400">
        The World Art Expo is a premier international event bringing together
        artists, collectors, and enthusiasts from around the globe. Hosted at
        the iconic Louvre Museum, this three-day expo will showcase contemporary
        art, sculptures, digital art installations, and exclusive art
        collections. There will be panel discussions, workshops led by world.
      </p>
      <h1 className="font-bold mt-3">Locate</h1>
      <img src={map} alt="location" className="object-cover" />
    </div>
  );
}
