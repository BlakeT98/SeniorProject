
//Creates Map
function myMap(){

  const myLatlng = { lat: 46.547581, lng: -87.395592 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatlng,
  });

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

  //Boundary range on map
  const range = [
    { lat: 46.585291, lng: -87.401704 },
    { lat: 46.585011681092425, lng: -87.40104803985909 },
    { lat: 46.58437761621512, lng: -87.39985920987138 },
    { lat: 46.584071468490485, lng: -87.39910100171252 },
    { lat: 46.58398469674265, lng: -87.39797301043937 },
    { lat: 46.58373447709329, lng: -87.39671793892514 },
    { lat: 46.583601676753666, lng: -87.39508401300425 },
    { lat: 46.58373520101105, lng: -87.3933778579761 },
    { lat: 46.584222257133526, lng: -87.39140990558423 },
    { lat: 46.584226446448525, lng: -87.39013264180892 },
    { lat: 46.58408690042543, lng: -87.3896128922488 },
    { lat: 46.583525911554524, lng: -87.38861396709255 },
    { lat: 46.58296247778515, lng: -87.38795070383613 },
    { lat: 46.582108223261955, lng: -87.38748347425543 },
    { lat: 46.582261007209134, lng: -87.3866175249111 },
    { lat: 46.58232489382719, lng: -87.38547337356361 },
    { lat: 46.58218022186839, lng: -87.38492677228632 },
    { lat: 46.58153312019816, lng: -87.3839041803931 },
    { lat: 46.580978906010465, lng: -87.38314260189925 },
    { lat: 46.580999573196564, lng: -87.38252265495763 },
    { lat: 46.58132634482829, lng: -87.3804822102817 },
    { lat: 46.58158745439193, lng: -87.3803121176111 },
    { lat: 46.58234743677985, lng: -87.38042304665605 },
    { lat: 46.58281803918411, lng: -87.38035577099498 },
    { lat: 46.58345767848423, lng: -87.38018103499543 },
    { lat: 46.58508584910351, lng: -87.38014588953173 },

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
