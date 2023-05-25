//1.feladat

function EkezetesBetukSzama(modositandoSzoveg: string): number {
  var ekezetesBetuk = ['á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű', 'Á', 'É', 'Í', 'Ó', 'Ő', 'Ú', 'Ü', 'Ű'];
  let osszeg = 0;

  for (let i: number = 0; i < modositandoSzoveg.length; i++) {
    if (ekezetesBetuk.indexOf(modositandoSzoveg[i]) >= 0) {
      osszeg++;
    }
  }
  return osszeg;
}




//2.feladat

function camelCaseGenerator(modositandoSzoveg: string): string {
  var camelCase = '';
  var nagybetu = true;

  for (let i: number = 0; i < modositandoSzoveg.length; i++) {
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

function PrimSzam(szam: number): boolean {
  if (szam <= 1) {
      return false;
  }
  for (let i = 2; i < szam; i++) {
      if (szam % i === 0) {
          return false;
      }
  }
  return true;
}

function PrimLista(vizsgaltTomb: number[]): string {
  const primSzamok: number[] = [];
  for (let i = 0; i < vizsgaltTomb.length; i++) {
      if (PrimSzam(vizsgaltTomb[i])) {
          primSzamok.push(vizsgaltTomb[i]);
      }
  }
  if (primSzamok.length > 0) {
      return primSzamok.join(",");
  } else {
      return "Nincs prímszám a tömbben.";
  }
}

