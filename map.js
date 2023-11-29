
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
    { lat: 46.59017793671169, lng: -87.3789137989975 },
    { lat: 46.590482540252154, lng: -87.37890843457949 },
    { lat: 46.59087948445203, lng: -87.37939346409058 },
    { lat: 46.591087887960384, lng: -87.37997730681327 },
    { lat: 46.59124940953589, lng: -87.38020082425847 },
    { lat: 46.59155624080107, lng: -87.38040372480556 },
    { lat: 46.59219889614282, lng: -87.38062902662371 },
    { lat: 46.59219889614282, lng: -87.38062902662371 },
    { lat: 46.592706899956696, lng: -87.3823256513541 },
    { lat: 46.59283445295446, lng: -87.38249586635774 },
    { lat: 46.59290897889993, lng: -87.38280469051112 },
    { lat: 46.592818462333575, lng: -87.38336894943843 },
    { lat: 46.5918099454494, lng: -87.38504777397345 },
    { lat: 46.59097915758186, lng: -87.385648240691 },
    { lat: 46.59030592338262, lng: -87.38584472096025 },
    { lat: 46.58954405458842, lng: -87.38556870947596 },
    { lat: 46.58609821492328, lng: -87.38522320334893 },
    { lat: 46.58493985551381, lng: -87.38402164939768 },
    { lat: 46.58445957758789, lng: -87.38383842967363 },
    { lat: 46.583827670092894, lng: -87.38382368725352 },
    { lat: 46.58328783907617, lng: -87.38390610957217 },
    { lat: 46.58176858200168, lng: -87.38427531942654 },

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
