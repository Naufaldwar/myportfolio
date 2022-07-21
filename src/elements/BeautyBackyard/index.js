import React from "react";
import Card from "../Card";

function index() {
  const beautyBackyardData = [
    {
      title: "Tabby Town",
      city: "Gunung Batu, Indonesia",
      img: "https://images.unsplash.com/photo-1601560896164-834d6f61ea66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhY2t5YXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      popular: true,
    },
    {
      title: "Anggana",
      city: "Bogor, Indonesia",
      img: "https://images.unsplash.com/photo-1624018171446-c4f0b942cf87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJhY2t5YXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      popular: false,
    },
    {
      title: "Seattle Rain",
      city: "Jakarta, Indonesia",
      img: "https://images.unsplash.com/photo-1634316888962-75074307f81c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2t5YXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      popular: false,
    },
    {
      title: "Wodden Pit",
      city: "Wonosobo, Indonesia",
      img: "https://images.unsplash.com/photo-1596641708979-42fafb8a019b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJhY2t5YXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      popular: false,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">Houses with beauty backyard</h2>
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
