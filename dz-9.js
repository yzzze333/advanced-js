const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();

request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);

    const request = new XMLHttpRequest();
    request.open('GET', data.abilities[0].ability.url);
    request.send();

    request.addEventListener('load', function() {
        const data = JSON.parse(this.responseText);
        console.log(data.effect_entries[1].effect);
    });
});

