// if text limit exceeeds from the given limit, below function will show the text characters to given limit and three dots (...)

export const TextOverflow = (text, limit) => {
  if (text && text.length > limit) {
    text = text.slice(0, limit) + "...";
  }
  return text;
};
