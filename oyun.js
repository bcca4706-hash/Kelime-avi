const sorular = [
    { kelime: "ATA", ipucu: "Türkiye'nin kurucusu" },
    { kelime: "BAL", ipucu: "Arıların yaptığı tatlı" }
];
let currentLevel = 0;
let sure = 420;

function startGame() {
    let q = sorular[currentLevel];
    document.getElementById('soru').innerText = q.ipucu;
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    
    for (let i = 0; i < q.kelime.length; i++) {
        grid.innerHTML += `<input type="text" maxlength="1" class="letter-box" id="input-${i}" oninput="autoFocus(this, ${i})">`;
    }
}

function autoFocus(el, i) {
    if (el.value.length === 1) {
        let next = document.getElementById(`input-${i + 1}`);
        if (next) next.focus();
    }
}

// Klavyeyi oluştur
const harfler = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
const kb = document.getElementById('keyboard');
for(let h of harfler) {
    kb.innerHTML += `<div class="key" onclick="yaz('${h}')">${h}</div>`;
}

function yaz(h) {
    let inputs = document.querySelectorAll('.letter-box');
    for(let i of inputs) {
        if(i.value === "") {
            i.value = h;
            if(i.nextElementSibling) i.nextElementSibling.focus();
            break;
        }
    }
}

// Süre sayacı
setInterval(() => {
    sure--;
    let dk = Math.floor(sure / 60);
    let sn = sure % 60;
    document.getElementById('timer').innerText = `Kalan Süre: ${dk}:${sn < 10 ? '0'+sn : sn}`;
}, 1000);

startGame();
