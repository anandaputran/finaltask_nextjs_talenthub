import React from 'react'
import Image from 'next/image'
import { getMovies } from '../../../../utils/request';
import SearchResults from '../../components/SearchResults';

async function SearchPage({searchParams} : any) {
    const searchText = searchParams.query;
    const movies = await getMovies(searchText);

    return (
        <SearchResults searchText={searchText} movies={movies}></SearchResults>
    )
}

export default SearchPage
