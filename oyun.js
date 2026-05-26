const sorular = [
    { kelime: "ATA", ipucu: "Cumhuriyetimizin kurucusu" },
    { kelime: "BAL", ipucu: "Arıların ürettiği tatlı besin" },
    { kelime: "CAM", ipucu: "Pencerelerde kullanılan saydam madde" }
];

let currentLevel = 0;
let sure = 420;

function startGame() {
    let q = sorular[currentLevel];
    document.getElementById('soru').innerText = "Soru: " + q.ipucu;
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    
    for (let i = 0; i < q.kelime.length; i++) {
        grid.innerHTML += `<input type="text" maxlength="1" class="letter-box" id="input-${i}" readonly>`;
    }
}

// Sanal klavye oluşturma
const harfler = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
const kb = document.getElementById('keyboard');
kb.innerHTML = '';
for(let h of harfler) {
    kb.innerHTML += `<div class="key" onclick="harfGir('${h}')">${h}</div>`;
}

function harfGir(h) {
    let inputs = document.querySelectorAll('.letter-box');
    for(let i of inputs) {
        if(i.value === "") {
            i.value = h;
            kontrolEt();
            break;
        }
    }
}

function kontrolEt() {
    let q = sorular[currentLevel];
    let tahmin = "";
    document.querySelectorAll('.letter-box').forEach(i => tahmin += i.value);
    
    if (tahmin.length === q.kelime.length && tahmin === q.kelime) {
        alert("Tebrikler! Sıradaki soruya geçiyoruz.");
        currentLevel++;
        if(currentLevel < sorular.length) startGame();
        else alert("Tüm soruları bitirdin!");
    }
}

// Sayaç
setInterval(() => {
    sure--;
    let dk = Math.floor(sure / 60);
    let sn = sure % 60;
    document.getElementById('timer').innerText = `Kalan Süre: ${dk}:${sn < 10 ? '0'+sn : sn}`;
}, 1000);
