var takeTour = document.getElementById("takeTour");
// var hideMarkers = document.getElementById("hide");
var eachInfo = document.getElementById("infoSpot");
var all = document.getElementById("all");







//---------WORK IN PROGRESS----------//
var zoomAmount = document.getElementById("zooming");
var zoomLevel = 10;
zoomAmount.addEventListener("change", function (){
    zoomLevel = parseFloat(zoomAmount.value);
});
function logZoom(){
    console.log(zoomLevel);
}

setInterval(logZoom, 1000);
//---------WORK IN PROGRESS----------//




var centerPoint = [-98.530120, 29.539448];

mapboxgl.accessToken = mapboxToken;
var mapObj = ({
    container: "mapBox",//from id map in HTML
    style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
    center: centerPoint, // starting position [lng, lat]
    zoom: zoomLevel , // starting zoom
});
var map = new mapboxgl.Map(mapObj);










//first watch near me
var firstCoor = [-98.656442, 29.438921];
// geocode("8603 TX-151, san antonio, tx 78245", mapboxToken).then(function(result){
//     console.log(result);
// });

var firstWatchMarkerInfo = {
    color: "#65b654"
}

var firstDesc = "<p>First Watch is great breakfast! Located at: 8603 TX-151, San Antonio, TX 78245</p>"

var firstPopUp = (new mapboxgl.Popup().setHTML("<img src='img/pancakes.jpg' alt='pancakes' width='50px' height='30px'>" + firstDesc));
var firstWatchMarker = new mapboxgl.Marker(firstWatchMarkerInfo).setLngLat(firstCoor).setPopup(firstPopUp).addTo(map);


//bourbon street
var bourCoor = [-98.443984, 29.603674];
// geocode("2815 N Loop 1604 E #106, San Antonio, TX 78232", mapboxToken).then(function(result){
//     console.log(result);
// });




var bourbonStMarkerInfo = {
    color: "#161414"
}
var bourbonDesc = "Really good cajun food here! Located at: 2815 N Loop 1604 E #106, San Antonio, TX 78232";

var bourbonPopUp = (new mapboxgl.Popup().setHTML("<img src='img/steak.jpg' alt='steak' width='50px' height='30px'>" + bourbonDesc));
var bourbonStMarker = new mapboxgl.Marker(bourbonStMarkerInfo).setLngLat(bourCoor).setPopup(bourbonPopUp).addTo(map)


//sushishima
var sushiCoor = [-98.511132, 29.610645];
// geocode("1205 N Loop 1604 W #230, San Antonio, TX 78258", mapboxToken).then(function(result){
//     console.log(result);
// });

var sushiMarkerInfo = {
    color: "#aa1717"
}
var sushiDesc = "Some of the best sushi! Located at: 1205 N Loop 1604 W #230, San Antonio, TX 78258";

var sushiPopUp = (new mapboxgl.Popup().setHTML("<img src='img/sushi.jpg' alt='sushi' width='50px' height='30px'>" + sushiDesc))
var sushiMarker = new mapboxgl.Marker(sushiMarkerInfo).setLngLat(sushiCoor).setPopup(sushiPopUp).addTo(map)



// var popUps = [firstPopUp, bourbonPopUp, sushiPopUp];
// hideMarkers.addEventListener("click", function (){
//     popUps.forEach((pop) => {
//         pop.remove();
//     });
// })

var restaurantsTour = [
    {
       name: "First Watch: ",
       coordinates: firstCoor,
       description: "Great breakfast! Located at: 8603 TX-151, san antonio, tx 78245"
    },
    {
        name: "Bourbon Street: ",
        coordinates: bourCoor,
        description: "Really good cajun food here! Located at: 2815 N Loop 1604 E #106, San Antonio, TX 78232"
    },
    {
        name: "SushiShima: ",
        coordinates: sushiCoor,
        description: "Some of the best sushi! Located at: 1205 N Loop 1604 W #230, San Antonio, TX 78258"
    }
]

// for #8
restaurantsTour.forEach((place) => {
    all.innerText += place.name + place.description + "\n";
});




var counter = 0;

function increment(){
    if(counter < restaurantsTour.length-1) {
        counter++;
    } else counter = 0;
}

takeTour.addEventListener("click", function(){
    eachInfo.innerText = restaurantsTour[counter].name + restaurantsTour[counter].description;
    map.flyTo({
        center: restaurantsTour[counter].coordinates,
        zoom: 18,
        speed: 0.8,
        curve: 1
    });
    increment();
});