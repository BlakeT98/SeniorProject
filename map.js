
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
  const range = [{ lat: 46.585291, lng: -87.401704 },{ lat: 46.585011681092425, lng: -87.40104803985909 },{ lat: 46.58437761621512, lng: -87.39985920987138 },{ lat: 46.584071468490485, lng: -87.39910100171252 },{ lat: 46.58398469674265, lng: -87.39797301043937 },{ lat: 46.58373447709329, lng: -87.39671793892514 },{ lat: 46.583601676753666, lng: -87.39508401300425 },{ lat: 46.58373520101105, lng: -87.3933778579761 },{ lat: 46.584222257133526, lng: -87.39140990558423 },{ lat: 46.584226446448525, lng: -87.39013264180892 },{ lat: 46.58408690042543, lng: -87.3896128922488 },{ lat: 46.583525911554524, lng: -87.38861396709255 },{ lat: 46.58296247778515, lng: -87.38795070383613 },{ lat: 46.582108223261955, lng: -87.38748347425543 },    { lat: 46.582261007209134, lng: -87.3866175249111 },  { lat: 46.58232489382719, lng: -87.38547337356361 }, { lat: 46.58218022186839, lng: -87.38492677228632 },  { lat: 46.58153312019816, lng: -87.3839041803931 },      { lat: 46.580978906010465, lng: -87.38314260189925 },{ lat: 46.580999573196564, lng: -87.38252265495763 },{ lat: 46.58132634482829, lng: -87.3804822102817 },{ lat: 46.58158745439193, lng: -87.3803121176111 },{ lat: 46.58234743677985, lng: -87.38042304665605 },{ lat: 46.58281803918411, lng: -87.38035577099498 },{ lat: 46.58345767848423, lng: -87.38018103499543 },{ lat: 46.58508584910351, lng: -87.38014588953173 },{ lat: 46.59017793671169, lng: -87.3789137989975 },{ lat: 46.590482540252154, lng: -87.37890843457949 },{ lat: 46.59087948445203, lng: -87.37939346409058 },{ lat: 46.591087887960384, lng: -87.37997730681327 },{ lat: 46.59124940953589, lng: -87.38020082425847 },{ lat: 46.59155624080107, lng: -87.38040372480556 },{ lat: 46.59219889614282, lng: -87.38062902662371 },{ lat: 46.59219889614282, lng: -87.38062902662371 },{ lat: 46.592706899956696, lng: -87.3823256513541 },{ lat: 46.59283445295446, lng: -87.38249586635774 },{ lat: 46.59290897889993, lng: -87.38280469051112 },{ lat: 46.592818462333575, lng: -87.38336894943843 },{ lat: 46.5918099454494, lng: -87.38504777397345 },{ lat: 46.59097915758186, lng: -87.385648240691 },{ lat: 46.59030592338262, lng: -87.38584472096025 },{ lat: 46.58954405458842, lng: -87.38556870947596 },{ lat: 46.58609821492328, lng: -87.38522320334893 },{ lat: 46.58493985551381, lng: -87.38402164939768 },{ lat: 46.58445957758789, lng: -87.38383842967363 },{ lat: 46.583827670092894, lng: -87.38382368725352 },{ lat: 46.58328783907617, lng: -87.38390610957217 },  { lat: 46.5818353910085, lng: -87.38436700340833 }, { lat: 46.58218022186839, lng: -87.38492677228632 },  { lat: 46.58232489382719, lng: -87.38547337356361 },  { lat: 46.582261007209134, lng: -87.3866175249111 },     { lat: 46.58210846895235, lng: -87.38748437622985 }, { lat: 46.58177653890065, lng: -87.38842407983961 },{ lat: 46.580404575049755, lng: -87.39053105597394 },{ lat: 46.578014556122625, lng: -87.39261056167977 },{ lat: 46.57395339079787, lng: -87.39340771529636 },{ lat: 46.57128868694969, lng: -87.39351922139618 },{ lat: 46.57128178997564, lng: -87.39613324019987 },{ lat: 46.571843225693065, lng: -87.39612659112267 },{ lat: 46.5722545545819, lng: -87.3962467212138 },{ lat: 46.57250788301782, lng: -87.39647443800187 },{ lat: 46.57267455861455, lng: -87.39673210221369 },{ lat: 46.57289839026013, lng: -87.39726937299075 },{ lat: 46.57267455861455, lng: -87.39673210221369 },{ lat: 46.57250788301782, lng: -87.39647443800187 },{ lat: 46.5722545545819, lng: -87.3962467212138 },{ lat: 46.571843225693065, lng: -87.39612659112267 },{ lat: 46.57128178997564, lng: -87.39613324019987 },{ lat: 46.571272583635846, lng: -87.39907493141537 },{ lat: 46.57146435646196, lng: -87.40068350733807 },{ lat: 46.5715582321447, lng: -87.40688360052893 },{ lat: 46.57089688447427, lng: -87.40700404026076 },{ lat: 46.570172293829714, lng: -87.40690183734733 },{ lat: 46.567379127932895, lng: -87.40574892686814 },{ lat: 46.56397641951987, lng: -87.40578714314123 },{ lat: 46.56403142930317, lng: -87.41625048714 },{ lat: 46.564149624190286, lng: -87.43192461142453 },{ lat: 46.56478672658652, lng: -87.4371587745382 },{ lat: 46.56238677861513, lng: -87.43723255754327 },{ lat: 46.562433887780934, lng: -87.43984272734205 },{ lat: 46.56328340266681, lng: -87.43986662241076 },{ lat: 46.56338765736698, lng: -87.44502332193333 },{ lat: 46.56244946054523, lng: -87.44511249929855 },{ lat: 46.562642762479456, lng: -87.44547438170052 },{ lat: 46.56276020777447, lng: -87.44583647991753 },{ lat: 46.562642762479456, lng: -87.44547438170052 },{ lat: 46.56244946054523, lng: -87.44511249929855 },{ lat: 46.56156776889268, lng: -87.44510977096604 },{ lat: 46.561505915152345, lng: -87.44726558784923 },{ lat: 46.56156776889268, lng: -87.44510977096604 },{ lat: 46.55160835256886, lng: -87.4453170738845 },{ lat: 46.55150378285147, lng: -87.43480770535845 },{ lat: 46.550672176930966, lng: -87.43480970403581 },{ lat: 46.55064836742286, lng: -87.43578949074559 },{ lat: 46.550672176930966, lng: -87.43480970403581 },{ lat: 46.55150378285147, lng: -87.43480770535845 },    { lat: 46.55146126715123, lng: -87.43221506963225 },{ lat: 46.55056817084373, lng: -87.43224263113652 },{ lat: 46.55059093435646, lng: -87.43416276251706 },{ lat: 46.55056817084373, lng: -87.43224263113652 },{ lat: 46.54965616526339, lng: -87.43225348392438 },{ lat: 46.549599765398064, lng: -87.42989605176588 },{ lat: 46.54864965443885, lng: -87.42992716063294 },{ lat: 46.54844096415665, lng: -87.42694979858926 },{ lat: 46.546340626915814, lng: -87.42692078449554 },{ lat: 46.54593533330807, lng: -87.42403286907786 },{ lat: 46.54590076427319, lng: -87.4198316579245 },{ lat: 46.54483676960268, lng: -87.41993573512192 },{ lat: 46.54471681460616, lng: -87.41862844316607 },{ lat: 46.54443778740714, lng: -87.4179272001423 },{ lat: 46.54365631316905, lng: -87.41673286489187 },{ lat: 46.5428552770212, lng: -87.40936683667485 },{ lat: 46.542706020824994, lng: -87.40719466197352 },{ lat: 46.54262853278346, lng: -87.40630133725854 },{ lat: 46.54238926579593, lng: -87.40475090697844 },{ lat: 46.540581469575145, lng: -87.40533642566326 },{ lat: 46.5407473003473, lng: -87.4065206675129 },{ lat: 46.540581469575145, lng: -87.40533642566326 },{ lat: 46.54032732841634, lng: -87.40335310749855 },{ lat: 46.53868695054681, lng: -87.40366386748387 },    { lat: 46.537638930781064, lng: -87.40365799085573 },{ lat: 46.537653056055, lng: -87.40628525334444 },{ lat: 46.5385232055984, lng: -87.40637961140064 },{ lat: 46.53854933611709, lng: -87.40520608636052 },{ lat: 46.5385232055984, lng: -87.40637961140064 },{ lat: 46.537653056055, lng: -87.40628525334444 },{ lat: 46.537638930781064, lng: -87.40365799085573 },{ lat: 46.53584812306179, lng: -87.40365526272623 },{ lat: 46.53586520986144, lng: -87.4073525689246 },{ lat: 46.536162932871186, lng: -87.40821372673585 },{ lat: 46.53622809877744, lng: -87.40864196965268 },{ lat: 46.536234807777916, lng: -87.41000353223876 },{ lat: 46.53622809877744, lng: -87.40864196965268 },{ lat: 46.536162932871186, lng: -87.40821372673585 },{ lat: 46.53586520986144, lng: -87.4073525689246 },{ lat: 46.53584812306179, lng: -87.40365526272623 },{ lat: 46.53494294623784, lng: -87.40366337698883 },{ lat: 46.53495695258026, lng: -87.40529259436876 },{ lat: 46.53499003307784, lng: -87.40563697061557 },{ lat: 46.53497792004156, lng: -87.40601269555454 },{ lat: 46.53499003307784, lng: -87.40563697061557 },{ lat: 46.53495695258026, lng: -87.40529259436876 },{ lat: 46.53441033608442, lng: -87.405292003578 },{ lat: 46.53442365937302, lng: -87.40597246950527 },{ lat: 46.5340475623869, lng: -87.40822116132954 },{ lat: 46.53355906199609, lng: -87.40954973220438 },{ lat: 46.53334158677617, lng: -87.40969743731517 },{ lat: 46.53311336429503, lng: -87.40970530193722 },{ lat: 46.53311699134441, lng: -87.41142934095664 },{ lat: 46.5325133244467, lng: -87.41143265487838 },{ lat: 46.53224721949169, lng: -87.41131321506116 },{ lat: 46.53173340855972, lng: -87.41014362835543 },{ lat: 46.531630646435815, lng: -87.39902842696152 },{ lat: 46.53075999148452, lng: -87.39931191613276 },{ lat: 46.53073606231726, lng: -87.40030491010917 },{ lat: 46.53075999148452, lng: -87.39931191613276 },{ lat: 46.5307488827721, lng: -87.39657399588579 },{ lat: 46.53070187143077, lng: -87.39557637309458 },{ lat: 46.53112400265421, lng: -87.39553837516083 },{ lat: 46.531207793611216, lng: -87.39515738902875 },{ lat: 46.531603592677854, lng: -87.39514817388513 },{ lat: 46.53167238423968, lng: -87.39655724129305 },{ lat: 46.53399396399948, lng: -87.39644686503448 },{ lat: 46.53400467636031, lng: -87.39584797493559 },{ lat: 46.534375100952154, lng: -87.39503121379677 },{ lat: 46.53473017238951, lng: -87.39478641694298 },{ lat: 46.53648868558465, lng: -87.3947978386725 },{ lat: 46.53718993330836, lng: -87.39440869950447 },{ lat: 46.537679043242996, lng: -87.3938245237739 },{ lat: 46.53831513285507, lng: -87.39330709977678 },{ lat: 46.53914226805043, lng: -87.39309819661796 },{ lat: 46.54019497806866, lng: -87.39292391943124 },{ lat: 46.54228207914148, lng: -87.39201811326174 },{ lat: 46.542188207285605, lng: -87.39120546107314 },{ lat: 46.54228207914148, lng: -87.39201811326174 },{ lat: 46.5436281991473, lng: -87.39107395215369 },{ lat: 46.5440108894031, lng: -87.39051823940507 },{ lat: 46.544191135387265, lng: -87.38978719140137 },{ lat: 46.544441471248575, lng: -87.3850567776291 },{ lat: 46.54447762805604, lng: -87.38308073512482 },{ lat: 46.54466534277784, lng: -87.38234022956782 },{ lat: 46.54492455721413, lng: -87.38085067614618 },{ lat: 46.54502513853476, lng: -87.38029205808408 },{ lat: 46.54525812815952, lng: -87.38007062753506 },{ lat: 46.54799194775255, lng: -87.38006532942629 },{ lat: 46.54829766141326, lng: -87.38017966565008 },{ lat: 46.55132090032138, lng: -87.38265647233429 },{ lat: 46.55257930685758, lng: -87.38322342125613 },{ lat: 46.5534208458953, lng: -87.38392893409089 },{ lat: 46.55390325643896, lng: -87.38395708958551 },{ lat: 46.55538318443125, lng: -87.38339499901421 },{ lat: 46.55584535295476, lng: -87.38343847950885 },{ lat: 46.55625983287928, lng: -87.38370372992044 },{ lat: 46.56159907953401, lng: -87.38940838126165 },{ lat: 46.56267138228609, lng: -87.38994762936322 },{ lat: 46.56803223185884, lng: -87.39312080532261 },{ lat: 46.5712881654203, lng: -87.39351970637424 },  ];
  //Creates boundary line on map
  const boundary = new google.maps.Polyline({
    path: range,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 0.25,
    strokeWeight: 2,
  });  
  boundary.setMap(map);

  var directionsService = new google.maps.DirectionService();
  var directinosDisplay = new goodle.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);

  var pathStr = path;
  var coordArray = finalPath;
  
  console.log("FINAL PATH: " + path);
  function calcRoute(){
    var request = {
      origin: 
  }
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
