//2.  Az előbb létrehozzott kollekciójába helyezze el a txt állományban található adatokat, dokumentumokban rendezve, az állományban az összetartozó adatok soronként vannak elhelyezve, elválasztó karakterük pedig ";"! Az adattípusok a következők:
//Csapat
//Helyezes
//Valtozas
//Pontszam

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://szokevik:Team11@cluster0.7hfqbh9.mongodb.net";

var databaseName = "FifaFeladat";
var collectionName = "Fifa";

var fifa = [
  "Anglia;4;0;1662",
  "Argentína;10;0;1614",
  "Belgium;1;0;1752",
  "Brazília;3;-1;1719",
  "Chile;17;-3;1576",
  "Dánia;14;-1;1584",
  "Franciaország;2;1;1725",
  "Hollandia;13;3;1586",
  "Horvátország;8;-1;1625",
  "Kolumbia;9;-1;1622",
  "Mexikó;12;0;1603",
  "Németország;16;-1;1580",
  "Olaszország;15;1;1583",
  "Peru;19;0;1551",
  "Portugália;5;1;1643",
  "Spanyolország;7;2;1631",
  "Svájc;11;0;1604",
  "Svédország;18;0;1560",
  "Szenegál;20;0;1546",
  "Uruguay;6;-1;1639"
];

async function FifaKollekcioLetrehozas() {
  const client = new MongoClient(url);
  const db = client.db(databaseName);
  const collection = db.collection(collectionName);

  try {
    await client.connect();

    await collection.createIndex({ "Helyezes": 1 });

    for (const item of fifa) {
      const [csapat, helyezes, valtozas, pontszam] = item.split(";");
      const document = {
        "Csapat": csapat,
        "Helyezes": parseInt(helyezes),
        "Valtozas": parseInt(valtozas),
        "Pontszam": parseInt(pontszam)
      };
      await collection.insertOne(document);
    }

    console.log("Az adatok sikeresen feltöltve!");
  } catch (error) {
    console.error("Hiba történt:", error);
  } finally {
    await client.close();
  }
}


// 3. Rendezze a csapatokat pontszám szerint, majd jelenítse meg csak a csapat nevét és helyezését pontszám szerint csökkenő sorrendben.

async function PontszamSzerint() {
const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(databaseName);
      const collection = db.collection(collectionName);
  
      const sortedTeams = await collection.find().sort({ "Pontszam": -1 }).toArray();
      const sortedTeamNamesAndPositions = sortedTeams.map(team => ({ "Csapat": team.Csapat, "Helyezes": team.Helyezes }));
  
      console.log("A csapatok rendezve pontszám szerint:");
      console.log(sortedTeamNamesAndPositions);
    } catch (error) {
      console.error("Hiba történt:", error);
    } finally {
      await client.close();
    }
  }
  
// 4. Jelenítse meg a legjobb 3 csapat minden adatát, helyezésük alapján rendezve.
async function LegjobbHaromCsapat() {
const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(databaseName);
      const collection = db.collection(collectionName);
  
      const top3Teams = await collection.find().sort({ "Helyezes": 1 }).limit(3).toArray();
  
      console.log("A legjobb 3 csapat:");
      console.log(top3Teams);
    } catch (error) {
      console.error("Hiba történt:", error);
    } finally {
      await client.close();
    }
  }
  
// 5. Listázza ki azoknak a csapatoknak a nevét, amelyek helyezésük nem változott az előző alkalom óta!
async function StabilHely() {
const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(databaseName);
      const collection = db.collection(collectionName);
  
      const unchangedTeams = await collection.find({ "Valtozas": 0 }).toArray();
  
      console.log("Az előző alkalom óta változatlan csapatok:");
      console.log(unchangedTeams.map(team => team.Csapat));
    } catch (error) {
      console.error("Hiba történt:", error);
    } finally {
      await client.close();
    }
  }
  
  // 6. Jelenítse meg azoknak a csapatoknak a nevét és pontszámát, akik 1600 pontnál többet szereztek.
  async function CsapatokEzerhatszazFelett() {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(databaseName);
      const collection = db.collection(collectionName);
  
      const teamsAbove1600Points = await collection.find({ "Pontszam": { $gt: 1600 } }).toArray();
  
      console.log("Csapatok 1600 pont felett:");
      console.log(teamsAbove1600Points.map(team => ({ "Csapat": team.Csapat, "Pontszam": team.Pontszam })));
    } catch (error) {
      console.error("Hiba történt:", error);
    } finally {
      await client.close();
    }
  }
  
  // 7. Határozza meg azt a csapatot, amely a legtöbb helyezést rontotta a korábbi évekhez képest.
  async function LegtobbRontas() {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(databaseName);
      const collection = db.collection(collectionName);
  
      const teamWithMostDecline = await collection.findOne({ "Valtozas": { $lt: 0 } }, { sort: { "Valtozas": 1 } });
  
      console.log("A legtöbb helyezést rontó csapat:");
      console.log(teamWithMostDecline);
    } catch (error) {
      console.error("Hiba történt:", error);
    } finally {
      await client.close();
    }
  }
  
  // Futtatás
  async function run() {
  await FifaKollekcioLetrehozas();
  PontszamSzerint();
  LegjobbHaromCsapat();
  StabilHely();
  CsapatokEzerhatszazFelett();
  LegtobbRontas();
}

run().catch(error => console.error("Hiba történt:", error));