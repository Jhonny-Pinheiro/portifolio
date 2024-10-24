const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=21c66d03&s='
const cards = document.querySelector('.cards')

const buscar = document.querySelector('.button')

buscar.addEventListener('click', ()=> {
    const busqueda = document.querySelector('.input2').value
    console.log(busqueda)
    fetch(url+busqueda)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.Search)
            data.Search.forEach((banner) => {
            console.log(banner.Poster)
            cards.insertAdjacentHTML('beforeend',
                `
                <div class="card">
                    <img src="${banner.Poster}">
                    <p>${banner.Year}</p>
                </div>
                `
            )
        })
    })
})