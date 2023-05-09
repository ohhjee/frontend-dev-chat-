import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import * as React from "react";
import { ReplyPost } from "../helper/ReplyPost/ReplyPost";

interface ReplyPostProps {
  postId: string | number;
  reloadData: () => void;
}

export const ReplyPostForm: React.FC<ReplyPostProps> = ({ postId, reloadData }) => {
  const [reply, setReply] = React.useState<string>("");

  const inputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReply(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (reply.length < 1) return;

    try {
      ReplyPost({ postId, reply });
      setReply("");
      reloadData();
    } catch (error) {
      throw new Error("Problem dey problem dey ");
    }
  };

  return (
    <form className="h-full" onSubmit={onSubmitHandler}>
      <textarea
        id="reply"
        name="reply"
        value={reply}
        required
        onChange={inputChangeHandler}
        className="resize-none h-full w-full p-5  focus:outline-none text-[.8rem] rounded"
      />

      <div className="absolute right-1 bottom-2">
        <button
          type="submit"
          className="flex items-center justify-center w-6 h-6 border rounded-full hover:bg-blue-200 hover:text-white">
          <PaperAirplaneIcon className="w-3 h-3 text-blue-500 " />
        </button>
      </div>
    </form>
  );
};
