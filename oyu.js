const kelimeler = ["ATA", "BAL", "CAM", "DİL"]; // Kelime havuzu
let currentLevel = 0;

function startGame() {
    let kelime = kelimeler[currentLevel];
    alert("Oyun Başladı! " + kelime.length + " Harfli Kelimeyi Bul.");
    
    // Grid'i güncelle
    let grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let i = 0; i < kelime.length; i++) {
        grid.innerHTML += `<input type="text" maxlength="1" class="letter-box" id="input-${i}">`;
    }
}
