

const API_KEY = "e3818d8d78a594c6b20b8de0a2140ac4";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async(page) =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) =>{
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    )
    const data = await response.json();
    return data.results;
}

export const getTopRated = async(page) =>{
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    return data.results;
}
export const getUpcoming = async(page) =>{
    const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    return data.results;
}

