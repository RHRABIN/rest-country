const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data.slice(0, 20)))
}
const displayCountry = (countries) => {
    console.log(countries[0])
    const showAllCountry = countries.map(country => countryHtml(country));
    const container = document.getElementById('countries');
    container.innerHTML = showAllCountry.join(" ")
}
// this is use by destructure
const countryHtml = ({ name, flags, area, population }) => {
    // const { name, flags } = country;
    return `
        <div class='country'>
            <img src="${flags.png}" >
            <h2>${name.common}</h2>
            <p> Area: ${area} </p>
            <p> Population: ${population} </p>
        </div>
    `
}
// const countryHtml = (country) => {
//     return `
//         <div class='country'>
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}" >
//         </div>
//     `
// }

loadCountry()