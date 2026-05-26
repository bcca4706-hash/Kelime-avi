let sure = 420;
let tahminHakki = 3;

// Süre Alarmı ve Renk Değişimi
setInterval(() => {
    sure--;
    let timerEl = document.getElementById('timer');
    let dk = Math.floor(sure / 60);
    let sn = sure % 60;
    timerEl.innerText = `${dk}:${sn < 10 ? '0'+sn : sn}`;
    
    if (sure < 60) {
        timerEl.classList.add('red-alert');
    }
}, 1000);

function jokerKullan() {
    alert("Joker kullanıldı: İlk harf gösterildi!");
    // Buraya kutucuğa harf yerleştiren kod gelecek
}

// Otomatik Geçiş ve Grid Yapısı
function harfGir(h) {
    let inputs = document.querySelectorAll('.letter-box');
    for(let i of inputs) {
        if(i.innerText === "") {
            i.innerText = h;
            break;
        }
    }
}
