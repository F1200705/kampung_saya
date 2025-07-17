// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})



// Modal Sertifikat
const modal = document.getElementById("sertifikatModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close-button");

if (modal && btn && span) {
  btn.onclick = function () {
    modal.style.display = "flex"; // baru muncul saat diklik
  }

  span.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}


// Hanya jalankan jika Swiper sudah tersedia di halaman
if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.sertifikat-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    centeredSlides: true
  });
}



// Inisialisasi Swiper


// Hanya jalankan jika Swiper sudah tersedia di halaman
if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.sertifikat-swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    centeredSlides: true
  });
}

