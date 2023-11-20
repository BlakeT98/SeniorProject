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

let geocoder;
  
//Creating String of addresses seperateed by commas
//Creating String of intersections seperated by colons
let addresses = "100 Peter White Dr,2600 N Lakeshore Blvd,100 Hawley St,100 N 3rd St,300 E Michigan St,200 N Front St,200 N 3rd St,200 E Michigan St";
let intersections = "100 Peter White Dr,2600 N Lakeshore Blvd,100 Hawley St,100 N 3rd St,:100 N 3rd St,300 E Michigan St,200 N 3rd St,200 E Michigan St,:null,null,100 N 3rd St,null,:";

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

//gets id index for Intersections[]
//start = searchAddress("325 E Michigan St");
//end = searchAddress("2724 N Lakeshore Blvd");

//document.getElementById("test").innerHTML = start + " " + end;
