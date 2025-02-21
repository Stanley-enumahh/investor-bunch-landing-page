import { useEffect } from "react";
import "./App.css";
import { TopBar } from "./components/topbar";
import { Hero } from "./components/hero";
import { Hero2 } from "./components/hero2";
import { SimilarEvents } from "./components/similarEvents";
import { Footer } from "./components/footer";

export default function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="h-fit w-full flex flex-col gap-20 bg-[#ebebeb] transition-all duration-150 dark:bg-[#1A1a1a] dark:text-white">
      <div className=" w-full flex flex-col gap-14">
        <TopBar />
        <MainHero />
        <SimilarEvents />
      </div>
      <Footer />
    </div>
  );
}

function MainHero() {
  return (
    <div className="flex flex-col h-fit mt-[160px] px-10">
      <Hero />
      <Hero2 />
    </div>
  );
}
