var waktu = new Date();
var jam = waktu.getHours();
var pembuka;

if (jam > 18) { //malem
    pembuka = "Oyasumi おやすみ!";
}   else if (jam > 12) { //siang
    pembuka = "Konnichiwa こんにちは!";
}   else if ( jam > 0) { //pagi
    pembuka = "Ohayōgozaimasu おはようございます!";
}

const head1 = document.getElementById("head1");
head1.style.color = "whitesmoke";
head1.innerHTML = pembuka + " Welcome to My Blog";

const header = document.querySelectorAll("ul.header li");
for (let i = 0; i < header.length; i++) {
    header[i].style.cssText = 
    'display: inline;'
}

const a = document.querySelectorAll("ul.header li a");
for (let z=0; z < a.length; z++) {
    a[z].style.cssText =
    'text-decoration:none; color:whitesmoke;'
}

const divB = document.querySelector("div#brs");
const isi = divB.getElementsByTagName("p");
for (let x = 0; x < isi.length; x++) {
    isi[x].style.fontFamily = "Courier New";
}

const tombol1 = document.querySelector("#t1");
tombol1.addEventListener("click", function() {
    isi[0].style.color = "whitesmoke"
});

const tombol2 = document.querySelector("#t2");
tombol2.addEventListener("click", function() {
    isi[1].style.color = "whitesmoke"
});