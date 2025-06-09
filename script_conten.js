function showContent(pageId) {
  // Sembunyikan semua konten
  const allPages = document.querySelectorAll(".page-content");
  allPages.forEach(page => page.classList.remove("active"));

  // Tampilkan konten yang diminta
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
  }
}

// Jalankan saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  showContent("clock-content");
});




function activateTab(button, pageId) {
  // 1. Nonaktifkan semua tombol
  document.querySelectorAll('.nav-btn').forEach(btn =>
    btn.classList.remove('nav-active')
  );

  // 2. Aktifkan tombol yang ditekan
  button.classList.add('nav-active');

  // 3. Sembunyikan semua konten
  document.querySelectorAll('.page-content').forEach(page =>
    page.classList.remove('active')
  );

  // 4. Tampilkan konten yang diminta
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');
}

// Jalankan saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
  activateTab(document.querySelector('.nav-btn.nav-active'), 'clock-content');
});