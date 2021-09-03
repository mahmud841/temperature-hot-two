const API_KEY = `87a7c9195f7f3e82a286125339708234`;
const searchTemp = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);


    fetch(url)
    .then(res =>res.json())
    .then(data => displayTemp(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
setInnerText('city',temp.name);
setInnerText('temperature', temp.main.temp);
setInnerText('clouds',temp.weather[0].main)
    // console.log(temp);

    const url = ` http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}