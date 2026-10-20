function applyFilter(effectName,btnElement){
    const img = document.getElementById('roseImg')

    //xoa hieu ung cu
    img.className = '';

    //them hieu ung moi
    img.classList.add('effect-' + effectName);

    //doi trang thai active cua nut
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
}