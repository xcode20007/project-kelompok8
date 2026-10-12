// Umum ============================ //
const elemenTahun = document.getElementById("tahun");
if (elemenTahun) {
    elemenTahun.textContent = new Date().getFullYear();
}

// Tombol Kembali ke Atas
const tombolAtas = document.getElementById("ke-atas");
if (tombolAtas) {
    window.addEventListener("scroll", function () {
        tombolAtas.classList.toggle("d-none", window.scrollY < 300);
    });
    tombolAtas.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


// Beranda ============================ //

// Profil ============================ //

// Informasi ============================ //

// FAQ ============================ //

// Layanan ============================ //