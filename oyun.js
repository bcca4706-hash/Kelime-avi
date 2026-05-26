const sorular = [
    { kelime: "ATA", ipucu: "Cumhuriyetimizin kurucusu" }, { kelime: "BAL", ipucu: "Arı ürünü" }, { kelime: "CAM", ipucu: "Saydam madde" }, { kelime: "DİL", ipucu: "Konuşma organı" }, { kelime: "GÜL", ipucu: "Çiçek" }, { kelime: "ELMA", ipucu: "Meyve" }, { kelime: "KAPI", ipucu: "Giriş" }, { kelime: "KALE", ipucu: "Savunma yapısı" }, { kelime: "MASA", ipucu: "Mobilya" }, { kelime: "OKUL", ipucu: "Eğitim yeri" },
    { kelime: "KİTAP", ipucu: "Bilgi kaynağı" }, { kelime: "KALEM", ipucu: "Yazı aracı" }, { kelime: "DÜNYA", ipucu: "Gezegenimiz" }, { kelime: "DENİZ", ipucu: "Mavi su" }, { kelime: "GÜNEŞ", ipucu: "Isı kaynağı" }, { kelime: "KİRAZ", ipucu: "Kırmızı meyve" }, { kelime: "TAVUK", ipucu: "Yumurta veren" }, { kelime: "YAPRAK", ipucu: "Ağaç parçası" }, { kelime: "EKMEK", ipucu: "Gıda" }, { kelime: "KARPUZ", ipucu: "Yaz meyvesi" },
    { kelime: "İSTANBUL", ipucu: "Boğaz'ın şehri" }, { kelime: "PENCERE", ipucu: "Işık girişi" }, { kelime: "BİLGİSAYAR", ipucu: "Teknoloji" }, { kelime: "ARKADAŞ", ipucu: "Dost" }, { kelime: "TEKNOLOJİ", ipucu: "Bilim dalı" }, { kelime: "TÜRKİYE", ipucu: "Ülkemiz" }, { kelime: "ANKARA", ipucu: "Başkentimiz" }, { kelime: "KIRMIZI", ipucu: "Bir renk" }, { kelime: "BİSİKLET", ipucu: "İki tekerlekli" }, { kelime: "TELEFON", ipucu: "İletişim aracı" },
    { kelime: "KAHVALTI", ipucu: "Sabah öğünü" }, { kelime: "SAATLİK", ipucu: "Zaman ölçümü" }, { kelime: "PİLOT", ipucu: "Uçak kullanan" }, { kelime: "DOKTOR", ipucu: "Sağlık çalışanı" }, { kelime: "ÖĞRETMEN", ipucu: "Eğiten kişi" }, { kelime: "GÖZLÜK", ipucu: "Görmeyi kolaylaştırır" }, { kelime: "ANAHTAR", ipucu: "Kapı açar" }, { kelime: "TİYATRO", ipucu: "Sahne sanatı" }, { kelime: "SİNEMA", ipucu: "Film izleme yeri" }, { kelime: "ÇİKOLATA", ipucu: "Tatlı bir yiyecek" },
    { kelime: "PORTAKAL", ipucu: "C vitamini" }, { kelime: "AYAKKABI", ipucu: "Ayağa giyilir" }, { kelime: "GÖMLEK", ipucu: "Üst giysi" }, { kelime: "PANTOLON", ipucu: "Alt giysi" }, { kelime: "TÜRKÇE", ipucu: "Dilimiz" }, { kelime: "MATEMATİK", ipucu: "Sayılar bilimi" }, { kelime: "COĞRAFYA", ipucu: "Yer bilimi" }, { kelime: "TARİH", ipucu: "Geçmişin bilgisi" }, { kelime: "FİZİK", ipucu: "Madde bilimi" }, { kelime: "KİMYA", ipucu: "Maddelerin yapısı" },
    { kelime: "BİYOLOJİ", ipucu: "Canlılar bilimi" }, { kelime: "YILDIZ", ipucu: "Gökyüzü ışığı" }, { kelime: "AY", ipucu: "Gece ışığı" }, { kelime: "BULUT", ipucu: "Gökyüzü oluşumu" }, { kelime: "YAĞMUR", ipucu: "Su yağışı" }, { kelime: "KAR", ipucu: "Beyaz yağış" }, { kelime: "RÜZGAR", ipucu: "Hava akımı" }, { kelime: "ŞİMŞEK", ipucu: "Gök gürültüsü ışığı" }, { kelime: "GÖKÇE", ipucu: "Maviye dair" }, { kelime: "DOĞA", ipucu: "Tabiat" },
    { kelime: "ORMAN", ipucu: "Ağaçlık alan" }, { kelime: "DENİZALTI", ipucu: "Sualtı aracı" }, { kelime: "UÇAK", ipucu: "Hava aracı" }, { kelime: "TREN", ipucu: "Raylı taşıt" }, { kelime: "OTOBÜS", ipucu: "Toplu taşıma" }, { kelime: "KİTAPLIK", ipucu: "Kitapların yeri" }, { kelime: "ÇİÇEK", ipucu: "Bitki" }, { kelime: "ARABA", ipucu: "Motorlu taşıt" }, { kelime: "MOTOR", ipucu: "Güç kaynağı" }, { kelime: "BİNA", ipucu: "Yapı" },
    { kelime: "KÖPRÜ", ipucu: "Geçiş yolu" }, { kelime: "YOL", ipucu: "İlerleme yeri" }, { kelime: "ŞEHİR", ipucu: "Yerleşim yeri" }, { kelime: "KÖY", ipucu: "Küçük yerleşim" }, { kelime: "DENİZCİ", ipucu: "Deniz çalışanı" }, { kelime: "KAPTAN", ipucu: "Gemi yöneticisi" }, { kelime: "ASKER", ipucu: "Vatan koruyucusu" }, { kelime: "POLİS", ipucu: "Güvenlik görevlisi" }, { kelime: "İTFAİYE", ipucu: "Yangın söndüren" }, { kelime: "AMBULANS", ipucu: "Acil yardım" },
    { kelime: "ECZANE", ipucu: "İlaç yeri" }, { kelime: "HASTANE", ipucu: "Sağlık merkezi" }, { kelime: "PARK", ipucu: "Oyun alanı" }, { kelime: "BAHÇE", ipucu: "Bitki alanı" }, { kelime: "MUTFAK", ipucu: "Yemek yapılan yer" }, { kelime: "SALON", ipucu: "Oturma yeri" }, { kelime: "BANYO", ipucu: "Yıkanma yeri" }, { kelime: "YATAK", ipucu: "Uyku yeri" }, { kelime: "MÜZE", ipucu: "Tarihi eser yeri" }, { kelime: "KÜTÜPHANE", ipucu: "Okuma yeri" },
    { kelime: "STADYUM", ipucu: "Spor alanı" }, { kelime: "BANKA", ipucu: "Para merkezi" }, { kelime: "MARKET", ipucu: "Alışveriş yeri" }, { kelime: "FIRIN", ipucu: "Ekmek yapılan yer" }, { kelime: "KASAP", ipucu: "Et satıcısı" }, { kelime: "MANAV", ipucu: "Meyve satıcısı" }, { kelime: "TERZİ", ipucu: "Giysi diken" }, { kelime: "BERBER", ipucu: "Saç kesen" }, { kelime: "KAFE", ipucu: "İçecek yeri" }, { kelime: "OTEL", ipucu: "Konaklama yeri" }
];

let currentLevel = 0, sure = 420;
function startGame() {
    let q = sorular[currentLevel];
    document.getElementById('level-info').innerText = "Bölüm: " + (currentLevel + 1);
    document.getElementById('soru').innerText = q.ipucu;
    let grid = document.getElementById('grid'); grid.innerHTML = '';
    for(let i=0; i<q.kelime.length; i++) grid.innerHTML += `<div class="box"></div>`;
}

"ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split('').forEach(h => {
    document.getElementById('keyboard').innerHTML += `<div class="key" onclick="harfGir('${h}')">${h}</div>`;
});

function harfGir(h) {
    let boxes = document.querySelectorAll('.box');
    for(let b of boxes) if(b.innerText === "") { b.innerText = h; kontrolEt(); break; }
}

function kontrolEt() {
    let tahmin = ""; document.querySelectorAll('.box').forEach(b => tahmin += b.innerText);
    if(tahmin === sorular[currentLevel].kelime) {
        alert("Tebrikler!"); currentLevel++; 
        if(currentLevel < sorular.length) startGame();
    }
}

setInterval(() => {
    sure--; let dk = Math.floor(sure/60), sn = sure%60;
    let t = document.getElementById('timer'); t.innerText = `${dk}:${sn < 10 ? '0'+sn : sn}`;
    if(sure < 60) t.className = "red-alert";
}, 1000);
o

