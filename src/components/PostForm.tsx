import * as React from "react";
interface CommentPost {
  post: string | number;
}
export const PostForm: React.FC<CommentPost> = () => {
  const [post, setPost] = React.useState();

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPost(event.target.value);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (post.length < 1) return;

    try {
      ReplyPost({ postId, reply });
      setReply("");
      reloadData();
    } catch (error) {
      throw new Error("Problem dey problem dey ");
    }
  };
  return (
    <>
      <div className="mb-[3rem]">
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
              className="flex items-center justify-center w-6 h-6 border rounded-full hover:bg-blue-200 hover:text-white"
            >
              <PaperAirplaneIcon className="w-3 h-3 text-blue-500 " />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
