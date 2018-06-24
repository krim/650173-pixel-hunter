export const calculateDimensions = (frame, given) => {
  const ratio = Math.min(frame.width / given.width, frame.height / given.height);

  return {width: given.width * ratio, height: given.height * ratio};
};
