$(document).ready(function (){

    let weatherSpot = document.getElementsByClassName("weatherArea");
    let count = 0;

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        appid: openWeatherApi,
        lat: 29.42,
        lon: -98.49,
        exclude: "minutely, hourly, alerts"
    }).done((data) => {
        console.log(data);
        data.daily.forEach((d) => {
            weatherSpot[0].innerHTML += render(data);
            count++;
        });
    });

    mapboxgl.accessToken = mapboxToken;
    let mapObj = ({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.65, 29.44],
        zoom: 13
    });
    let map = new mapboxgl.Map(mapObj);


    // console.log(geocode("san antonio texas 78245", mapboxToken));


    function render (data){
        let html = `<div class="weatherCard">`;
        html += `<p>${data.daily[count].weather[0].description}</p>`;
        html += `</div>`;
        return html;
    }








    //===========OTHER FUNCTIONS============//
    function crd(input){
        return geocode(input, mapboxToken);
    }
    function address(input){
        return reverseGeocode(input, mapboxToken);
    }
    function convertUnix(x){
        let date = new Date(x * 1000);
        let h = date.getHours();
        let m = `0${date.getMinutes()}`;
        let s = `0${date.getSeconds()}`;
        return `${h}:${m.substring(-2)}:${s.substring(-2)}`;
    }


});