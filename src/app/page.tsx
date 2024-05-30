/* eslint-disable react/jsx-key */
import Image from "next/image";
import { getTrendingMovies } from "../../utils/request";
import Card from "./components/Card";

export default async function HomePage() {
  const movies = await getTrendingMovies();
  return (
    <div>
      <h1>Trending Movies</h1>
      <div className="d-flex flex-wrap gap-3">
        {movies.map((movie: any) =>{
          return <Card movie={movie}></Card>
        })}
      </div>
    </div>
  );
}