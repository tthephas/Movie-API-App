
///for project with the MET data
const MET_API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/158136'
const MET_IMG_PATH = 'https://images.metmuseum.org/CRDImages/ep/web-large/DT49.jpg'
const SEARCH_MET_API = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q='

const main = document.getElementById('main')
const formMet = document.getElementById('form')
const searchMet = document.getElementById('search')

getPaintings(MET_API_URL)

async function getPaintings(url) {
    const res = await fetch(url)
    const data = await res.json()

    //showPaintings(data)
    const primaryImageSmall = data.primaryImageSmall
    const objectID = data.objectID
    const department = data.department
    const objectName = data.objectName
    const creditLine = data.creditLine

    main.innerHTML = ''

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
    
        <img src="${primaryImageSmall}" alt="${objectID}">
        <div class="movie-info">
        <h3></h3>
        <span >${department}</span>
        </div>
        <div class="overview">
        <h3> Overview</h3>
            ${creditLine}
        
        </div>
    `
    main.appendChild(movieEl)
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




// function showPaintings(paintings) {
//     main.innerHTML = ''

//     //paintings.forEach((painting) => {
//         const { objectID, primaryImageSmall, department, objectName } = painting
        
//         const movieEl = document.createElement('div')
//         movieEl.classList.add('movie')

//         movieEl.innerHTML = `
        
//             <img src="${primaryImageSmall}" alt="${objectID}">
//             <div class="movie-info">
//             <h3>${objectID}</h3>
//             <span >${department}</span>
//             </div>
//             <div class="overview">
//             <h3> Overview</h3>
//                 ${objectName}
            
//             </div>
//         `
//         main.appendChild(movieEl)
    
// }


