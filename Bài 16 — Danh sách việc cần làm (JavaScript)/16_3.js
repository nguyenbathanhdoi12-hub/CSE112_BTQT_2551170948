const ndThem = document.getElementById('nd_them');
const nutThem = document.getElementById('nut_them');
const danhsachCongviec = document.getElementById('danhsach_congviec');
const sodemViec = document.getElementById('sodem_viec');

// Mảng chứa các công việc (ban đầu trống)
let danhSach = [];

function capNhatGiaoDien() {
    danhsachCongviec.innerHTML = '';

    danhSach.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = `muc_congviec ${item.hoanThanh ? 'hoanthanh' : ''}`;

        li.innerHTML = `
            <div class="noidung_muc" onclick="doiTrangThai(${index})">
                <input type="checkbox" class="hop_kiem" ${item.hoanThanh ? 'checked' : ''}>
                <span>${item.ten}</span>
            </div>
            <button class="nut_xoa" onclick="xoaViec(${index})">Xoá</button>
        `;

        danhsachCongviec.appendChild(li);
    });

    const soViecChuaXong = danhSach.filter(item => !item.hoanThanh).length;
    sodemViec.textContent = `Còn ${soViecChuaXong} việc chưa hoàn thành`;
}

function themViec() {
    const text = ndThem.value.trim();
    if (text !== '') {
        danhSach.push({ ten: text, hoanThanh: false });
        ndThem.value = '';
        capNhatGiaoDien();
    }
}

function doiTrangThai(index) {
    danhSach[index].hoanThanh = !danhSach[index].hoanThanh;
    capNhatGiaoDien();
}

function xoaViec(index) {
    danhSach.splice(index, 1);
    capNhatGiaoDien();
}

nutThem.addEventListener('click', themViec);

ndThem.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        themViec();
    }
});

// Render ban đầu khi trang trống
capNhatGiaoDien();