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
// ===== BAGIAN MAHASISWA 3 (Profil dan Kegiatan) =====
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