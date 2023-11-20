
//Creates Map
function myMap(){

  const myLatlng = { lat: 46.547581, lng: -87.395592 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatlng,
  });

  //Creates the Geocoder
  const geocoder = new google.maps.Geocoder();
  
   // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
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

  document.getElementById("enter").addEventListener("click", ()=>{
    geocodeCoord(geocoder);
  });
}

function geocodeCoord(geocoder){
  var latStrt;
  var lngStrt;
  var latEnd;
  var lngEnd;

  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;

  if(start.charAt(0) == '{' || start.charAt(0) == '4'){
    const latlngStrt = start.split(",",2);
    if(latlngStrt[0].substring(0,1) == "4")latStrt = latlngStrt[0];
    else latStrt = latlngStrt[0].substring(8);
    if(latlngStrt[1].substring(0,2) == "-8") lngStrt = latlngStrt[1];
    else lngStrt = latlngStrt[1].substring(7,latlngStrt[1].length-1);
    const latlngS = latStrt + "," + lngStrt;
    const latlngStr = latlngS.split(",",2);
    const startCoord = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };
  }
  else if(end.charAt(0) == '{' || end.charAt(0) == '4'){
    const latlngEnd = end.split(",",2);
    if(latlngEnd[0].substring(0,1) == "4")latEnd = latlngEnd[0];
    else latEnd = latlngEnd[0].substring(8);
    if(latlngEnd[1].substring(0,2) == "-8") lngEnd = latlngEnd[1];
    else lngEnd = latlngEnd[1].substring(7,latlngEnd[1].length-1);
    const latlngE = latEnd + "," + lngEnd;
    const latlngStr = latlngE.split(",",2);
    const endCoord = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1]),
    };
  }
  else return;
                        
    //START GEOCODE
  geocoder.geocode({ location: startCoord})
  .then((respoonse) => {
    if(response.results[0]){
      document.getElementById("test").innerHTML = response.results[0].formatted_address;
      //document.getElementById("test").innerHTML = "TESTING CONVERTCOORD()";
    }
    else alert("No results found");
  })
  .catch((e) => window.alert("Geocoder failed due to: " + e));  

    //END GEOCODE
  geocoder.geocode({ location: endCoord})
  .then((respoonse) => {
    if(response.results[0]){
      document.getElementById("test").innerHTML = response.results[0].formatted_address;
      //document.getElementById("test").innerHTML = "TESTING CONVERTCOORD()";
    }
    else alert("No results found");
  })
  .catch((e) => window.alert("Geocoder failed due to: " + e)); 

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
