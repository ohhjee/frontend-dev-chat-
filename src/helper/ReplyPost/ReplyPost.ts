import { fetchData } from "../fetchData";

type Reply = {
  reply: string;
  postId: string | number;
};

export const ReplyPost = (payload: Reply) => {
  const newPost = {
    postId: payload.postId,
    reply: payload.reply,
  };
  const existingReply = fetchData("Post-reply") ?? [];
  return localStorage.setItem("Post-reply", JSON.stringify([...existingReply, newPost]));
};
