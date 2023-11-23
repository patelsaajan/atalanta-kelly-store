import Image from "next/image";
import DropMenu from "./components/menu";
import Example from "./components/menu";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center my-10 text-sm">
        Handmade with that Caroline craftmanship
      </div>
      <div className="flex my-10 w-3/4 h-80 justify-center mx-auto border-solid border-4 border-black ">
        <div>
          <Image
            src="/imgs/items/sampleHeadband.jpeg"
            width={250}
            height={250}
            alt="picture of a stock headband"
          />
        </div>
      </div>
      <div className="flex justify-center my-10 text-sm">Top Pick </div>
      <div className="flex w-60 h-80 justify-center  border-solid border-4 border-black mx-auto">
        <Image
          src="/imgs/topPicks/topPick.jpeg"
          width={250}
          height={300}
          alt="picture of some of the top picks"
        />
      </div>
      <div className="flex my-20 justify-center divide-y divide-dashed">
        View All Products{" "}
      </div>

      <div className="flex  my-10 w-80 h-80 justify-center  border-solid border-4 border-black mx-auto cursor-pointer">
        <Link href={"/hats"}>
          <div>
            <Image
              src="/imgs/items/sampleHat.jpeg"
              width={250}
              height={250}
              alt="picture of a stock hat"
            />
            <div className="flex justify-center my-5 text-lg font-bold">
              Hats
            </div>
          </div>
        </Link>
      </div>

      <div className="flex  my-10 w-80 h-80 justify-center  border-solid border-4 border-black mx-auto cursor-pointer">
        <Link href={"/headbands"}>
          <div>
            <Image
              src="/imgs/items/sampleHeadband.jpeg"
              width={250}
              height={250}
              alt="picture of a stock headband"
            />
            <div className="flex justify-center my-5 text-lg font-bold">
              Headband
            </div>
          </div>
        </Link>
      </div>

      <div className="flex  my-10 w-80 h-80 justify-center  border-solid border-4 border-black mx-auto cursor-pointer">
        <Link href={"/snoods"}>
          <div>
            <Image
              src="/imgs/items/sampleSnood.jpeg"
              width={250}
              height={250}
              alt="picture of a stock snood"
            />
            <div className="flex justify-center my-5 text-lg font-bold">
              Snood
            </div>
          </div>
        </Link>
      </div>

      <div className="flex justify-center my-20 mx-10 text-center ">
        {" "}
        For all enquires or to contact me please DM on instagram at
        AtalantaKellyClothing
      </div>
    </>
  );
}
