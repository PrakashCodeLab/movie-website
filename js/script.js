let hamIcon = document.querySelector('.hamburger');
let navBar = document.querySelector('.section__hamburger');
const bodycard = document.querySelector('.card__movie__body');
hamIcon.addEventListener('click', () => {
	navBar.classList.toggle('active');
})
let hamMobile = document.querySelector('.ham__mobile');
let navMobile = document.querySelector('.navbar__mobile');
hamMobile.addEventListener('click', () => {
	navMobile.classList.toggle('is-active');
});
const togleBar = document.querySelector('.toggle__navbar');
const togleicon = document.querySelector('.btn__primary');
togleicon.addEventListener('click', () => {
	togleBar.classList.toggle('toogleNav');
});



/*javascript fectch api top 100 movies*/

function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    const poster = document.createElement('img');
    poster.classList.add('card__header__img');
    poster.src = movie.image;
    poster.alt = `Poster for ${movie.title}`;
    movieCard.appendChild(poster);
    const info = document.createElement('div');
    info.classList.add('movie-info');
    movieCard.appendChild(info);
    const title = document.createElement('h2');
    title.textContent = movie.title;
    info.appendChild(title);
    const year = document.createElement('p');
    year.textContent = `Released in ${movie.year}`;
    info.appendChild(year);
    const rating = document.createElement('p');
    rating.textContent = `IMDb rating: ${movie.rating}`;
    info.appendChild(rating);
    return movieCard;
}



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd71c0d89c7msh6db675642ed18cfp191003jsnc527264a531f',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};
fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(movies => {
        const movieCards = movies.map(createMovieCard);
        movieCards.forEach(card => bodycard.appendChild(card));
    })
    .catch(err => console.error(err));
