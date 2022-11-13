// INTRO

// console.log("ok")
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

// let ok = zwierzeta.slice(0, 2)

// console.log(zwierzeta)
// console.log(zwierzeta.length)
// console.log(ok)


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

// let osoby = [
//     {imie: "Jan", nazwisko: "Brzeczyszczykiewicz"},
//     {imie: "Jonasz", nazwisko: "Złotagóra"},
//     {imie: "Tymon", nazwisko: "Pumbon"},
// ];

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

// // BLEDY



// console.log("czesc");
// try{
//     let redukcja = osoby.reduced(function(total, osoba){
//         return total + osoba.imie;
//     }, "");
// } catch(err){
//     console.log(err);
// }



//  DOM

// let nav = document.getElementById("nawigacja");
// const elo = document.getElementsByClassName("grid-item");
// const tag = document.getElementsByTagName("h2");
// const test = Array.from(tag)



// console.log(Array.isArray(test));
// console.log(test);
// console.log(tag);

// QUERY - znajduje pierwszy elemet


// const query = document.querySelector('#nawigacja div.lupa'); 
// // - znajduje pierwszy elemet
// .elomelo320

// const div = document.querySelector('nawigacja .lupa'); 
// const nawArray = Array.from(queryall);
// console.log(queryall);

// for (let i=0; i<nawArray.length; i++){
//     // console.log(nawArray[i].textContent = 'eloe elo 320' + i);
//     // console.log(nawArray[i].parentElement.parentElement);
//     console.log(nawArray[i].children);
// }

// window.addEventListener('load',function(evt){

//     const nav = document.querySelector('#nawigacja'); 

// const div = document.querySelector('#nawigacja .lupa');  
// const dousuniecia = div.nexElementSibling;

// nav.removeChild(dousuniecia)
// console.log(dousuniecia);

// const przycisk = document.createElement('button');
// const text = document.createTextNode('Klik');

// nav.appendChild(przycisk);
// przycisk.appendChild(text);

// console.log(nav);

// // EVENTS 

// nav.addEventListener('click', function(evt){
//         // console.log(evt);
//         console.log(evt.target);
//     });
// nav.addEventListener('click', function(evt){
//     // console.log(evt);
//     console.log(evt.target);
// });


// nav.addEventListener('mousemove', function(evt){
//     // console.log(evt);
//     console.log(evt);
// });



// });

// FORMULARZE

// window.addEventListener('load',function(evt){

//     const formularz = document.forms['imie'];
//     console.log(formularz)

//     formularz.addEventListener('submit', function(evt){
//         evt.preventDefault();
//         const imie = formularz.querySelector('input[type="text"]').value;
//         console.log(imie);
//     });

// });

// KLASY

// window.addEventListener('load', function (evt) {

//     const formularz = document.forms['imie'];
//     // console.log(formularz)
//     // formularz.style.color = "red";
//     // formularz.style.backgroundColor = "red";
//     // formularz.style.padding = "20px";

//     // formularz.className += "brazowy";

//     // const przycisk = formularz.querySelector('input[type="button"]');
//     const przycisk = formularz.querySelector('button');
//     console.log(przycisk)


//     // const wynik = przycisk.getAttribute('class');
//     const wynik = przycisk.setAttribute('name',"przycisk");
//     const nowa = przycisk.setAttribute('class',"brazowy");
//     const czyma = przycisk.hasAttribute('class',"brazowy");
//     console.log(czyma)


//     formularz.classList.add("brazowy");
//     formularz.classList.remove("brazowy");

// });  

// DATE & TIME

// const mojaData = Date.now();
// console.log(mojaData);
// const mojaData = new Date("2018-01-14T12:23:45");
// console.log(mojaData.getFullYear);

// FUNKJCE INTERWAŁOWE

function doKonsoli(){
    licznik++;
    console.log("witam! " + licznik);
    if (licznik > 8){
        clearInterval(interwal);
    }
}

let licznik = 0;


// setTimeout(doKonsoli, 3000)
 let interwal = setInterval(doKonsoli, 1000);

