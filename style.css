const sorular = [
    { kelime: "İSTANBUL", ipucu: "Tarih: Osmanlı'nın başkenti" },
    { kelime: "MATEMATİK", ipucu: "Mantık: Sayısal işlemler bilimi" },
    { kelime: "GÜNEŞ", ipucu: "Genel Kültür: Isı ve ışık kaynağı" },
    { kelime: "İSTİKLAL", ipucu: "Tarih: Bağımsızlık marşımızın adı" },
    { kelime: "BİLGİSAYAR", ipucu: "Genel Kültür: Modern çağın icadı" }
];
let currentLevel = 0, sure = 420;

function startGame() {
    let q = sorular[currentLevel % sorular.length];
    document.getElementById('level-info').innerText = "Bölüm: " + (currentLevel + 1);
    document.getElementById('soru').innerText = q.ipucu;
    let grid = document.getElementById('grid'); grid.innerHTML = '';
    for(let i=0; i<q.kelime.length; i++) grid.innerHTML += `<div class="box"></div>`;
}

// Klavye üret
"ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split('').forEach(h => {
    document.getElementById('keyboard').innerHTML += `<div class="key" onclick="harfGir('${h}')">${h}</div>`;
});

function harfGir(h) {
    let boxes = document.querySelectorAll('.box');
    for(let b of boxes) {
        if(b.innerText === "") {
            b.innerText = h; b.classList.add('filled');
            kontrolEt(); break;
        }
    }
}

function kontrolEt() {
    let tahmin = Array.from(document.querySelectorAll('.box')).map(b => b.innerText).join("");
    if(tahmin === sorular[currentLevel % sorular.length].kelime) {
        patlat(); setTimeout(() => { currentLevel++; startGame(); }, 1500);
    }
}

function joker() {
    let q = sorular[currentLevel % sorular.length];
    let boxes = document.querySelectorAll('.box');
    for(let i=0; i<boxes.length; i++) {
        if(boxes[i].innerText === "") {
            boxes[i].innerText = q.kelime[i]; boxes[i].classList.add('filled');
            kontrolEt(); break;
        }
    }
}

function patlat() {
    const c = document.getElementById('fireworks'); const ctx = c.getContext('2d');
    c.width = window.innerWidth; c.height = window.innerHeight;
    for(let i=0; i<100; i++) {
        ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
        ctx.fillRect(Math.random()*c.width, Math.random()*c.height, 8, 8);
    }
    setTimeout(() => ctx.clearRect(0, 0, c.width, c.height), 1000);
}

setInterval(() => {
    sure--; let m = Math.floor(sure/60), s = sure%60;
    document.getElementById('timer').innerText = `${m}:${s < 10 ? '0'+s : s}`;
}, 1000);

startGame();
