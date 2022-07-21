import React from "react";
import Navbar from "../../elements/Navbar";
import Hero from "../../elements/Hero";
import MostPicked from "../../elements/MostPicked";
import Card from "../../elements/Card";
import BeautyBackyard from "../../elements/BeautyBackyard";
import LargeLivingRoom from "../../elements/LargeLivingRoom";
import KitchenSet from "../../elements/KitchenSet";
function Index() {
  return (
    <>
      <div className="px-36 py-5 border-b border-gray-100">
        <Navbar />
      </div>
      <div className="px-36 py-14">
        <Hero />
      </div>
      <div className="px-36 pb-14">
        <MostPicked />
      </div>
      <div className="px-36 pb-14">
        <BeautyBackyard />
      </div>
      <div className="px-36 pb-14">
        <LargeLivingRoom />
      </div>
      <div className="px-36 pb-14">
        <KitchenSet />
      </div>
    </>
  );
}

export default Index;
