// INTRO

// console.log("dupa")
// let a = "2";
// var b = String(3);
// a = "cos innego";
// var c = true;
// var d = null;
// var e;

// console.log(c);

// MATH

// let a = 6; c = 3;
// let b = 2;
// a += 2;

// c = (2 + 2) * 3;

// console.log(a + b);
// console.log(a * b);
// console.log(a - b);
// console.log(a / b);
// console.log(c % b);

// INSTRUKCJE WARUNKOWE

// let a = 3;
// let b = 4;
// let zwierzeta = ['kot', 'pies', "kon", 2.343];
// let warzywa = new Array('łosoś', 'tuna');


// if (a !== b) {
//     warzywa[0] = a
//     console.log(warzywa[0])
//     console.log(zwierzeta[1])
// } else if (a === b) {
//     console.log("co se dzieje")
// } else if (a == 3) {
//     console.log('jest nie dobrze bro')
// } else {
//     console.log(";aslkjdlaskndoas" + 3)
// };

// zwierzeta.pop()
// zwierzeta.shift()
// zwierzeta.unshift(2.343)
// zwierzeta.push(2 * "res")
// console.log(zwierzeta)
// zwierzeta.splice(1, 3, "twoja stara", "twoj stary", "twojej starej stary stary")

// let dupa = zwierzeta.slice(0, 2)

// console.log(zwierzeta)
// console.log(zwierzeta.length)
// console.log(dupa)


// OBIEKTY

// let osoba = {
//     imie: "Krystian",
//     nazwisko: "BuzałaEloo323",
//     wiek: 33,
//     szkoły: {
//         podstawowa: "SP23",
//         gimnazjum: "KP02",
//         liceum, "break"
//     }
// };

// osoba["wiek"] = "twoja stara"
// console.log(osoba.imie + " " + osoba.nazwisko + " " + osoba.wiek);

// for (let i = 10; i > 0; i -= 2) {
//     console.log('kot' + i);
//     console.log(i + i);

// }

// let osoba = {
//     imie: "Michał",
//     nazwisko: "Piernicki"
// }

// for (x in osoba) {
//     console.log(osoba)
// }

// let i = 0;
// while (i<5){
//     console.log(i)
//     i++
// }

// FUNKCJE

// let dodaj = function (a, b) {
//     c = a + b
//     console.log('elo mordo');
//     console.log(c);
//     return c;
// }

// j = dodaj(1, 3);
// j;
// dodaj2(1, j);

// function dodaj2(a, b) {
//     c = a + b
//     console.log('elo mordo');
//     console.log(c);
//     return c;
// }

// let dodaj3 = (function (a, b) {
//     c = a + b
//     console.log('elo mordo');
//     console.log(c);
//     return c;
// })(2, 6)

// let dodajIPomnoz = function(x, y){
//     let mnoznik = 3;
//     let wynik = (x+y) * mnoznik;
//     return wynik;
// }

// g = dodajIPomnoz(2,2)
// console.log(g)

// PETLE NA TABLICACH

let osoby = [
    {imie: "Jan", nazwisko: "Brzeczyszczykiewicz"},
    {imie: "Jonasz", nazwisko: "Złotagóra"},
    {imie: "Tymon", nazwisko: "Pumbon"},
];

// // for (let i = 0; i < osoby.length; i++) {
// //     console.log(osoby[i]["imie"])
// // };

// osoby.forEach(function(osoba){
//     console.log(osoba["imie"])
// })

// FILTER MAP REDUCE

// let wynik = osoby.filter(function(osoba){
//     if (osoba.imie != "Jan")
//     return osoba;
// })

// console.log(wynik)

// let mapowanie = osoby.map(function(osoba){
//     return osoba.imie;
// })

// console.log(mapowanie)

// let redukcja = osoby.reduce(function(total, osoba){
//     return total + osoba.imie;
// }, "")

// console.log(redukcja)

// BLEDY



console.log("czesc");
try{
    let redukcja = osoby.reduced(function(total, osoba){
        return total + osoba.imie;
    }, "");
} catch(err){
    console.log(err);
}



 