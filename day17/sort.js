const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return bandName.replace(/^(the |a |an )/i, '').trim();
}

const sortArr = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);
document.querySelector('#bands').innerHTML = sortArr.map(band => `<li>${band}</li>`).join('')

