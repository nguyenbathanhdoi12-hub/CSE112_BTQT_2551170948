var thuMuc = "Anh/Bai13/";

// Đổi một số thành 2 ảnh (hàng chục + hàng đơn vị)
function soThanhAnh(n) {
  var chuc = Math.floor(n / 10);
  var donvi = n % 10;
  return '<img src="' + thuMuc + '0' + chuc + '.gif" alt="' + chuc + '">' +
         '<img src="' + thuMuc + '0' + donvi + '.gif" alt="' + donvi + '">';
}

// Lời chào theo giờ hệ thống
function loiChao(gio) {
  if (gio >= 5 && gio < 11)  return "Chào buổi sáng";
  if (gio >= 11 && gio < 13) return "Chào buổi trưa";
  if (gio >= 13 && gio < 18) return "Chào buổi chiều";
  return "Chào buổi tối";
}

function capNhat() {
  var now = new Date();
  var gio = now.getHours();
  var phut = now.getMinutes();
  var giay = now.getSeconds();

  var dauHaiCham = '<img src="' + thuMuc + 'haicham.gif" alt=":">';

  document.getElementById("dongho").innerHTML =
    soThanhAnh(gio) + dauHaiCham + soThanhAnh(phut) + dauHaiCham + soThanhAnh(giay);

  document.getElementById("loichao").textContent = loiChao(gio);
}

capNhat();                   // hiện ngay khi mở trang
setInterval(capNhat, 1000);  // cập nhật mỗi giây
