const movieElemet= document.getElementById("Movies");
const tvseriesElement= document.getElementById("tv-series");
const API_KEY="8b6a707262f7f2ac7e6ba7c25d7340d9"
const image_url="https://image.tmdb.org/t/p/w500";


console.log(tvseriesElement)


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
.then(e => e.json())
.then((data) =>{
    const movies= data.results;

    console.log(movies);

    for( let movie of movies) {
        const movieCard= document.createElement("a");

        movieCard.href=`detail.html?id=${movie.id}&mediatype_type=movie`;

        movieCard.className= `w-full max-w-[170px] flex-shrink-0 bg-blue-100 shadow-md rounded-[12px]`;

        movieCard.innerHTML=`
        <img src="${image_url + movie.backdrop_path}" />
        <div class="px-4 py-4">
        <h3 class="font-bold text-[0.9rem] text-center">${
            movie.title || movie.original_title}
            </h3>
            <div class="fle items-center justify-between">
            <span class"text-[0.5rem]"> Languge: ${movie.language || movie.original_language} </span><br>
            <span> Release Date: ${movie.release_date} </span>
            </div>
        <div>
        `;

        movieElemet.appendChild(movieCard)
    }
})

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
.then(e => e.json())
.then((data) =>{
    const movies= data.results;

    console.log(movies);

    for( let movie of movies) {
        const movieCard= document.createElement("a");

        movieCard.href=`detail.html?id=${movie.id}&mediatype_type=movie`;

        movieCard.className= `w-full max-w-[170px] flex-shrink-0 bg-blue-100 shadow-md rounded-[12px]`;

        movieCard.innerHTML=`
        <img src="${image_url + movie.backdrop_path}" />
        <div class="px-4 py-4">
        <h3 class="font-bold text-[0.9rem] text-center">${
            movie.title || movie.original_title}
            </h3>
            <div class="fle items-center justify-between">
            <span class"text-[0.5rem]"> Languge: ${movie.language || movie.original_language} </span><br>
            <span> Release Date: ${movie.release_date} </span>
            </div>
        <div>
        `;

        movieElemet.appendChild(movieCard)
    }
})