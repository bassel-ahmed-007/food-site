import { useState } from "react";
import { mealData } from "../data/data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

function Meal() {
  const [foods, setFoods] = useState(mealData);

  const fillterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setFoods(mealData)}
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 font-bold"
          >
            All
          </button>
          <button
            onClick={() => fillterCat("pizza")}
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 font-bold"
          >
            Pizza
          </button>
          <button
            onClick={() => fillterCat("chicken")}
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 font-bold"
          >
            Chicken
          </button>
          <button
            onClick={() => fillterCat("salad")}
            className="m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700 font-bold"
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
        {foods.map((item) => {
          return (
            <div
              key={item.id}
              className="border-none hover:scale-105 transition-all duration-300 "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="flex justify-between py-2 px-4">
                <p className="font-bold">{item.name}</p>
                <p className="bg-orange-700 h-18 w-18 rounded-full text-white -mt-10 py-4 px-2 border-8 font-bold ">
                  {item.price}
                </p>
              </div>
              <div className="pl-2 py-4 -mt-7">
                <p className="flex items-center text-indigo-600 cursor-pointer pl-2">
                  View More{" "}
                  <ArrowSmRightIcon className="w-5 ml-2 animate-[moveRight_1s_ease-in-out_infinite]" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Meal;
