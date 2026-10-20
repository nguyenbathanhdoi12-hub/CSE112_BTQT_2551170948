const tenInput = document.getElementById('ten');
const emailInput = document.getElementById('thu');
const mkInput = document.getElementById('matkhau');
const xacnhanInput = document.getElementById('nhaplai_mk');

tenInput.addEventListener('input', function() {
    kiemTraHoTen();
});

emailInput.addEventListener('input', function() {
    kiemTraEmail();
});

mkInput.addEventListener('input', function() {
    kiemTraMatKhau();
    if (xacnhanInput.value.trim() !== '') {
        kiemTraXacNhan();
    }
});

xacnhanInput.addEventListener('input', function() {
    kiemTraXacNhan();
});

function kiemTraHoTen() {
    const giaTri = tenInput.value.trim();
    const khungChua = tenInput.parentElement;
    const thongBao = khungChua.querySelector('.thongbao');

    if (giaTri === '') {
        khungChua.classList.remove('dung', 'sai');
        thongBao.innerText = '';
    } else if (giaTri.length < 2) {
        khungChua.classList.remove('dung');
        khungChua.classList.add('sai');
        thongBao.innerText = '✗ Họ và tên quá ngắn';
    } else {
        khungChua.classList.remove('sai');
        khungChua.classList.add('dung');
        thongBao.innerText = '✓ Hợp lệ';
    }
}

function kiemTraEmail() {
    const giaTri = emailInput.value.trim();
    const khungChua = emailInput.parentElement;
    const thongBao = khungChua.querySelector('.thongbao');

    if (giaTri === '') {
        khungChua.classList.remove('dung', 'sai');
        thongBao.innerText = '';
    } else if (!giaTri.includes('@') || giaTri.endsWith('@') || !giaTri.includes('.')) {
        khungChua.classList.remove('dung');
        khungChua.classList.add('sai');
        thongBao.innerText = '✗ Email không hợp lệ (thiếu tên miền)';
    } else {
        khungChua.classList.remove('sai');
        khungChua.classList.add('dung');
        thongBao.innerText = '✓ Hợp lệ';
    }
}

function kiemTraMatKhau() {
    const giaTri = mkInput.value;
    const khungChua = mkInput.parentElement;
    const thongBao = khungChua.querySelector('.thongbao');

    if (giaTri === '') {
        khungChua.classList.remove('dung', 'sai');
        thongBao.innerText = '';
    } else if (giaTri.length < 6) {
        khungChua.classList.remove('dung');
        khungChua.classList.add('sai');
        thongBao.innerText = '✗ Mật khẩu phải có ít nhất 6 ký tự';
    } else {
        khungChua.classList.remove('sai');
        khungChua.classList.add('dung');
        thongBao.innerText = '✓ Hợp lệ';
    }
}

function kiemTraXacNhan() {
    const giaTri = xacnhanInput.value;
    const giaTriMk = mkInput.value;
    const khungChua = xacnhanInput.parentElement;
    const thongBao = khungChua.querySelector('.thongbao');

    if (giaTri === '') {
        khungChua.classList.remove('dung', 'sai');
        thongBao.innerText = '';
    } else if (giaTri !== giaTriMk) {
        khungChua.classList.remove('dung');
        khungChua.classList.add('sai');
        thongBao.innerText = '✗ Mật khẩu xác nhận không khớp';
    } else {
        khungChua.classList.remove('sai');
        khungChua.classList.add('dung');
        thongBao.innerText = '✓ Hợp lệ';
    }
}