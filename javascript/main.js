
const body = document.body;

// Hàm chung để xử lý việc khóa/mở cuộn trang
// Input: ID của checkbox (ví dụ: 'language-button', 'menu-button')
function toggleScrollLock(checkboxId) {
    const checkbox = document.getElementById(checkboxId);

    // Kiểm tra nếu phần tử checkbox tồn tại trước khi thêm sự kiện
    if (checkbox) {
        // Lắng nghe sự kiện "change" trên checkbox
        checkbox.addEventListener('change', function() {
            // Dựa vào trạng thái checked của checkbox để thêm hoặc xóa class
            if (this.checked) {
                body.classList.add('no-scroll');
            } else {
                body.classList.remove('no-scroll');
            }
        });
    }
}

// Gọi hàm cho từng checkbox cần khóa cuộn
toggleScrollLock('language-button'); // Xử lý Modal Ngôn ngữ
toggleScrollLock('menu-button');     // Xử lý Menu Hamburger

// Khắc phục lỗi khóa cuộn khi tải lại trang

document.addEventListener('DOMContentLoaded', function() {
    const languageCheckbox = document.getElementById('language-button');
    const menuCheckbox = document.getElementById('menu-button');
    const body = document.body;
    
    // Đảm bảo rằng body không có class 'no-scroll' khi trang load lần đầu
    // và các checkbox không bị lưu trạng thái 'checked' từ phiên trước.
    
    if (languageCheckbox) {
        languageCheckbox.checked = false;
    }
    if (menuCheckbox) {
        menuCheckbox.checked = false;
    }

    // Luôn đảm bảo xóa class khóa cuộn khi trang vừa tải xong
    body.classList.remove('no-scroll');
});