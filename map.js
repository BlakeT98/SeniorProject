
//Creates Map
function myMap(){

  const myLatlng = { lat: 46.547581, lng: -87.395592 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatlng,
  });
   // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
    
  });
  //removes infowindow background
   google.maps.event.addListenerOnce(map, 'idle', function(){
    jQuery('.gm-style-iw').prev('div').remove();
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
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
    );
    infoWindow.open(map);
  });
 
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
