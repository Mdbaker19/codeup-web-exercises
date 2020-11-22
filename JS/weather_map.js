$(document).ready(function (){
    let markerPos = [-98.49, 29.42];
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
        marker: false
    });

    geocoder.on("result", function(e){
        markerPos[0] = e.result.center[0];
        markerPos[1] = e.result.center[1];
        marker.setLngLat(markerPos)
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

            reverseGeocodeSpecific(coordinates, mapboxToken).then((result) => {
                $("#cityName").text(result);
            });

            weatherSpot[0].innerHTML = "";

            for (let i = 0; i < data.daily.length; i++) {
                weatherSpot[0].innerHTML += render(data, i);
            }
            cardClick();
        }).fail(function(jqhx, st, er){
            console.log(jqhx);
            console.log(st);
            console.log(er);
        });
    }

    getWeather();

    let weatherSpot = document.getElementsByClassName("weatherArea");


    function cardClick() {
        $("body").on("click", ".weatherCard", function(){
            $(".noShow").css("display", "flex");
            $("#largeArea").fadeIn(10).css("display", "flex").html((createLargeCard($(this).html())));
        });
        $("body").on("click", "#close", function(){
            $(".noShow").css("display", "none");
            $("#largeArea").fadeOut(300);
        });
    }

    function createLargeCard(content){
        let html = `<div class="largeCard">`;
        html += `<button id="close">X</button>`;
        html += content;
        html += `</div>`;
        return html;
    }

    function render (data, i){
        let html = `<div class="weatherCard">`;
        html += `<img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png" alt="icon">`;
        html += `<p class="weekday">${weekDay(data.daily[i].dt)}</p>`;
        html += `<p class="head">${timeConverter(data.daily[i].dt + data.timezone_offset)}</p>`;
        html += `<p class="description descriptionHead">Description</p>`;
        html += `<p class="description long"><span>${capitalizeWords(data.daily[i].weather[0].description)}</span></p>`;
        html += `<p class="description">H: <span>${data.daily[i].temp.max}°</span></p>`;
        html += `<p class="description">L: <span>${data.daily[i].temp.min}°</span></p>`;
        html += `<p class="description">Humidity: <span>${data.daily[i].humidity}</span></p>`;
        html += `<p class="description long">Wind speed: <span>${data.daily[i].wind_speed}/mph</span> <span>${windDir(data.daily[i].wind_deg)}</span></p>`;
        html += `<p class="description noShow">Pressure: <span>${data.daily[i].pressure}</span></p>`;
        html += `<p class="description noShow">Sun rise: <span>${clockTime(data.daily[i].sunrise)}</span></p>`;
        html += `<p class="description noShow">Sun set: <span>${clockTime(data.daily[i].sunset)}</span></p>`;
        html += `<p class="description noShow">UVI: <span>${data.daily[i].uvi}</span></p>`;
        html += `<p class="description noShow">Day feels like: <span>${data.daily[i].feels_like.day}</span></p>`;
        html += `</div>`;
        return html;
    }



    function capitalizeWords(str){
        let answer = "";
        let asArr = str.split(" ");
        let first = asArr[0][0].toUpperCase();
        let last = asArr[1][0].toUpperCase();
        let newFirst = asArr[0].split("").splice(1, asArr[0].length-1);
        let newLast = asArr[1].split("").splice(1, asArr[1].length-1);
        newFirst.unshift(first);
        let capFirst = newFirst.join("");
        newLast.unshift(last);
        let capLast = newLast.join("");
        answer += capFirst + " ";
        answer += capLast;
        return answer;
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

    function weekDay(unix){
        let d = new Date(unix * 1000);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = d.getDay();
        return `${days[day]}`;
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