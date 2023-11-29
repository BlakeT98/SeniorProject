
//Creates Map
function myMap(){

  const myLatlng = { lat: 46.547581, lng: -87.395592 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatlng,
  });

   // Create the initial InfoWindow.
 /* let infoWindow = new google.maps.InfoWindow({
    content: "<p style=\"color:black;\"><b>Click the map to get Lat/Lng!</b></p>",
    position: myLatlng,
    
  });

  infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent("<p style=\"color:black;\"><b>" + JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2), + "</b></p>"   );
    infoWindow.open(map);
  });    
  */
  //Boundary range on map
  const range = [
    { lat: 46.585, lng: -87.402 },
    { lat: 46.584, lng: -87.399 },
    { lat: 46.584, lng: -87.398 },
    { lat: 46.583, lng: -87.397 },
  ];
  //Creates boundary line on map
  const boundary = new google.maps.Polyline({
    path: range,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });  
  boundary.setMap(map);
  
}
window.myMap = myMap;


//window.myMap = myMap;


  //Creates marker pin
   //var marker = new google.maps.Marker({  position: coord, map: map }); 


//Applies onButtonClick to button
//const button = document.querySelector('button');
/*document.getElementById("enter").addEventListener("click", grabAddress);


//button.addEventListener('click', grabAddress);
//button.addEventListener('click', onButtonClick);

//Grabs addresses from input text
function grabAddress(){
 var start = document.getElementById("start").value;
 var end = document.getElementById("end").value;
 alert(start + ' ' + end);
 
}
*/

//Creates pop up message at button click
/*function onButtonClick() {
  alert('Button clicked!');
}*/

//Creates button at bottom of html page
/*const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);

newButton.addEventListener('click', () => {
  alert('New button clicked!');
});
*/
