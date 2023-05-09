import * as React from "react";
import { REPLYDATA } from "./Header/Headers";

interface PostRepliesProps {
  postId: string | number;
  replies: Array<REPLYDATA>;
}

export const PostReplies: React.FC<PostRepliesProps> = ({
  postId,
  replies: data,
}) => {
  const [replies, setReplies] = React.useState<Array<REPLYDATA>>([]);

  React.useEffect(() => {
    const repliesData = data.filter((reply) => reply.postId == postId);

    setReplies(repliesData);
  }, [data, postId]);

  return (
    <div className="w-full my-2 bg-white rounded-lg shadow-lg lg:w-1/3 right-0">
      <ul className="divide-y-2   space-y-1 divide-gray-100">
        {replies.map((reply, i) => (
          <li
            key={i}
            className="p-3  text-md hover:bg-blue-600 hover:rounded-lg  hover:text-blue-200"
          >
            {reply.reply}
          </li>
        ))}
      </ul>
    </div>
  );
};
