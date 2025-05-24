// document.getElementById("orderForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   var nama = document.getElementById("name").value;
//   var wa = document.getElementById("Whatsapp").value;
//   var alamat = document.getElementById("alamat").value;
//   var produk = document.getElementById("product").value;
//   var jumlah = document.getElementById("jumlah").value;

//   var pesan = `Hallo Admin,%0ASaya ingin memesan produk:%0A%0A📦 Product : ${produk}%0A🔢 Jumlah : ${jumlah}%0A👤 Nama : ${nama}%0A📱 No. Whatsapp : ${wa}%0A🏠 Alamat : ${alamat}`;

//   var noAdmin = "6282266412189";

//   var link = `https://api.whatsapp.com/send?phone=${noAdmin}&text=${pesan}`;

//   window.open(link, "_blank");
// });
// ------------------------------------------------------------------------------------------------- Slider Testimoni
      const slider = document.getElementById("slider");
      const nextBtn = document.getElementById("nextBtn");
      const prevBtn = document.getElementById("prevBtn");
      const cards = document.querySelectorAll("#slider .card");

      // lebar 1 card + gap (gap-4 = 16px default tailwind)
      const cardWidth = cards[0].offsetWidth + 16;
      const cardsPerPage = 1;

      // total slideable position
      const totalPages = Math.ceil(cards.length / cardsPerPage);
      let currentPage = 0;

      // Next button
      nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages - 1) {
          currentPage++;
          slider.scrollTo({
            left: cardWidth * cardsPerPage * currentPage,
            behavior: "smooth",
          });
          updateBadge();
        }
      });

      // Prev button
      prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
          currentPage--;
          slider.scrollTo({
            left: cardWidth * cardsPerPage * currentPage,
            behavior: "smooth",
          });
          updateBadge();
        }
      });

      // Badge active update
      function updateBadge() {
        const badges = document.querySelectorAll(
          ".nav-badge-review-card .badge"
        );
        badges.forEach((badge, index) => {
          badge.classList.toggle("active", index === currentPage);
        });
      }

      // inisialisasi posisi badge awal
      updateBadge();

      