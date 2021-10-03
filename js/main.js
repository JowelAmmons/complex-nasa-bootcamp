let url = `https://data.nasa.gov/resource/gvk9-iz74.json`

fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data);
  for(i=0; i<data.length; i++){
    let facilityName = data[i].center
    let zipcode = data[i].zipcode
    let weatherAPI = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=`

    fetch(weatherAPI)
    .then(res => res.json())
    .then(res => {
      console.log(res)

      let facilityWeather = res.main.temp

      let row = document.createElement('tr')
      let column1 = document.createElement('td')
      let column2 = document.createElement('td')
      let column3 = document.createElement('td')

      document.querySelector("tbody").appendChild(row)
      row.appendChild(column1)
      row.appendChild(column2)
      row.appendChild(column3)
      column1.innerText = facilityName
      column2.innerText = zipcode
      column3.innerText = facilityWeather + '℉' + res.weather[0].description

    })
    .catch(err => {
      console.log(`error ${err}`);
    })
  }

})


//da goods? Maybe.. look somewhere else