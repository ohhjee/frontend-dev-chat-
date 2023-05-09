import * as React from "react";
import {
  PlusIcon,
  MinusIcon,
  ArrowUturnLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

export const Likes = () => {
  const [count, setCount] = React.useState(0);
  const [modal, setModal] = React.useState(false);

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
      {modal ? (
        <div>
          <div className="fixed bg-black/20 w-full h-full top-0 left-0 z-10">
            <div className="z-20 h-full  flex justify-center items-center">
              <div className="w-11/12 sm:w-8/12 md:w-1/2 bg-white p-3 rounded">
                <div className="font-semibold">Delete Comment</div>
                <p className="mt-2">
                  Are you sure you want to delete this comment? This will remove
                  the comment and can't be undone.
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="">
                    <button
                      aria-label="Cancel"
                      id="cancel"
                      className="bg-gray-500 p-2 rounded text-white font-medium"
                      onClick={() => setModal(false)}
                    >
                      No, Cancel
                    </button>
                  </div>
                  <div className="">
                    <button
                      aria-label="delete"
                      id="  dlete"
                      className="bg-red-500 p-2 rounded text-white font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-between md:justify-center items-center w-full md:w-fit  rounded mt-[2rem] md:mt-0">
        <div className="flex md:flex-col md:h-[10vh] items-center bg-blue-500/20 px-1 rounded md:justify-center justify-between ">
          <div className="flex items-center md:flex-col">
            <button aria-label="Name" id="idk" className="mr-[.8rem] md:m-0">
              <PlusIcon onClick={() => increase()} className="h-4 w-4" />
            </button>
            <div className="text-sm space-x-3">{count}</div>

            <button
              aria-label="decrease"
              id="decrease"
              className="ml-[.8rem] md:m-0"
            >
              <MinusIcon onClick={() => decrease()} className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex space-x-3">
          <span
            onClick={() => setModal(true)}
            className="items-center text-red-500 md:hidden text-sm font-bold flex  capitalize cursor-pointer "
          >
            <TrashIcon className="w-4 h-4" />
            Delete
          </span>
          <span className="items-center md:hidden text-sm font-bold flex capitalize cursor-pointer  ">
            <ArrowUturnLeftIcon className="w-4 h-4" />
            Edit
          </span>
        </div>
      </div>
    </>
  );
};
