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