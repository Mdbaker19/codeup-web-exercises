$(document).ready(function (){

    // import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
    // require('../../node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css')
    //
    // mapboxgl.accessToken = mapboxToken;
    // var geocoder = new mapboxgl.MapboxGeocoder({
    //     accessToken: mapboxgl.accessToken,
    //     placeholder: 'Search'
    // });
    // document.getElementById('geocoder').appendChild(geocoder.onAdd());

    let markerPos = [];
    let start = [-98.65, 29.44];
    const baseOffset = 21600;

    mapboxgl.accessToken = mapboxToken;
    let mapObj = ({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: start,
        zoom: 8,
    });
    let map = new mapboxgl.Map(mapObj);

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
                search.value = "";
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
            $("#time").html(clockTime(data.current.dt + data.timezone_offset + baseOffset));

            reverseGeocode(coordinates, mapboxToken).then((result) => {
                $("#cityName").text(result);
            });

            weatherSpot[0].innerHTML = "";

            for (let i = 0; i < data.daily.length; i++) {
                weatherSpot[0].innerHTML += render(data);
                count++;
            }
        }).fail(function(jqhx, st, er){
            console.log(jqhx);
            console.log(st);
            console.log(er);
        });
    }


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
        $("#time").html(clockTime(data.current.dt));
        reverseGeocode(coordinates, mapboxToken).then((result) => {
            $("#cityName").text(result);
        });
        for (let i = 0; i < data.daily.length; i++) {
            weatherSpot[0].innerHTML += render(data);
            count++;
        }
    }).fail(function(jqhx, st, er){
        console.log(jqhx);
        console.log(st);
        console.log(er);
    });

    function render (data){
        let html = `<div class="weatherCard">`;
        html += `<img src="http://openweathermap.org/img/wn/${data.daily[count].weather[0].icon}.png">`;
        html += `<p class="head">${timeConverter(data.daily[count].dt + data.timezone_offset)}</p>`;
        html += `<p class="description long">Description: <span>${data.daily[count].weather[0].description}</span></p>`;
        html += `<p class="description">H: <span>${data.daily[count].temp.max}°</span></p>`;
        html += `<p class="description">L: <span>${data.daily[count].temp.min}°</span></p>`;
        html += `<p class="description">Humidity: <span>${data.daily[count].humidity}</span></p>`;
        html += `<p class="description">Pressure: <span>${data.daily[count].pressure}</span></p>`;
        html += `<p class="description long">Wind speed: <span>${data.daily[count].wind_speed}/mph</span></p>`;
        html += `</div>`;
        return html;
    }

    $(".weatherCard").hover(function () {
        console.log("on");
    }, function () {
        console.log("off");
    });


    function clockTime(unix){
        let uT = unix
        let date = new Date(uT * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();

        return `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
    }

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