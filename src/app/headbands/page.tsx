import React from "react";
import ItemCard from "../components/itemCard";

const headbandDetails = [
  {
    name: "sample headband name",
    price: 50,
    imageLocation: "/imgs/items/sampleheadband.jpeg",
  },
  {
    name: "sample headband name",
    price: 50,
    imageLocation: "/imgs/items/sampleheadband.jpeg",
  },
  {
    name: "sample headband name",
    price: 50,
    imageLocation: "/imgs/items/sampleheadband.jpeg",
  },

  {
    name: "sample headband name",
    price: 50,
    imageLocation: "/imgs/items/sampleheadband.jpeg",
  },
  {
    name: "sample headband name",
    price: 50,
    imageLocation: "/imgs/items/sampleheadband.jpeg",
  },
];

const page = () => {
  return (
    <div className="flex-col my-20">
      <div className="flex flex-wrap justify-center">
        {headbandDetails.map((headband) => (
          <ItemCard {...headband} />
        ))}
      </div>
    </div>
  );
};

export default page;
