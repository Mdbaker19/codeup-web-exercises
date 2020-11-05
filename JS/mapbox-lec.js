/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]


// var dark = document.getElementById("dark");
// var zooms = document.getElementsByClassName("zoomLevels");
// var x = 10;
// var darkMode = "mapbox://styles/mapbox/dark-v10";
var mode = 'mapbox://styles/mapbox/streets-v11';
mapboxgl.accessToken = mapboxToken;
var mapObj = ({
    container: 'map',//from id map in HTML
    style: mode, // stylesheet location
    center: [-108.450665, 45.830476], // starting position [lng, lat]
    zoom: 13 , // starting zoom
});
var map = new mapboxgl.Map(mapObj);
// function makeDark(){
//     mode = "mapbox://styles/mapbox/dark-v10";
//     mapObj.style = mode;
//     console.log("changing to dark mode");
// }
// dark.addEventListener("click", makeDark);
// zooms[0].addEventListener("click", function(){
//     x+=1;
//     console.log(x);
//     console.log(mode);//is applying after dark is clicked
//     mapObj.zoom = x;
//     console.log(mapObj.zoom);
// });
// zooms[1].addEventListener("click", function(){
//     x-=1;
//     console.log(x);
//     mapObj.zoom = x;
// });

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~10 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.

// var markerOptions = {
//     color: "#ff0000",
//     draggable: true
// }
//
// var alamoMarker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-98.4861, 29.4260])
//     .addTo(map);
// TODO TOGETHER: Change the color of the marker

// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.
// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<h1>Codeup Rocks!</h1>")
//     .addTo(map);

// var popUpSettings = {
//     closeButton: true
// }
//
// var alamoPopup = new mapboxgl.Popup(popUpSettings)
//     .setHTML("<p>remember the alamo</p>")
//     .addTo(map);
//
// alamoMarker.setPopup(alamoPopup);

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"
// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setText("Codeup Rocks!")
//     .addTo(map);


/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter
// geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxToken).then(function(result){
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(15);
// });


//TODO: Using the geocode method above, add a marker at Codeup to the map
var codeup = {
    color: "#000000",
    draggable: false
}
var codeUpMarker = new mapboxgl.Marker(codeup)
    .setLngLat([-98.489615, 29.426827])
    .addTo(map)
//TODO: Instead of setCenter try using map.jumpTo()

// geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxToken).then(function(result){
//     // map.jumpTo(result);
//     map.setZoom(12);
//     console.log(result);
// });

geocode("1734 columbine drive, billings, MT 59105", mapboxToken).then(function(result){
    // map.setCenter(result);
    map.setZoom(12);
    // console.log(result);
});

//TODO: Instead of setCenter try using map.flyTo()
//flying from map start billing mt to san antonio
geocode("600 Navarro St #350, San Antonio, TX 78205", mapboxToken).then(function(result){
    map.flyTo({
        center: [-98.489615, 29.426827],
        zoom: 9,
        speed: 0.5,
        curve: 1
    });
});


// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method

reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function(result){
    console.log(result);
});