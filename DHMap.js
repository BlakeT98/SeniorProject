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
let addresses = "  1 Peter White Dr,2900 Island Beach Rd,100 Hawley St,2700 N Lakeshore Blvd,2000 N Lakeshore Blvd,900 Norwood St,800 Norwood St,700 Norwood St,600 Norwood St,500 Norwood St,400 Norwood St,375 River Park Cir,2300 Presque Isle Ave,315 Hawley St,2300 Fitch Ave,2300 Longyear Ave,500 Hawley St,2145 Sugar Loaf Ave,2286 Co Rd 550,300 White St,355 White St,400 White St,453 White St,500 White St,2300 Wilkinson Ave,2200 Presque Isle Ave,2200 Fitch Ave,2200 Longyear Ave,2200 Wilkinson Ave,300 Harlow St,352 Harlow St,400 Harlow St,500 Harlow St,2100 Presque Isle Ave,2100 Fitch Ave,2100 Longyear Ave,2100 Wilkinson Ave,1100 Union St,500 Union St,600 Union St,700 Union St,200 Wright St,1900 Presque Isle Ave,300 Wright St,400 Wright St,1900 Longyear Ave,500 Wright St,1900 Wilkinson Ave,600 Wright St,1900 Van Evera Ave,2000 Van Evera Ave,700 Clark St,2000 Neidhart Ave,800 Clark St,2000 Wetton Ave,900 Clark St,2000 Sugar Loaf Ave,700 Wright St,1900 Neidhart Ave,800 Wright St,1900 Sugar Loaf Ave,1000 Wright St,1200 Wright St,1295 Wright St,1908 Enterprise St,1320 Wright St,1500 Wright St,1600 Wright St,1700 Wright St,1800 Wright St,1900 Wright St,2000 Wright St,2100 Wright St,2200 Wright St,1800 Presque Isle Ave,1800 Fitch Ave,1800 Longyear Ave,1800 Wilkinson Ave,1800 Van Evera Ave,1800 Neidhart Ave,1800 Schaffer St,1600 Lincoln Ave,1600 Center St,1600 West Ave,1700 Gray St,1800 Gray St,1700 Nordwood St,1700 Kimber Ave,1800 Kimber Ave,1700 Woodland Ave,1900 Center St,1500 Granite Ave,1600 Granite Ave,1900 Norwood St,1700 Granite Ave,2000 Huron St,1800 Granite Ave,2000 Center St,2000 Montgomery St,1500 Woodridge Ave,1600 Woodridge Ave,1700 Woodridge Ave,1800 Woodridge Ave,2100 Center St,2100 Montgomery St,2100 Norwood St,2100 Huron St,1500 Erie Ave,1600 Erie Ave,1700 Erie Ave,1800 Erie Ave,1862 Erie Ave,2200 Center St,2200 Montgomery St,2200 Norwood St,2200 Huron St,2200 Evergreen Ln,1500 Ontario Ave,1600 Ontario Ave,1700 Ontario Ave,1800 Ontario Ave,1878 Ontario Ave,2300 Center St,2300 Norwood St,1500 Erickson Ave,1600 Erickson Ave,1700 Erickson Ave,2400 Center St,2400 Montgomery St,2600 Montgomery St,2400 Norwood St,2300 Huron St,1500 Cox Ave,1595 Cox Ave,1700 Cox Ave,2500 Center St,2500 Norwood St,2500 Huron St,1500 N Vandenboom Ave,1600 N Vandenboom Ave,1700 N Vandenboom Ave,2600 Center St,1200 Center St,1216 Center St,1240 Center St,1306 Center St,900 Center St,1700 Schaffer St,700 Center St,1700 Van Evera Ave,600 Center St,1700 Wilkinson Ave,500 Center St,1700 Longyear Ave,400 Center St,1700 Fitch Ave,300 Center St,1700 Presque Isle Ave,1739 N Lakeshore Blvd,1400 Pine St,1400 N Lakeshore Blvd,1400 Shiras Park 1400,1100 N Vandenboom Ave,2500 W Fair Ave,1100 Cox Ave,2300 Cherry St,1400 Ontario Ave,1300 Ontario Ave,2200 Summit St,1400 Erie Ave,1300 Erie Ave,2100 Summit St,1400 Woodridge Ave,1300 Woodridge Ave,2100 Cherry St,1400 Granite Ave,2000 Summit St,1300 Granite Ave,2000 Cherry St,1900 Center St,1900 Summit St,1900 Cherry St,1100 Granite Ave,2000 Waldo St,1200 Woodridge Ave,2100 Waldo St,1200 Erie Ave,1900 Waldo St,1100 Woodridge Ave,2100 W Fair Ave,1100 Erie Ave,1000 Erie Ave,2000 Allen St,1000 Ontario Ave,2200 W Fair Ave,1100 Ontario Ave,2300 W Fair Ave,2400 W Fair Ave,911 Cox Ave,800 Cox Ave,2500 Moran St,800 N Vandenboom Ave,2400 Moran St,800 Erickson Ave,1000 Ontario Ave,2300 Allent St,1000 Erickson Ave,900 Erickson Ave,2400 Beaudoin St,2300 Beaudoin St,2200 Beaudoin St,900 Ontario Ave,800 Ontario Ave,2300 Moran St,700 Ontario Ave,2300 Badger St,700 Erickson Ave,2400 Badger St,500 Cox Ave,2500 Werner St,500 N Vandenboom Ave,2400 Werner St,600 Erickson Ave,500 Erickson Ave,600 Ontario Ave,2300 Diorite St,500 Ontario Ave,2300 Werner St,2200 Badger St,600 Erie Ave,2200 Diorite St,700 Erie Ave,500 Erie Ave,2198 Werner St,2100 Werner St,1900 Werner St,400 Meeske Ave,1900 Orchard St,400 Woodridge Ave,500 Woodridge Ave,1800 Werner St,2100 Orchard St,2200 Orchard St,300 Woodridge Ave, 1900 Bancroft St,300 Meeske Ave,200 Granite Ave,200 Meeske Ave,1900 W Ridge St,100 Meeske Ave,1111 W Washington St,100 S McClellan Ave,200 N McClellan Ave,1300 W Ridge St,1800 W Fair Ave,1400 Woodland Ave,1769 W Fair Ave,1711 W Fair Ave,1400 Gray St,1700 Center St,1800 Center St,1700 W Fair Ave,1400 West Ave,1649 Center St,1550 W Fair Ave,1400 McClellan Ave,1401 N McClellan Ave,1600 Kildahl Ave,1306 West Ave,1700 Kildahl Ave,1400 Kimber Ave,1300 N McClellan Ave,1500 Mildred Ave,1300 West Ave,1700 Mildred Ave,1709 Mildred Ave,1300 Kimber Ave,1800 Mildred Ave,1900 Mildred Ave,1721 Elm Ave,1200 Gray St,1200 West Ave,1700 Elm Ave,1200 N McClellan Ave,1600 Elm Ave,959 N McClellan Ave,1300 Logan St,1100 West Ave,900 West Ave,1300 Cleveland Ave,1100 Cleveland Ave,1100 Sherman St,400 Sheridan Ave,600 N McClellan Ave,400 N McClellan Ave,1000 Grant Ave,300 Reblein St,300 N McClellan Ave,1200 W Ridge St,100 N McClellan Ave,1109 W Washingston St,200 Reblein St,100 Rublein St,1000 W Bluff St,100 Garfield Ave,100 Garfield Ave,1000 W Washington St,900 W Ridge St,200 Lincoln Ave,900 W Bluff St,100 Lincoln Ave,855 W Washington St,300 Lincoln Ave,900 Jefferson St,500 Lincoln Ave,500 Garfield Ave,900 Sherman St,1000 Sherman St,600 Lincoln Ave,900 Cleveland Ave,600 Sheridan Ave,1400 W Fair Ave,1400 Garfield Ave,1400 Waldo St,1300 W Fair Ave,1400 Lynn Ave,1300 Waldo St,1500 Garfield Ave,1500 Lynn Ave,1240 Center St,1200 W Fair Ave,1428 Birch Ave,1200 Waldo St,1500 Birch Ave,1220 Center St,1100 W Fair Ave,1400 Lincoln Ave,1100 Waldo St,1500 Lincoln Ave,1206 Center St,1500 Norway Ave,1000 Waldo St,1400 Norway Ave,1000 W Fair Ave,1300 Lincoln Ave,1000 W Kaye Ave,1300 Norway Ave,1200 Lincoln Ave,1000 W College Ave,1200 Norway Ave,1100 Lincoln Ave,1000 Lincoln Ave,800 W Fair Ave,1300 Northrop St,900 W Kaye Ave,1200 Northrop St,900 W College Ave,1100 Northrop St,900 W Magnetic St,1300 N 8th St,800 W Kaye Ave,1200 N 8th St,800 W College Ave,1100 N 8th St,800 W Magnetic St,1400 7th St,700 W Kaye Ave,1300 7th St,700 College Ave,1200 7th St,700 W Magnetic St,501 W College Ave,1200 Hebard Ct,1100 Hebard Ct,400 W Magnetic St,500 W Magnetic St,1600 Wilkinson Ave,500 Summit St,600 Summit St,1600 Longyear Ave,400 Summit St,1600 Fitch Ave,300 Center St,1600 Fitch Ave,1600 Presque Isle,200 Summit St,1500 Presque Isle,300 Waldo St,1500 Fitch Ave,1435 Presque Isle Ave,1300 Presque Isle Ave,400 W Kaye Ave,500 Kaye Ave,1200 Hebard Ct,400 W College Ave,1200 Presque Isle Ave,1000 Presque Isle Ave,318 Magnetic St,1100 Hebard Ct,1113 N 4th St,300 Piqua St,1100 Lee St,500 Piqua St,1100 N 7th St,1000 N 7th St,400 W Park St,1000 Lee St,300 W Park St,1100 N 4th St,900 Lee St,300 W Crescent St,1000 N 4th St,400 W Crescent St,700 N 7th St,500 Harrison St,700 6th St,600 N 7th St,500 W Hewitt Ave,400 Harrison St,300 Harrison St,800 Lee St,800 N 4th St,816 N 4th St,700 N 4th St,300 Harrison St,300 W Hewitt Ave,400 W Hewitt Ave,600 Oak St,619 N 4th St.300 W Ohio St,400 W Ohio St,600 6th St,400 6th St,500 W Michigan St,400 N 7th St,400 W Michigan St,500 Oak St,300 W Michigan St,500 N 4th St,300 N 7th St,500 W Ridge St,300 6th St,400 W Michigan St,327 W Ridge St,400 W Ridge St,400 Oak St,300 N 4th St,300 W Ridge St,203 N 4th St,300 W Bluff St,200 N 5th St,400 W Bluff St,200 6th St,500 W Bluff St,200 N 7th St,100 6th St,515 W Washington St,100 7th St,600 W Bluff St,600 W Washington St,100 Morgan St,700 W Bluff St,717 W Washington St,100 Seymour Ave,800 W Bluff St,100 Garfield Ave,400 W Washington St,110 N 5th St,136 N 4th St,310 W Washington St,300 W Fair Ave,1300 N 3rd St,300 W Kaye Ave,200 W Fair Ave,1300 2nd St,200 W Kaye Ave,100 W Fair Ave,1300 N Front St,100 W Kaye Ave,100 E Fair Ave,1300 High St,100 E Kaye Ave,200 E Fair Ave,1300 Pine St,200 E Kaye Ave,1400 Pine St,300 E Fair Ave,1300 Russell St,300 E Kaye Ave,412 E Fair Ave,1243 Lakeshore Park Pl Dr,1300 Picnic Rocks Dr,1200 N 3rd St,300 W College Ave,1200 2nd St,200 W College Ave,1200 N Front St,100 W College Ave,1200 High St,100 E College Ave,1200 Pine St,200 E College Ave,1200 Russell St,300 E College Ave,400 E College Ave,1203 Spruce St,300 E Magnetic St,500 E Magnetic St,1100 Pine St,200 E Magnetic St,1100 High St,100 E Magnetic St,1100 N Front St,100 W Magnetic St,1100 2nd St,200 W Magnetic St,1100 N 3rd St,300 W Magnetic St,1000 N 3rd St,1019 2nd St,200 W Park St,100 W Park St,1000 N Front St,100 E Park St,1000 High St,200 E Park St,1000 Pine St,1017 Pine St,300 Albert St,300 E Park St,1000 Spruce St,1019 Spruce St,500 Albert St,400 E Park St,481 E Crescent St,900 Lakeshore Blvd,400 E Crescent St,900 Spruce St,300 E Crescent St,900 Pine St,200 E Crescent St,902 High St,100 E Crescent St,900 N Front St,100 W Crescent St,905 N 3rd St,212 W Crescent St,806 N 3rd St,200 W Prospect St,765 N Front St,100 W Prospect St,800 High St,100 E Prospect St,800 Pine St,200 E Prospect St,800 Spruce St,300 E Prospect St,400 E Prospect St,735 Cedar St,700 N 3rd St,200 W Hewitt Ave,700 N Front St,100 W Hewitt Ave,100 E Hewitt Ave,700 High St,200 E Hewitt Ave,700 Pine St,300 E Hewitt Ave,700 Spruce St,400 E Hewitt Ave,700 Cedar St,500 E Hewitt Ave,600 N 3rd St,200 W Ohio St,100 W Ohio St,600 N Front St,100 E Ohio St,600 High St,200 E Ohio St,600 Pine St,300 E Ohio St,1400 N Lakeshore Blvd,1800 N Lakeshore Blvd,600 Spruce St,400 E Ohio St,600 Cedar St,450 E Ohio St,796 Lake Shore Blvd,700 Lakeshore Blvd,600 N Lakeshore Blvd,500 Lake Shore Blvd,600 E Michigan St,528 E Michigan St,500 E Michigan St,400 E Michigan St,400 Lake Shore Blvd,600 E Arch St,300 Lake Shore Blvd,100 N Lakeshore Blvd,300 E Michigan St,500 Spruce St,500 Pine St,200 E Michigan St,500 High St,100 E Michigan St,500 N Front St,100 W Michigan St,500 N 3rd St,200 W Michigan St,400 N 3rd St,200 W Arch St,100 W Arch St,400 N Front St,100 Arch St,400 High St,200 E Arch St,400 Pine St,300 E Arch St,400 Spruce St,400 E Arch St,400 Cedar St,500 E Arch St,500 E Ridge St,300 Cedar St,400 E Ridge St,300 Spruce St,230 E Ridge St,305 Pine St,200 E Ridge St,300 High St,100 E Ridge St,300 N Front St,100 W Ridge St,300 N 3rd St,200 W Ridge St,200 N 3rd St,200 W Bluff St,100 W Bluff St,200 N Front St,100 Blaker St,200 W Washington St,100 N 3rd St,100 W Washington St,100 N Front St,100 E Washington St,100 S Lakeshore Blvd,102 E Main St,100 S Front St,138 Main St,100 S 3rd St,200 S 3rd St,100 W Spring St,200 S Front St,100 E Spring St,200 S Lakeshore Blvd,200 W Spring St,100 S 4th St,300 W Spring St,200 S 5th St,400 W Spring St,500 W Spring St,200 S 7th St,600 W Spring St,669 W Spring St,140 S McClellan Ave,800 W Baraga Ave,600 W Baraga Ave,300 S 7th St,500 W Baraga Ave,300 Altamont St,400 W Baraga Ave,300 S 5th St,300 W Baraga Ave,300 S 4th St,200 W Baraga Ave,300 S 3rd St,100 W Baraga Ave,300 S Front St,100 E Baraga Ave,300 S Lakeshore Blvd,400 S Front St,100 Rock St,400 S 3rd St,200 Rock St,400 S 4th St,300 Rock St,400 S 5th St,400 Rock St,400 Altamont St,500 Rock St,400 S 7th St,500 S 7th St,600 Fisher St,500 Fisher St,500 Altamont St,400 Fisher St,500 S 5th St,300 Fisher St,500 S 4th St,200 Fisher St,500 S 3rd St,134 Fisher St,100 Fisher St,500 S Front St,600 Altamont St,600 S 4th St,649 S 4th St,300 Chamberlain St,200 Mather St,600 S 3rd St,600 Champion St,100 Palms St,700 Champion St,400 S Lakeshore Blvd,100 Blemhuber Ave,900 Division St,200 Newberry St,100 Newberry St,800 Division St,200 Blemhuber Ave,900 Adams St,300 Blemhuber Ave,400 Blemhuber Ave,400 Mcmillan St,768 Anderson St,400 Garden St,700 Anderson St,1000 Champion St,100 Jackson St,1000 Division St,200 Jackson St,1000 Adams St,300 Jackson St,1000 Altamont St,400 Jackson St,436 Jackson St,1100 Albion St,1192 Albion St,400 Genesee St,1100 Altamont St,300 Genesee St,1100 Adams St,200 Genesee St,1100 Division St,123 Genesee St,1100 Champion St,600 Mountain St,700 Mesnard St,1300 Tierney St,700 Craig St,1300 Linden St,700 W Hampton St,1400 Linden St,600 Mesnard St,1300 Albion St,600 Craig St,600 W Hampton St,1400 Albion St,1300 Altamont St,500 Craig St,1400 Altamont St,500 W Hampton St,1200 Adams St,464 Mesnard St,1200 Altamont St,275 Mesnard St,200 Mesnard St,1200 Division St,377 Craig St,1300 Adamns St,200 Craig St,1300 Division St,400 W Hampton St,1400 Adams St,300 W Hampton St,1400 Division St,1500 Division St,100 W Hogan Alley,100 W Hampton St,1513 Division St,300 W Furnace St,100 E Furnace St,100 Mite St,100 E Hogan Alley,100 E Hampton St,1700 East Ave,1900 Huron St,";
let intersections = "  1 Peter White Dr,null,2700 N Lakeshore Blvd,2900 Island Beach Rd,:2700 N Lakeshore Blvd,null,2000 N Lakeshore Blvd,100 Hawley St,:375 River Park Cir,100 Hawley St,2300 Presque Isle Ave,315 Hawley St,:null,300 Hawley St,2300 Fitch Ave,400 Hawley St,:null,400 Hawley St,2300 Longyear Ave,500 Hawley St,:null,500 Hawley,2145 Sugar Loaf Ave,2286 Co Rd 550,:2300 Presque Isle Ave,null,2200 Presque Isle Ave,300 White St,:2300 Fitch Ave,300 White St,2200 Fitch Ave,400 White St,:2300 Longyear Ave,400 White St,2200 Longyear Ave,500 White St,:2300 Wilkinson Ave, 500 White St,2200 Wilkinson Ave,null,:2200 Presque Isle Ave,null,2100 Presque Isle Ave,300 Harlow St,:2200 Fitch Ave,300 Harlow St,2100 Fitch Ave,400 Harlow St,:2200 Longyear Ave,400 Harlow St,2100 Longyear Ave,500 Harlow St,:2200 Wilkinson Ave,500 Harlow St,2100 Wilkinson Ave,null,:2100 Presque Isle Ave,null,1900 Presque Isle Ave,1100 Union St,:2100 Fitch Ave,1100 Union St,null,1100 Union St,:2200 Longyear Ave,1100 Union St,2100 Longyear Ave,500 Union St,:2100 Wilkinson,500 Union St,1900 Wilkinson Ave,600 Union St,:null,600 Union St,2000 Van Evera Ave,700 Union St,:null,700 Union St,2000 Neidhart Ave,null,:2000 Sugar Loaf Ave,900 Clark St,1900 Sugar Loaf Ave,null,:2000 Wetton Ave,800 Clark St,null,900 Clark St,:2000 Neidhart Ave,700 Clark St,1900 Neidhart Ave,800 Clark St,:2000 Van Evera Ave,null,1900 Van Evera Ave,700 Clark St,:2000 Longyear Ave,400 Clark St,1900 Longyear Ave,null,:2000 N Lakeshore Blvd,null,1739 N Lakeshore Blvd,200 Wright St,:null,600 Union St,2000 Van Evera Ave,700 Union St,:null,700 Union St,2000 Neidhart Ave,null,:2000 Sugar Loaf Ave,900 Clark St,1900 Sugar Loaf Ave,null,:2000 Wetton Ave,800 Clark St,null,900 Clark St,:2000 Neidhart Ave,700 Clark St,1900 Neidhart Ave,800 Clark St,:2000 Van Evera Ave,null,1900 Van Evera Ave,700 Clark St,:2000 Longyear Ave,400 Clark St,1900 Longyear Ave,null,:2000 N Lakeshore Blvd,null,1739 Lakeshore Blvd,200 Wright St,:1900 Presque Isle Ave,200 Wright St,1800 Presque Isle Ave,300 Wright St,:null,300 Wright St,1800 Fitch Ave,400 Wright St,:1900 Longyear Ave,400 Wright St,1800 Longyear Ave,500 Wright St,:1900 Wilkinson Ave,500 Wright St,1800 Wilkinson Ave,600 Wright St,:1900 Van Evera Ave,600 Wright St,1800 Van Evera Ave,700 Wright St,:1900 Neidhart Ave,700 Wright St,1800 Neidhart Ave,800 Wright St,:1900 Sugar Loaf Ave,800 Wright St,null,1000 Wright St,:1800 Schaffer St,900 Norwood St,1700 Schaffer St,800 Norwood St,:1800 Neidhart Ave,800 Norwood St,null,900 Norwood St,:1800 Van Evera Ave,700 Norwood St,1700 Van Evera Ave,800 Norwood St,:1800 Wilkinson Ave,600 Norwood St,1700 Wilkinson Ave,700 Norwood st,:1800 Longyear Ave,500 Norwood St,1700 Longyear Ave,600 Norwood St,:1800 Fitch Ave,400 Norwood St,1700 Fitch Ave,500 Norwood St,:1800 Presque Isle Ave,null,1700 Presque Isle Ave,400 Norwood St,:1700 Presque Isle Ave,null,1600 Presque Isle Ave,300 Center St,:1700 Fitch Ave,300 Center St,1600 Fitch Ave,400 Center St,:1700 Longyear Ave,400 Center St,1600 Longyear Ave,500 Center St,:1700 Wilkinson Ave,500 Center St,1600 Wilkinson Ave,600 Center St,:1700 Van Evera Ave,600 Center St,null,700 Center St,:1700 Schaffer St,800 Center St,null,900 Center St,:1600 Presque Isle Ave,null,1500 Presque Isle Ave,200 Summit St,:1600 Fitch Ave,200 Summit St,1500 Fitch Ave,400 Summit St,:1600 Longyear Ave,400 Summit St,null,500 Summit St,:1600 Wilkinson Ave,500 Summit St,null,600 Summit St,:null,1200 Wright St,1600 Lincoln Ave,1295 Wright St,:null,1320 Wright St,1600 West Ave,1500 Wright St,:null,1500 Wright St,1800 Gray St,1600 Wright St,:null,1600 Wright St,1800 Kimber Ave,1700 Wright St,:null,1700 Wright St,1700 Woodland Ave,1800 Wright St,:null,1800 Wright St,1700 East Ave,1900 Wright St,:null,1900 Wright St,1800 Granite Ave,2000 Wright St,:null,2000 Wright St,1800 Woodridge Ave,2100 Wright St,:null,2100 Wright St,1862 Erie Ave,2200 Wright St,:null,2200 Wright St,1878 Ontario Ave,null,:1700 East Ave,null,null,1900 Huron St,:1800 Granite Ave,null,1700 Granite Ave,2000 Huron St,:1700 Granite Ave,1900 Norwood St,1600 Granite Ave,null,:1800 Woodridge Ave,2000 Huron St,1700 Woodridge Ave,2100 Huron St,:1862 Erie Ave,null,1800 Erie Ave,2200 Evergreen Ln,:1878 Ontario Ave,2200 Evergreen Ln,1800 Ontario Ave,null,:1800 Erie Ave,2100 Huron St,1700 Erie Ave,2200 Huron St,:1800 Ontario Ave,2100 Huron St,1700 Ontario Ave,null,:1700 Woodridge Ave,null,1600 Woodridge Ave,2100 Norwood St,:1700  Erie Ave,2100 Norwood St,1600 Erie Ave,2200 Norwood St,:1700 Ontario Ave,2200 Norwood St,1600 Ontario Ave,2300 Norwood St,:1700 Erickson Ave,2300 Norwood St,1600 Erickson Ave,2400 Norwood St,:null,null,1700 Erickson Ave,2300 Huron St,:null,2300 Huron St,1700 Cox Ave,2500 Huron St,:null,2500 Huron St,1700 N Vandenboom Ave,null,:1700 N Vandenboom Ave,2500 Norwood St,1600 N Vandenboom Ave,null,:1600 N Vandenboom Ave,null,1500 N Vandenboom Ave,2600 Montgomery St,:1500 N Vandenboom Ave,2500 Center St,1100 N Vandenboom Ave,null,:1700 Cox Ave,2400 Norwood St,1595 Cox Ave,2500 Norwood St,:1595 Cox Ave,2400 Montgomery St,1500 Cox Ave,null,:1600 Erickson Ave,null,1500 Erickson Ave,2400 Montgomery St,:1500 Erickson Ave,2300 Center St,null,2400 Center St,:1500 Cox Ave,2400 Center St,null,2500 Center St,:1500 Ontario Ave,2200 Center St,1400 Ontario Ave,2300 Center St,:1600 Ontario Ave,2200 Montgomery St,1500 Ontario Ave,null,:1600 Erie Ave,2100 Montgomery St,1500 Erie Ave,2200 Montgomery St,:1500 Erie Ave,2100 Center St,1400 Erie Ave,2200 Center St,:1600 Woodridge Ave,2000 Montgomery St,1500 Woodridge Ave,2100 Montgomery St,:1500 Woodridge Ave,2000 Center St,1400 Woodridge Ave,2100 Center St,:1600 Granite Ave,null,1500 Granite Ave,2000 Montgomery St,:1500 Granite Ave,1900 Center St,1400 Granite Ave,2000 Center St,:1400 Granite Ave,1900 Summit St,1300 Granite Ave,2000 Summit St,:1400 Woodridge Ave,2000 Summit St,1300 Woodridge Ave,2100 Summit St,:1400 Erie Ave,2100 Summit St,1300 Erie Ave,2200 Summit St,:1400 Ontario Ave,2200 Summit St,1300 Ontario Ave,null,:1100 N Vandenboom Ave,2500 W Fair Ave,800 Vandenboom Ave,null,:1100 Cox Ave,2400 W Fair Ave,911 Cox Ave,2500 W Fair Ave,:911 Cox Ave,2400 Beaudoin St,800 Cox Ave,null:800 Cox Ave,2400 Moran St,null,2500 Moran St,:800 N Vandenboom Ave,2500 Moran St,700 N Vandenboom Ave,null,:";

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
  const compass = interArray[j].split(",");
  Intersections[j] = new Intersection(j,compass[0],compass[1],compass[2],compass[3],0);
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
   if(s == Intersections[k].North || s == Intersections[k].East || s == Intersections[k].South || s == Intersections[k].West)return Intersections[k].Id;
 }
}


//variables for the literal coordinates for the selected start and end locations
var startCoord;
var endCoord;
var startOutput;
var endOutput;
var sInterID;
var eInterID;
//Grabs addresses from input text and geocodes it into a human readable text.
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

        //Searches readable address from my array of acceptable streets, returns id number for intersection the street is a part of 
        sInterID = searchAddress(startOutput);
        eInterID = searchAddress(endOutput);

        //Tells user if address is found
        if(sInterID == undefined && eInterID == undefined)alert("Start Address: (" + startOutput + ") and End Address: (" + endOutput + ") are not found or within range");
        else if(sInterID == undefined)alert("Start Address: (" + startOutput + ") is not found or within range");
        else if(eInterID == undefined)alert("End Address: (" + endOutput + ") is not found or within range");
        else{
          //If found, add start addresses to html
          document.getElementById('test').innerHTML = startOutput;
          document.getElementById('test2').innerHTML = endOutput;
          find();
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
    startOutput = start;
    endOutput = end;
    sInterID = searchAddress(startOutput);
    eInterID = searchAddress(endOutput);
    //NEED TO CONVERT INTERSECTIONS[] ID TO FULL BLOCK ST NAME
                          
    if(sInterID === undefined && eInterID === undefined)alert("Start Address: (" + start + ") and End Address: (" + end + ") are not found or within range.");
    else if(sInterID == undefined)alert("Start Address: (" + start + ") is not found or within range");
    else if(eInterID == undefined)alert("End Address: (" + end + ") is not found or within range");
    else{
      document.getElementById('test').innerHTML = start;
      document.getElementById('test2').innerHTML = end;
      find();
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

function find(){    //Testing global variables
  console.log("FIND FUNCTION START: " + sInterID + " " + startOutput + " " + startCoord);
  console.log("FIND FUNCTION END: " + eInterID + " " + endOutput + " " + endCoord);
}
//gets id index for Intersections[]
//start = searchAddress("325 E Michigan St");
//end = searchAddress("2724 N Lakeshore Blvd");

//document.getElementById("test").innerHTML = start + " " + end;
