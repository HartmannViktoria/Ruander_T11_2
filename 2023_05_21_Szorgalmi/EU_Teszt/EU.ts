
var EuropaiUnio: Unio[] = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
];

interface Unio {
    orszag: string;
    csatlakozas: string;
}

//3.feladat: Hány tagja van az EU-nak?

function TagokSzama(EuropaiUnio: Unio[]): number {
    return EuropaiUnio.length;
}
console.log(`3. feladat: Az EU tagjainak száma: ${TagokSzama(EuropaiUnio)} db.`);


//4. feladat: Hány ország csatlakozott 2007-ben?

function CsatlakozottK7(EuropaiUnio: Unio[]): number {
    var K7 = 0;
    for (let i: number = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.indexOf("2007") !== -1) {
            K7++;
        }
    }
    return K7;
}

console.log(`4. feladat: 2007-ben ${CsatlakozottK7(EuropaiUnio)} ország csatlakozott.`);


//5.feladat: Csatlakozott-e Magyarország az unióhoz?

function CsatlakozottE(EuropaiUnio: Unio[]): string {
    for (let i: number = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag == "Magyarország") {
            return "igen";
        }
    }
    return "nem";
}
console.log(`5. Magyarország csatlakozott-e az EU-hoz? ${CsatlakozottE(EuropaiUnio)}`);


//6. feladat: Volt-e májusi csatlakozás?

function MajusiCsatlakozas(EuropaiUnio: Unio[]): string {
    for (let i: number = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.indexOf(".05.") !== -1) {
            return "igen";
        }
    }
    return "nem";
}

console.log(`6. feladat: Volt májusi csatlakozás? ${MajusiCsatlakozas(EuropaiUnio)}`);


//7. feladat: Ki volt a legutolsó csatlakozó?

function LegutolsoCsatlakozo(EuropaiUnio: Unio[]): { orszag: string; csatlakozas: string } {
    let maxIndex = 0;
    for (let i = 0; i < EuropaiUnio.length; i++) {
        let aktIndexEv = Number(EuropaiUnio[i].csatlakozas.substring(0, 4));
        let maxIndexEv = Number(EuropaiUnio[maxIndex].csatlakozas.substring(0, 4));
        if (aktIndexEv > maxIndexEv) {
            maxIndex = i;
        }
    }
    return EuropaiUnio[maxIndex];
}

const utolsoCsatlakozo = LegutolsoCsatlakozo(EuropaiUnio);
console.log(`7. feladat: Ki volt az utolsó csatlakozó? ${utolsoCsatlakozo.orszag}`);
console.log(`7. feladat: Az utolsó csatlakozás dátuma: ${utolsoCsatlakozo.csatlakozas}`);

//8. feladat: Hány ország csatlakozott egy adott évben?

function csatlakozottAdottEvUniverzalis(ev: number): number {
    let adottEvbenCsatlakozottakSzama = 0;
    for (let i: number = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.indexOf(ev.toString()) === 0) {
            adottEvbenCsatlakozottakSzama++;
        }
    }
    return adottEvbenCsatlakozottakSzama;
}

console.log(`8. feladat: A 2004-ben csatlakozott államok száma: ${csatlakozottAdottEvUniverzalis(2004)}`);
console.log(`8. feladat: A 2002-ben csatlakozott államok száma: ${csatlakozottAdottEvUniverzalis(2002)}`);
console.log(`8. feladat: A 2013-ben csatlakozott államok száma: ${csatlakozottAdottEvUniverzalis(2013)}`);
console.log(`8. feladat: Az 1958-ben csatlakozott államok száma: ${csatlakozottAdottEvUniverzalis(1958)}`);


//9. feladat: Csatlakozott-e adott ország az EU-hoz?
function CsatlakozottEAdottOrszagUniverzalis(orszagNev: string): boolean {
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].orszag === orszagNev) {
            return true;
        }
    }
    return false;
}

console.log("9. feladat: " + (CsatlakozottEAdottOrszagUniverzalis("Franciaország") ? "Franciaország csatlakozott" : "Franciaország nem csatlakozott"));
console.log("9. feladat: " + (CsatlakozottEAdottOrszagUniverzalis("Zimbabwe") ? "Zimbabwe csatlakozott" : "Zimbabwe nem csatlakozott"));
console.log("9. feladat: " + (CsatlakozottEAdottOrszagUniverzalis("Anglia") ? "Anglia csatlakozott" : "Anglia nem csatlakozott"));


//10. feladat: Volt-e adott hónapban csatlakozás? Igen/Nem?
function AdottHonapbanVoltECsatlakozasUniverzalis(honapSzama: string): string {
    for (let i = 0; i < EuropaiUnio.length; i++) {
        if (EuropaiUnio[i].csatlakozas.slice(5, 7) === honapSzama) {
            return "igen";
        }
    }
    return "nem";
}
console.log(`10. feladat: Volt csatlakozás 01.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("01")}`);
console.log(`10. feladat: Volt csatlakozás 02.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("02")}`);
console.log(`10. feladat: Volt csatlakozás 03.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("03")}`);
console.log(`10. feladat: Volt csatlakozás 04.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("04")}`);
console.log(`10. feladat: Volt csatlakozás 05.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("05")}`);
console.log(`10. feladat: Volt csatlakozás 06.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("06")}`);
console.log(`10. feladat: Volt csatlakozás 07.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("07")}`);
console.log(`10. feladat: Volt csatlakozás 08.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("08")}`);
console.log(`10. feladat: Volt csatlakozás 09.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("09")}`);
console.log(`10. feladat: Volt csatlakozás 10.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("10")}`);
console.log(`10. feladat: Volt csatlakozás 11.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("11")}`);
console.log(`10. feladat: Volt csatlakozás 12.hónapban: ${AdottHonapbanVoltECsatlakozasUniverzalis("12")}`);









