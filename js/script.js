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
    var sisi1 = parseFloat(document.getElementById("panjang-sisi1").value);
    var sisi2 = parseFloat(document.getElementById("panjang-sisi2").value);
    var sisi3 = parseFloat(document.getElementById("panjang-sisi3").value);
    var hasilKeliling = document.getElementById("hasil-keliling");

    if (sisi1 > 0 && sisi2 > 0 && sisi3 >0) {
        var keliling = sisi1 + sisi2 + sisi3;
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
    document.getElementById("panjang-sisi1").value = "";
    document.getElementById("panjang-sisi2").value = "";
    document.getElementById("panjang-sisi3").value = "";
    document.getElementById("hasil-keliling").textContent = "";
}

// Jajar Genjang
function hitungLuasJajarGenjang() {
    var alasj = document.getElementById("alas-jajar-genjang").value;
    var tinggij = document.getElementById("tinggi-jajar-genjang").value;
    var hasilLuasj = document.getElementById("hasil-luas-jajar-genjang");

    if (alasj > 0 && tinggij > 0) {
        var luasj = alasj * tinggij;
        hasilLuasj.textContent = "Luas Jajar Genjang adalah: " + luasj;
    } else {
        hasilLuasj.textContent = "Masukkan Nilai Panjang Alas dan Tinggi Terlebih Dahulu";
    }
}

function hitungKelilingJajarGenjang() {
    var alasj = parseFloat(document.getElementById("alas-jajar-genjang").value);
    var sisij = parseFloat(document.getElementById("sisi-jajar-genjang").value);
    var hasilKelilingj = document.getElementById("hasil-keliling-jajar-genjang");

    if (alasj > 0 && sisij > 0) {
        var kelilingj = 2 * (alasj + sisij);
        hasilKelilingj.textContent = "Keliling Jajar Genjang adalah: " + kelilingj;
    } else {
        hasilKelilingj.textContent = "Masukkan Nilai Panjang Alas dan Sisi Terlebih Dahulu";
    }
}

function resetLuasJajarGenjang() {
    document.getElementById("alas-jajar-genjang").value = "";
    document.getElementById("tinggi-jajar-genjang").value = "";
    document.getElementById("hasil-luas-jajar-genjang").textContent = "";
}

function resetKelilingJajarGenjang() {
    document.getElementById("alas-jajar-genjang").value = "";
    document.getElementById("sisi-jajar-genjang").value = "";
    document.getElementById("hasil-keliling-jajar-genjang").textContent = "";
}
