function getData(url,message) {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(message);
        }
        return response.json();
    })
};

getData('https://pokeapi.co/api/v2/pokemon/ditto','Ошибка загрузки')
.then(data => getData(data.abilities[0].ability.url,'Ошибка загрузки'))
.then(data => console.log(data.effect_entries[1].effect))
.catch(err => console.log(err));