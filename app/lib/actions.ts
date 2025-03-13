"use server";
import { redirect, notFound } from "next/navigation";
const defaultLanguage = "en-US";
const VideoApiURL = process.env.GET_VIDEO_URL;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJhZWFiMzhkYmMwMTU2ZmRjZWRlYjY4MzRhMjVmZCIsIm5iZiI6MTc0MTE0ODQyOS4xNTEsInN1YiI6IjY3YzdkMTBkM2RlMzA0MjFiN2MyOGUzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HQHi_LFpvwqeQmdgHa_UJSUuMvDcZftnd2fELn4SFac",
  },
};
export async function getVideoPath(id: string) {
  try {
    const res = (await fetch(`${VideoApiURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file_id: id,
      }),
    })) as any;
    const data = await res.json();
    if (res.status === 200) return data.file_path;
    throw new Error("Path status error");
  } catch {
    throw new Error("Path error");
  }
}
const MovieToken = process.env.MOVIE_TOKEN;
export async function getTrailer(id: string, type: string, language = "en-US") {
  try {
    const res = (await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?language=${language}`,
      options
    )) as any;
    const data = await res.json();
    const trailer = data.results.find(
      (item: any) => item.type === "Trailer" && item.site === "YouTube"
    );
    if (trailer.length === 0) {
      const teaser = data.results.find(
        (item: any) => item.type === "Teaser" && item.site === "YouTube"
      );
      if (!teaser) notFound();
      return `https://www.youtube.com/embed/${teaser.key || teaser[0].key}`;
    }
    return `https://www.youtube.com/embed/${trailer.key || trailer[0].key}`;
  } catch {
    notFound();
  }
}

export async function getDataList(
  category: string,
  type: string,
  page = 1,
  language = defaultLanguage
) {
  try {
    const res = (await fetch(
      `https://api.themoviedb.org/3/${type}/${category}?language=${language}&page=${page}`,
      options
    )) as any;
    const data = await res.json();
    return {
      data: data.results,
      total_pages: data.total_pages,
      total_results: data.total_results,
      page: data.page,
    };
  } catch {
    throw new Error("get data failed");
  }
}

export async function getTrendingAll(
  time_window = "day",
  language = defaultLanguage
) {
  try {
    const res = (await fetch(
      `https://api.themoviedb.org/3/trending/all/${time_window}?language=${language}`,
      options
    )) as any;
    const data = await res.json();
    return data.results;
  } catch {
    throw new Error("get trending failed");
  }
}
export async function getSearchMulti(
  query: string,
  page = 1,
  include_adult = false,
  language = defaultLanguage
) {
  try {
    const res = (await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=${include_adult}&language=${language}&page=${page}`,
      options
    )) as any;
    const data = await res.json();
    return data.results;
  } catch {
    throw new Error("search failed");
  }
}
export async function getSearchMultiTotalPages(
  query: string,
  page = 1,
  include_adult = false,
  language = defaultLanguage
) {
  try {
    const res = (await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=${include_adult}&language=${language}&page=${page}`,
      options
    )) as any;
    const data = await res.json();
    return data.total_pages;
  } catch {
    throw new Error("search failed");
  }
}
