$(document).ready(function (){

    let markerPos = [];
    let start = [-98.65, 29.44];

    //=============MAP STUFF===========//
    mapboxgl.accessToken = mapboxToken;
    let mapObj = ({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: start,
        zoom: 10
    });
    let map = new mapboxgl.Map(mapObj);



    // console.log(geocode("san antonio texas 78245", mapboxToken));

    let initialMarker = {
        draggable: true,
        color: "#FF8552"
    }

    let marker = new mapboxgl.Marker(initialMarker)
        .setLngLat(start)
        .addTo(map)

    function updateMarker(){
        let location = marker.getLngLat();
        markerPos[0] = (location.lng);
        markerPos[1] = (location.lat);
        getWeather();
    }

    marker.on("dragend", updateMarker);




    let search = document.getElementById("search");
    let cord = [];
    let otherMarker = {
        draggable: false,
        color: "#4fb286"
    }
    $("#submit").hover(function (){
        $(this).css({
            "cursor": "pointer",
            "backgroundColor": "#220901",
            "color": "#f4fffd"
    });
    }, function (){
        $(this).css({
            "backgroundColor": "#f4fffd",
            "color": "#220901"
        });
    }).on("click", searchArea);
    window.addEventListener("keydown", function (e){
        if(e.key === "Enter"){
            if(search.value.length > 0){
                searchArea();
            }
        }
    });
    function searchArea(){
        geocode(search.value, mapboxToken).then((r) => {
            let searchedMarker = new mapboxgl.Marker(otherMarker).setLngLat(r).addTo(map)
            cord[0] = r[0];
            cord[1] = r[1];
            map.flyTo({
                center: r,
                zoom: 10,
                speed: 1,
                curve: 1
            });
            markerPos = cord;
            getWeather();
        });
    }









    function getWeather(){
        count = 0;
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            appid: openWeatherApi,
            lat: markerPos[1],
            lon: markerPos[0],
            exclude: "minutely, hourly, alerts, current",
            units: "imperial"
        }).done((data) => {
            let coordinates = {
                lat: data.lat,
                lng: data.lon
            }
            reverseGeocode(coordinates, mapboxToken).then((result) => {
                $("#cityName").text(result);
            });

            weatherSpot[0].innerHTML = "";

            for (let i = 0; i < data.daily.length; i++) {
                weatherSpot[0].innerHTML += render(data);
                count++;
            }
        });
    }




//===============WEATHER FUNCTION INITIAL FOR SAN ANTONIO=============//
    let weatherSpot = document.getElementsByClassName("weatherArea");
    let count = 0;

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        appid: openWeatherApi,
        lat: 29.42,
        lon: -98.49,
        exclude: "minutely, hourly, alerts, current",
        units: "imperial"
    }).done((data) => {
        let coordinates = {
            lat: data.lat,
            lng: data.lon
        }
        reverseGeocode(coordinates, mapboxToken).then((result) => {
            $("#cityName").text(result);
        });
        for (let i = 0; i < data.daily.length; i++) {
            weatherSpot[0].innerHTML += render(data);
            count++;
        }
    });



    function render (data){
        let html = `<div class="weatherCard">`;
        html += `<p id="head">${timeConverter(data.daily[count].dt)}</p>`;
        html += `<p class="description">Description: ${data.daily[count].weather[0].description}</p>`;
        html += `<p class="description">H: ${data.daily[count].temp.max}</p>`;
        html += `<p class="description">L: ${data.daily[count].temp.min}</p>`;
        html += `<p class="description">Humidity: ${data.daily[count].humidity}</p>`;
        html += `<p class="description">Pressure: ${data.daily[count].pressure}</p>`;
        html += `</div>`;
        return html;
    }


























    //===========OTHER FUNCTIONS============//
    function timeConverter(unix){
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let d = new Date(unix * 1000);
        let year = d.getFullYear();
        let month = d.getMonth();
        let m = months[month];
        let day = d.getDate();
        return `${day} ${m} ${year}`;
    }

});