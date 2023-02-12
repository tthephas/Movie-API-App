
///for project with the MET data
const MET_API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste%20Renoir'
const MET_IMG_PATH = 'https://images.metmuseum.org/CRDImages/ep/web-large/DT49.jpg'
const SEARCH_MET_API = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q='


const formMet = document.getElementById('form')
const searchMet = document.getElementById('search')

getPaintings(MET_API_URL)

async function getPaintings(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.objectIDs.length)
    console.log(data.objectIDs)
}

formMet.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = searchMet.value

    if(searchTerm && searchTerm !== '') {
        getPaintings(SEARCH_MET_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})


const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https:////api.themoviedb.org/3/search/movie?api_key=a65ab9594ab22b70d45552acd545237e&query="'

const main = document.getElementById('main')
// const form = document.getElementById('form')
// const search = document.getElementById('search')

//get initial movies
//getMovies(API_URL)


// async function getMovies(url) {
//     const res = await fetch(url)
//     const data = await res.json()

//     showMovies(data.results)
// }

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie
        
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3> Overview</h3>
                ${overview}
            
            </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5){
        return 'orange'
    } else {
        return 'red'
    }
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const searchTerm = search.value

//     if(searchTerm && searchTerm !== '') {
//         getMovies(SEARCH_API + searchTerm)

//         search.value = ''
//     } else {
//         window.location.reload()
//     }
// })


