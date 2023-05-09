type comment = {
  post: string | number;
};

export const Comment = (payload: comment) => {
  const newPost = {
    post: payload.post,
  };
};
