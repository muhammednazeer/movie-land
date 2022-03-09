import React, {useEffect} from "react";

const API_URL = 'http//www.omdbapi.com?apikey=18fcde43';
const App = () => {

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }
    useEffect(() => {
        searchMovie('spiderman');
        
    }, [])
    return (
       
            <h1>Welcome to Film Empire</h1>
       
    );
}

export default App;