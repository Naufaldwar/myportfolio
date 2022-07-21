import React from "react";

function index({ title, city, img, popular }) {
  return (
    <div className="flex relative flex-col">
      <div className="rounded-2xl w-[245px] h-40">
        <img className="rounded-2xl w-full h-full object-cover " src={img} />
      </div>
      {popular === true ? (
        <div className="absolute top-0 right-0   bg-[#FF498B] rounded-tr-xl rounded-bl-xl">
          <h4 className="text-white w-44 h-10 flex items-center justify-center">
            Popular <span className="font-light">Choice</span>
          </h4>
        </div>
      ) : (
        ""
      )}

      <h4 className="text-xl ">{title}</h4>
      <h5 className="text-sm font-light text-gray-300">{city}</h5>
    </div>
  );
}

export default index;
