// Memilih semua elemen kartu gambar
const cards = document.querySelectorAll('.card');

// Mengatur pengamat layar (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Jika kartu masuk ke area layar HP (baik dari atas maupun bawah)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // Jika kartu keluar dari area layar HP, hilangkan efeknya lagi
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2 // Animasi aktif saat 20% bagian kartu terlihat di layar
});

// Jalankan pengamat untuk setiap kartu
cards.forEach(card => {
  observer.observe(card);
});
