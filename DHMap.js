function Street(blck,name){
  this.Block = blck;
  this.Name = name;
}

function Intersection(id,north,east,south,west,elev){
  this.Id = id;
  this.North = north;
  this.East = east;
  this.South = south;
  this.West = west;
  this.Elevation = elev;
}

  
//Creating String of addresses seperateed by commas
//Creating String of intersections seperated by colons
let addresses = "1 Peter White Dr,2901 Island Beach Rd,100 Hawley St,2701 N Lakeshore Blvd,2001 N Lakeshore Blvd,375 River Park Cir,2300 Presque Isle Ave,315 Hawley St,2302 Fitch Ave,2301 Longyear Ave,507 Hawley St,2145 Sugar Loaf Ave,2286 Co Rd 550,301 White St,355 White St,400 White St,453 White St,501 White St,2301 Wilkinson Ave,2201 Presque Isle Ave,2201 Fitch Ave,2200 Longyear Ave,2201 Wilkinson Ave,301 Harlow St,352 Harlow St,400 Harlow St,501 Harlow St,2101 Presque Isle Ave,2100 Fitch Ave,2100 Longyear Ave,2100 Wilkinson Ave,1101 Union St,500 Union St,600 Union St,701 Union St,201 Wright St,1900 Presque Isle Ave,301 Wright St,400 Wright St,1901 Longyear Ave,500 Wright St,1900 Wilkinson Ave,601 Wright St,1901 Van Evera Ave,2000 Van Evera Ave,700 Clark St,2000 Neidhart Ave,800 Clark St,2001 Wetton Ave,900 Clark St,2000 Sugar Loaf Ave,700 Wright St,1901 Neidhart Ave,801 Wright St,1910 Sugar Loaf Ave,1010 Wright St,1200 Wright St,1295 Wright St,1908 Enterprise St,1320 Wright St,1478 Wright St,1500 Wright St,1600 Wright St,1700 Wright St,1800 Wright St,1900 Wright St,2000 Wright St,2100 Wright St,2200 Wright St,1800 Presque Isle Ave,1800 Fitch Ave,1800 Longyear Ave,1800 Wilkinson Ave,1800 Van Evera Ave,1800 Neidhart Ave,1800 Schaffer St,1800 Tracy Ave,1600 Lincoln Ave,1600 Center St,1600 West Ave,1700 Gray St,1800 Gray St,1700 Nordwood St,1700 Kimber Ave,1800 Kimber Ave,1700 Woodland Ave,1900 Center St,1500 Granite Ave,1600 Granite Ave,1900 Norwood St,1700 Granite Ave,2000 Huron St,1800 Granite Ave,2000 Center St,2000 Montgomery St,1500 Woodridge Ave,1600 Woodridge Ave,1700 Woodridge Ave,1800 Woodridge Ave,2100 Center St,2100 Montgomery St,2100 Norwood St,2100 Huron St,1500 Erie Ave,1600 Erie Ave,1700 Erie Ave,1800 Erie Ave,1862 Erie Ave,2200 Center St,2200 Montgomery St,2200 Norwood St,2200 Huron St,2200 Evergreen Ln,1500 Ontario Ave,1600 Ontario Ave,1700 Ontario Ave,1800 Ontario Ave,1878 Ontario Ave,2300 Center St,2300 Norwood St,1500 Erickson Ave,1597 Erickson Ave,1700 Erickson Ave,2400 Center St,2400 Montgomery St,2400 Norwood St,2300 Huron St,1500 Cox Ave,1595 Cox Ave,1700 Cox Ave,2500 Center St,2500 Norwood St,2500 Huron St,1500 N Vandenboom Ave,1700 N Vandenboom Ave,2600 Center St,1200 Center St,1216 Center St,1240 Center St,1306 Center St,1700 Tracy Ave,900 Center St,1700 Schaffer St,700 Center St,1700 Van Evera Ave,600 Center St,1700 Wilkinson Ave,500 Center St,1700 Longyear Ave,400 Center St,1700 Fitch Ave,300 Center St,1700 Presque Isle Ave,1739 Lake Shore Blvd,1400 Pine St,1400 1400-1600 N Lakeshore Blvd,1400 Shiras Park 1400,1100 N Vandenboom Ave,2500 W Fair Ave,1100 Cox Ave,2300 Cherry St,1400 Ontario Ave,1300 Ontario Ave,2200 Summit St,1400 Erie Ave,1300 Erie Ave,2100 Summit St,1400 Woodridge Ave,1300 Woodridge Ave,2100 Cherry St,1400 Granite Ave,2000 Summit St,1300 Granite Ave,2000 Cherry St,1900 Center St,1900 Summit St,1900 Cherry St,1100 Granite Ave,2000 Waldo St,1200 Woodridge Ave,2100 Waldo St,1200 Erie Ave,1900 Waldo St,1100 Woodridge Ave,2100 W Fair Ave,1100 Erie Ave,1000 Erie Ave,2000 Allen St,1000 Ontario Ave,2200 W Fair Ave,1100 Ontario Ave,2300 W Fair Ave,2400 W Fair Ave,974 Cox Ave,800 Cox Ave,2500 Moran St,800 N Vandenboom Ave,2400 Moran St,800 Erickson Ave,1000 Ontario Ave,2300 Allent St,1000 Erickson Ave,900 Erickson Ave,2300 Beaudoin St,900 Ontario Ave,800 Ontario Ave,2300 Moran St,700 Ontario Ave,2300 Badger St,700 Erickson Ave,2400 Badger St,500 Cox Ave,2500 Werner St,500 N Vandenboom Ave,2400 Werner St,600 Erickson Ave,500 Erickson Ave,600 Ontario Ave,2300 Diorite St,500 Ontario Ave,2300 Werner St,2200 Badger St,600 Erie Ave,2200 Diorite St,700 Erie Ave,500 Erie Ave,2198 Werner St,";
let intersections = "1 Peter White Dr,null,2701 N Lakeshore Blvd,2901 Island Beach Rd,:2701 N Lakeshore Blvd,null,2001 N Lakeshore Blvd,100 Hawley St,:375 River Park Cir,100 Hawley St,2300 Presque Isle Ave,315 Hawley St:";

//splitting addresses into an array
const addyArray = addresses.split(",");
//splitting intersections into an array
const interArray = intersections.split(":");

const Streets = [];
const Intersections = [];
let start = "";
let end = "";
let blck;
let n;
//Creating Streets[] with addyArray
for(let i = 0; i < addyArray.length; i++){
  if(addyArray[i].charAt(3) == " "){
    blck = addyArray[i].substring(0,3);
    n = addyArray[i].substring(4);
  }
  else {
    blck = addyArray[i].substring(0,4);
    n = addyArray[i].substring(5);
  }
  Streets[i] = new Street(blck,n);
  //temp += Streets[i].Name + "<br>"; 
}
//temp += interArray[0] + "<br>";
//Creating Intersections[] with interArray
for(let j = 0; j < interArray.length-1; j++){
  let compass = [];
  let index = 0;
  let start = 0;
  for(let k = 0; k < interArray[j].length; k++){
    if(interArray[j].charAt(k) == ","){
      compass[index] = interArray[j].substring(start,k);
      //temp += compass[index] + "<br>";
      start = k + 1;
      index++;
    }
  }
  Intersections[j] = new Intersection(j,compass[0],compass[1],compass[2],compass[3],0);
  //temp += Intersections[j].Id + ", North: " + Intersections[j].North + ", East: " + Intersections[j].East + ", South: " + Intersections[j].South + ", West: " + Intersections[j].West + ", Elevation: " + Intersections[j].Elevation + "<br>";
}

function searchAddress(street){
  let block = 0;
  let st = "";
  let blockNum = 0;
  //<label id="test">100 Hawley St</label> 
  //let street = s.substring(17,s.length-9);
  //console.log("UPDATE " + street)

  for(let i = 0; i < street.length; i++){
    if(street.charAt(3) == " "){
      block = street.substring(0,3);
      st = street.substring(4);
    }
    else {
      block = street.substring(0,4);
      st = street.substring(5);
    }
  }  //Checking if starting or ending locations are a match with Streets[]
  for(let j = 0; j < Streets.length; j++){
    if(st == Streets[j].Name){
      if(blockNum == 0){
        if(block >= Streets[j].Block)blockNum = Streets[j].Block;
      }
      else{
        if(blockNum < Streets[j].Block && Streets[j].Block < block)blockNum = Streets[j].Block;
      }
    }
  }
  //blockNum is the correct block number for matching street name
  let s = "" + blockNum + " "  + st;
 for(let k = 0; k < Intersections.length; k++){
   if(s == Intersections[k].North || s == Intersections[k].East || s == Intersections[k].South || s == Intersections[k].West)return Intersections[k].Id;
 }
}


//variables for the literal coordinates for the selected start and end locations
var startCoord;
var endCoord;
//Grabs addresses from input text
function grabAddress(){
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;                  

  //START INPUT
  //Check if it has a left bracket indicating the user pasted lat lng
  if(start.charAt(0) == '{' && end.charAt(0) == '{'){
    //removing {"lat": and } from pasted coord
    var latlngS = chop(start);
    startCoord = latlngS;
    //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
    //used source for concatinating geocode api url and lat/lng with api key added at the end
    axios.get('https:maps.googleapis.com/maps/api/geocode/json',{
      params:{
        latlng: latlngS,
        key:'AIzaSyDXv29cjGoYgAy0VD5MVexGcdlXwd0eohg'
      }
    })
   .then(function(response){  
     //combining block number and street name from geocoded results
     var startAddy = response.data.results[0].address_components[0].short_name + " " + response.data.results[0].address_components[1].short_name;
     console.log("Found Start LatLng :" + startAddy);
     //converting JSON obj into string
     var startOutput = `${startAddy}`;
                          
     //END INPUT
     //removing {"lat": and } from pasted coord
     var latlngE = chop(end);
     endCoord = latlngE;
     //used source for concatinating geocode api url and lat/lng with api key added at the end
     axios.get('https:maps.googleapis.com/maps/api/geocode/json',{
       params:{
         latlng: latlngE,
         key:'AIzaSyDXv29cjGoYgAy0VD5MVexGcdlXwd0eohg'
       }
      })
      .then(function(response){
        //combining block number and street name from geocoded results
        var endAddy = response.data.results[0].address_components[0].short_name + " " + response.data.results[0].address_components[1].short_name;
        console.log("Found End LatLng :" + endAddy); 
        //converting JSON obj into string
        var endOutput = `${endAddy}`;

        //Searches readable address from my array of acceptable streets, returns id number for intersection the street is a part of 
        var findS = searchAddress(startOutput);
        var findE = searchAddress(endOutput);
        //Tells user if address is found
        if(findS == undefined && findE == undefined)alert("Start Address: (" + startOutput + ") and End Address: (" + endOutput + ") are not found or within range");
        else if(findS == undefined)alert("Start Address: (" + startOutput + ") is not found or within range");
        else if(findE == undefined)alert("End Address: (" + endOutput + ") is not found or within range");
        else{
          //If found, add start addresses to html
          document.getElementById('test').innerHTML = startOutput;
          document.getElementById('test2').innerHTML = endOutput;
         }
       })
       .catch(function(error){
         console.log(error);
         alert("Bad End Address input")
       });                    
      })
      .catch(function(error){
        console.log(error);
        alert("Bad Start Address input");
      });
  }
  //if start and end are addresses, not coords
  if(start.charAt(0) != '{' && end.charAt(0) != '{'){
    //searches array for acceptable address
    var findS = searchAddress(start);
    var findE = searchAddress(end);
    //NEED TO CONVERT INTERSECTIONS[] ID TO FULL BLOCK ST NAME
                          
    if(findS === undefined && findE === undefined)alert("Start Address: (" + start + ") and End Address: (" + end + ") are not found or within range.");
    else if(findS == undefined)alert("Start Address: (" + start + ") is not found or within range");
    else if(findE == undefined)alert("End Address: (" + end + ") is not found or within range");
    else{
      document.getElementById('test').innerHTML = start;
      document.getElementById('test2').innerHTML = end;
    }
  }
  if(start.charAt(0) != '{' && end.charAt(0) == '{' || start.charAt(0) == '{' && end.charAt(0) != '{')alert("Start and End addresses do not have matching input types");
}

function chop(coord){
  var lat;
  var lng;
  const latlng = coord.split(",",2);
  lat = latlng[0].substring(8);
  lng = latlng[1].substring(7,latlng[1].length-1);
  var chopped = lat + "," + lng;
  return chopped;
}

//gets id index for Intersections[]
//start = searchAddress("325 E Michigan St");
//end = searchAddress("2724 N Lakeshore Blvd");

//document.getElementById("test").innerHTML = start + " " + end;
