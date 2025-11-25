const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        // Tìm nội dung liên quan (sibling element)
        const content = header.nextElementSibling;
        
        // Thêm hoặc loại bỏ class 'active'
        content.classList.toggle('active');
        
        // Cập nhật icon
        const icon = header.querySelector('.icon');
        if (content.classList.contains('active')) {
            icon.textContent = '-'; // Chuyển thành dấu trừ
        } else {
            icon.textContent = '+'; // Chuyển lại thành dấu cộng
        }
    });
});