type reply = {
  Reply_post: string;
};

export const fetchData = (key: unknown | null) => {
  return JSON.parse(localStorage.getItem(key));
};

export const ReplyPost = (reply: reply) => {
  const newPost = {
    Reply_post: reply.Reply_post,
  };
  const existingReply = fetchData("Post-reply") ?? [];
  return localStorage.setItem(
    "Post-reply",
    JSON.stringify([...existingReply, newPost])
  );
};
