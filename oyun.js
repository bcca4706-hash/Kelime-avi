const kelimeler = ["ATA", "BAL", "CAM", "DİL", "ELİ", "FİL", "GÜL", "HAL", "IŞIK", "JEST"];
let currentLevel = 0;
let skor = 0;
let sure = 420; // 7 dakika = 420 saniye

function startGame() {
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    let secilenKelime = kelimeler[currentLevel];
    
    // Kutucukları oluştur
    for(let harf of secilenKelime) {
        grid.innerHTML += `<div class="letter-box">?</div>`;
    }
    
    // 7 dakikalık sayacı başlat
    baslatSayaç();
}

function baslatSayaç() {
    let timer = setInterval(() => {
        sure--;
        console.log("Kalan süre: " + sure);
        if(sure <= 0) {
            clearInterval(timer);
            alert("Süre bitti! Oyun sona erdi.");
        }
    }, 1000);
}
