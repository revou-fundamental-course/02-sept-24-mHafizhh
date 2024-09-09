function hitungLuasSegitiga() {
    var alas = document.getElementById("panjang-alas").value;
    var tinggi = document.getElementById("tinggi").value;
    var hasilLuas = document.getElementById("hasil-luas");

    if (alas > 0 && tinggi > 0) {
        var luas = 0.5 * alas * tinggi;
        hasilLuas.textContent = "Luas Segitiga adalah: " + luas;
    } else {
        hasilLuas.textContent = "Masukkan Nilai Panjang Alas dan Tinggi Terlebih Dahulu";
    }
}

function hitungKelilingSegitiga() {
    var sisi = document.getElementById("panjang-sisi").value;
    var hasilKeliling = document.getElementById("hasil-keliling");

    if (sisi > 0) {
        var keliling = 3 * sisi;
        hasilKeliling.textContent = "Keliling Segitiga adalah: " + keliling;
    } else {
        hasilKeliling.textContent = "Masukkan nilai yang valid untuk panjang sisi.";
    }
}

function resetLuasSegitiga() {
    document.getElementById("panjang-alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasil-luas").textContent = "";
}

function resetKelilingSegitiga() {
    document.getElementById("panjang-sisi").value = "";
    document.getElementById("hasil-keliling").textContent = "";
}

