import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieDetail() {
  // react의 상태(State): 화면에 보여질(렌더링할) 데이터를 관리함
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/2`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
        },
      };
      const res = await axios(config);
      console.log(res["data"]);
      setMovies(res["data"]["title"]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Movie Details</h1>
      <ul>영화 제목: {movies}</ul>
    </div>
  );
}
