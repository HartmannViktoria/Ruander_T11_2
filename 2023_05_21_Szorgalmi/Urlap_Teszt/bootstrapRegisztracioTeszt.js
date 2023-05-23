function ujVisszajelzoSor(tesztneve, visszajelzes) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var visszajelzesMezo = adatSor.insertCell(1);
    tesztNeveMezo.innerHTML = `${tesztneve}`;
    visszajelzesMezo.innerHTML = `${visszajelzes}`;
}

function teszt01() {
    try {
        let tesztElem = document.querySelector("div");
        if (tesztElem.classList == "container") {
            ujVisszajelzoSor("Oldal fő tartalmának igazítása", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Oldal fő tartalmának igazítása", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Oldal fő tartalmának igazítása", "HIBA");
    }
}

function teszt02() {
    try {
        let h1Element = document.querySelector("h1");
        if (h1Element.innerHTML =="Tanfolyam regisztráció") {
            ujVisszajelzoSor("1-es szintű címsor tartalma", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("1-es szintű címsor  tartalma", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("1-es szintű címsor  tartalma", "HIBA");
    }
}

function teszt03() {
    try {
        let tesztElem = document.querySelector("#veznev");
        if (tesztElem && tesztElem.type === "text") {
            ujVisszajelzoSor("Első input mező típusa text", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező típusa text", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező típusa text", "HIBA");
    }
}

function teszt04() {
    try {
        let tesztElem = document.querySelector("#veznev");
        if (tesztElem && tesztElem.id === "veznev") {
            ujVisszajelzoSor("Első input mező azonosítója 'veznev'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező azonosítója 'veznev'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező azonosítója 'veznev'", "HIBA");
    }
}


function teszt05() {
    try {
        let tesztElem = document.querySelector("#veznev");
        if (tesztElem && tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Első input mező bootstrap osztálya 'form-control'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Első input mező bootstrap osztálya 'form-control'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Első input mező bootstrap osztálya 'form-control'", "HIBA");
    }
}

function teszt06() {
    try {
        let tesztElem = document.querySelector("#kernev");
        if (tesztElem && tesztElem.type === "text") {
            ujVisszajelzoSor("Második input mező típusa text", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező típusa text", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező típusa text", "HIBA");
    }
}

function teszt07() {
    try {
        let tesztElem = document.querySelector("#kernev");
        if (tesztElem && tesztElem.id === "kernev") {
            ujVisszajelzoSor("Második input mező azonosítója 'kernev'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező azonosítója 'kernev'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező azonosítója 'kernev'", "HIBA");
    }
}

function teszt08() {
    try {
        let tesztElem = document.querySelector("#kernev");
        if (tesztElem && tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Második input mező bootstrap osztálya 'form-control'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Második input mező bootstrap osztálya 'form-control'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Második input mező bootstrap osztálya 'form-control'", "HIBA");
    }
}

function teszt09() {
    try {
        let tesztElem = document.querySelector("#fnev");
        if (tesztElem && tesztElem.type === "text") {
            ujVisszajelzoSor("Harmadik input mező típusa text", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező típusa text", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező típusa text", "HIBA");
    }
}

function teszt10() {
    try {
        let tesztElem = document.querySelector("#fnev");
        if (tesztElem && tesztElem.id === "fnev") {
            ujVisszajelzoSor("Harmadik input mező azonosítója 'fnev'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező azonosítója 'fnev'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező azonosítója 'fnev'", "HIBA");
    }
}

function teszt11() {
    try {
        let tesztElem = document.querySelector("#fnev");
        if (tesztElem && tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Harmadik input mező bootstrap osztálya 'form-control'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Harmadik input mező bootstrap osztálya 'form-control'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Harmadik input mező bootstrap osztálya 'form-control'", "HIBA");
    }
}

function teszt12() {
    try {
        let tesztElem = document.querySelector("#pass1");
        if (tesztElem && tesztElem.type === "password") {
            ujVisszajelzoSor("Negyedik input mező típusa password", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező típusa password", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező típusa password", "HIBA");
    }
}

function teszt13() {
    try {
        let tesztElem = document.querySelector("#pass1");
        if (tesztElem && tesztElem.id === "pass1") {
            ujVisszajelzoSor("Negyedik input mező azonosítója 'pass1'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező azonosítója 'pass1'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező azonosítója 'pass1'", "HIBA");
    }
}

function teszt14() {
    try {
        let tesztElem = document.querySelector("#pass1");
        if (tesztElem && tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Negyedik input mező bootstrap osztálya 'form-control'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Negyedik input mező bootstrap osztálya 'form-control'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Negyedik input mező bootstrap osztálya 'form-control'", "HIBA");
    }
}

function teszt15() {
    try {
        let tesztElem = document.querySelector("#pass2");
        if (tesztElem && tesztElem.type === "password") {
            ujVisszajelzoSor("Ötödik input mező típusa password", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező típusa password", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező típusa password", "HIBA");
    }
}

function teszt16() {
    try {
        let tesztElem = document.querySelector("#pass2");
        if (tesztElem && tesztElem.id === "pass2") {
            ujVisszajelzoSor("Ötödik input mező azonosítója 'pass2'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező azonosítója 'pass2'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező azonosítója 'pass2'", "HIBA");
    }
}

function teszt17() {
    try {
        let tesztElem = document.querySelector("#pass2");
        if (tesztElem && tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Ötödik input mező bootstrap osztálya 'form-control'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Ötödik input mező bootstrap osztálya 'form-control'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Ötödik input mező bootstrap osztálya 'form-control'", "HIBA");
    }
}

function teszt18() {
    try {
        let tesztElem = document.querySelector("#email");
        if (tesztElem && tesztElem.type === "email") {
            ujVisszajelzoSor("Hatodik input mező típusa email", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező típusa email", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező típusa email", "HIBA");
    }
}

function teszt19() {
    try {
        let tesztElem = document.querySelector("#email");
        if (tesztElem && tesztElem.id === "email") {
            ujVisszajelzoSor("Hatodik input mező azonosítója 'email'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező azonosítója 'email'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező azonosítója 'email'", "HIBA");
    }
}

function teszt20() {
    try {
        let tesztElem = document.querySelector("#email");
        if (tesztElem && tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Hatodik input mező bootstrap osztálya 'form-control'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hatodik input mező bootstrap osztálya 'form-control'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hatodik input mező bootstrap osztálya 'form-control'", "HIBA");
    }
}

function teszt21() {
    try {
        let tesztElem = document.querySelector("#tel");
        if (tesztElem && tesztElem.type === "tel") {
            ujVisszajelzoSor("Hetedik input mező típusa tel", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező típusa tel", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező típusa tel", "HIBA");
    }
}

function teszt22() {
    try {
        let tesztElem = document.querySelector("#tel");
        if (tesztElem && tesztElem.id === "tel") {
            ujVisszajelzoSor("Hetedik input mező azonosítója 'tel'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező azonosítója 'tel'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező azonosítója 'tel'", "HIBA");
    }
}

function teszt23() {
    try {
        let tesztElem = document.querySelector("#tel");
        if (tesztElem && tesztElem.classList.contains("form-control")) {
            ujVisszajelzoSor("Hetedik input mező bootstrap osztálya 'form-control'", "Megfelelő");
        }
        else {
            ujVisszajelzoSor("Hetedik input mező bootstrap osztálya 'form-control'", "NEM megfelelő");
        }
    }
    catch {
        ujVisszajelzoSor("Hetedik input mező bootstrap osztálya 'form-control'", "HIBA");
    }
}


function allTeszt() {
    teszt01();
    teszt02();
    teszt03();
    teszt04();
    teszt05();
    teszt06();
    teszt07();
    teszt08();
    teszt09();
    teszt10();
    teszt11();
    teszt12();
    teszt13();
    teszt14();
    teszt15();
    teszt16();
    teszt17();
    teszt18();
    teszt19();
    teszt20();
    teszt21();
    teszt22();
    teszt23();
  

}
allTeszt();