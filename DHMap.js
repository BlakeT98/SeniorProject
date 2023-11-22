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
let addresses = "1 Peter White Dr,2901 Island Beach Rd,100 Hawley St,2701 N Lakeshore Blvd,2001 N Lakeshore Blvd,375 River Park Cir,2300 Presque Isle Ave,315 Hawley St";
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

//gets id index for Intersections[]
//start = searchAddress("325 E Michigan St");
//end = searchAddress("2724 N Lakeshore Blvd");

//document.getElementById("test").innerHTML = start + " " + end;
