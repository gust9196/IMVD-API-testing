fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movieData => {
        console.log(movieData);
        const h1 = document.createElement("h1")
        h1.innerHTML = "there are"+movieData.length+" in this database" //movieData.length+" in this database"
        document.body.appendChild(h1)

        const h2 = document.createElement("h2")
        h2.innerHTML = movieData[0].title+"is a movie from "+movieData[0].year+" that is "+movieData[0].running_times+" seconds long. It has a rating of "+movieData[0].rating+" out of "+movieData[0].votes+" votes."
        document.body.appendChild(h2)

        let ul=document.createElement("ul")
        document.body.appendChild(ul)
        for (let i = 0; i <movieData.length; i++) {
            console.log(i)
            let li = document.createElement("li")
            ul.appendChild(li);
            li.innerHTML=movieData[i].title

        }

    });

/* const getNewerMovies = document.querySelector("button")
    getNewerMovies.addEventListener("click", function ())
for (let i = 0; i < movieData.length; i++) {
    movieData[1].map()

} */


