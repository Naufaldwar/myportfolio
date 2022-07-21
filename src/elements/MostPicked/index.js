import React from "react";

function index() {
  const mostPickedData = [
    {
      tittle: "Blue Origin Fams",
      location: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1604809173867-6b6aef726a41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      tittle: "Blue Origin Farms",
      location: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1600612294445-5e1153e3e4a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      tittle: "Blue Origin Farms",
      location: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      tittle: "Blue Origin Farms",
      location: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1597258922039-6f2ea627dc42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      tittle: "Blue Origin Farms",
      location: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1646821197275-17d02e7c1731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80",
    },
  ];
  return (
    <section>
      <h4 className="text-2xl font-medium mb-5">Most Picked</h4>
      <div className="flex gap-x-8">
        <div className="relative grid">
          <img
            src={mostPickedData[0].img}
            className=" w-[21rem] h-[26rem] rounded-xl"
          ></img>
          <div className="absolute self-end grid pl-6 pb-6 text-white">
            <h4 className="text-xl">{mostPickedData[0].tittle}</h4>
            <h4 className="text-sm font-light">{mostPickedData[0].location}</h4>
          </div>
          <div className="absolute top-0 right-0 bg-[#FF498B] rounded-tr-xl rounded-bl-xl">
            <p className="text-white w-44 h-10 flex items-center justify-center">
              $50 per night
            </p>
          </div>
        </div>
        <div className="grid gap-y-6 ">
          <div className="relative grid">
            <img
              src={mostPickedData[1].img}
              className="w-[21rem] h-[12rem] hover:w-[22rem] hover:h-[13rem] hover:object-cover  object-cover rounded-xl"
            ></img>
            <div className="absolute self-end grid pl-6 pb-6 text-white">
              <h4 className="text-xl">{mostPickedData[0].tittle}</h4>
              <h4 className="text-sm font-light">
                {mostPickedData[0].location}
              </h4>
            </div>
            <div className="absolute top-0 right-0   bg-[#FF498B] rounded-tr-xl rounded-bl-xl">
              <p className="text-white w-44 h-10 flex items-center justify-center">
                $50 per night
              </p>
            </div>
          </div>
          <div className="grid gap-y-6">
            <div className="relative grid ">
              <img
                className="w-[21rem] h-[12rem]  rounded-xl object-cover height-full width-full "
                src={mostPickedData[2].img}
              ></img>
              <div className="absolute self-end grid pl-6 pb-6 text-white">
                <h4 className="text-xl">{mostPickedData[0].tittle}</h4>
                <h4 className="text-sm font-light">
                  {mostPickedData[0].location}
                </h4>
              </div>
              <div className="absolute top-0 right-0   bg-[#FF498B] rounded-tr-xl rounded-bl-xl">
                <p className="text-white w-44 h-10 flex items-center justify-center">
                  $50 per night
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-y-6">
          <div className="relative grid">
            <img
              className="w-[21rem] h-[12rem]  rounded-xl"
              src={mostPickedData[3].img}
            ></img>
            <div className="absolute self-end grid pl-6 pb-6 text-white">
              <h4 className="text-xl">{mostPickedData[0].tittle}</h4>
              <h4 className="text-sm font-light">
                {mostPickedData[0].location}
              </h4>
            </div>
            <div className="absolute top-0 right-0   bg-[#FF498B] rounded-tr-xl rounded-bl-xl">
              <p className="text-white w-44 h-10 flex items-center justify-center">
                $50 per night
              </p>
            </div>
          </div>
          <div className="grid gap-y-6">
            <div className="relative grid">
              <img
                className="w-[21rem] h-[12rem]  rounded-xl"
                src={mostPickedData[4].img}
              ></img>
              <div className="absolute self-end grid pl-6 pb-6 text-white">
                <h4 className="text-xl">{mostPickedData[0].tittle}</h4>
                <h4 className="text-sm font-light">
                  {mostPickedData[0].location}
                </h4>
              </div>
              <div className="absolute top-0 right-0   bg-[#FF498B] rounded-tr-xl rounded-bl-xl">
                <p className="text-white w-44 h-10 flex items-center justify-center">
                  $50 per night
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
