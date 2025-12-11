// Auth Status Management - Quản lý trạng thái đăng nhập trên tất cả các trang

// Kiểm tra và cập nhật trạng thái đăng nhập khi trang load
(function() {
    function initAuthStatus() {
        updateAuthStatus();
    }
    
    // Chạy khi DOM sẵn sàng
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Đợi một chút để đảm bảo các script khác đã chạy xong
            setTimeout(initAuthStatus, 200);
        });
    } else {
        // DOM đã sẵn sàng, chạy sau một chút
        setTimeout(initAuthStatus, 200);
    }
    
    // Cũng chạy khi window load hoàn tất
    window.addEventListener('load', function() {
        setTimeout(updateAuthStatus, 100);
    });
})();

// Hàm kiểm tra trạng thái đăng nhập
function isLoggedIn() {
    const user = localStorage.getItem('user');
    const sessionToken = localStorage.getItem('session_token');
    return !!(user && sessionToken);
}

// Hàm cập nhật UI dựa trên trạng thái đăng nhập
function updateAuthStatus() {
    const loginSignupElement = document.querySelector('.login-signup');
    
    if (!loginSignupElement) {
        return; // Không tìm thấy element, có thể không phải trang có navigation
    }
    
    if (isLoggedIn()) {
        // Người dùng đã đăng nhập - hiển thị "Tài khoản / Đăng xuất"
        const user = JSON.parse(localStorage.getItem('user'));
        const username = user ? user.username : 'User';
        
        // Xác định đường dẫn đến user.html dựa trên vị trí hiện tại
        const currentPath = window.location.pathname;
        const currentFile = window.location.pathname.split('/').pop();
        let userPagePath = '../Auth/user.html';
        
        // Nếu đang ở thư mục gốc (index.html)
        if (currentFile === 'index.html' || currentFile === '' || currentPath.endsWith('/')) {
            userPagePath = './Auth/user.html';
        }
        
        loginSignupElement.innerHTML = `
            <i class="fa-solid fa-user fa-xs"></i>
            <a href="${userPagePath}" id="user-profile-link">Tài khoản</a>
            <span> / </span>
            <a href="#" id="logout-link">Đăng xuất</a>
        `;
        
        // Thêm event listener cho nút đăng xuất
        const logoutLink = document.getElementById('logout-link');
        if (logoutLink) {
            logoutLink.addEventListener('click', function(e) {
                e.preventDefault();
                handleLogout();
            });
        }
        
        // Thêm event listener cho link tài khoản
        const userProfileLink = document.getElementById('user-profile-link');
        if (userProfileLink) {
            userProfileLink.addEventListener('click', function(e) {
                // Cho phép điều hướng bình thường
            });
        }
    } else {
        // Người dùng chưa đăng nhập - hiển thị "Log in / Sign up"
        const currentPath = window.location.pathname;
        const currentFile = window.location.pathname.split('/').pop();
        let authPagePath = '../Auth/auth.html';
        
        // Nếu đang ở thư mục gốc (index.html)
        if (currentFile === 'index.html' || currentFile === '' || currentPath.endsWith('/')) {
            authPagePath = './Auth/auth.html';
        }
        
        loginSignupElement.innerHTML = `
            <i class="fa-solid fa-user fa-xs"></i>
            <a href="${authPagePath}">Log in</a> / <a href="${authPagePath}">Sign up</a>
        `;
    }
}

// Hàm xử lý đăng xuất
function handleLogout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        // Xóa dữ liệu từ localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('session_token');
        localStorage.removeItem('user_plan');
        
        // Cập nhật UI ngay lập tức
        updateAuthStatus();
        
        // Nếu đang ở trang user.html, chuyển về trang chủ
        const currentPath = window.location.pathname;
        if (currentPath.includes('user.html')) {
            let homePath = '../index.html';
            
            // Nếu đang ở thư mục gốc
            if (currentPath.endsWith('index.html') || currentPath.endsWith('/') || 
                currentPath.split('/').filter(p => p && !p.includes('.html')).length === 0) {
                homePath = './index.html';
            }
            
            window.location.href = homePath;
        } else {
            // Reload trang hiện tại để cập nhật UI
            window.location.reload();
        }
    }
}

// Export hàm để sử dụng ở các file khác
window.handleLogout = handleLogout;
window.updateAuthStatus = updateAuthStatus;
window.isLoggedIn = isLoggedIn;

