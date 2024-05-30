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
  pattern.test(url)
    ? url
    : "https://t4.ftcdn.net/jpg/05/05/61/74/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg";
};
