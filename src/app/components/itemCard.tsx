import Image from "next/image";
import React from "react";

type cardPrompt = {
  name: string;
  imageLocation: string;
  price: number;
};

const ItemCard = ({ name, imageLocation, price }: cardPrompt) => {
  return (
    <div className="flex w-80 h-100 justify-center border-solid border-2 border-black my-10 mx-10">
      <div className="flex flex-col">
        <Image
          src={imageLocation}
          width={250}
          height={250}
          alt="picture of a stock hat"
        />
        <div className="flex justify-center my-5">{name}</div>
        <div className="flex my-5 justify-evenly">
          <div>£ {price}</div>
          <div className="cursor-pointer">Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
