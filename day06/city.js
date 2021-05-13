window.onload = function () {
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    let cities = [];
    const input = document.querySelector('input').addEventListener('input', displayMatch);
    const suggestions = document.querySelector('.suggestions');
    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities.push(...data));

    function match(inputData, cities) {
        return cities.filter(place => {
            const regex = new RegExp(inputData, 'gi');//找cities中有inputData的
            return place.city.match(regex) || place.state.match(regex);
        });
    }
    function displayMatch() {
        const matchWord = match(this.value, cities);
        const html = matchWord.map(place => {
            const regex = new RegExp(this.value, 'gi');//將match回傳的值用place去跑,再添加顏色給其中有inputData的字
            const cityName = place.city.replace(regex, `<span class ='hl'>${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class ='hl'>${this.value}</span>`);
            const placePopulation = numberWithCommas(place.population);
            return `
            <li>
                <span class = "name">${cityName},${stateName}</span>
                <span class = "population">${placePopulation}</span>
            </li>
            `
        }).join("");//才不會有空格或是,
        suggestions.innerHTML = html;
    }
    function numberWithCommas(x) {
        return x.toString().replace(/ \B (?= (\d {3} ) + (?!\d))/g, ','); ''
    };
}