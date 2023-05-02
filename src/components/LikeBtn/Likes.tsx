import { useState } from "react";
import {
  PlusIcon,
  MinusIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";

export const Likes = () => {
  const [count, setCount] = useState(0);

  //Method

  const increase = () => {
    setCount((val) => val + 1);
  };
  const decrease = () => {
    if (count < 1) return;

    setCount((val) => --val);
  };
  return (
    <>
      <div className="flex justify-between md:justify-center items-center w-full md:w-fit  rounded mt-[2rem] md:mt-0">
        <div className="flex md:flex-col md:h-[10vh] items-center bg-blue-500/20 px-1 rounded md:justify-center justify-between ">
          <div className="flex items-center md:flex-col">
            <button className="mr-[.8rem] md:m-0">
              <PlusIcon onClick={() => increase()} className="h-4 w-4" />
            </button>
            <div className="text-sm space-x-3">{count}</div>

            <button className="ml-[.8rem] md:m-0">
              <MinusIcon onClick={() => decrease()} className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div>
          <span className="md:hidden flex items-center capitalize font-bold text-blue-600 text-sm ">
            <ArrowUturnLeftIcon className="w-4 h-4" />
            reply
          </span>
        </div>
      </div>
    </>
  );
};
