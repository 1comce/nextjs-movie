export type ListMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type ListTv = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};
export type MoviesData = {
  data: ListMovie[];
  total_pages: number;
  total_results: number;
  page: number;
};
export type TvData = {
  data: ListMovie[];
  total_pages: number;
  total_results: number;
  page: number;
};
export type Menu = {
  id: number;
  name: string;
  link: string;
};
