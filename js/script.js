// ===== BAGIAN UMUM: mode gelap (dipakai semua halaman) =====
const tombolTema = document.getElementById("tombol-tema");
if (tombolTema) {
    tombolTema.addEventListener("click", function () {
        document.body.classList.toggle("gelap");
        if (document.body.classList.contains("gelap")) {
            tombolTema.textContent = "Mode Terang";
        } else {
            tombolTema.textContent = "Mode Gelap";
        }
    });
}
// ===== BAGIAN MAHASISWA 2 (Beranda) =====
const sapaan = document.getElementById("sapaan");
if (sapaan) {
    const jam = new Date().getHours();
    let salam = "Selamat Malam";
    if (jam < 11) {
        salam = "Selamat Pagi";
    } else if (jam < 15) {
        salam = "Selamat Siang";
    } else if (jam < 18) {
        salam = "Selamat Sore";
    }
    sapaan.textContent = salam + "! Selamat Datang di Prodi D3 Teknik Informatika";
}
// ===== BAGIAN Alif Kurniawan (Profil dan Kegiatan) =====
const tombolInfoProdi = document.getElementById("tombol-info-prodi");
if (tombolInfoProdi) {
    tombolInfoProdi.addEventListener("click", function () {
        const detailProdi = document.getElementById("detail-prodi");
        if (detailProdi.textContent === "") {
            detailProdi.textContent = "Status Akreditasi: Baik Sekali | Kepala Program Studi: Tim D3 Teknik Informatika";
            tombolInfoProdi.textContent = "Sembunyikan Detail";
        } else {
            detailProdi.textContent = "";
            tombolInfoProdi.textContent = "Tampilkan Detail Prodi";
        }
    });
}
// ===== BAGIAN MAHASISWA 4 (Kontak) =====
const tombolKirim = document.getElementById("tombol-kirim");
if (tombolKirim) {
    tombolKirim.addEventListener("click", function () {
        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();
        const status = document.getElementById("status-form");

        if (nama === "" || email === "" || pesan === "") {
            status.textContent = "Semua kolom wajib diisi.";
        } else if (email.indexOf("@") === -1) {
            status.textContent = "Format email tidak valid.";
        } else {
            status.textContent = "Terima kasih, " + nama + ". Pesan Anda diterima.";
        }
    });
}