//1.feladat
function EkezetesBetukSzama(modositandoSzoveg) {
    var ekezetesBetuk = ['á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű', 'Á', 'É', 'Í', 'Ó', 'Ő', 'Ú', 'Ü', 'Ű'];
    var osszeg = 0;
    for (var i = 0; i < modositandoSzoveg.length; i++) {
        if (ekezetesBetuk.indexOf(modositandoSzoveg[i]) >= 0) {
            osszeg++;
        }
    }
    return osszeg;
}
//2.feladat
function camelCaseGenerator(modositandoSzoveg) {
    var camelCase = '';
    var nagybetu = true;
    for (var i = 0; i < modositandoSzoveg.length; i++) {
        var szavak = modositandoSzoveg[i];
        if (szavak === ' ') {
            nagybetu = true;
        }
        else if (nagybetu) {
            camelCase += szavak.toUpperCase();
            nagybetu = false;
        }
        else {
            camelCase += szavak.toLowerCase();
        }
    }
    return camelCase;
}
//3. feladat
function PrimSzam(szam) {
    if (szam <= 1) {
        return false;
    }
    for (var i = 2; i < szam; i++) {
        if (szam % i === 0) {
            return false;
        }
    }
    return true;
}
function PrimLista(vizsgaltTomb) {
    var primSzamok = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (PrimSzam(vizsgaltTomb[i])) {
            primSzamok.push(vizsgaltTomb[i]);
        }
    }
    if (primSzamok.length > 0) {
        return primSzamok.join(",");
    }
    else {
        return "Nincs prímszám a tömbben.";
    }
}
