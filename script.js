//import { testFn } from "./test";

//mapboxgl.accessToken = process.env.ACCESS_TOKEN;

// get loc
navigator.geolocation
.getCurrentPosition(successLoc, errorLoc, { enableHighAccuracy: true });

function successLoc(position) {
    //console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLoc() {
    setupMap([-2.24, 53.48]);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 14
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}

//map.on('load', testFn);
