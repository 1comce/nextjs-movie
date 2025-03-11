import {
  MOCK_MOVIES,
  MOVIE_CATEGORIES,
  TV_CATEGORIES,
} from "@/app/lib/constants";
import Slider from "../slider/slider";
import TopSlider from "../slider/topslider";
import { getDataList, getTrendingAll } from "@/app/lib/actions";
import { ListMovie, ListTv } from "@/app/lib/definition";
interface MoviesData {
  data: ListMovie[];
  total_pages: number;
  total_results: number;
  page: number;
}
interface TvData {
  data: ListMovie[];
  total_pages: number;
  total_results: number;
  page: number;
}
export default async function SliderWrapper() {
  const data = await getTrendingAll();
  const data1: Promise<MoviesData>[] = MOVIE_CATEGORIES.map((category) =>
    getDataList(category, "movie")
  );
  const data2: Promise<TvData>[] = TV_CATEGORIES.map((category) =>
    getDataList(category, "tv")
  );

  const [moviesData, tvData]: [MoviesData[], TvData[]] = await Promise.all([
    Promise.all(data1), // Resolving movie data
    Promise.all(data2), // Resolving TV data
  ]);
  return (
    <>
      <TopSlider list={data} />
      {/* <Sliders categories={MOVIE_CATEGORIES} type='movie' /> */}
      {moviesData.map((list: MoviesData, index: number) => {
        return (
          <Slider
            key={index}
            list={list.data}
            category={MOVIE_CATEGORIES[index]}
            type='movie'
          />
        );
      })}
      {tvData.map((list: TvData, index: number) => {
        return (
          <Slider
            key={index}
            list={list.data}
            category={TV_CATEGORIES[index]}
            type='tv'
          />
        );
      })}
    </>
  );
}
