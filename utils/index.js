import job from "../assets/images/job.jpg";

export const checkImageURL = (url) => {
  // if (!url) return false
  // else {
  //     const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
  //     return pattern.test(url);
  // }

  const pattern = new RegExp(
    "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
    "i"
  );
  pattern.test(url) ? url : job;
};
