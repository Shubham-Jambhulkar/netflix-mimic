const key = "19f84e11932abbc79e6d83f82d6d1045";
const baseUrl = "https://api.themoviedb.org/3/";
export const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

const endpoints = {
  Netflix_Originals: `discover/tv?api_key=${key}&with_networks=213`,
  Trending_Now: `trending/all/week?api_key=${key}&language=en-US`,
  Top_Rated: `movie/top_rated?api_key=${key}&language=en-US`,
  Action_Movies: `discover/movie?api_key=${key}&with_genres=28`,
  Comedy_Movies: `discover/movie?api_key=${key}&with_genres=35`,
  Horror_Movies: `discover/movie?api_key=${key}&with_genres=27`,
  Romance_Movies: `discover/movie?api_key=${key}&with_genres=10749`,
  Documentaries: `discover/movie?api_key=${key}&with_genres=99`,
};

const fetchContent = (genre) =>
  fetch(`${baseUrl}${endpoints[genre]}`).then((response) => response.json());

export const genres = Object.keys(endpoints).map((k) => ({
  title: k.split("_").join(" "),
  genre: k,
}));

export default fetchContent;
