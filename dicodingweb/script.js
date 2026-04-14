document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-beli");
  const navProduk = document.getElementById("nav-produk");
  const productSection = document.getElementById("produk-section");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Animasi sederhana pada tombol
      btn.textContent = "Ditambahkan!";
      btn.style.backgroundColor = "#10b981"; // Warna Hijau

      // Simulasi mengarahkan ke link "Produk" di Nav
      setTimeout(() => {
        // Memberi highlight pada nav produk
        navProduk.style.color = "#2563eb";
        navProduk.style.transform = "scale(1.2)";

        // Scroll halus ke arah section produk (jika dari bawah)
        productSection.scrollIntoView({ behavior: "smooth" });

        alert("Produk berhasil masuk keranjang! Cek menu Produk di navigasi.");

        // Kembalikan tombol ke semula
        btn.textContent = "Beli Sekarang";
        btn.style.backgroundColor = "";
        navProduk.style.transform = "";
      }, 500);
    });
  });
});
