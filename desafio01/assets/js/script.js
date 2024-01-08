

cards.map((item, index)=>{
    let cardJson = document.querySelector('.models .card').cloneNode(true)
    document.querySelector('.main-area').append(cardJson)

    cardJson.querySelector('.card .card-title').innerHTML = item.titulo
    cardJson.querySelector('.card .card-header .date').innerHTML = item.data
    cardJson.querySelector('.card .card-desc').innerHTML = item.desc

})



