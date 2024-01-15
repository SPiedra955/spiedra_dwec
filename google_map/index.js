// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;
let lastConn = [];
let savedLoc;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);

          //Saving last 5 locations
          lastConn.push(pos);

          if (lastConn.length > 5) {
            lastConn.shift();
          }

          localStorage.setItem("locations", JSON.stringify(lastConn));

          // Custom icon
          const customIcon = {
            url: "./siu.gif",
            scaledSize: new google.maps.Size(150, 150),
          };

          const marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: customIcon,
            title: "marker",
          });
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;

(function () {
  savedLoc = JSON.parse(localStorage.getItem("locations"));

  if (savedLoc) {
    for (let i = 0; i < savedLoc.length; i++) {
      console.log(savedLoc[i]);
    }
  }
})();
