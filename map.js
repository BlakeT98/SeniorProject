
function myMap(){
  var coord = {
    center:new google.maps.LatLng(46.547581, -87.395592),
    zoom:16,
  };
  var map = new google.maps.Map(document.getElementById('map'), coord);
  // var marker = new google.maps.Marker({  position: coord, map: map }); 
  
function onButtonClick() {
  alert('Button clicked!');
}

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
document.body.appendChild(newButton);

newButton.addEventListener('click', () => {
  alert('New button clicked!');
});
