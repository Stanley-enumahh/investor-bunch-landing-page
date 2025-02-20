import { useState } from "react";
import "./App.css";
import { TopBar } from "./components/topbar";
import { Hero } from "./components/hero";
import { Hero2 } from "./components/hero2";
import { SimilarEvents } from "./components/similarEvents";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="h-fit w-full flex flex-col gap-20 bg-[#ebebeb] dark:bg-[#1A1a1a] dark:text-white">
      <div className="p-10 w-full flex flex-col gap-14">
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
    <div className="flex flex-col h-fit">
      <Hero />
      <Hero2 />
    </div>
  );
}
