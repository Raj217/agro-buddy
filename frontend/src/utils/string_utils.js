export const replaceAt = function (str, index, replacement) {
  return (
    str.substring(0, index) +
    replacement +
    str.substring(index + replacement.length)
  );
};
