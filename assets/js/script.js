document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var nama = document.getElementById("name").value;
  var wa = document.getElementById("Whatsapp").value;
  var alamat = document.getElementById("alamat").value;
  var produk = document.getElementById("product").value;
  var jumlah = document.getElementById("jumlah").value;

  var pesan = `Hallo Admin,%0ASaya ingin memesan produk:%0A%0A📦 Product : ${produk}%0A🔢 Jumlah : ${jumlah}%0A👤 Nama : ${nama}%0A📱 No. Whatsapp : ${wa}%0A🏠 Alamat : ${alamat}`;

  var noAdmin = "6282266412189";

  var link = `https://api.whatsapp.com/send?phone=${noAdmin}&text=${pesan}`;

  window.open(link, "_blank");
});
