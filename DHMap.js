//Creating String of addresses seperateed by commas
let addresses = "100 Peter White Dr,2600 N Lakeshore Blvd,100 Hawley St,100 N 3rd St,300 E Michigan St,200 N Front St,200 N 3rd St,200 E Michigan St";
const addyArray = addresses.split(",");
let temp = "";
for(let i = 0; i < addArray.length; i++){
  temp += addyArray[i] + "<br>";
}
document.getElementById("test").innerHTML = temp;
