import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-between p-10 font-bold text-xl">
        <div>Menu</div>
        <div>Atalanta Kelly</div>
        <div>Cart</div>
      </div>
      <div className="flex justify-center my-10 text-sm">
        Handmade with that Caroline craftmanship
      </div>
      <div className="flex my-10 w-3/4 h-80 justify-center mx-auto border-solid border-4 border-black ">
        Image carosel
      </div>
      <div className="flex justify-center my-10 text-sm">Top Pick </div>
      <div className="flex w-1/2 h-60 justify-center  border-solid border-4 border-black mx-auto">
        Top Pick Item
      </div>
      <div className="flex my-20 justify-center divide-y divide-dashed">
        View All Products{" "}
      </div>
      <div className="flex  my-10 w-1/2 h-60 justify-center  border-solid border-4 border-black mx-auto">
        Hats
      </div>
      <div className="flex my-10  w-1/2 h-60 justify-center  border-solid border-4 border-black mx-auto">
        scarfs
      </div>
      <div className="flex  my-10 w-1/2 h-60 justify-center  border-solid border-4 border-black mx-auto">
        snoods
      </div>

      <div className="flex justify-center">
        {" "}
        For all enquires or to contact me please dm on instagram at
        AtalantaKellyClothing
      </div>
    </>
  );
}
