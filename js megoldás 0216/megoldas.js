//1. feladat: hosszEllenor()-Bemeneti paraméterek száma:1 (szöveg)
function hosszEllenor(szoveg){
	for(let i=0;i<szoveg.length;i++){
    	if(szoveg.length>=8){
    		return true;}
    else{
    		return false;}
    }
}
document.write(hosszEllenor("teszt"));
document.write("<br>"+hosszEllenor("feladatteszt"));

 
 //2. feladat: tajSzamEllenor() - Bemeneti paraméterek száma: 1(számsor szövegként)
document.write("<hr>");

function tajSzamEllenor(szoveg){
	for(let i=0;i<szoveg.length;i++){
    	if(szoveg.length==9){
        	return true;
        }
        else{
        return false;
        }
    }
}
document.write(tajSzamEllenor("037687210"));
document.write("<br>"+tajSzamEllenor("019536646"));


//3. feladat: tombTerjedelem()
document.write("<hr>");
function tombTerjedelem(){
	let vizsgaltTomb=[3,5,10,16,9];

let maxErtek=vizsgaltTomb[0];
for(let i=1;i<vizsgaltTomb.length;i++){
	if(vizsgaltTomb[i]>maxErtek)
    {
    	maxErtek=vizsgaltTomb[i];
    }
}

let minErtek=vizsgaltTomb[0];
for(let i=1;i<vizsgaltTomb.length;i++){
	if(vizsgaltTomb[i]<minErtek)
    {
    	minErtek=vizsgaltTomb[i];
    }
}

let kulonbseg=maxErtek-minErtek;
document.write("A tömb legkisebb és legnagyobb eleme közti különbség:" +kulonbseg);
}

tombTerjedelem();

//4.-5.feladat:legidosebbDolgozo(), fizetesEmeles()
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
];
//4.feladat
document.write("<hr>");
function legidosebbDolgozo(){

let maxIndex=0;
for(let i=1;i<Dolgozok.length;i++){
if(Dolgozok[i]>Dolgozok[maxIndex].kor)
{
    maxIndex=i;
}
}
document.write("<hr>A tömb legnagyobb elemének index: "+maxIndex);
}

legidosebbDolgozo();

//5.feladat
document.write("<hr>");
function AtlagFizetes(){
	let osszeg=0;
    for(let i=0;i<Dolgozok.length;i++){
    	osszeg+=Number(Dolgozok[i].fizetes);
    }
    document.write( `<hr>A dolgozók átlagfizetése:${osszeg/Dolgozok.length}`);
}
AtlagFizetes();

function fizetesEmeles(){
    document.write("<br>Az új fizetés értéke:")
        let osszeg=0;
        for(let i=0;i<Dolgozok.length;i++){
        osszeg+=Number(Dolgozok[i].fizetes)*0.1;
        }
        return osszeg;
    }
    document.write(fizetesEmeles("10000")); 