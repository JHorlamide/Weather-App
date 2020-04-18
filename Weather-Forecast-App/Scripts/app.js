const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forcast = new Forcast();

const updateUI = (data) => {
  // Distructuring properties
  const {cityDets, weather} = data
  
  //Update the details template
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-3">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // Remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
  };

  // Update the day/night
  const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'
  time.setAttribute('src', timeSrc);

  // Update the weather icon image
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
}

// ******* From this file but moved to the forcast ******* //
// const updateCity = async (city) => {
//   const cityDets = await getCity(city);
//   const weather = await getWeather(cityDets.Key);
//   return { cityDets, weather };
// };

cityForm.addEventListener('submit', e => {
  // Prevent Default Action
  e.preventDefault();
  const city = cityForm.city.value.trim(); //Get city Input field value
  cityForm.reset();
  
  // Updating the UI with the new city
  forcast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  // Set local storage
  localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
  forcast.updateCity(localStorage.getItem('city')).then(data => {
    updateUI(data)
  }).catch(err => console.log(err));
};

console.log(forcast);
console.log(forcast.updateCity());