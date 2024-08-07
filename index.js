// ẩn hiện filter
//lam slider
window.onload = function () {
    try {
        let close_filter_bar2 = document.querySelector('#close_filter_bar');
        console.log(close_filter_bar2);
        let filter_bar2 = document.querySelector('.modal');

        let btn_open_filter_bar = document.querySelector('.filter_icon2');

        btn_open_filter_bar.addEventListener('click', function (e) {
            filter_bar2.classList.remove('close');
        });
        close_filter_bar2.addEventListener('click', function (e) {
            filter_bar2.classList.add('close');
        });
    }
    catch { };
    // price1
    try {
        let price_title = document.querySelectorAll('.price_title')[0];
        let open_price1 = document.querySelector('.price1');
        let range1 = document.querySelector('#range1');
        price_title.addEventListener('click', function (e) {
            range1.classList.toggle('close');
            if (!range1.classList.contains('close')) {
                open_price1.style.transform = 'rotate(90deg)';
            }
            else {
                open_price1.style.transform = 'rotate(-90deg)';
            }
        });
    }
    catch { }
    // color1
    try {
        let color_title = document.querySelectorAll('.color_title')[0];
        let open_price1 = document.querySelector('.color1');
        let range1 = document.querySelector('#list_color1');
        color_title.addEventListener('click', function (e) {
            range1.classList.toggle('close');
            if (!range1.classList.contains('close')) {
                open_price1.style.transform = 'rotate(90deg)';
            }
            else {
                open_price1.style.transform = 'rotate(-90deg)';
            }
        });
    }
    catch { }
    ///size1
    try {
        let size_title = document.querySelectorAll('.size_title')[0];
        let open_price1 = document.querySelector('.size1');
        let range1 = document.querySelector('#list_size1');
        size_title.addEventListener('click', function (e) {
            range1.classList.toggle('close');
            if (!range1.classList.contains('close')) {
                open_price1.style.transform = 'rotate(90deg)';
            }
            else {
                open_price1.style.transform = 'rotate(-90deg)';
            }
        });
    }
    catch { }
    // dress1
    try {
        let size_title = document.querySelectorAll('.size_title')[1];
        let open_price1 = document.querySelector('.dress1');
        let range1 = document.querySelector('#list_dress1');
        size_title.addEventListener('click', function (e) {
            range1.classList.toggle('close');
            if (!range1.classList.contains('close')) {
                open_price1.style.transform = 'rotate(90deg)';
            }
            else {
                open_price1.style.transform = 'rotate(-90deg)';
            }
        });
    }
    catch { }
}