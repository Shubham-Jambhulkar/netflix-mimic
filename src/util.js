export const debounce = (fun, delay) => {
  let existedId;
  return (...args) => {
    if (existedId) {
      clearTimeout(existedId);
    }
    existedId = setTimeout(() => {
      fun(...args);
      existedId = null;
    }, delay);
  };
};
