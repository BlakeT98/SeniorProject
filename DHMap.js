function Street(blck,name){
  this.Block = blck;
  this.Name = name;
}
  
//Creating String of addresses seperateed by commas
let addresses = "100  Peter White Dr,2600  N Lakeshore Blvd,100  Hawley St,100  N 3rd St,300  E Michigan St,200  N Front St,200  N 3rd St,200  E Michigan St";
const addyArray = addresses.split(",");
const Streets = [];
let temp = "";
let blck;
let n;
for(let i = 0; i < addyArray.length; i++){
  if(addyArray[i].charAt(3) == " ")blck = addyArray[i].substring(0,3);
  else blck = addyArray[i].substring(0,4);
  n = addyArray[i].substring(5);
  Streets[i] = new Street(blck,n);
  temp += Streets[i].Name + "<br>";
}
document.getElementById("test").innerHTML = temp;
