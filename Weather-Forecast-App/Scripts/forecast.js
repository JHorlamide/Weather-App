// ***** Weather App Built With Object Oriented Programming in JavaScript ******** //
class Forcast {
  constructor(){
    this.key = 'PYIi91jNG7d7xAD5HLhcAGACajpYvg5Q';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
  }

  // Update city
  async updateCity(city){
    const cityDets = await this.getCity(city)
    const weather = await this.getWeather(cityDets.Key);
    return {cityDets, weather} 
  }

  // Get city Information
  async getCity(city){
    const queryParameter = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + queryParameter);
    const data = await response.json();
    return data[0];
  }

  // Get Weather Information
  async getWeather(id){
    const queryParameter = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + queryParameter);
    const data = await response.json();
    return data[0];
  }
}



// // ************ API KEY ******************* //

// const key = '	7Gc4wii8P51U953fVnSTJc150d59qHr2';
// // Get Weather Information
// const getWeather = async (id) => {
//   const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
//   const queryParameter = `${id}?apikey=${key}`;
//   const response = await fetch(baseURL + queryParameter); 
//   const data = await response.json();
//   return data[0]
// };

// // Get City Information
// const getCity = async (city) => {
//   const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//   const queryParameter = `?apikey=${key}&q=${city}`;
//   const response = await fetch(baseURL + queryParameter);
//   const data = await response.json();
//   return data[0]
// };


// getCity('Ondo')
// .then(data => {
//   return getWeather(data.Key);
// }).then(data => {
//   console.log(data);
// }).catch(err => console.log(err));

