const kelimeler = ["ATA", "BAL", "CAM", "DİL"];
let currentLevel = 0;

function startGame() {
    let kelime = kelimeler[currentLevel];
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let i = 0; i < kelime.length; i++) {
        grid.innerHTML += `<input type="text" maxlength="1" class="letter-box" id="input-${i}">`;
    }
}

function checkWord() {
    let kelime = kelimeler[currentLevel];
    let tahmin = "";
    for (let i = 0; i < kelime.length; i++) {
        tahmin += document.getElementById(`input-${i}`).value.toUpperCase();
    }
    
    if (tahmin === kelime) {
        alert("Tebrikler! Bir sonraki seviyeye geçiyorsun.");
        currentLevel++;
        if (currentLevel < kelimeler.length) {
            startGame();
        } else {
            alert("Tüm bölümleri bitirdin!");
        }
    } else {
        alert("Yanlış tahmin, tekrar dene!");
    }
}
