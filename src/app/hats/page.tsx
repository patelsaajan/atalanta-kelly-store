import React from "react";
import ItemCard from "../components/itemCard";

const hatDetails = [
  {
    name: "sample hat name",
    price: 50,
    imageLocation: "/imgs/items/sampleHat.jpeg",
  },
  {
    name: "sample hat name",
    price: 50,
    imageLocation: "/imgs/items/sampleHat.jpeg",
  },
  {
    name: "sample hat name",
    price: 50,
    imageLocation: "/imgs/items/sampleHat.jpeg",
  },

  {
    name: "sample hat name",
    price: 50,
    imageLocation: "/imgs/items/sampleHat.jpeg",
  },
  {
    name: "sample hat name",
    price: 50,
    imageLocation: "/imgs/items/sampleHat.jpeg",
  },
];

const page = () => {
  return (
    <div className="flex-col my-20">
      <div className="flex flex-wrap justify-center">
        {hatDetails.map((hat) => (
          <ItemCard {...hat} />
        ))}
      </div>
    </div>
  );
};

export default page;
