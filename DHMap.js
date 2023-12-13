function Street(blck,name){
  this.Block = blck;
  this.Name = name;
}
function Intersection(id,north,east,south,west,elev,coord){
//function Intersection(id,north,east,south,west,elev){
  this.Id = id;
  this.North = north;
  this.East = east;
  this.South = south;
  this.West = west;
  this.Elevation = elev;
  this.Coord = "" + coord;
}
  
//Creating String of addresses seperateed by commas
//Creating String of intersections seperated by colons
let addresses = "  1 Peter White Dr,2900 Island Beach Rd,100 Hawley St,2700 N Lakeshore Blvd,2000 N Lakeshore Blvd,800 N Lakeshore Blvd,900 Norwood St,800 Norwood St,700 Norwood St,600 Norwood St,500 Norwood St,400 Norwood St,375 River Park Cir,2300 Presque Isle Ave,315 Hawley St,2300 Fitch Ave,2300 Longyear Ave,500 Hawley St,2145 Sugar Loaf Ave,2286 Co Rd 550,300 White St,355 White St,400 White St,453 White St,500 White St,2300 Wilkinson Ave,2200 Presque Isle Ave,2200 Fitch Ave,2200 Longyear Ave,2200 Wilkinson Ave,300 Harlow St,352 Harlow St,400 Harlow St,500 Harlow St,2100 Presque Isle Ave,2100 Fitch Ave,2100 Longyear Ave,2100 Wilkinson Ave,1100 Union St,500 Union St,600 Union St,700 Union St,200 Wright St,1900 Presque Isle Ave,300 Wright St,400 Wright St,1900 Longyear Ave,500 Wright St,1900 Wilkinson Ave,600 Wright St,1900 Van Evera Ave,2000 Van Evera Ave,700 Clark St,2000 Neidhart Ave,800 Clark St,2000 Wetton Ave,900 Clark St,2000 Sugar Loaf Ave,700 Wright St,1900 Neidhart Ave,800 Wright St,1900 Sugar Loaf Ave,1000 Wright St,1200 Wright St,1295 Wright St,1908 Enterprise St,1320 Wright St,1500 Wright St,1600 Wright St,1700 Wright St,1800 Wright St,1900 Wright St,2000 Wright St,2100 Wright St,2200 Wright St,1800 Presque Isle Ave,1800 Fitch Ave,1800 Longyear Ave,1800 Wilkinson Ave,1800 Van Evera Ave,1800 Neidhart Ave,1800 Schaffer St,1600 Lincoln Ave,1600 Center St,1635 Center St,1600 West Ave,1649 Center St,1700 Gray St,1800 Gray St,1700 Norwood St,1700 Kimber Ave,1800 Kimber Ave,1700 Woodland Ave,1900 Center St,1500 Granite Ave,1600 Granite Ave,1900 Norwood St,1700 Granite Ave,2000 Huron St,1800 Granite Ave,2000 Center St,2000 Montgomery St,1500 Woodridge Ave,1600 Woodridge Ave,1700 Woodridge Ave,1800 Woodridge Ave,2100 Center St,2100 Montgomery St,2100 Norwood St,2100 Huron St,1500 Erie Ave,1600 Erie Ave,1700 Erie Ave,1800 Erie Ave,1862 Erie Ave,2200 Center St,2200 Montgomery St,2200 Norwood St,2200 Huron St,2200 Evergreen Ln,1500 Ontario Ave,1600 Ontario Ave,1700 Ontario Ave,1800 Ontario Ave,1878 Ontario Ave,2300 Center St,2300 Norwood St,1500 Erickson Ave,1600 Erickson Ave,1700 Erickson Ave,2400 Center St,2400 Montgomery St,2600 Montgomery St,2400 Norwood St,2300 Huron St,1300 Cox Ave,1400 Cox Ave,1500 Cox Ave,1595 Cox Ave,1700 Cox Ave,2500 Center St,2500 Norwood St,2500 Huron St,1500 N Vandenboom Ave,1600 N Vandenboom Ave,1700 N Vandenboom Ave,2600 Center St,1200 Center St,1216 Center St,1240 Center St,1306 Center St,900 Center St,1700 Schaffer St,700 Center St,1700 Van Evera Ave,600 Center St,1700 Wilkinson Ave,500 Center St,1700 Longyear Ave,400 Center St,1700 Fitch Ave,300 Center St,1700 Presque Isle Ave,1739 N Lakeshore Blvd,1400 Pine St,1400 N Lakeshore Blvd,1400 Shiras Park 1400,1100 N Vandenboom Ave,2500 W Fair Ave,1100 Cox Ave,2200 Cherry St,2300 Cherry St,1400 Ontario Ave,1300 Ontario Ave,2200 Summit St,1400 Erie Ave,1300 Erie Ave,2100 Summit St,1400 Woodridge Ave,1300 Woodridge Ave,2100 Cherry St,1400 Granite Ave,2000 Summit St,1300 Granite Ave,2000 Cherry St,1900 Center St,1900 Summit St,1900 Cherry St,1100 Granite Ave,2500 Waldo St,2000 Waldo St,1200 Woodridge Ave,2100 Waldo St,1200 Erie Ave,1900 Waldo St,1100 Woodridge Ave,2100 W Fair Ave,1100 Erie Ave,1000 Erie Ave,2000 Allen St,1000 Ontario Ave,2200 W Fair Ave,1100 Ontario Ave,2300 W Fair Ave,2400 W Fair Ave,911 Cox Ave,800 Cox Ave,2500 Moran St,800 N Vandenboom Ave,2400 Moran St,800 Erickson Ave,1000 Ontario Ave,2300 Allent St,1000 Erickson Ave,900 Erickson Ave,2400 Beaudoin St,2300 Beaudoin St,2200 Beaudoin St,900 Ontario Ave,800 Ontario Ave,2300 Moran St,700 Ontario Ave,2300 Badger St,700 Erickson Ave,2400 Badger St,500 Cox Ave,2500 Werner St,500 N Vandenboom Ave,2400 Werner St,600 Erickson Ave,500 Erickson Ave,600 Ontario Ave,2300 Diorite St,500 Ontario Ave,2300 Werner St,2200 Badger St,900 Erie Ave,600 Erie Ave,2200 Diorite St,700 Erie Ave,500 Erie Ave,400 Erie Ave,2200 Werner St,2100 Werner St,1900 Werner St,400 Meeske Ave,1900 Orchard St,400 Woodridge Ave,500 Woodridge Ave,600 Woodridge Ave,1800 Werner St,2100 Orchard St,2200 Orchard St,300 Woodridge Ave,2000 Bancroft St,1900 Bancroft St,300 Meeske Ave,200 Granite Ave,200 Meeske Ave,1900 W Ridge St,100 Meeske Ave,1111 W Washington St,1100 W Washington St,100 S McClellan Ave,200 N McClellan Ave,1300 W Ridge St,1800 W Fair Ave,1400 Woodland Ave,1740 W Fair Ave,1711 W Fair Ave,1400 Gray St,1700 Center St,1800 Center St,1700 W Fair Ave,1400 West Ave,1649 Center St,1550 W Fair Ave,1400 McClellan Ave,1401 N McClellan Ave,1600 Kildahl Ave,1306 West Ave,1700 Kildahl Ave,1400 Kimber Ave,1300 N McClellan Ave,1500 Mildred Ave,1300 West Ave,1700 Mildred Ave,1709 Mildred Ave,1300 Kimber Ave,1800 Mildred Ave,1900 Mildred Ave,1721 Elm Ave,1200 Gray St,1200 West Ave,1700 Elm Ave,1200 N McClellan Ave,1600 Elm Ave,959 N McClellan Ave,1100 Logan St,1300 Logan St,1100 West Ave,900 West Ave,1300 Cleveland Ave,1100 Cleveland Ave,1000 Cleveland Ave,1100 Sherman St,400 Sheridan Ave,520 N McClellan Ave,600 N McClellan Ave,400 N McClellan Ave,1200 Grant Ave,1000 Grant Ave,300 Reblein St,300 N McClellan Ave,1200 W Ridge St,100 N McClellan Ave,1109 W Washingston St,200 Reblein St,300 Rublein St,200 Rublein St,100 Rublein St,1000 W Bluff St,100 Garfield Ave,1000 W Washington St,700 W Ridge St,800 W Ridge St,900 W Ridge St,319 Lincoln Ave,200 Lincoln Ave,900 W Bluff St,100 Lincoln Ave,855 W Washington St,300 Lincoln Ave,1100 Jefferson STT,1200 Jefferson St,900 Jefferson St,500 Lincoln Ave,500 Garfield Ave,900 Garfield Ave,900 Sherman St,1300 Sherman St,1000 Sherman St,600 Lincoln Ave,900 Cleveland Ave,600 Sheridan Ave,1400 W Fair Ave,1400 Garfield Ave,1400 Waldo St,1300 W Fair Ave,1400 Lynn Ave,1300 Waldo St,1500 Garfield Ave,1500 Lynn Ave,1240 Center St,1200 W Fair Ave,1428 Birch Ave,1200 Waldo St,1500 Birch Ave,1220 Center St,1100 W Fair Ave,1400 Lincoln Ave,1100 Waldo St,1500 Lincoln Ave,1206 Center St,1500 Norway Ave,1000 Waldo St,1400 Norway Ave,1000 W Fair Ave,1300 Lincoln Ave,1000 W Kaye Ave,1300 Norway Ave,1200 Lincoln Ave,1000 W College Ave,1200 Norway Ave,1100 Norway Ave,1000 Norway Ave,1100 Lincoln Ave,1000 Lincoln Ave,800 W Fair Ave,1300 Northrop St,900 W Kaye Ave,1200 Northrop St,900 W College Ave,1100 Northrop St,1000 W Magnetic St,900 W Magnetic St,1300 N 8th St,800 W Kaye Ave,1200 N 8th St,800 W College Ave,1100 N 8th St,800 W Magnetic St,1400 7th St,700 W Kaye Ave,1300 7th St,700 College Ave,1200 7th St,700 W Magnetic St,501 W College Ave,1200 Hebard Ct,1100 Hebard Ct,400 W Magnetic St,500 W Magnetic St,1600 Wilkinson Ave,500 Summit St,600 Summit St,1600 Longyear Ave,400 Summit St,1600 Fitch Ave,300 Center St,1600 Fitch Ave,1600 Presque Isle,200 Summit St,1500 Presque Isle,400 Waldo St,300 Waldo St,1500 Fitch Ave,1435 Presque Isle Ave,1300 Presque Isle Ave,400 W Kaye Ave,500 Kaye Ave,1200 Hebard Ct,400 W College Ave,1200 Presque Isle Ave,1000 Presque Isle Ave,318 Magnetic St,1100 Hebard Ct,300 Piqua St,1100 Lee St,500 Piqua St,1100 N 7th St,1000 N 7th St,400 W Park St,1000 Lee St,300 W Park St,900 Lee St,300 W Crescent St,1000 N 4th St,400 W Crescent St,700 N 7th St,500 Harrison St,700 6th St,721 6th St,600 N 7th St,500 W Hewitt Ave,400 Harrison St,300 Harrison St,800 Lee St,900 N 4th St,800 N 4th St,816 N 4th St,700 N 4th St,300 W Hewitt Ave,400 W Hewitt Ave,600 Oak St,619 N 4th St.300 W Ohio St,400 W Ohio St,600 6th St,400 6th St,500 W Michigan St,400 N 7th St,400 W Michigan St,500 Oak St,300 W Michigan St,500 N 4th St,300 N 7th St,500 W Ridge St,300 6th St,400 W Michigan St,327 W Ridge St,400 W Ridge St,400 Oak St,300 N 4th St,300 W Ridge St,203 N 4th St,300 W Bluff St,200 N 5th St,400 W Bluff St,200 6th St,500 W Bluff St,200 N 7th St,100 6th St,515 W Washington St,100 7th St,600 W Bluff St,600 W Washington St,100 Morgan St,700 W Bluff St,717 W Washington St,200 Seymour Ave,100 Seymour Ave,800 W Bluff St,100 Garfield Ave,400 W Washington St,110 N 5th St,136 N 4th St,310 W Washington St,300 W Fair Ave,1300 N 3rd St,300 W Kaye Ave,200 W Fair Ave,1300 2nd St,200 W Kaye Ave,100 W Fair Ave,1300 N Front St,100 W Kaye Ave,100 E Fair Ave,1300 High St,100 E Kaye Ave,200 E Fair Ave,1300 Pine St,200 E Kaye Ave,1400 Pine St,300 E Fair Ave,1300 Russell St,300 E Kaye Ave,412 E Fair Ave,1243 Lakeshore Park Pl Dr,1300 Picnic Rocks Dr,1200 N 3rd St,300 W College Ave,1200 2nd St,200 W College Ave,1200 N Front St,100 W College Ave,1200 High St,100 E College Ave,1200 Pine St,200 E College Ave,1200 Russell St,300 E College Ave,400 E College Ave,1203 Spruce St,300 E Magnetic St,500 E Magnetic St,1100 Pine St,200 E Magnetic St,1100 High St,100 E Magnetic St,1100 N Front St,100 W Magnetic St,1100 2nd St,200 W Magnetic St,1100 N 3rd St,318 W Magnetic St,300 W Magnetic St,1000 N 3rd St,1000 2nd St,200 W Park St,100 W Park St,1000 N Front St,100 E Park St,1000 High St,200 E Park St,1000 Pine St,1017 Pine St,300 Albert St,300 E Park St,1000 Spruce St,1019 Spruce St,500 Albert St,400 E Park St,481 E Crescent St,900 Lakeshore Blvd,400 E Crescent St,900 Spruce St,300 E Crescent St,900 Pine St,200 E Crescent St,902 High St,100 E Crescent St,900 N Front St,800 N Front St,100 W Crescent St,905 N 3rd St,212 W Crescent St,806 N 3rd St,200 W Prospect St,100 W Prospect St,800 High St,100 E Prospect St,800 Pine St,200 E Prospect St,800 Spruce St,300 E Prospect St,400 E Prospect St,735 Cedar St,700 N 3rd St,200 W Hewitt Ave,700 N Front St,100 W Hewitt Ave,100 E Hewitt Ave,700 High St,200 E Hewitt Ave,700 Pine St,300 E Hewitt Ave,700 Spruce St,400 E Hewitt Ave,700 Cedar St,500 E Hewitt Ave,600 N 3rd St,200 W Ohio St,100 W Ohio St,600 N Front St,100 E Ohio St,600 High St,200 E Ohio St,600 Pine St,300 E Ohio St,1800 N Lakeshore Blvd,600 Spruce St,400 E Ohio St,600 Cedar St,450 E Ohio St,796 Lake Shore Blvd,700 Lake Shore Blvd,600 N Lakeshore Blvd,500 Lake Shore Blvd,600 E Michigan St,500 E Michigan St,400 E Michigan St,400 Lake Shore Blvd,600 E Arch St,300 Lake Shore Blvd,100 N Lakeshore Blvd,300 E Michigan St,500 Spruce St,500 Pine St,200 E Michigan St,500 High St,100 E Michigan St,500 N Front St,100 W Michigan St,500 N 3rd St,200 W Michigan St,400 N 3rd St,200 W Arch St,100 W Arch St,400 N Front St,100 Arch St,400 High St,200 E Arch St,400 Pine St,300 E Arch St,400 Spruce St,400 E Arch St,400 Cedar St,500 E Arch St,500 E Ridge St,300 Cedar St,400 E Ridge St,300 Spruce St,230 E Ridge St,305 Pine St,200 E Ridge St,300 High St,100 E Ridge St,300 N Front St,100 W Ridge St,300 N 3rd St,200 W Ridge St,200 N 3rd St,200 W Bluff St,100 W Bluff St,200 N Front St,100 Blaker St,200 W Washington St,100 N 3rd St,100 W Washington St,100 N Front St,100 E Washington St,100 S Lakeshore Blvd,102 E Main St,100 S Front St,100 Main St,100 S 3rd St,200 S 3rd St,100 W Spring St,200 S Front St,100 E Spring St,200 S Lakeshore Blvd,200 W Spring St,100 S 4th St,300 W Spring St,100 S 5th St,400 W Spring St,500 W Spring St,200 S 7th St,600 W Spring St,669 W Spring St,140 S McClellan Ave,800 W Baraga Ave,600 W Baraga Ave,300 S 7th St,500 W Baraga Ave,300 Altamont St,400 W Baraga Ave,300 S 5th St,300 W Baraga Ave,300 S 4th St,200 W Baraga Ave,300 S 3rd St,100 W Baraga Ave,300 S Front St,100 E Baraga Ave,300 S Lakeshore Blvd,400 S Front St,100 Rock St,400 S 3rd St,200 Rock St,400 S 4th St,300 Rock St,400 S 5th St,400 Rock St,400 Altamont St,500 Rock St,400 S 7th St,500 S 7th St,600 Fisher St,500 Fisher St,500 Altamont St,400 Fisher St,500 S 5th St,300 Fisher St,500 S 4th St,200 Fisher St,500 S 3rd St,134 Fisher St,100 Fisher St,500 S Front St,600 S Front St,600 Altamont St,600 S 4th St,300 Chamberlain St,200 Mather St,600 S 3rd St,600 Champion St,100 Palms St,700 Champion St,400 S Lakeshore Blvd,100 Blemhuber Ave,900 Division St,200 Newberry St,100 Newberry St,800 Division St,200 Blemhuber Ave,900 Adams St,300 Blemhuber Ave,400 Blemhuber Ave,400 Mcmillan St,400 Garden St,700 Anderson St,1000 Champion St,100 Jackson St,1000 Division St,200 Jackson St,1000 Adams St,300 Jackson St,1000 Altamont St,400 Jackson St,436 Jackson St,1100 Albion St,1192 Albion St,400 Genesee St,1100 Altamont St,300 Genesee St,1100 Adams St,200 Genesee St,1100 Division St,123 Genesee St,1100 Champion St,600 Mountain St,700 Mesnard St,1300 Tierney St,700 Craig St,1300 Linden St,700 W Hampton St,1400 Linden St,600 Mesnard St,1300 Albion St,600 Craig St,600 W Hampton St,1400 Albion St,1300 Altamont St,500 Craig St,1400 Altamont St,500 W Hampton St,1200 Adams St,464 Mesnard St,1200 Altamont St,275 Mesnard St,200 Mesnard St,1200 Division St,377 Craig St,1300 Adamns St,200 Craig St,1300 Division St,400 W Hampton St,1400 Adams St,300 W Hampton St,1400 Division St,1500 Division St,100 W Hogan Alley,100 W Hampton St,1513 Division St,300 W Furnace St,100 E Furnace St,100 Mite St,100 E Hogan Alley,100 E Hampton St,1700 East Ave,1900 Huron St,100 Coles Dr,1500 Woodland Ave,1800 Waldo St,1600 Kimber Ave,300 Alger St,";
let intersections = "  1 Peter White Dr,null,2700 N Lakeshore Blvd,2900 Island Beach Rd,46.582108; -87.387484,:2700 N Lakeshore Blvd,null,2000 N Lakeshore Blvd,100 Hawley St,46.571285; -87.393522,:375 River Park Cir,100 Hawley St,2300 Presque Isle Ave,315 Hawley St,46.571281; -87.396135,:null,300 Hawley St,2300 Fitch Ave,400 Hawley St,46.571276; -87.397586,:null,400 Hawley St,2300 Longyear Ave,500 Hawley St,46.571259; -87.399074,:null,500 Hawley,2145 Sugar Loaf Ave,2286 Co Rd 550,46.571559; -87.406882,:2300 Presque Isle Ave,null,2200 Presque Isle Ave,300 White St,46.569971; -87.396106,:2300 Fitch Ave,300 White St,2200 Fitch Ave,400 White St,46.569975; -87.397574,:2300 Longyear Ave,400 White St,2200 Longyear Ave,500 White St,46.570001; -87.399088,:2300 Wilkinson Ave, 500 White St,2200 Wilkinson Ave,null,46.569957; -87.400470,:2200 Presque Isle Ave,null,2100 Presque Isle Ave,300 Harlow St,46.568815; -87.396108,:2200 Fitch Ave,300 Harlow St,2100 Fitch Ave,400 Harlow St,46.568836; -87.397585,:2200 Longyear Ave,400 Harlow St,2100 Longyear Ave,500 Harlow St,46.568832; -87.399055,:2200 Wilkinson Ave,500 Harlow St,2100 Wilkinson Ave,null,46.568841; -87.400494,:2100 Presque Isle Ave,null,1900 Presque Isle Ave,1100 Union St,46.567681; -87.396083,:2100 Fitch Ave,1100 Union St,null,1100 Union St,46.567688; -87.397561,:2200 Longyear Ave,1100 Union St,2100 Longyear Ave,500 Union St,46.567702; -87.399045,:2100 Wilkinson,500 Union St,1900 Wilkinson Ave,600 Union St,46.567698; -87.400500,:null,600 Union St,2000 Van Evera Ave,700 Union St,46.567675; -87.401613,:null,700 Union St,2000 Neidhart Ave,null,46.567701; -87.402807,:2000 Sugar Loaf Ave,900 Clark St,1900 Sugar Loaf Ave,null,46.565871; -87.405744,:2000 Wetton Ave,800 Clark St,null,900 Clark St,46.565872; -87.404120,:2000 Neidhart Ave,700 Clark St,1900 Neidhart Ave,800 Clark St,46.565858; -87.402835,:2000 Van Evera Ave,null,1900 Van Evera Ave,700 Clark St,46.565883; -87.401619,:2000 Longyear Ave,400 Clark St,1900 Longyear Ave,null,46.565850; -87.399038,:2000 N Lakeshore Blvd,null,1739 N Lakeshore Blvd,200 Wright St,46.564232; -87.391287,:2000 Neidhart Ave,700 Clark St,1900 Neidhart Ave,800 Clark St,46.565856; -87.402833,:2000 Van Evera Ave,null,1900 Van Evera Ave,700 Clark St,46.565884; -87.401617,:1900 Presque Isle Ave,200 Wright St,1800 Presque Isle Ave,300 Wright St,46.564024; -87.396085,:null,300 Wright St,1800 Fitch Ave,400 Wright St,46.564041; -87.397532,:1900 Longyear Ave,400 Wright St,1800 Longyear Ave,500 Wright St,46.564048; -87.399014,:1900 Wilkinson Ave,500 Wright St,1800 Wilkinson Ave,600 Wright St,46.564038; -87.400476,:1900 Van Evera Ave,600 Wright St,1800 Van Evera Ave,700 Wright St,46.564023; -87.401659,:1900 Neidhart Ave,700 Wright St,1800 Neidhart Ave,800 Wright St,46.564034; -87.402853,:1900 Sugar Loaf Ave,800 Wright St,null,1000 Wright St,46.564121; -87.405779,:1800 Schaffer St,900 Norwood St,1700 Schaffer St,800 Norwood St,46.562263; -87.404054,:1800 Neidhart Ave,800 Norwood St,null,900 Norwood St,46.562268; -87.402892,:1800 Van Evera Ave,700 Norwood St,1700 Van Evera Ave,800 Norwood St,46.562250; -87.401692,:1800 Wilkinson Ave,600 Norwood St,1700 Wilkinson Ave,700 Norwood st,46.562228; -87.400513,:1800 Longyear Ave,500 Norwood St,1700 Longyear Ave,600 Norwood St,46.562239; -87.399062,:1800 Fitch Ave,400 Norwood St,1700 Fitch Ave,500 Norwood St,46.562224; -87.397608,:1800 Presque Isle Ave,null,1700 Presque Isle Ave,400 Norwood St,46.562190; -87.396128,:1700 Presque Isle Ave,null,1600 Presque Isle Ave,300 Center St,46.560359; -87.396176,:1700 Fitch Ave,300 Center St,1600 Fitch Ave,400 Center St,46.560377; -87.397674,:1700 Longyear Ave,400 Center St,1600 Longyear Ave,500 Center St,46.560417; -87.399112,:1700 Wilkinson Ave,500 Center St,1600 Wilkinson Ave,600 Center St,46.560435; -87.400554,:1700 Van Evera Ave,600 Center St,null,700 Center St,46.560435; -87.401738,:1700 Schaffer St,800 Center St,null,900 Center St,46.560453; -87.404063,:1600 Presque Isle Ave,null,1500 Presque Isle Ave,200 Summit St,46.559161; -87.396198,:1600 Fitch Ave,200 Summit St,1500 Fitch Ave,400 Summit St,46.559180; -87.397703,:1600 Longyear Ave,400 Summit St,null,500 Summit St,46.559200; -87.399147,:1600 Wilkinson Ave,500 Summit St,null,600 Summit St,46.559170; -87.400575,:null,1200 Wright St,1600 Lincoln Ave,1295 Wright St,46.563804; -87.412003,:null,1320 Wright St,1600 West Ave,1500 Wright St,46.564077; -87.421461,:null,1500 Wright St,1800 Gray St,1600 Wright St,46.564078; -87.422764,:null,1600 Wright St,1800 Kimber Ave,1700 Wright St,46.564098; -87.424091,:null,1700 Wright St,1700 Woodland Ave,1800 Wright St,46.564113; -87.425389,:null,1800 Wright St,1700 East Ave,1900 Wright St,46.564125; -87.426760,:null,1900 Wright St,1800 Granite Ave,2000 Wright St,46.564121; -87.429329,:null,2000 Wright St,1800 Woodridge Ave,2100 Wright St,46.564143; -87.431924,:null,2100 Wright St,1862 Erie Ave,2200 Wright St,46.564452; -87.434581,:null,2200 Wright St,1878 Ontario Ave,null,46.564774; -87.437161,:1700 East Ave,null,null,1900 Huron St,46.563182; -87.426791,:1800 Granite Ave,null,1700 Granite Ave,2000 Huron St,46.563216; -87.429355,:1700 Granite Ave,1900 Norwood St,1600 Granite Ave,null,46.562294; -87.429396,:1800 Woodridge Ave,2000 Huron St,1700 Woodridge Ave,2100 Huron St,46.563230; -87.431970,:1862 Erie Ave,null,1800 Erie Ave,2200 Evergreen Ln,46.563860; -87.434570,:1878 Ontario Ave,2200 Evergreen Ln,1800 Ontario Ave,null,46.563979; -87.437203,:1800 Erie Ave,2100 Huron St,1700 Erie Ave,2200 Huron St,46.563272; -87.434587,:1800 Ontario Ave,2100 Huron St,1700 Ontario Ave,null,46.563282; -87.437211,:1700 Woodridge Ave,null,1600 Woodridge Ave,2100 Norwood St,46.562348; -87.431988,:1700  Erie Ave,2100 Norwood St,1600 Erie Ave,2200 Norwood St,46.562371; -87.434629,:1700 Ontario Ave,2200 Norwood St,1600 Ontario Ave,2300 Norwood St,46.562386; -87.437236,:1700 Erickson Ave,2300 Norwood St,1600 Erickson Ave,2400 Norwood St,46.562436; -87.439843,:null,null,1700 Erickson Ave,2300 Huron St,46.563283; -87.439885,:null,2300 Huron St,1700 Cox Ave,2500 Huron St,46.563335; -87.442464,:null,2500 Huron St,1700 N Vandenboom Ave,null,46.563381; -87.445023,:1700 N Vandenboom Ave,2500 Norwood St,1600 N Vandenboom Ave,null,46.562451; -87.445106,:1600 N Vandenboom Ave,null,1500 N Vandenboom Ave,2600 Montgomery St,46.561567; -87.445113,:1500 N Vandenboom Ave,2500 Center St,1100 N Vandenboom Ave,null,46.560659; -87.445135,:1700 Cox Ave,2400 Norwood St,1595 Cox Ave,2500 Norwood St,46.562433; -87.442476,:1595 Cox Ave,2400 Montgomery St,1500 Cox Ave,null,46.561505; -87.442473,:1600 Erickson Ave,null,1500 Erickson Ave,2400 Montgomery St,46.561502; -87.439871,:1500 Erickson Ave,2300 Center St,null,2400 Center St,46.560621; -87.439912,:1500 Cox Ave,2400 Center St,null,2500 Center St,46.560628; -87.442491,:1500 Ontario Ave,2200 Center St,1400 Ontario Ave,2300 Center St,46.560562; -87.437257,:1600 Ontario Ave,2200 Montgomery St,1500 Ontario Ave,null,46.561478; -87.437227,:1600 Erie Ave,2100 Montgomery St,1500 Erie Ave,2200 Montgomery St,46.561472; -87.434629,:1500 Erie Ave,2100 Center St,1400 Erie Ave,2200 Center St,46.560565; -87.434595,:1600 Woodridge Ave,2000 Montgomery St,1500 Woodridge Ave,2100 Montgomery St,46.561441; -87.431986,:1500 Woodridge Ave,2000 Center St,1400 Woodridge Ave,2100 Center St,46.560510; -87.432000,:1600 Granite Ave,null,1500 Granite Ave,2000 Montgomery St,46.561413; -87.429381,:1500 Granite Ave,1900 Center St,1400 Granite Ave,2000 Center St,46.560524; -87.429401,:1400 Granite Ave,1900 Summit St,1300 Granite Ave,2000 Summit St,46.559604; -87.429424,:1400 Woodridge Ave,2000 Summit St,1300 Woodridge Ave,2100 Summit St,46.559611; -87.432030,:1400 Erie Ave,2100 Summit St,1300 Erie Ave,2200 Summit St,46.559637; -87.434632,:1400 Ontario Ave,2200 Summit St,1300 Ontario Ave,null,46.559661; -87.437251,:1100 N Vandenboom Ave,2500 W Fair Ave,800 Vandenboom Ave,null,46.557042; -87.445206,:1100 Cox Ave,2400 W Fair Ave,911 Cox Ave,2500 W Fair Ave,46.557019; -87.442563,:911 Cox Ave,2400 Beaudoin St,800 Cox Ave,null,46.555203; -87.442616,:800 Cox Ave,2400 Moran St,null,2500 Moran St,46.554312; -87.442610,:800 N Vandenboom Ave,2500 Moran St,700 N Vandenboom Ave,null,46.554338; -87.445237:500 N Vandenboom Ave,2500 Werner St,null,null,46.551617; -87.445320:1300 Cox Ave,null,1100 Cox Ave,2513 Waldo St,46.557941; -87.442550:1400 Cox Ave,2300 Cherry St,1300 Cox Ave,null,46.558826; -87.442517:1300 Ontario Ave,2200 Cherry St,1100 Ontario Ave,2300 Cherry St,46.558787; -87.437275:1100 Ontario Ave,2200 W Fair Ave,1000 Ontario Ave,2300 W Fair Ave,46.556967; -87.437300:null,2300 W Fair Ave,1000 Erickson Ave,2400 W Fair Ave,46.557016; -87.439932:1000 Erickson Ave,2300 Allen St,900 Erickson Ave,null,46.556090; -87.439952:1000 Ontario Ave,2000 Allen St,900 Ontario Ave,2300 Allen St,46.556059; -87.437314:900 Erickson Ave,2300 Beaudoin St,800 Erickson Ave,2400 Beaudoin St,46.555196; -87.439973:900 Ontario Ave,2200 Beaudoin St,800 Ontario Ave,2300 Beaudoin St,46.555156; -87.437358:800 Erickson Ave,2300 Moran St,700 Erickson Ave,2400 Moran St,46.554299; -87.440017:800 Ontario Ave,2200 Moran St,700 Ontario Ave,2300 Moran St,46.554253; -87.437374:null,2400 Badger St,500 Cox Ave,null,46.553413; -87.442524:500 Cox Ave,2400 Werner St,null,2500 Werner St,46.551585; -87.442686:700 Erickson Ave,2300 Badger St,600 Erickson Ave,2400 Badger St,46.553355; -87.440020:700 Ontario Ave,2200 Badger St,600 Ontario Ave,2300 Badger St,46.553365; -87.437402:700 Erie Ave,null,600 Erie Ave,2200 Badger St,46.553339; -87.434812:600 Erickson Ave,2300 Diorite St,500 Erickson Ave,null,46.552448; -87.440026:600 Ontario Ave,2200 Diorite St,500 Ontario Ave,2300 Diorite St,46.552456; -87.437419:600 Erie Ave,null,500 Erie Ave,2200 Diorite St,46.552420; -87.434782:500 Erie Ave,2100 Werner St,400 Erie Ave,2200 Werner St,46.551500; -87.434806:500 Ontario Ave,2200 Werner St,null,2300 Werner St,46.551553; -87.437436:500 Erickson Ave,2300 Werner St,null,2400 Werner St,46.551574; -87.440074:400 Erie Ave,null,null,2200 Orchard St,46.550683; -87.434823:1000 Erie Ave,900 Erie Ave,null,2000 Allen St,46.556041; -87.434727:1100 Erie Ave,2100 W Fair Ave,1000 Erie Ave,2200 W Fair Ave,46.556936; -87.434720:1200 Erie Ave,2100 Waldo St,1100 Erie Ave,null,46.557832; -87.434672:1300 Erie Ave,2100 Cherry St,1200 Erie Ave,2200 Cherry St,46.558722; -87.434652:1300 Woodridge Ave,2000 Cherry St,1200 Woodridge Ave,2100 Cherry St,46.558731; -87.432050:1300 Granite Ave,1900 Cherry St,1100 Granite Ave,2000 Cherry St,46.558696; -87.429460:1100 Granite Ave,1900 Waldo St,null,2000 Waldo St,46.557817; -87.429466:1200 Woodridge Ave,2000 Waldo St,1100 Woodridge Ave,2100 Waldo St,46.557823; -87.432071:1100 Woodridge Ave,1800 W Fair Ave,600 Woodridge Ave,2100 W Fair Ave,46.556920; -87.432079:1400 Woodland Ave,1740 W Fair Ave,null,1800 W Fair Ave,46.556880; -87.425543:null,1900 Werner St,400 Woodridge Ave,2100 Werner St,46.551459; -87.432215:400 Woodridge Ave,1900 Orchard St,300 Woodridge Ave,2100 Orchard St,46.550563; -87.432241:300 Woodridge Ave,2000 Bancroft St,null,null,46.549722; -87.432231:null,1900 Bancroft St,200 Granite Ave,2000 Bancroft St,46.549596; -87.429890:200 Granite Ave,1900 W Ridge St,null,null,46.548652; -87.429927:200 Meeske Ave,1300 W Ridge St,100 Meeske Ave,1900 W Ridge St,46.548441; -87.426949:100 Meeske Ave,1111 W Washington St,null,null,46.546330; -87.426926:100 N McClellan Ave,1100 W Washington St,100 S McClellan Ave,1111 W Washington St,46.545899; -87.419830:100 S McClellan Ave,800 W Baraga Ave,null,null,46.544832; -87.419937:669 W Spring St,600 W Baraga Ave,null,null,46.542711; -87.407195:300 Meeske Ave,null,200 Meeske Ave,1900 Bancroft St,46.549626; -87.426993:400 Meeske Ave,null,300 Meeske Ave,1900 Orchard St,46.550527; -87.426993:null,1800 Werner St,400 Meeske Ave,1900 Werner St,46.551414; -87.426965:200 N McClellan Ave,100 Coles Dr,100 N McClellan Ave,null,46.546894; -87.419806:300 N McClellan Ave,1200 W Ridge St,200 N McClellan Ave,1300 W Ridge St,46.547888; -87.419783:null,900 W Ridge St,100 Coles Dr,1200 W Ridge St,46.547882; -87.418554:300 Rublein St,900 W Ridge St,200 Rublein St,1200 W Ridge St,46.547913; -87.418117:1700 Woodland Ave,1800 Center St,1500 Woodland Ave,1800 Center St,46.560496; -87.425437:1500 Woodland Ave,null,1400 Woodland Ave,1800 Waldo St,46.558242; -87.425510:1800 Kimber Ave,1700 Norwood St,1700 Kimber Ave,null,46.562265; -87.424098:1800 Gray St,null,1700 Gray St,1700 Norwood St,46.562276; -87.422796:1700 Gray St,1649 Center St,1400 Gray St,1700 Center St,46.560461; -87.422867:1700 Kimber Ave,1700 Center St,1600 Kimber Ave,1800 Center St,46.560486; -87.424151:1400 Gray St,1700 W Fair Ave,null,1711 W Fair Ave,46.556873; -87.422922:null,1711 W Fair Ave,1400 Kimber Ave,1740 W Fair Ave,46.556864; -87.424233:1600 West Ave,1600 Center St,1400 West Ave,1635 Center St,46.560456; -87.421531:1400 West Ave,1600 W Fair Ave,1300 West Ave,1700 W Fair Ave,46.556852; -87.421608:1400 Kimber Ave,1700 Kildahl Ave,1300 Kimber Ave,null,46.555966; -87.424260:1300 West Ave,1600 Kildahl Ave,1300 West Ave,1700 Kildahl Ave,46.555970; -87.421646:1300 West Ave,1500 Mildred Ave,1200 West Ave,1700 Mildred Ave,46.555027; -87.421645:null,1700 Mildred Ave,1200 Gray St,1709 Mildred Ave,46.555020; -87.422950:1300 Kimber Ave,1709 Mildred Ave,null,1800 Mildred Ave,46.555063; -87.424268:null,1800 Mildred Ave,1721 Elm Ave,1900 Mildred Ave,46.555064; -87.425415:1200 Gray St,1700 Elm Ave,null,1721 Elm Ave,46.553651; -87.422981:1200 West Ave,1600 Elm Ave,1100 West Ave,1700 Elm Ave,46.553649; -87.421617:null,1400 W Fair Ave,1400 N McClellan Ave,1600 W Fair Ave,46.556849; -87.419697:1400 N McClellan Ave,null,1300 N McClellan Ave,1600 Kildahl Ave,46.555920; -87.419721:1300 N McClellan Ave,1500 Mildred Ave,1200 N McClellan Ave,1500 Mildred Ave,46.554989; -87.419708:1200 N McClellan Ave,null,1100 N McClellan Ave,1600 Elm Ave,46.553595; -87.419745:1100 McClellan Ave,null,1100 Logan St,1100 N McClellan Ave,1300 Logan St,46.552683; -87.419743:1100 West Ave,1300 Logan St,900 West Ave,null,46.552701; -87.421585:900 West Ave,1300 Cleveland Ave,null,null,46.551791; -87.421399:1100 N McClellan Ave,1100 Cleveland Ave,600 N McClellan Ave,1300 Cleveland Ave,46.551808; -87.419778:600 N McClellan Ave,1100 Sherman St,520 N McClellan Ave,1300 Sherman St,46.550929; -87.419807:520 N McClellan Ave,1200 Jefferson St,400 N McClellan Ave,null,46.550128; -87.419811:400 N McClellan Ave,1200 Grant Ave,300 N McClellan Ave,null,46.548912; -87.419828:null,1000 Cleveland Ave,600 Sheridan Ave,1100 Cleveland Ave,46.551785; -87.416695:600 Sheridan Ave,1000 Sherman St,500 Sheridan Ave,1100 Sherman St,46.550909; -87.416732:500 Sheridan Ave,null,400 Sheridan Ave,1100 Jefferson St,46.550099; -87.416707:null,1000 Grant Ave,300 Rublein St,1200 Grant Ave,46.548922; -87.418080:1400 Garfield Ave,1300 W Fair Ave,null,1400 W Fair Ave,46.556796, -87.415718:1500 Garfield Ave,1300 Waldo St,1400 Garfield Ave,1400 Waldo St,46.558186; -87.415718:null,1240 Center St,1500 Garfield Ave,null,46.560404; -87.415690:null,1220 Center St,1500 Lynn Ave,1240 Center St,46.560401; -87.414496:1500 Lynn Ave,1200 Waldo St,1400 Lynn Ave,1300 Waldo St,46.558221; -87.414511:1400 Lynn Ave,1200 W Fair Ave,null, 1300 W Fair Ave,46.556773; -87.414520:null,1206 Center St,1500 Birch Ave,1220 Center St,46.560395; -87.413302:1500 Brich Ave,1100 Waldo St,1428 Birch Ave,1200 Waldo St,46.558210; -87.413309:1428 Birch Ave,1100 W Fair Ave,null,1200 W Fair Ave,46.556797; -87.413307:1400 Lincoln Ave,1000 W Fair Ave,1300 Lincoln Ave,1100 W Fair Ave,46.556789; -87.412150:1500 Lincoln Ave,null,1400 Lincoln Ave,1100 Waldo St,46.558191; -87.412116:1600 Lincoln Ave,null, 1500 Lincoln Ave,1206 Center St,46.560424; -87.412091:1300 Lincoln Ave,1000 Kaye Ave,1200 Lincoln Ave,null,46.555814; -87.412160:1200 Lincoln Ave,1000 W College Ave,1100 Lincoln Ave,1100 W College Ave,46.554829; -87.412175:1100 Lincoln Ave,1000 W Magnetic St,800 Lincoln Ave,null,46.553718; -87.412199:800 Lincoln Ave,null,600 Lincoln Ave,900 Cleveland Ave,46.551787; -87.412210:900 Garfield Ave,900 Cleveland Ave,null,1000 Cleveland Ave,46.551764; -87.414993:600 Lincoln Ave,null,500 Lincoln Ave,900 Sherman St,46.550927; -87.412222:null,900 Sherman St,500 Garfield Ave,1000 Sherman St,46.550924; -87.414994:500 Garfield Ave,900 Jefferson St,null,null,46.550051; -87.415057:500 Lincoln Ave,null,319 Lincoln Ave,900 Jefferson St,46.550040; -87.412230:319 Lincoln Ave,null,200 Lincoln Ave,900 W Ridge St,46.547880; -87.412241:200 Lincoln Ave,800 W Bluff St,100 Lincoln Ave,900 W Bluff St,46.546875; -87.412259:null,900 W Bluff St,100 Garfield Ave,1000 W Bluff St,46.546872; -87.415152:200 Rublein St,1000 W Bluff St,100 Rublein St,null,46.546876; -87.418149:100 Rublein St,1000 W Washington St,null,1100 W Washington St,46.545897; -87.418133:100 Garfield Ave,900 W Washington St,null,1000 W Washington St,46.545865; -87.415150:100 Lincoln Ave,800 W Washington St,null,900 W Washington St,46.545842; -87.412302:100 Seymour Ave,700 W Washington St,null,800 W Washington St,46.545670; -87.409274:200 Seymour Ave,700 W Bluff St,100 Seymour Ave,800 W Bluff St,46.546632; -87.408960:null,700 W Ridge St,200 Seymour Ave,800 W Ridge St,46.547633; -87.408616:1400 Norway Ave,800 W Fair Ave,1300 Norway Ave,1000 W Fair Ave,46.556781; -87.411133:1300 Norway Ave,900 W Kaye Ave,1200 Norway Ave,1000 W Kaye Ave,46.555818; -87.411165:1200 Norway Ave,900 W College Ave,1100 Norway Ave,1000 W College Ave,46.554833; -87.411182:1100 Norway Ave,900 W Magnetic St,1000 Norway Ave,null,46.553737; -87.411199:null,800 W Fair Ave,1300 Northrop St,900 W Fair Ave,46.556772; -87.409122:1300 Northrop St,800 W Kaye Ave,1200 Northrop St,900 W Kaye Ave,46.555777; -87.409128:1200 Northrop St,800 W College Ave,1100 Northrop St,900 W College Ave,46.554807; -87.409155:1100 Northrop St,800 W Magnetic St,null,900 W Magnetic St,46.553699; -87.409206:null,null,1300 N 8th St,700 W Fair Ave,46.556705; -87.405945:1300 N 8th St, 700 W Kaye Ave,1100 N 8th St,800 W Kaye Ave,46.555742; -87.406002:1100 N 8th St,700 W College Ave,1100 N 8th St,800 W College Ave,46.554776; -87.406037:1100 N 8th St,700 W Magnetic St,null,800 W Magnetic St,46.553754; -87.406078:null,null,1300 N 7th St,700 W Kaye Ave,46.555636; -87.403377:1300 N 7th St,500 W College Ave,1200 N 7th St,700 W College Ave,46.554731; -87.403431:1200 N 7th St,500 W Magnetic St,1100 N 7th St,700 W Magnetic St,46.553701; -87.403407:null,400 W Kaye Ave,1200 Hebard Ct,500 W Kaye Ave,46.555592; -87.398594:1200 Hebard Ct,400 W College Ave,1100 Hebard Ct,500 W College Ave,46.554664; -87.398616:1100 Hebard Ct,300 W Magnetic St,null,400 W Magnetic St,46.553624; -87.398669:1300 Presque Isle Ave,300 W Kaye Ave,1200 Presque Isle Ave,400 W Kaye Ave,46.555623; -87.396310:1400 Presque Isle Ave,300 W Fair Ave,1300 Presque Isle Ave,null,46.556600; -87.396186:1500 Presque Isle Ave,null,1400 Presque Isle Ave,300 Waldo St,46.558052; -87.396237:1500 Fitch Ave,300 Waldo St,null,400 Waldo St,46.558094; -87.397730:1200 Presque Isle Ave,300 W College Ave,1100 Presque Isle Ave,400 W College Ave,46.554641; -87.396331:1100 Presque Isle Ave,300 W Magnetic St,1000 N 4th St,318 W Magnetic St,46.553609; -87.396663:null,600 W Bluff St,100 Morgan St,700 W Bluff St,46.546244; -87.406286:100 Morgan St,600 W Washington St,null,700 W Washington St,46.545246; -87.406357:100 N 7th St,500 W Washington St,200 S 7th St,600 W Washington St,46.544853; -87.403998:200 N 7th St,500 W Bluff St,100 N 7th St,600 W Bluff St,46.545875; -87.403648:300 N 7th St,500 W Ridge St,200 N 7th St,null,46.546859; -87.403350:400 N 7th St,500 W Michigan St,300 N 7th St,null,46.547153; -87.403335:600 N 7th St,500 W Hewitt Ave,300 N 7th St,null,46.549055; -87.403381:700 N 7th St,500 Harrison St,600 N 7th St,null,46.550137; -87.403365:800 N 7th St,400 W Crescent St,700 N 7th St,null,46.551525; -87.403375:1000 N 7th St,400 W Park St,800 N 7th St,null,46.552617; -87.403396:1100 N 7th St,500 Piqua St,1000 N 7th St,null,46.553107; -87.403415:null,400 W Magnetic St,900 Lee St,500 W Magnetic St,46.553655; -87.400794:900 Lee St,300 Piqua St,900 Lee St,500 Piqua St,46.553036; -87.400816:900 Lee St,300 W Park St,900 Lee St,400 W Park St,46.552568; -87.400844:900 Lee St,300 W Crescent St,900 Lee St,null,46.551721; -87.400841:900 Lee St,null,900 Lee St,400 W Crescent St,46.551517; -87.400888:900 Lee St,300 Alger St,800 Lee St,null,46.550822; -87.400888:800 Lee St,300 Harrison St,null,400 Harrison St,46.549849; -87.400929:721 6th St,400 Harrison St,700 6th St,null,46.549873; -87.401517:null,null,721 6th St,500 Harrison St,46.550134; -87.401554:700 6th St,400 W Hewitt Ave,600 6th St,500 W Hewitt Ave,46.549182; -87.401518:600 6th St,400 W Ohio St,400 6th St,null,46.548111; -87.401473:400 6th St,400 W Michigan St,300 6th St,500 W Michigan St,46.547149; -87.401440:300 6th St,400 W Ridge St,200 6th St,500 W Ridge St,46.546575; -87.401448:1000 N 4th St,null,1000 N 4th St,300 Piqua St,46.552972; -87.396800:1000 N 4th St,null,1000 N 4th St,300 W Park St,46.552495; -87.396818:1000 N 4th St,200 W Park St,1000 N 4th St,null,46.552225; -87.396822:1000 N 4th St,null,900 N 4th St,300 W Crescent St,46.551639; -87.396846:900 N 4th St,200 W Crescent St,900 N 4th St,null,46.551234; -87.396862:900 N 4th St,null,800 N 4th St,300 Alger St,46.550737; -87.396885:800 N 4th St,200 W Prospect St,800 N 4th St,null,46.550219; -87.396893:800 N 4th St,null,700 N 4th St,300 Harrison St,46.549770; -87.396923:700 N 4th St,200 W Hewitt Ave,600 N 4th St,300 W Hewitt Ave,46.549209; -87.396930:null,300 W Hewitt Ave,600 Oak St,400 W Hewitt Ave,46.549182; -87.398189:600 N 4th St,200 W Ohio St,500 N 4th St,300 W Ohio St,46.548187; -87.396923:600 Oak St,300 W Ohio St,500 Oak St,400 W Ohio St,46.548189; -87.398186:500 N 4th St,200 W Michigan St,300 N 4th St,300 W Michigan St,46.547166; -87.396946:500 Oak St,300 W Michigan St,400 Oak St,400 W Michigan St,46.547175; -87.398159:300 N 4th St,200 W Arch St,300 N 4th St,null,46.546173; -87.396903:300 N 4th St,200 W Ridge St,200 N 4th St,300 W Ridge St,46.545889; -87.396925:400 Oak St,300 W Ridge St,null,327 W Ridge St,46.546078; -87.398142:null,327 W Ridge St,200 N 5th St,400 W Ridge St,46.546225; -87.399209:null,200 W Fair Ave,1300 N 3rd St,300 W Fair Ave,46.556580; -87.394832:null,100 W Fair Ave,1300 2nd St,200 W Fair Ave,46.556566; -87.393588:null,100 E Fair Ave,1300 N Front St,100 W Fair Ave,46.556550; -87.392339:null,200 E Fair Ave,1300 High St,100 E Fair Ave,46.556543; -87.390347:1300 N 3rd St,200 W Kaye Ave,1200 N 3rd St,300 W Kaye Ave,46.555606; -87.394794:1300 2nd St,100 W Kaye Ave,1200 2nd St,200 W Kaye Ave,46.555612; -87.393543:1300 N Front St,100 E Kaye Ave,1200 N Front St,100 W Kaye Ave,46.555634; -87.392283:1300 High St,200 E Kaye Ave,1200 High St,100 E Kaye Ave,46.555629; -87.390351:1200 N 3rd St,200 W College Ave,1100 N 3rd St,300 W College Ave,46.554662; -87.394798:1200 2nd St,100 W College Ave,1100 2nd St,200 W College Ave,46.554659; -87.393540:1200 N Front St,100 E College Ave,1100 N Front St,100 W College Ave,46.554668; -87.392280:1200 High St,200 E College Ave,1100 High St,100 E College Ave,46.554678; -87.390376:1100 N 3rd St,200 W Magnetic St,1000 N 3rd St,300 W Magnetic St,46.553699; -87.394785:1100 2nd St,100 W Magnetic St,1000 2nd St,200 W Magnetic St,46.553696; -87.393522:1100 N Front St,100 E Magnetic St,1000 N Front St,100 W Magnetic St,46.553702; -87.392275:1100 High St,200 E Magnetic St,1000 High St,100 E Magnetic St,46.553720; -87.390391:1000 N 3rd St,100 W Park St,900 N 3rd St,200 W Park St,46.552238; -87.394748:1000 N Front St,100 E Park St,900 N Front St,100 W Park St,46.552255; -87.392237:1000 High St,200 E Park St,900 High St,100 E Park St,46.552279; -87.390439:900 N 3rd St,100 W Crescent St,800 N 3rd St,200 W Crescent St,46.551244; -87.394754:900 N Front St,100 E Crescent St,800 N Front St,100 W Crescent St,46.551252; -87.392241:900 High St,200 E Crescent St,800 High St,100 E Crescent St,46.551272; -87.390456:800 N 3rd St,100 W Prospect St,700 N 3rd St,200 W Prospect St,46.550230; -87.394744:800 N Front St,100 E Prospect St,700 N Front St,100 W Prospect St,46.550255; -87.392230:800 High St,200 E Prospect St,700 High St,100 E Prospect St,46.550261; -87.390487:700 N 3rd St,100 W Hewitt Ave,600 N 3rd St,200 W Hewitt Ave,46.549210; -87.394734:700 N Front St,100 E Hewitt Ave,600 N Front St,100 W Hewitt Ave,46.549231; -87.392250:700 High St,200 E Hewitt Ave,600 High St,100 E Hewitt Ave,46.549238; -87.390514:600 N 3rd St,100 W Ohio St,500 N 3rd St,200 W Ohio St,46.548201; -87.394735:600 N Front St,100 E Ohio St,500 N Front St,100 W Ohio St,46.548212; -87.392258:600 High St,200 E Ohio St,500 High St,100 E Ohio St,46.548223; -87.390518:500 N 3rd St,100 W Michigan St,400 N 3rd St,200 W Michigan St,46.547164; -87.394733:500 N Front St,100 E Michigan St,400 N Front St,100 W Michigan St,46.547206; -87.392217:500 High St,200 E Michigan St,400 High St,100 E Michigan St,46.547211; -87.390489:400 N 3rd St,100 W Arch St,300 N 3rd St,200 W Arch St,46.546193; -87.394696:400 N Front St,100 E Arch St,300 N Front St,100 W Arch St,46.546205; -87.392214:400 High St,200 E Arch St,300 High St,100 E Arch St,46.546217; -87.390486:300 N 3rd St,100 W Ridge St,200 N 3rd St,200 W Ridge St,46.545542; -87.394741:300 N Front St,100 E Ridge St,200 N Front St,100 W Ridge St,46.545163; -87.392247:300 High St,200 E Ridge St,100 Blaker St,100 E Ridge St,46.545202; -87.390499:200 6th St,400 W Bluff St,100 6th St,500 W Bluff St,46.545591; -87.401738:200 N 5th St,300 W Bluff St,100 N 5th St,400 W Bluff St,46.545257; -87.399536:200 N 4th St,200 W Bluff St,100 N 4th St,300 W Bluff St,46.544907; -87.397231:200 N 3rd St,100 W Bluff St,100 N 3rd St,200 W Bluff St,46.544592; -87.395045:200 N Front St,100 Blaker St,100 N Front St,100 W Bluff St,46.544220; -87.392549:100 6th St,400 W Washington St,null,500 W Washington St,46.544567; -87.402060:100 N 5th St,300 W Washington St,100 S 5th St,400 W Washington St,46.544275; -87.399854:100 N 4th St,200 W Washington St,100 S 4th St,300 W Washington St,46.543936; -87.397531:100 N 3rd St,100 W Washington St,100 S 3rd St,200 W Washington St,46.543611; -87.395371:100 N Front St,100 E Washington St,100 S Front St,100 W Washington St,46.543185; -87.392890:100 N Lakeshore Blvd,null,100 S Lakeshore Blvd,100 E Washington St,46.542944; -87.391582:100 S Lakeshore Blvd,null,200 S Lakeshore Blvd,102 E Main St,46.542276; -87.392015:100 S Front St,102 E Main St,200 S Front St,100 Main St,46.542443; -87.393094:100 S 3rd St,100 Main St,200 S 3rd St,null,46.542791; -87.395622:200 S Lakeshore Blvd,null,300 S Lakeshore Blvd,100 E Spring St,46.541424; -87.392396:200 S Front St,100 E Spring St,300 S Front St,100 W Spring St,46.541577; -87.393375:200 S 3rd St,100 W Spring St,300 S 3rd St,200 W Spring St,46.541949; -87.395856:100 S 4th St,200 W Spring St,300 S 4th St,300 W Spring St,46.542269; -87.398054:100 S 5th St,300 W Spring St,300 S 5th St,400 W Spring St,46.542631; -87.400366:null,400 W Spring St,300 Altamont St,500 W Spring St,46.542941; -87.402571:200 S 7th St,500 W Spring St,300 S 7th St,500 W Spring St,46.543239; -87.404478:null,500 W Spring St,669 W Spring St,null,46.543586; -87.406949:300 S 7th St,500 W Baraga Ave,400 S 7th St,600 W Baraga Ave,46.542388; -87.404748:300 Altamont St,400 W Baraga Ave,400 Altamont St,500 W Baraga Ave,46.542132; -87.402813:300 S 5th St,300 Baraga Ave,400 S 5th St,400 W Baraga Ave,46.541821; -87.400645:300 S 4th St,200 W Baraga Ave,400 S 4th St,300 W Baraga Ave,46.541438; -87.398289:300 S 3rd St,100 W Baraga Ave,400 S 3rd St,200 W Baraga Ave,46.541108; -87.396082:300 S Front St,100 E Baraga Ave,400 S Front St,100 W Baraga Ave,46.540770; -87.393620:300 S Lakeshore Blvd,null,400 S Lakeshore Blvd,100 E Baraga Ave,46.540643; -87.392761:400 S Front St,null,500 S Front St,100 Rock St,46.539814; -87.393914:400 S 3rd St,100 Rock St,500 S 3rd St,200 Rock St,46.540168; -87.396420:400 S 4th St,200 Rock St,500 S 4th St,300 Rock St,46.540544; -87.398597:400 S 5th St,300 Rock St,500 S 5th St,400 Rock St,46.540879; -87.400908:400 Altamont St,400 Rock St,500 Altamont St,500 Rock St,46.541202; -87.403123:400 S 7th St,500 Rock St,500 S 7th St,null,46.541488; -87.405016:500 S 7th St,500 Fisher St,null,600 Fisher St,46.540586; -87.405334:500 Altamont St,400 Fisher St,600 Altamont St,500 Fisher St,46.540328; -87.403353:500 S 5th St,300 Fisher St,null,400 Fisher St,46.539993; -87.401189:500 S 4th St,200 Fisher St,600 S 4th St,300 Fisher St,46.539646; -87.398905:600 S 4th St,200 Mather St,300 Chamberlain St,46.539201; -87.399013:500 S 3rd St,134 Fisher St,200 Mather St,200 Fisher St,46.539335; -87.396648:null,100 Fisher St,600 Champion St,134 Fisher St,46.539175; -87.395683:500 S Front St,null,600 S Front St,100 Fisher St,46.538984; -87.394204:600 Champion St,100 Palms St,700 Champion St,null,46.53845328431474; -87.3959275729323:600 Altamont St,null,800 Altamont St,400 Mcmillan St,46.537640; -87.403660:700 Anderson St,400 Mcmillan St,null,null,46.537652; -87.406285:null,400 Garden St,700 Anderson St,null,46.538513; -87.406372:800 Altamont St,300 Blemhuber Ave,1000 Altamont St,400 Blemhuber Ave,46.535844; -87.403656:900 Adams St,200 Blemhuber Ave,1000 Adams St,300 Blemhuber Ave,46.535842; -87.400842:900 Division St,100 Blemhuber Ave,1000 Division St,200 Blemhuber Ave,46.535818; -87.398232:800 Division St,100 Newberry St,900 Division St,200 Newberry St,46.536725; -87.398236:700 Champion St,null,1000 Champion St,100 Blemhuber Ave,46.535810; -87.396725:1000 Champion St,null,1100 Champion St,100 Jackson St,46.534916; -87.396977:1100 Champion St,400 Lakeshore Blvd,null,100 Genesee St,46.534010; -87.397009:1000 Division St,100 Jackson St,1100 Division St,200 Jackson St,46.534925; -87.398230:1100 Division St,100 Genesee St,1200 Division St,200 Genesee St,46.534020; -87.398263:1000 Adams St,200 Jackson St,1100 Adams St,300 Jackson St,46.534880; -87.400824:1100 Adams St,200 Genesee St,1200 Adams St,300 Genesee St,46.533980; -87.400812:1000 Altamont St,300 Jackson St,1100 Altamont St,400 Jackson St,46.534940; -87.403659:null,400 Jackson St,1100 Albion St,null,46.534953; -87.405287:1100 Altamont St,300 Genesee St,1200 Altamont St,400 Genesee St,46.534028; -87.403658:1100 Albion St,null,1192 Albion St,600 Mountain St,46.534410; -87.405302:1192 Albion St,400 Genesee St,1200 Albion St,null,46.534058; -87.405301:1200 Division St,null,1300 Division St,200 Mesnard St,46.533084; -87.398558:1200 Adamns St,200 Mesnard St,1300 Adams St,275 Mesnard St,46.533061; -87.400814:1200 Altamont St,275  Mesnard St,1300 Altamont St,464 Mesnard St,46.533133; -87.403676:1200 Albion St,464 Mesnard St,1300 Albion St,600 Mesnard St,46.533141; -87.405287:600 Mountain St,600 Mesnard St,1300 Linden St,700 Mesnard St,46.533111; -87.409699:null,700 Mesnard St,1300 Tierney St,null,46.533114; -87.411433:1300 Tierney St,700 Craig St,700 W Hampton St,null,46.532509; -87.411432:1300 Linden St,600 Craig St,1400 Linden St,700 Craig St,46.532550; -87.409644:1400 Linden St,600 W Hampton St,null,700 W Hampton St,46.531721; -87.409687:1300 Albion St,500 Craig St,1400 Albion St,600 Craig St,46.532540; -87.405303:1300 Altamont St,377 Craig St,1400 Altamont St,500 Craig St,46.532528; -87.403673:1400 Albion St,500 W Hampton St,null,600 W Hampton St,46.531696; -87.405322:1400 Altamont St,400 W Hampton St,null,500 W Hampton St,46.531703; -87.403684:1300 Adams St,200 Craig St,1400 Adams St,377 Craig St,46.532492; -87.400805:1400 Adams St,300 W Hampton St,null,400 W Hampton St,46.531650; -87.400824:1300 Division St,null,1400 Division St,200 Craig St,46.532478; -87.398743:1400 Division St,200 W Hampton St,1500 Division St,300 W Hampton St,46.531631; -87.399030:1500 Division St,100 W Hogan Alley,1513 Division St,null,46.531220; -87.399174:1513 Division St,200 E Furnace St,null, 300 W Furnace St,46.530760; -87.399311:null,100 Mite St,null,100 E Furnace St,46.530725; -87.396559:null,100 E Hogan Alley,null,100 W Hogan Alley,46.531164; -87.396563:null,100 E Hampton St,null,100 W Hampton St,46.531663; -87.396556:100 Mite St,null,100 Mite St,100 E Hogan Alley,46.531130; -87.395523:null,null,100 Mite St,100 E Hampton St,46.531595; -87.395150:";

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
var closestCoord = 0;
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
  const compass = interArray[j].split(",");
  //Intersections[j] = new Intersection(j,compass[0],compass[1],compass[2],compass[3],0);
  var c = "" + compass[4].replace(';',',') + "";
  //console.log("ID " + j + " " + c);
  Intersections[j] = new Intersection(j,compass[0],compass[1],compass[2],compass[3],0,c);
  
  //temp += Intersections[j].Id + ", North: " + Intersections[j].North + ", East: " + Intersections[j].East + ", South: " + Intersections[j].South + ", West: " + Intersections[j].West + ", Elevation: " + Intersections[j].Elevation + "<br>";
}

//Searches input addresses in our Streets array, then returns the intersection id connected to the input street.
function searchAddress(street){
  let block = 0;
  let st = "";
  let blockNum = 0;
  //<label id="test">100 Hawley St</label> 
  //let street = s.substring(17,s.length-9);
  //console.log("UPDATE " + street)

  for(let i = 0; i < street.length; i++){
    if(street.charAt(3) == " "){            //if street is formatted "123 Test St"
      block = street.substring(0,3);
      st = street.substring(4);
      break;
    }
    else if(street.charAt(3) == "-"){       //if street is formatted "123-321 Test St"
      block = street.substring(0,3);
      st = street.substring(8);
      break;
    }
    else if(street.charAt(4) == "-"){      //if street is formatted "1234-4321 Test St"
      block = street.substring(0,4);
      st = street.substring(10);
      //console.log("Format Detected " + block + " : " + st);
      break;
    }
    else if(street.charAt(4) == " "){      //if street is formatted "1234 Test St"
      block = street.substring(0,4);
      st = street.substring(5);
      break;
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
  //console.log("Searching for: " + s);
 for(let k = 0; k < Intersections.length; k++){
   if(s == Intersections[k].North || s == Intersections[k].East || s == Intersections[k].South || s == Intersections[k].West) return Intersections[k].Id;
 }
}

//variables for the literal coordinates for the selected start and end locations
var startCoord;
var endCoord;
var startOutput;
var endOutput;
var sInterID;
var eInterID;
var path;
var searches = 0;
var startingPath;
var lastE = 0;
var neighborsI = [];
var neighborsE = [];
var first = true;
var prevID;
var distance = 0;
//Grabs addresses from input text and geocodes it into a human readable text.
function grabAddress(){
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;                  

  //START INPUT
  //Check if it has a left bracket indicating the user pasted lat lng
  if(start.charAt(2) == '.'){
    startCoord = start;
    //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
    //used source for concatinating geocode api url and lat/lng with api key added at the end
    axios.get('https:maps.googleapis.com/maps/api/geocode/json',{
      params:{
        latlng: start,
        key:'AIzaSyDXv29cjGoYgAy0VD5MVexGcdlXwd0eohg'
      }
    })
   .then(function(response){  
     //combining block number and street name from geocoded results
     var startAddy = response.data.results[0].address_components[0].short_name + " " + response.data.results[0].address_components[1].short_name;
     //console.log("Found Start LatLng :" + startAddy);
     if (startAddy.charAt(3) == "-"){       //if street is formatted "123-321 Test St"
       var block = startAddy.substring(0,3);
       var st = startAddy.substring(8);     
       startAddy = block + " " + st;
     }
     else if(startAddy.charAt(4) == "-"){      //if street is formatted "1234-4321 Test St"
       block = startAddy.substring(0,4);
       st = startAddy.substring(10);
       startAddy = block + " " + st;
       //console.log("Format Detected " + block + " : " + st);
     }
     //converting JSON obj into string
     startOutput = `${startAddy}`;
                          
     //END INPUT
     if(end.charAt(2) == '.'){
       endCoord = end;
       //used source for concatinating geocode api url and lat/lng with api key added at the end
       axios.get('https:maps.googleapis.com/maps/api/geocode/json',{
         params:{
           latlng: end,
           key:'AIzaSyDXv29cjGoYgAy0VD5MVexGcdlXwd0eohg'
         }
       })
       .then(function(response){
         //combining block number and street name from geocoded results
         var endAddy = response.data.results[0].address_components[0].short_name + " " + response.data.results[0].address_components[1].short_name;
         //console.log("Found End LatLng :" + endAddy); 
         if (endAddy.charAt(3) == "-"){       //if street is formatted "123-321 Test St"
           var block = endAddy.substring(0,3);
           var st = endAddy.substring(8);     
           endAddy = block + " " + st;
         }
         else if(endAddy.charAt(4) == "-"){      //if street is formatted "1234-4321 Test St"
           block = endAddy.substring(0,4);
           st = endAddy.substring(10);
           endAddy = block + " " + st;
           //console.log("Format Detected " + block + " : " + st);
         }
         //converting JSON obj into string
         endOutput = `${endAddy}`;
         
         sInterID = searchAddress(startOutput);
         eInterID = searchAddress(endOutput);
         if(sInterID === undefined && eInterID === undefined)alert("Start Address: (" + start + ") and End Address: (" + end + ") are not found or within range.");
         else if(sInterID == undefined)alert("Start Address: (" + start + ") is not found or within range");
         else if(eInterID == undefined)alert("End Address: (" + end + ") is not found or within range");
         else{
           document.getElementById('test').innerHTML = startOutput;
           document.getElementById('test2').innerHTML = endOutput;
           //creating the start of the path
           path = "" + startCoord + ":" + Intersections[sInterID].Coord + "";
           prevID = sInterID;
           startingPath = path;
           //startID = sInterID;
           searches++;
           findElevations();
         }                  
      })
      .catch(function(error){
        console.log(error);
        alert("Bad End Address input")
      }); 
     }
     else if(end.charAt(2) != '.'){
       endOutput = end;
       //Searches readable address from my array of acceptable streets, returns id number for intersection the street is a part of 
       sInterID = searchAddress(startOutput);
       eInterID = searchAddress(endOutput);    
       endCoord = Intersections[eInterID].Coord;
       if(sInterID === undefined && eInterID === undefined)alert("Start Address: (" + start + ") and End Address: (" + end + ") are not found or within range.");
       else if(sInterID == undefined)alert("Start Address: (" + start + ") is not found or within range");
       else if(eInterID == undefined)alert("End Address: (" + end + ") is not found or within range");
       else{
         document.getElementById('test').innerHTML = startOutput;
         document.getElementById('test2').innerHTML = endOutput;
         //creating the start of the path
         path = "" + startCoord + ":" + Intersections[sInterID].Coord + "";
         prevID = sInterID;
         startingPath = path;
         //startID = sInterID;
         searches++;
         findElevations();
       }                  
     }
   })
   .catch(function(error){
     console.log(error);
     alert("Bad Start Address input");
   });
 }
 //IF START IS NOT COORDINATES
 else if(start.charAt(2) != '.'){
   startOutput = start;
  
   //END INPUT
   if(end.charAt(2) == '.'){
     endCoord = end;
     //used source for concatinating geocode api url and lat/lng with api key added at the end
     axios.get('https:maps.googleapis.com/maps/api/geocode/json',{
       params:{
         latlng: end,
         key:'AIzaSyDXv29cjGoYgAy0VD5MVexGcdlXwd0eohg'
       }
     })
     .then(function(response){
       //combining block number and street name from geocoded results
       var endAddy = response.data.results[0].address_components[0].short_name + " " + response.data.results[0].address_components[1].short_name;
       //console.log("Found End LatLng :" + endAddy); 
       if (endAddy.charAt(3) == "-"){       //if street is formatted "123-321 Test St"
         var block = endAddy.substring(0,3);
         var st = endAddy.substring(8);     
         endAddy = block + " " + st;
       }
       else if(endAddy.charAt(4) == "-"){      //if street is formatted "1234-4321 Test St"
         block = endAddy.substring(0,4);
         st = endAddy.substring(10);
         endAddy = block + " " + st;
         //console.log("Format Detected " + block + " : " + st);
       }
       //converting JSON obj into string
       endOutput = `${endAddy}`;
       sInterID = searchAddress(startOutput);
       eInterID = searchAddress(endOutput);

         if(sInterID === undefined && eInterID === undefined)alert("Start Address: (" + start + ") and End Address: (" + end + ") are not found or within range.");
         else if(sInterID == undefined)alert("Start Address: (" + start + ") is not found or within range");
         else if(eInterID == undefined)alert("End Address: (" + end + ") is not found or within range");
         else{
           document.getElementById('test').innerHTML = startOutput;
           document.getElementById('test2').innerHTML = endOutput;
           //creating the start of the path
           path = "" + Intersections[sInterID].Coord + "";
           prevID = sInterID;
           startingPath = path;
           //startID = sInterID;
           searches++;
           findElevations();
         } 
    })
    .catch(function(error){
      console.log(error);
      alert("Bad End Address input")
    }); 
  }
  else if(end.charAt(2) != '.'){
    endOutput = end;
    sInterID = searchAddress(startOutput);
    eInterID = searchAddress(endOutput);
    startCoord = Intersections[sInterID].Coord;
    endCoord = Intersections[eInterID].Coord;
    if(sInterID === undefined && eInterID === undefined)alert("Start Address: (" + start + ") and End Address: (" + end + ") are not found or within range.");
    else if(sInterID == undefined)alert("Start Address: (" + start + ") is not found or within range");
    else if(eInterID == undefined)alert("End Address: (" + end + ") is not found or within range");
    else{
      document.getElementById('test').innerHTML = startOutput;
      document.getElementById('test2').innerHTML = endOutput;
      //creating the start of the path
      path = "" + Intersections[sInterID].Coord + "";
      prevID = sInterID;
      startingPath = path;
      //startID = sInterID;
      searches++;
      findElevations();
    }                  
  }
 }
}

function findElevations(){   
  var ids = [];
  var elevs = [];
  var coords = [];
  var nextN;
  var nextE;
  var nextS;
  var nextW;
  
  //Getting the elevation of the starting intersection
  const latlng = Intersections[sInterID].Coord.split(',');
  var location = new google.maps.LatLng(latlng[0],latlng[1]);
  const elevator = new google.maps.ElevationService();
  elevator.getElevationForLocations({
    locations: [location],
  })
  .then(({ results }) => {  
    if(results[0]){                    //Any else that needs to be done in sequence, has to be inside this if statement
      if(lastE == 0) lastE = results[0].elevation;                   //Do I need to store the current elevation????
      else {
        distance += lastE - results[0].elevation;
        lastE = results[0].elevation;
      }
      //console.log("Start Intersection Elevation: " + results[0].elevation);

      //Now I need to search for connected intersections
      let north = Intersections[sInterID].North;
      let east = Intersections[sInterID].East;
      let south = Intersections[sInterID].South;
      let west = Intersections[sInterID].West;
      //I want my north to be the next intersections south, my east to be the next intersections west, my south the be the next intersections north and my west to be the next intersections east
      for(let i = 0; i < Intersections.length; i++){
        if(north == Intersections[i].South && north != "null")nextN = Intersections[i].Id;
        if(east == Intersections[i].West && east != "null")nextE = Intersections[i].Id;
        if(south == Intersections[i].North && south != "null")nextS = Intersections[i].Id;
        if(west == Intersections[i].East && west != "null")nextW = Intersections[i].Id;
      }
      ids.push(nextN,nextE,nextS,nextW);
      console.log("Starting Intersection: " + sInterID + " " + north + " " + east + " " + south + " " + west);
      console.log("STARTING: " + sInterID + " - " + "IDS: " + ids[0] + " " + ids[1] + " " + ids[2] + " " + ids[3]);
      
      if(ids[3] == undefined)ids.splice(3,1);
      if(ids[2] == undefined)ids.splice(2,1);
      if(ids[1] == undefined)ids.splice(1,1);
      if(ids[0] == undefined)ids.splice(0,1);

     // const directionalElevations = getElevs(ids);    //May not have all 4 ids
      for(let i = 0; i < ids.length; i++){
        //console.log("TESTING : ID LENGTH = " + ids.length);
        coords[i] = Intersections[ids[i]].Coord;
        //console.log("NEW IDS[" + i + "]: " + ids[i] + " " + Intersections[ids[i]].Coord);
      }  

      let index = ids.length - 1;
      //console.log("ID LENGTH = " + index);
      if(index >= 0){
        let ltlg = coords[0].split(",",2);
        let location = new google.maps.LatLng(ltlg[0],ltlg[1]);
        let elevator = new google.maps.ElevationService();
        elevator.getElevationForLocations({
          locations: [location],
        })
        .then(({ results }) => {
          if(results[0]){
            elevs[0] = results[0].elevation;
            //console.log("Elevs[0] : " + elevs[0]);
            //console.log(ids[0] + " Coord = " + coords[0]);
            if(index >= 1){
              let ltlg = coords[1].split(",",2);
              let location = new google.maps.LatLng(ltlg[0],ltlg[1]);
              let elevator = new google.maps.ElevationService();
              elevator.getElevationForLocations({
                locations: [location],
              })
              .then(({ results }) => {
                if(results[0]){
                  elevs[1] = results[0].elevation;
                  //console.log("Elevs[1] : " + elevs[1]);
                  //console.log(ids[1] + " Coord = " + coords[1]);
                  if(index >= 2){
                    let ltlg = coords[2].split(",",2);
                    let location = new google.maps.LatLng(ltlg[0],ltlg[1]);
                    let elevator = new google.maps.ElevationService();
                    elevator.getElevationForLocations({
                      locations: [location],
                    })
                    .then(({ results }) => {
                      if(results[0]){
                        elevs[2] = results[0].elevation;
                        //console.log("Elevs[2] : " + elevs[2]);
                        //console.log(ids[2] + " Coord = " + coords[2]);
                        if(index == 3){
                          let ltlg = coords[3].split(",",2);
                          let location = new google.maps.LatLng(ltlg[0],ltlg[1]);
                          let elevator = new google.maps.ElevationService();
                          elevator.getElevationForLocations({
                            locations: [location],
                          })
                          .then(({ results }) => {
                            if(results[0]){
                              elevs[3] = results[0].elevation;
                              //console.log("Elevs[3] : " + elevs[3]);
                              console.log(ids[3] + " Coord = " + coords[3]);
                              console.log("FOUND ELEVATIONS: " + elevs[0] + " " + elevs[1] + " " + elevs[2] + " " + elevs[3]);
                              findFinish(ids,elevs);                          
                            }
                            else{ 
                              alert("No results found");
                            }
                          })
                          .catch((e) =>
                            console.log("ERROR: " + e)
                          );
                        }
                        else {
                          console.log("FOUND ELEVATIONS: " + elevs[0] + " " + elevs[1] + " " + elevs[2]);    
                          findFinish(ids,elevs);
                        }
                      }
                      else{ 
                        alert("No results found");
                      }
                    })
                    .catch((e) =>
                      console.log("ERROR: " + e)
                    );
                  }
                  else {
                    console.log("FOUND ELEVATIONS: " + elevs[0] + " " + elevs[1]);   
                    findFinish(ids,elevs);
                  }
                }
                else{ 
                  alert("No results found");
                }
              })
              .catch((e) =>
                console.log("ERROR: " + e)
              );
            }
            else {
              console.log("FOUND ELEVATIONS: " + elevs[0]); 
              findFinish(ids,elevs);
            }
          }
          else{ 
            alert("No results found");
          }
        })
        .catch((e) =>
          console.log("ERROR: " + e)
        );
      }
      
      //Then check their elevation, and decided which two to visit
      //After visiting, check their connected
    }
    else{ 
      alert("No results found");
    }
  })
  .catch((e) =>
    console.log("ERROR: " + e)
  );
  //THIS NEEDS TO BE THE END OF findRoute()
}

function findFinish(i,e){  //Parameters are array of ids and elevations
  var len = e.length;
  var leni = i.length;
  let foundID;
  let index = 0;
  console.log("PREVID IS " + prevID);
  for(let n = 0; n < leni; n++){
    if(prevID == i[n]){
      i.splice(n,1);
      e.splice(n,1);
      leni = i.length;
      len = e.length;
    }
  }

  if(len == 0)alert("There is no way to get to your destination going downhill.");

  //console.log("ID LENGTH = " + leni + " " + "ELEVATION LENGTH = " + len);
  if(len == 1){
    if(i[0] == eInterID)foundID = i[0];
    else{
      path += ":" + Intersections[i[0]].Coord;
      foundID = i[0];
    }
    //console.log("PATH: " + i[0] + " " + path);
  }
  if(len == 2){
    console.log("TEST1");
    let found = Math.min(e[0], e[1]);
    console.log("Choices " + e[0] + " " + e[1]);
    console.log("Picked: " + found);
    for(let j = 0; j < len; j++){
      //console.log("TEST4 " + j);
      if(e[j] == found) {
        if(i[j] == eInterID){
          foundID = i[j];
          break;
        }
        console.log("DEBUG: " + e[j] + " AND " + i[j]);
        path += ":" + Intersections[i[j]].Coord;
        foundID = i[j];
      }
      else if(first){
        neighborsI[index] = i[j];
        neighborsE[index] = e[j];
        index++;
        first = false;
      }
    }
    //console.log("PATH: " + foundID + " " + path);
     //console.log("SECOND CHANCE: " + neighborsI.length);
  }
  if(len == 3){
    console.log("TEST2");
    let found = Math.min(e[0], e[1], e[2]);
    for(let j = 0; j < len; j++){
      if(e[j] == found) {
        if(i[j] == eInterID){
          foundID = i[j];
          break;
        }
        path += ":" + Intersections[i[j]].Coord;
        foundID = i[j];
      }
      else if(first){
        neighborsI[index] = i[j];
        neighborsE[index] = e[j];
        index++;
        first = false;
      }
    }
    //console.log("PATH: " + foundID + " " + path);
    //console.log("SECOND CHANCE: " + neighborsI.length);
  }
  if(len == 4){
    console.log("TEST3");
    let found = Math.min(e[0], e[1],e[2],e[3]);
    for(let j = 0; j < len; j++){
      if(e[j] == found) {
        if(i[j] == eInterID){
          foundID = i[j];
          break;
        }
        path += ":" + Intersections[i[j]].Coord;
        foundID = i[j];
      }
      else if (first){
        neighborsI[index] = i[j];
        neighborsE[index] = e[j];
        index++;
        first = false;
      }
    }
    //console.log("PATH: " + foundID + " " + path);
    //console.log("SECOND CHANCE: " + neighborsI.length);
  }
  
  //Check if foundID is the ID of the end Intersection
  if(foundID == eInterID) {                                                  //FOUND THE END!!!!!!!!
    console.log("PATH: " + path);
    path += ":" + endCoord;
    for(let k = 0; k < len.length; k++){
      if(i[k] == eInterID){
        distance += lastE - e[k];
      }
    }
    console.log("TOTAL DOWNHILL = " + (distance * 3.2808399) + " Ft");
    searches = 0;
    document.getElementById('path').innerHTML = path;          //add function in map.js that listens for 'path' change in html, then create directions route
    alert("Found a route, Please click the Display Route button");
  }
  else{
    if(searches > Intersections.length/4){
      //alert("There is no way to get to your destination going downhill.");
      searches = 0;
      path = 0;
      lastE = 0;
      distance = 0;
      if(!first){
        if(neighborsI[0] == undefined)alert("There is no way to get to the destination going downhill.");
        if(neighborsI.length == 1){
         alert("Could not find route first try, Press OK to try another path");
          path += startingPath + ":" + Intersections[neighborsI[0]].Coord;
          sInterID = neighborsI[0];
          prevID = sInterID;
          neighborsI.splice(0,1);
          findElevations();
        }
        else if(neighborsI.length == 2){
          alert("Could not find route first try, Press OK to try another path");
          let f = Math.min(neighborsE[0],neighborsE[1]);
          for(let i = 0; i < neighborsE.length; i++){
            if(f == neighborsE[i]){
              path += startingPath + ":" + Intersections[neighborsI[i]].Coord;
              sInterID = neighborsI[i];
              prevID = sInterID;
              neighborsI.splice(i,1);
            }
          }
          findElevations();
        }
        else if (neighborsI.length == 3){
         alert("Could not find route first try, Press OK to try another path");
          let f = Math.min(neighborsE[0],neighborsE[1],neighborsE[2]);
          for(let i = 0; i < neighborsE.length; i++){
            if(f == neighborsE[i]){
              path += startingPath + ":" + Intersections[neighborsI[i]].Coord;
              sInterID = neighborsI[i];
              prevID = sInterID;
              neighborsI.splice(i,1);
            }
          }
          findElevations();
        }
      }
    }
    else{  
      prevID = sInterID;
      sInterID = foundID;
      searches++;
      //console.log("DISTANCE: " + distance);
      //console.log("CHECK IF ID IS GOOD " + sInterID);
      findElevations();      
    }                            
  }  
}


//document.getElementById("test").innerHTML = start + " " + end;
