import React from "react";
import { useEffect, useState } from "react";

// 모듈화된 API 요청 함수 불러오기
import { getPopolarMovies } from "./../../api/tmdb";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // 모듈화된 API 요청 함수들은 Promise 기반임. 따라서 await 를 붙여야 함
      const res = await getPopolarMovies();
      setMovies(res["results"]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
