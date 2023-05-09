import { Likes } from "../LikeBtn";
import {
  ArrowUturnLeftIcon,
  PlusIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import img_1 from "../../assets/image/img_!.png";
import * as React from "react";
import { useEffect, useState } from "react";
import { fetchData, ReplyPost, createPost } from "../../helper";

export const Headers = () => {
  type User = {
    id: number;
    name: string;
    post: string;
  };

  type REPLYDATA = {
    reply?: string;
    create_reply?: string;
  };
  const Replyformdata: REPLYDATA = { reply: "" };
  const CreateFormData: REPLYDATA = { create_reply: "" };

  const [Reply, setReply] = useState<REPLYDATA>(Replyformdata);
  const [newPost, setCreatePost] = useState<REPLYDATA>(CreateFormData);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setReply({ ...Reply, [name]: value });
  };
  const inputChangePostHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setCreatePost({ ...newPost, [name]: value });
  };
  const [show, setShow] = React.useState(0);
  const UserPost: User[] = [
    {
      id: 1,
      name: "user_1",
      post: "Life is a beautiful journey, and social media is your digital passport to explore it. Connect with friends, discover new passions, and share your experiences with the world. Embrace the power of social media and make every moment count.",
    },
    {
      id: 2,
      name: "user_2",
      post: "Connecting with loved ones has never been easier! Stay in touch with family and friends, share your life's highlights, and stay updated with the latest trends with our social media platform. Join now and experience the power of connection!",
    },
    {
      id: 3,
      name: "user_3",
      post: "Connecting with friends and family has never been easier thanks to social media! Stay up-to-date, share your experiences, and engage with a global community all from the comfort of your own device. Let's stay connected, no matter where we are in the world! 🌎📱 #socialmedia #stayconnected #globalcommunity",
    },
    {
      id: 4,
      name: "user_4",
      post: "Connecting with loved ones has never been easier! Stay connected and share your experiences with the world on our platform. Join us today and let's make memories that last a lifetime! 📱💻🌍 #socialmedia #stayconnected #memories #technology",
    },
  ];
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      ReplyPost({ Reply_post: Reply.reply });
      setShow(0);
      setReply(Reply);
      console.log("Replies: ", setReply(Reply));
    } catch (error) {
      throw new Error("Problem dey problem dey ");
    }
  };
  const onSubmitPostHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      createPost({ post: newPost.create_reply });
      console.log(
        "New Comment: ",
        createPost({ addpost: newPost.create_reply })
      );
    } catch (error) {
      throw new Error("Problem dey problem dey ");
    }
  };

  return (
    <>
      <div>
        <div className="h-[30vh] mb-[2rem] relative">
          <div className="absolute top-1 right-1">
            <PlusIcon
              className="w-5 h-5 text-blue-400 rotate-[45deg]"
              onClick={() => setShow(!show)}
            />
          </div>
          <form className="h-full" onSubmit={onSubmitPostHandler}>
            <input type="hidden" name="_acton" value={"ReplyPost"} />
            <textarea
              id="create_reply"
              name="create_reply"
              onChange={(e) => inputChangePostHandler(e)}
              className="resize-none h-full w-full p-5  focus:outline-none text-[.8rem] rounded"
            ></textarea>

            <div className="absolute right-1 bottom-2">
              <button
                type="submit"
                className="border h-6 w-6 flex items-center justify-center rounded-full hover:bg-blue-200 hover:text-white"
              >
                <PaperAirplaneIcon className="h-3 w-3 text-blue-500 " />
              </button>
            </div>
          </form>
        </div>

        {/* <div>{Reply}</div> */}

        <div className="flex items-center ">
          <div className="">
            {UserPost.map((tweets: User) => (
              <div key={tweets.id} className="mb-[2rem] ">
                <div className="flex md:space-x-[2rem] items-start flex-col-reverse md:flex-row  bg-white p-3 rounded">
                  <Likes />
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <img src={img_1} alt="" width={30} />
                        {/* <div className="font-semibold">{tweets.name}</div> */}
                        <div className="font-semibold">user_1</div>
                      </div>

                      <span
                        onClick={() => setShow(tweets.id)}
                        className="md:flex hidden cursor-pointer items-center capitalize font-bold text-blue-600 text-sm "
                      >
                        <ArrowUturnLeftIcon className="w-4 h-4" />
                        reply
                      </span>
                    </div>
                    <div className="text-md ">{tweets.post}</div>
                  </div>
                </div>
                {show === tweets.id ? (
                  <div className="h-[20vh] mt-1 relative">
                    <div className="absolute top-1 right-1">
                      <PlusIcon
                        className="w-5 h-5 text-blue-400 rotate-[45deg] cursor-pointer"
                        onClick={() => setShow(!show)}
                      />
                    </div>
                    <form className="h-full" onSubmit={onSubmitHandler}>
                      <input type="hidden" name="_acton" value={"ReplyPost"} />
                      <textarea
                        id="reply"
                        name="reply"
                        onChange={(e) => inputChangeHandler(e)}
                        className="resize-none h-full w-full p-5  focus:outline-none text-[.8rem] rounded"
                      ></textarea>

                      <div className="absolute right-1 bottom-2">
                        <button
                          type="submit"
                          className="border h-6 w-6 flex items-center justify-center rounded-full hover:bg-blue-200 hover:text-white"
                        >
                          <PaperAirplaneIcon className="h-3 w-3 text-blue-500 " />
                        </button>
                      </div>
                    </form>
                  </div>
                ) : null}

                {/* {Reply ? (
                  <div>
                    {Reply.map((rep: REPLYDATA) => (
                      <div key={rep.id}>{rep.reply}</div>
                    ))}
                  </div>
                ) : (
                  <div>Fuck you user!!!!</div>
                )} */}
                {/* {SavedReply.length > 0 ? SavedReply.reply : <div>no post</div>} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
