var tenThu = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];

//lời cháo theo buổi
function loiChaoTheoBuoi(){
  var gio = new Date().getHours();
  if (gio < 12) return "Chào buổi sáng!";
  if (gio < 18) return "Chào buổi chiều!";
  return "Chào buổi tối!";
}

//đọc, tạo đối tượng Date và hiện lịch
function inLich(){
  var ngay = parseInt(document.getElementById("inNgay").value);
  var thang = parseInt(document.getElementById("inThang").value);
  var nam = parseInt(document.getElementById("inNam").value);

  if(isNaN(ngay) ||isNaN(thang) ||isNaN(nam)){
    alert("Vui lòng nhập đầy đủ ngày tháng năm.");
    return;
  }


var d = new Date(nam, thang - 1,ngay);

//kiem tra hop le
if(d.getFullYear() != nam || d.getMonth() != thang - 1 || d.getDate() != ngay){
  alert("Ngày tháng không hợp lệ!");
  return;
}

document.getElementById("nam").textContent = d.getFullYear();
document.getElementById("thang").textContent = "Tháng" + (d.getMonth() + 1);
document.getElementById("ngay").textContent = d.getDate();
document.getElementById("thu").textContent = tenThu[d.getDay()];
document.getElementById("loichao").textContent = loiChaoTheoBuoi();
}

//goi ham khi bam nut
document.getElementById("btnIn").addEventListener("click",inLich);

//mac dinh hien thi ngay hôm nay
var homNay = new Date();
document.getElementById("inNgay").value = homNay.getDate();
document.getElementById("inThang").value = homNay.getMonth() + 1;
document.getElementById("inNam").value = homNay.getFullYear();
inLich();