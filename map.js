
//Creates Map
function myMap(){
  var coord = {
    center:new google.maps.LatLng(46.547581, -87.395592),
    zoom:16,
  };
  var map = new google.maps.Map(document.getElementById('map'), coord);

  //Creates marker pin
  // var marker = new google.maps.Marker({  position: coord, map: map }); 
}

//Creates pop up message at button click
function onButtonClick() {
  alert('Button clicked!');
}

//Applies onButtonClick to button
const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

//Creates button at bottom of html page
/*const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);

newButton.addEventListener('click', () => {
  alert('New button clicked!');
});
*/
