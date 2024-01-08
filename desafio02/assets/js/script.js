


cards.map((item, index)=>{

    let cardJson= document.querySelector('.models .card').cloneNode(true)
    document.querySelector('.principal .area').append(cardJson)

    cardJson.querySelector('.card-header img').src = item.image
    cardJson.querySelector('.card-body .card-title').innerHTML = item.title

});