import { ArrowUturnLeftIcon, PlusIcon } from "@heroicons/react/24/solid";
import * as React from "react";
import { useEffect, useState } from "react";
import img_1 from "../../assets/image/img_!.png";
import { Likes } from "../LikeBtn";
import { ReplyPostForm } from "../ReplyPostForm";
import { PostReplies } from "../PostReplies";

export interface REPLYDATA {
  postId: string | number;
  reply: string;
}

export type UserPost = {
  id: number;
  name: string;
  post: string;
};

export const Headers = () => {
  const [fetchData, setFetchData] = useState(false);
  const [show, setShow] = React.useState(0);
  const [replies, setReplies] = useState<REPLYDATA[]>([]);

  const userPosts: UserPost[] = [
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

  const refetchData = () => {
    setFetchData(!fetchData);
  };

  useEffect(() => {
    const postReply = localStorage.getItem("Post-reply");

    if (postReply) {
      const replies = JSON.parse(postReply);

      if (replies) setReplies(replies);
    }
  }, [fetchData]);

  return (
    <div>
      <div className="flex items-center ">
        <div className="">
          {userPosts.map((userPost) => (
            <div key={userPost.id} className="mb-[2rem] ">
              <div className="flex md:space-x-[2rem] items-start flex-col-reverse md:flex-row  bg-white p-3 rounded">
                <Likes />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <img src={img_1} alt="" width={30} />
                      <div className="font-semibold">{userPost.name}</div>
                    </div>

                    <span
                      onClick={() => setShow(userPost.id)}
                      className="items-center hidden text-sm font-bold text-blue-600 capitalize cursor-pointer md:flex ">
                      <ArrowUturnLeftIcon className="w-4 h-4" />
                      reply
                    </span>
                  </div>
                  <div className="text-md ">{userPost.post}</div>
                </div>
              </div>
              {show === userPost.id ? (
                <div className="h-[20vh] mt-1 relative">
                  <div className="absolute top-1 right-1">
                    <PlusIcon className="w-5 h-5 text-blue-400 rotate-[45deg]" />
                  </div>

                  <ReplyPostForm reloadData={refetchData} postId={userPost.id} />
                </div>
              ) : null}

              {replies.length > 0 ? <PostReplies replies={replies} postId={userPost.id} /> : "No replies"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
