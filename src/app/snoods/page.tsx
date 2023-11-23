import React from "react";
import ItemCard from "../components/itemCard";

const snoodDetails = [
  {
    name: "sample snood name",
    price: 50,
    imageLocation: "/imgs/items/samplesnood.jpeg",
  },
  {
    name: "sample snood name",
    price: 50,
    imageLocation: "/imgs/items/samplesnood.jpeg",
  },
  {
    name: "sample snood name",
    price: 50,
    imageLocation: "/imgs/items/samplesnood.jpeg",
  },

  {
    name: "sample snood name",
    price: 50,
    imageLocation: "/imgs/items/samplesnood.jpeg",
  },
  {
    name: "sample snood name",
    price: 50,
    imageLocation: "/imgs/items/samplesnood.jpeg",
  },
];

const page = () => {
  return (
    <div className="flex-col my-20">
      <div className="flex flex-wrap justify-center">
        {snoodDetails.map((snood) => (
          <ItemCard {...snood} />
        ))}
      </div>
    </div>
  );
};

export default page;
