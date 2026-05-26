let kelimeHavuzu = [];
let currentLevel = 0;
let sure = 420;

// 1. Verileri dışarıdan (sorular.json) çekme motoru
async function verileriYukle() {
    try {
        const response = await fetch('sorular.json');
        kelimeHavuzu = await response.json();
        startGame();
    } catch (e) {
        console.error("sorular.json dosyası bulunamadı!", e);
    }
}

// 2. Oyunu başlatma ve Arayüzü çizme
function startGame() {
    if (kelimeHavuzu.length === 0) return;
    let q = kelimeHavuzu[currentLevel % kelimeHavuzu.length];
    document.getElementById('level-info').innerText = "Bölüm: " + (currentLevel + 1);
    document.getElementById('soru').innerText = q.ipucu;
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    for(let i = 0; i < q.kelime.length; i++) {
        grid.innerHTML += `<div class="box" id="b-${i}"></div>`;
    }
}

// 3. Klavye oluşturma
"ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split('').forEach(h => {
    document.getElementById('keyboard').innerHTML += `<div class="key" onclick="harfGir('${h}')">${h}</div>`;
});

// 4. Harf girişi ve kontrol
function harfGir(h) {
    let boxes = document.querySelectorAll('.box');
    for(let b of boxes) {
        if(b.innerText === "") {
            b.innerText = h;
            b.style.background = "rgba(255,255,255,0.4)";
            kontrolEt();
            break;
        }
    }
}

function kontrolEt() {
    let tahmin = "";
    document.querySelectorAll('.box').forEach(b => tahmin += b.innerText);
    if(tahmin === kelimeHavuzu[currentLevel % kelimeHavuzu.length].kelime) {
        document.querySelectorAll('.box').forEach(b => b.classList.add('correct'));
        patlat();
        setTimeout(() => { currentLevel++; startGame(); }, 2000);
    }
}

// 5. Joker Sistemi
function joker() {
    let q = kelimeHavuzu[currentLevel % kelimeHavuzu.length];
    let boxes = document.querySelectorAll('.box');
    for(let i=0; i<boxes.length; i++) {
        if(boxes[i].innerText === "") {
            boxes[i].innerText = q.kelime[i];
            break;
        }
    }
}

// 6. Havai Fişek Efekti
function patlat() {
    const canvas = document.getElementById('fireworks');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    for(let i=0; i<50; i++) {
        ctx.fillStyle = 'hsl('+Math.random()*360+', 100%, 50%)';
        ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, 10, 10);
    }
    setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 2000);
}

// 7. Sayaç
setInterval(() => {
    sure--;
    let timerEl = document.getElementById('timer');
    let dk = Math.floor(sure/60), sn = sure%60;
    timerEl.innerText = `${dk}:${sn < 10 ? '0'+sn : sn}`;
    if(sure < 60) timerEl.className = "red-alert";
}, 1000);

// Başlangıç
verileriYukle();
