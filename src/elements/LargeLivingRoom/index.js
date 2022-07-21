import React from "react";
import Card from "../Card";

function index() {
  const beautyBackyardData = [
    {
      title: "Green Park",
      city: "Tangerang, Indonesia",
      img: "https://images.unsplash.com/photo-1612965607446-25e1332775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5ncm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      popular: false,
    },
    {
      title: "Podo Wae",
      city: "Madiun, Indonesia",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5ncm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      popular: false,
    },
    {
      title: "Silver Rain",
      city: "Bandung, Indonesia",
      img: "https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1311442955?b=1&k=20&m=1311442955&s=170667a&w=0&h=PvAY0gPCnP7-9Fqe35BoUT7CEuZj3CIZrcFCBQ3Z5eU=",
      popular: false,
    },
    {
      title: "Cashville",
      city: "Kemang, Indonesia",
      img: "https://media.istockphoto.com/photos/wonderful-open-floorplan-in-new-luxury-home-with-black-trim-windows-picture-id1276567523?b=1&k=20&m=1276567523&s=170667a&w=0&h=sVT3Tu7I90ZIQRiiayo9TjnfS5eV62nPLbriqTORxcs=",
      popular: true,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">
        Hotels with large living room
      </h2>
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
