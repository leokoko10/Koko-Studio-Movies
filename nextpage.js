const API_KEY="8b6a707262f7f2ac7e6ba7c25d7340d9";
const img_url="https://image.tmdb.org/t/p/w500";
constdetailElement=document.getElementById("detail");
constrelatedElement=doc.getElementById("related");

const params = location.href.split("?")[1].split("&");
const id = params[0].split("=")[1];
const mediaType = params[1].split("=")[1];
console.log(mediaType);

if(mediaType=="movie") {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    .then((e)=> e.json())
    .then((movie) => {
        console.log(movie);

        detailElement.innerHTML= `
        <h1 class="text-[2rem] font-boldd">
            ${movie.title || movie.original_title}
        </h1>
        `
    })
}