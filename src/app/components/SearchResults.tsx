"use client"

import { useEffect, useState } from "react";
import Card from "./Card";
import Image from "next/image";

function SearchResults({ searchText, movies} : any) {
    const [filteredMovies, setFilteredMovies] = useState(movies);
    console.log(searchText)

    useEffect (() => {
        setFilteredMovies(movies);
        }, [movies]);

    const filterMovies = (filter : any) => {
        let sortedMovies = [];
        switch (filter) {
            case "year":
                sortedMovies = [...movies].sort((a, b) => b.year - a.year);
                break;

            case "popularity":
                sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
                break;

            case "ratings":
                sortedMovies = [...movies].sort((a, b) => b.ratings - a.ratings);
                break;
        
            default:
                break;

        }
        
        setFilteredMovies(sortedMovies);
    }

    return (
        <div>
            <div className="d-flex justify-content-between my-3 mx-3">
                <h1>Top Search Results for &quot;{searchText}&quot;</h1>
                <div className="col-2">
                    <select onChange={(e) => filterMovies(e.target.value)} className="form-select" aria-label="Default select example">
                    <option>Sort By</option> I
                    <option value="year">Year</option>
                    <option value="popularity">Popularity</option>
                    <option value="ratings">Ratings</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-wrap gap-3">{filteredMovies.map((movie : any) => {
                return <Card key={movie.id} movie={movie}></Card>
            } )}</div>
        </div>
    )
}

export default SearchResults
