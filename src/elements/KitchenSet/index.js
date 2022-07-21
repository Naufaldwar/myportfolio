import React from "react";
import Card from "../Card";

function index() {
  const beautyBackyardData = [
    {
      title: "PS Wood",
      city: "Depok, Indonesia",
      img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      popular: false,
    },
    {
      title: "One Five",
      city: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      popular: false,
    },
    {
      title: "Minimal",
      city: "Bogor, Indonesia",
      img: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      popular: true,
    },
    {
      title: "Stays Home",
      city: "Wonosobo, Indonesia",
      img: "https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      popular: false,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">Apartments with kitchen set</h2>
      <div className="flex gap-7">
        {beautyBackyardData.map((data) => (
          <Card
            title={data.title}
            city={data.city}
            img={data.img}
            popular={data.popular}
          />
        ))}
      </div>
    </div>
  );
}

export default index;
