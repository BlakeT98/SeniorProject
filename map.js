//Creates objects that are nodes in a graph and connects nodes to other nodes via edges
/*class Graph{
 
}
class Node{
  String Name;
  Node North = new Node();
  Node East = new Node();
  Node South = new Node();
  Node West = new Node();
  int Elevation;
  Node(String name, Node n, Node e, Node s, Node w, int ele){
    this.Name = name;
    this.North = n;
    this.East = e;
    this.South = s;
    this.West = w;
    this.Elevation = ele;
  }
}*/

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

//Applies onButtonClick to button
const button = document.querySelector('button');
button.addEventListener('click', grabAddress);
//button.addEventListener('click', onButtonClick);

//Grabs addresses from input text
function grabAddress(){
 var start = document.getElementById("start").value;
 var end = document.getElementById("end").value;
 var txt = start + ' ' + end;
 if(validAddress(start)){
  if(validAddress(end)) alert('Creating Route!');
  alert(end + ' is not a valid address.');
 }
 alert(start + ' is not a valid address.')                                               
}

//Checks if address is within range
function boolean validAddress(var ad) {
  //return true if it is a valid address and within range
 //return false if not
 return true;
}

