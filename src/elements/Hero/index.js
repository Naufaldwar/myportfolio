import React from "react";
import Button from "../Button";
import pictureHero from "../../assets/image/picture-hero.svg";
import iconTraveler from "../../assets/image/icon-traveler.svg";
import iconCamera from "../../assets/image/icon-camera.svg";
import iconLocation from "../../assets/image/icon-location.svg";

function index() {
  const heroData = [
    {
      travelers: 80409,
      treasure: 865,
      cities: 1492,
    },
  ];
  return (
    <section className="flex justify-between">
      <div className="">
        <h1 className="font-bold text-[42px] max-w-[422px]">
          Forget Busy Work, Start Next Vacation
        </h1>
        <h5 className="max-w-[335px] text-gray-300 py-4">
          We provide what you need to enjoy your holiday with family. Time to
          make another memorable moments.
        </h5>
        <Button
          isPrimary
          hasShadow
          className="px-10 py-3 my-4 transition-all hover:scale-105"
        >
          Show Me Now
        </Button>
        <div className="flex gap-8 mt-20">
          <div>
            <img src={iconTraveler}></img>
            <h5>
              {heroData[0].travelers}
              <span className="text-gray-300"> travelers</span>
            </h5>
          </div>
          <div>
            <img src={iconCamera}></img>
            <h5>
              {heroData[0].treasure}
              <span className="text-gray-300"> treasure</span>
            </h5>
          </div>
          <div>
            <img src={iconLocation}></img>
            <h5>
              {heroData[0].cities}
              <span className="text-gray-300"> cities</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="static border-2 border-[#E5E5E5] rounded-b-2xl rounded-tr-2xl rounded-tl-[100px]  w-[559] h-[450] ">
          <div>
            <img
              className="relative bottom-10 right-10 "
              src={pictureHero}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
