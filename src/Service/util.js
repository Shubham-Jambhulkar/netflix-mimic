export const parseResponse = (res) =>
  res.map((c) => ({
    name: c.name || c.original_name,
    imgSrc: c.backdrop_path || c.poster_path,
  }));
