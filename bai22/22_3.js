const gat = document.getElementById("gat");
const ghiChu = document.getElementById("ghichu");

function capNhat() {
  const toi = document.body.classList.contains("toi");
  ghiChu.textContent =
    "Đây là giao diện ở chế độ " + (toi ? "TỐI (đang bật)." : "SÁNG (đang bật).");
}

gat.addEventListener("click", function () {
  document.body.classList.toggle("toi");
  capNhat();
});

document.body.classList.add("toi");
capNhat();