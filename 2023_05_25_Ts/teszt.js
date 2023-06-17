function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(table.rows.length);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Ékezetes betűk száma", "Szeretem a programozást", "1", EkezetesBetukSzama("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "Szeretem a programozást", "1");
    }
}

function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("camelCase generátor", "Szeretem a programozást", "SzeretemAProgramozást", camelCaseGenerator("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("camelCase generátor", "Szeretem a programozást", "SzeretemAProgramozást");
    }
}

function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Prímszámok a tömbben", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "2,3,5,7", PrimLista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    } catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímszámok a tömbben", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "2,3,5,7");
    }
}

function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Prímszámok a tömbben", [4,6,8], "Nincs prímszám a tömbben.", PrimLista([4,6,8]));
    } catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Prímszámok a tömbben", [4,6,8], "Nincs prímszám a tömbben.");
    }
}

function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
}
TesztFuttato();