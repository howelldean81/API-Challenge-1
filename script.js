const baseURL = "https://ghibliapi.herokuapp.com/films"

const sortTitleButton   = document.getElementById('sort-title-button')
const sortDateButton    = document.getElementById('sort-date-button')
const sortRottenButton  = document.getElementById('sort-rotten-button')
const sortTimeButton    = document.getElementById('sort-time-button')

var movieDetails = []
console.log(movieDetails)

fetch(baseURL)
    .then(res => res.json())
    .then(json => {
        let movieDetails = json.map(movie => {
            return {
                title: movie.title,
                release_date: Number(movie.release_date),
                rt_score: Number(movie.rt_score),
                running_time: Number(movie.running_time)
            }
        })
            sortRottenButton.onclick = function() {
                movieDetails.sort((cur, prev) => prev.rt_score - cur.rt_score)
            }
            sortTimeButton.onclick = function() {
                movieDetails.sort((cur, prev) => prev.running_time - cur.running_time)
            }
            displayResults(movieDetails)
            console.log(movieDetails)
        })

function displayResults(movies) {
    let movieTable = document.getElementById("movieTable")
    
    movies.map(movies => {
        let movieRow = document.createElement('tr')
        let cell1 = movieRow.insertCell()
        let cell2 = movieRow.insertCell()
        let cell3 = movieRow.insertCell()
        let cell4 = movieRow.insertCell()
        cell1.innerText = `${movies.title}`
        cell2.innerText = `${movies.release_date}`
        cell3.innerText = `${movies.rt_score}`
        cell4.innerText = `${movies.running_time}`
        movieTable.appendChild(movieRow)
    })  
}
