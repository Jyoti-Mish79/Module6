const access_key = `1d6a19adb5db26b839094ff9373e3fe0`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const getWeather = async(city) => {
    const url = ` http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`;
    const response = await fetch(url);
    const data=await response.json()
    return showWeather(data)
}
const showWeather=(data) => {
    if(data.code == "")
    {
        weather.innerHTML='<h2> City Not Found </h2>'
        return;
    }
    console.log(data)
    weather.innerHTML='<h2>Location:${data.location.region}</h2><div class="bb"><h2>Lat:${data.location.lat}</h2><div class="bb1"><h2>Long:${data.location.lon}</h2></div></div><h2>Time Zone:${data.location.timezone_id}</h2><h2>Wind Speed:${data.weather_icons[0].wind_speed}</h2><h2>Pressure:${data.current.pressure}</h2><h2>Wind:Direction:${data.weather_icons[0].wind_dir}</h2><h2>UV Index:${data.current.uv_index}</h2><h2>Feels Like:${data.current.feelslike}</h2></div>'
   
}



form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
