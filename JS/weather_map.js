$(document).ready(function (){


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

    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        minLength: 1,
        marker: {
            color: "black"
        }
    });

    geocoder.on("result", function(e){
        markerPos[0] = e.result.center[0]
        markerPos[1] = e.result.center[1]
        getWeather();
    });

    map.addControl(geocoder);

    function updateMarkerMain(){
        let location = marker.getLngLat();
        markerPos[0] = (location.lng);
        markerPos[1] = (location.lat);
        getWeather();
    }

    marker.on("dragend", updateMarkerMain);


    let search = document.getElementById("search");
    let cord = [];
    let otherMarker = {
        draggable: true,
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

    function updateMarkerSecond(){
        let location = searchedMarker.getLngLat();
        markerPos[0] = (location.lng);
        markerPos[1] = (location.lat);
        getWeather();
    }

    let searchedMarker = new mapboxgl.Marker(otherMarker);

    function searchArea(){
        geocode(search.value, mapboxToken).then((r) => {
            searchedMarker.setLngLat(r).addTo(map);
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

    searchedMarker.on("dragend", updateMarkerSecond);


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
            console.log(data);
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
        cardHover(data);
    }).fail(function(jqhx, st, er){
        console.log(jqhx);
        console.log(st);
        console.log(er);
    });

    //=============BUTTON TO CLOSE IS NOT WORKING============//
    function cardHover(extraInfo) {
        $(".weatherCard").on("click", function(){
            $("#largeArea").fadeIn(300).css("display", "flex").html((createLargeCard($(this).html(), extraInfo)));
        });
        $("#close").on("click", function(){
            $("#largeArea").fadeOut(300);
            console.log("clicked close");
        });
    }


    //==========HOW TO INDEX THE DAILY BASED ON WHAT IS CLICKED??============//
    function createLargeCard(content, extra){
        let html = `<div class="largeCard">`;
        html += `<button id="close">X</button>`;
        html += content;
        html += `<p class="description">Sun rise: <span>${clockTime(extra.daily[0].sunrise)}</span></p>`;
        html += `<p class="description">Sun set: <span>${clockTime(extra.daily[0].sunset)}</span></p>`;
        html += `<p class="description">UVI: <span>${extra.daily[0].uvi}</span></p>`;
        html += `<p class="description">Day feels like: <span>${extra.daily[0].feels_like.day}</span></p>`;
        html += `</div>`;
        console.log(extra);
        return html;
    }


    function render (data){
        let html = `<div class="weatherCard">`;
        html += `<img src="http://openweathermap.org/img/wn/${data.daily[count].weather[0].icon}.png">`;
        html += `<p class="head">${timeConverter(data.daily[count].dt + data.timezone_offset)}</p>`;
        html += `<p class="description long">Description: <span>${data.daily[count].weather[0].description}</span></p>`;
        html += `<p class="description">H: <span>${data.daily[count].temp.max}°</span></p>`;
        html += `<p class="description">L: <span>${data.daily[count].temp.min}°</span></p>`;
        html += `<p class="description">Humidity: <span>${data.daily[count].humidity}</span></p>`;
        html += `<p class="description">Pressure: <span>${data.daily[count].pressure}</span></p>`;
        html += `<p class="description long">Wind speed: <span>${data.daily[count].wind_speed}/mph</span> <span>${windDir(data.daily[count].wind_deg)}</span></p>`;
        html += `</div>`;
        return html;
    }



    function windDir(d) {
        let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

        d += 22.5;

        if (d < 0) {
            d = 360 - Math.abs(d) % 360;
        }else {
            d = d % 360;
        }
        let w = parseInt(d / 45);
        return `${directions[w]}`;
    }


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