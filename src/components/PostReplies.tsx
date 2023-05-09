import * as React from "react";
import { REPLYDATA } from "./Header/Headers";
import img_1 from "../assets/image/img_!.png";
import { Likes } from "./LikeBtn";
import {
  ArrowUturnLeftIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { ReplyPostForm } from "./ReplyPostForm";

interface PostRepliesProps {
  postId: string | number;
  replies: Array<REPLYDATA>;
}

export const PostReplies: React.FC<PostRepliesProps> = ({
  postId,
  replies: data,
}) => {
  const [replies, setReplies] = React.useState<Array<REPLYDATA>>([]);
  const [show, setShow] = React.useState<boolean | number | string>(false);
  const [fetchData, setFetchData] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const refetchData = () => {
    setFetchData(!fetchData);
  };

  React.useEffect(() => {
    const repliesData = data.filter((reply) => reply.postId == postId);

    setReplies(repliesData);
  }, [data, postId]);

  return (
    <>
      <div>
        {modal ? (
          <div>
            <div className="fixed bg-black/20 w-full h-full top-0 left-0 z-10">
              <div className="z-20 h-full  flex justify-center items-center">
                <div className="w-11/12 sm:w-8/12 md:w-1/2 bg-white p-3 rounded">
                  <div className="font-semibold">Delete Comment</div>
                  <p className="mt-2">
                    Are you sure you want to delete this comment? This will
                    remove the comment and can't be undone.
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
        <div className="flex justify-end relative">
          <div className="w-full my-2  rounded-lg lg:w-10/12">
            <ul className="divide-y-2 divide-gray-100">
              {replies.map((reply, i) => (
                <li key={i} className="p-3 text-md ">
                  <div className="flex md:space-x-[2rem] shadow-lg  bg-white items-start flex-col-reverse md:flex-row  p-3 rounded">
                    <Likes />
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-2 ">
                        <div className="flex items-center space-x-2">
                          <img src={img_1} alt="" width={30} />
                          <div className="font-semibold">John Doe</div>
                          <div>
                            <small className="text-gray-400">2 weeks ago</small>
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <span
                            onClick={() => setModal(true)}
                            className="items-center text-red-500 hidden text-sm font-bold  capitalize cursor-pointer md:flex "
                          >
                            <TrashIcon className="w-4 h-4" />
                            Delete
                          </span>
                          <span
                            onClick={() => setShow(reply.postId)}
                            className="items-center hidden text-sm font-bold  capitalize cursor-pointer md:flex "
                          >
                            <ArrowUturnLeftIcon className="w-4 h-4" />
                            Edit
                          </span>
                        </div>
                      </div>
                      <div className="text-md "> {reply.reply}</div>
                    </div>
                  </div>
                  {show === reply.postId ? (
                    <div className="h-[20vh] mt-1 relative">
                      <div className="absolute top-1 right-1">
                        <PlusIcon
                          className="w-5 h-5 text-blue-400 rotate-[45deg]"
                          onClick={() => setShow(false)}
                        />
                      </div>

                      <ReplyPostForm
                        reloadData={refetchData}
                        postId={reply.postId}
                      />
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
