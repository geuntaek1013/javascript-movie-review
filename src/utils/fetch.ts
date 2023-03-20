import { API, TMDB_BASE_URL } from "../constant/api";

export const getPopularMovies = async (page: number) => {
  const response = await fetch(
    `${TMDB_BASE_URL}${API.GET_POPULAR}?api_key=${process.env.API_KEY}&language=ko-KR&page=${page}`,
    {
      method: "GET",
    }
  );

  if (response.ok) return response.json();
  alert("오류 발생");
};

export const getSearchedMovies = async (movieName: string, page: number) => {
  const response = await fetch(
    `${TMDB_BASE_URL}${API.SEARCH_MOVIES}?api_key=${process.env.API_KEY}&language=ko-KR&query=${movieName}&page=${page}&include_adult=false`,
    {
      method: "GET",
    }
  );

  if (response.ok) return response.json();
  alert("오류 발생");
};