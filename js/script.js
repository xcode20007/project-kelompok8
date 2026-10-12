// =========================================================
// Website Disdukcapil Cilacap (tugas praktikum)
// Memakai Bootstrap 5 (bundle) untuk navbar, accordion, tab, dan modal
// =========================================================

// ===== UMUM: tahun pada footer =====
const elemenTahun = document.getElementById("tahun");
if (elemenTahun) {
 elemenTahun.textContent = new Date().getFullYear();
}

// ===== UMUM: tombol kembali ke atas =====
const tombolAtas = document.getElementById("ke-atas");
if (tombolAtas) {
 window.addEventListener("scroll", function () {
 tombolAtas.classList.toggle("d-none", window.scrollY < 300);
 });
 tombolAtas.addEventListener("click", function () {
 window.scrollTo({ top: 0, behavior: "smooth" });
 });
}

// ===== FAQ: pencarian pertanyaan =====
const kolomCari = document.getElementById("cari-faq");
if (kolomCari) {
 const daftarFaq = document.querySelectorAll(".faq-item");
 const pesanKosong = document.getElementById("faq-kosong");
 const teksJumlah = document.getElementById("faq-jumlah");

 function saringFaq() {
 const kata = kolomCari.value.trim().toLowerCase();
 let tampil = 0;
 daftarFaq.forEach(function (item) {
 const cocok = item.textContent.toLowerCase().includes(kata);
 item.classList.toggle("d-none", !cocok);
 if (cocok) {
 tampil++;
 }
 });
 pesanKosong.classList.toggle("d-none", tampil !== 0);
 teksJumlah.textContent = tampil + " pertanyaan ditampilkan";
 }

 kolomCari.addEventListener("input", saringFaq);
}

// ===== LAYANAN: data persyaratan umum =====
// Gambaran umum, bukan ketentuan resmi. Selalu konfirmasi ke petugas.
const DATA_LAYANAN = {
 ktp: {
 judul: "KTP Elektronik",
 ringkasan: "Identitas resmi penduduk. Perekaman data (foto, sidik jari, iris mata) dilakukan di kantor atau UPT.",
 syarat: [
 "Kartu Keluarga (KK)",
 "Berusia 17 tahun atau sudah/pernah menikah",
 "Datang langsung untuk perekaman data",
 "Pengganti KTP-el hilang: surat keterangan kehilangan dari kepolisian",
 "Pengganti KTP-el rusak: bawa KTP-el yang rusak"
 ]
 },
 kk: {
 judul: "Kartu Keluarga",
 ringkasan: "Pembuatan KK baru atau perubahan susunan anggota keluarga.",
 syarat: [
 "KK lama (untuk perubahan data)",
 "KTP-el pemohon",
 "Buku nikah atau kutipan akta perkawinan (untuk pasangan baru)",
 "Akta kelahiran (untuk menambah anggota anak)",
 "Surat pindah (untuk anggota yang datang dari wilayah lain)"
 ]
 },
 kia: {
 judul: "Kartu Identitas Anak",
 ringkasan: "Identitas bagi anak di bawah 17 tahun yang belum menikah.",
 syarat: [
 "Akta kelahiran anak",
 "Kartu Keluarga (KK)",
 "KTP-el kedua orang tua",
 "Pas foto anak sesuai ketentuan petugas"
 ]
 },
 "perubahan-data": {
 judul: "Perubahan Data",
 ringkasan: "Perbaikan atau pembaruan data kependudukan, misalnya kesalahan nama atau tempat lahir.",
 syarat: [
 "Kartu Keluarga (KK)",
 "KTP-el pemohon",
 "Dokumen pendukung yang membuktikan data yang benar (misalnya akta, ijazah, atau putusan pengadilan)"
 ]
 },
 lahir: {
 judul: "Akta Kelahiran",
 ringkasan: "Bukti resmi peristiwa kelahiran seorang anak.",
 syarat: [
 "Surat keterangan lahir dari rumah sakit, bidan, atau desa",
 "Kartu Keluarga (KK)",
 "KTP-el kedua orang tua",
 "Buku nikah atau kutipan akta perkawinan orang tua (jika ada)"
 ]
 },
 mati: {
 judul: "Akta Kematian",
 ringkasan: "Pencatatan resmi peristiwa kematian anggota keluarga.",
 syarat: [
 "Surat keterangan kematian dari rumah sakit, puskesmas, atau desa",
 "Kartu Keluarga (KK)",
 "KTP-el almarhum/almarhumah",
 "KTP-el pelapor"
 ]
 },
 "pindah-keluar": {
 judul: "Pindah Keluar",
 ringkasan: "Pengajuan surat pindah bagi warga yang akan berpindah ke luar wilayah.",
 syarat: [
 "Kartu Keluarga (KK)",
 "KTP-el pemohon",
 "Surat pengantar dari RT/RW atau desa",
 "Keterangan alamat tujuan pindah"
 ]
 },
 "pindah-masuk": {
 judul: "Pindah Masuk",
 ringkasan: "Pencatatan kedatangan penduduk dari wilayah lain.",
 syarat: [
 "Surat keterangan pindah dari daerah asal",
 "Kartu Keluarga (KK) atau KTP-el",
 "Keterangan alamat tinggal baru",
 "Surat pengantar dari RT/RW setempat (jika diminta)"
 ]
 },
 ikd: {
 judul: "Identitas Kependudukan Digital",
 ringkasan: "KTP-el versi digital yang dipasang di smartphone.",
 syarat: [
 "KTP-el yang sudah jadi",
 "Smartphone dengan nomor ponsel aktif",
 "Alamat email aktif",
 "Aplikasi IKD resmi dan aktivasi sesuai ketentuan terbaru"
 ]
 }
};

const CATATAN_LAYANAN = "Persyaratan di atas hanya gambaran umum dan dapat berbeda atau berubah. Konfirmasi kepada petugas Disdukcapil Cilacap atau melalui aplikasi resmi.";

// ===== LAYANAN: filter kategori =====
const tombolFilter = document.querySelectorAll("[data-filter]");
const kolomLayanan = document.querySelectorAll(".kolom-layanan");
tombolFilter.forEach(function (tombol) {
 tombol.addEventListener("click", function () {
 const pilihan = tombol.dataset.filter;
 tombolFilter.forEach(function (t) {
 const aktif = t === tombol;
 t.classList.toggle("active", aktif);
 t.setAttribute("aria-pressed", aktif ? "true" : "false");
 });
 kolomLayanan.forEach(function (kolom) {
 const tampil = pilihan === "semua" || kolom.dataset.kategori === pilihan;
 kolom.classList.toggle("d-none", !tampil);
 });
 });
});

// ===== LAYANAN: modal persyaratan dengan checklist =====
const modalLayanan = document.getElementById("modal-layanan");
if (modalLayanan) {
 const judulModal = document.getElementById("modal-judul");
 const ringkasanModal = document.getElementById("modal-ringkasan");
 const daftarModal = document.getElementById("modal-daftar");
 const progresModal = document.getElementById("modal-progres");
 const teksProgres = document.getElementById("modal-progres-teks");
 const catatanModal = document.getElementById("modal-catatan");

 function perbaruiProgres() {
 const semua = daftarModal.querySelectorAll("input[type='checkbox']");
 const tercentang = daftarModal.querySelectorAll("input[type='checkbox']:checked");
 const persen = semua.length === 0 ? 0 : Math.round((tercentang.length / semua.length) * 100);
 progresModal.value = persen;
 if (tercentang.length === semua.length && semua.length > 0) {
 teksProgres.textContent = "Semua berkas sudah siap (" + tercentang.length + " dari " + semua.length + ").";
 } else {
 teksProgres.textContent = tercentang.length + " dari " + semua.length + " berkas siap.";
 }
 }

 modalLayanan.addEventListener("show.bs.modal", function (event) {
 const pemicu = event.relatedTarget;
 if (!pemicu) {
 return;
 }
 const data = DATA_LAYANAN[pemicu.dataset.layanan];
 if (!data) {
 return;
 }

 judulModal.textContent = "Persyaratan " + data.judul;
 ringkasanModal.textContent = data.ringkasan;
 catatanModal.textContent = CATATAN_LAYANAN;
 daftarModal.textContent = "";

 data.syarat.forEach(function (teks, indeks) {
 const baris = document.createElement("div");
 baris.className = "form-check mb-2";

 const kotak = document.createElement("input");
 kotak.type = "checkbox";
 kotak.className = "form-check-input";
 kotak.id = "syarat-" + indeks;
 kotak.addEventListener("change", perbaruiProgres);

 const label = document.createElement("label");
 label.className = "form-check-label";
 label.htmlFor = kotak.id;
 label.textContent = teks;

 baris.appendChild(kotak);
 baris.appendChild(label);
 daftarModal.appendChild(baris);
 });

 perbaruiProgres();
 });
}
