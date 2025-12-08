// User Page JavaScript

// Check if user is logged in
document.addEventListener('DOMContentLoaded', function() {
    checkUserLogin();
    loadUserInfo();
    setupEventListeners();
});

// Check if user is logged in
function checkUserLogin() {
    const user = localStorage.getItem('user');
    const sessionToken = localStorage.getItem('session_token');
    
    if (!user || !sessionToken) {
        // Redirect to login page if not logged in
        alert('Vui lòng đăng nhập để truy cập trang này!');
        window.location.href = '../Auth/auth.html';
        return false;
    }
    
    return true;
}

// Load user information from database
async function loadUserInfo() {
    const sessionToken = localStorage.getItem('session_token');
    
    if (!sessionToken) {
        console.error('Session token not found');
        return;
    }
    
    try {
        // Fetch user info from API
        const response = await fetch(`../api/get_user.php?session_token=${encodeURIComponent(sessionToken)}`);
        const data = await response.json();
        
        if (data.success && data.data) {
            const user = data.data;
            
            // Display user information
            const usernameElement = document.getElementById('profile-username');
            const emailElement = document.getElementById('profile-email');
            
            if (usernameElement) {
                usernameElement.textContent = user.username || 'User';
            }
            
            if (emailElement) {
                emailElement.textContent = user.email || '';
            }
            
            // Update localStorage with latest user data
            localStorage.setItem('user', JSON.stringify({
                user_id: user.user_id,
                username: user.username,
                email: user.email,
                plan: user.plan
            }));
            
            // Update plan display
            updatePlanDisplay(user.plan || 'trial');
        } else {
            // If API fails, try to use localStorage as fallback
            const userStr = localStorage.getItem('user');
            if (userStr) {
                const user = JSON.parse(userStr);
                updatePlanDisplay(user.plan || 'trial');
            } else {
                alert('Không thể tải thông tin người dùng. Vui lòng đăng nhập lại.');
                window.location.href = '../Auth/auth.html';
            }
        }
    } catch (error) {
        console.error('Error loading user info:', error);
        // Fallback to localStorage
        const userStr = localStorage.getItem('user');
        if (userStr) {
            const user = JSON.parse(userStr);
            updatePlanDisplay(user.plan || 'trial');
        }
    }
}

// Update plan display based on user's current plan
function updatePlanDisplay(plan) {
    const currentPlanCard = document.getElementById('current-plan-card');
    const upgradeBtn = document.getElementById('upgrade-btn');
    
    if (plan === 'pro') {
        // User has PRO plan
        if (currentPlanCard) {
            currentPlanCard.innerHTML = `
                <div class="plan-badge pro-badge">
                    <i class="fa-solid fa-crown"></i>
                    <span>PRO</span>
                </div>
                <div class="plan-content">
                    <h3 class="plan-name">Gói PRO</h3>
                    <p class="plan-description">Bạn đang sử dụng gói PRO với đầy đủ tính năng</p>
                    <ul class="plan-features pro-features">
                        <li><i class="fa-solid fa-bolt"></i> Tăng tốc độ dịch nhanh hơn 3x</li>
                        <li><i class="fa-solid fa-rocket"></i> Tăng tốc độ tra cứu nhanh hơn 3x</li>
                        <li><i class="fa-solid fa-unlock"></i> Mở khóa tất cả bài tập</li>
                        <li><i class="fa-solid fa-infinity"></i> Không giới hạn số lần sử dụng</li>
                        <li><i class="fa-solid fa-headset"></i> Hỗ trợ ưu tiên 24/7</li>
                    </ul>
                    <div class="plan-price">
                        <span class="price-amount">299.000đ</span>
                        <span class="price-period">/tháng</span>
                    </div>
                    <button class="upgrade-btn" disabled style="opacity: 0.6; cursor: not-allowed;">
                        <i class="fa-solid fa-check"></i>
                        Đang sử dụng gói PRO
                    </button>
                </div>
            `;
        }
        
        if (upgradeBtn) {
            upgradeBtn.style.display = 'none';
        }
    } else {
        // User has Trial plan (default)
        if (upgradeBtn) {
            upgradeBtn.style.display = 'block';
        }
    }
}

// Setup event listeners
function setupEventListeners() {
    // Logout link
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
    
    // User profile link
    const userProfileLink = document.getElementById('user-profile-link');
    if (userProfileLink) {
        userProfileLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Already on user page, do nothing or scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Upgrade button
    const upgradeBtn = document.getElementById('upgrade-btn');
    if (upgradeBtn) {
        upgradeBtn.addEventListener('click', function() {
            handleUpgrade();
        });
    }
}

// Handle logout
function handleLogout() {
    if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
        // Clear user data from localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('session_token');
        localStorage.removeItem('user_plan');
        
        // Redirect to home page
        window.location.href = '../index.html';
    }
}

// Handle upgrade to PRO
async function handleUpgrade() {
    // Show confirmation dialog
    const confirmed = confirm(
        'Bạn có muốn nâng cấp lên gói PRO với giá 299.000đ/tháng?\n\n' +
        'Tính năng PRO:\n' +
        '• Tăng tốc độ dịch nhanh hơn 3x\n' +
        '• Tăng tốc độ tra cứu nhanh hơn 3x\n' +
        '• Mở khóa tất cả bài tập\n' +
        '• Không giới hạn số lần sử dụng\n' +
        '• Hỗ trợ ưu tiên 24/7'
    );
    
    if (!confirmed) {
        return;
    }
    
    const sessionToken = localStorage.getItem('session_token');
    if (!sessionToken) {
        alert('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
        window.location.href = '../Auth/auth.html';
        return;
    }
    
    // Show loading state
    const upgradeBtn = document.getElementById('upgrade-btn');
    if (upgradeBtn) {
        upgradeBtn.disabled = true;
        upgradeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xử lý...';
    }
    
    try {
        // Call API to update plan
        const response = await fetch('../api/update_plan.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                session_token: sessionToken,
                plan: 'pro'
            })
        });
        
        const data = await response.json();
        
        if (data.success && data.data) {
            // Update localStorage with new plan
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            user.plan = 'pro';
            localStorage.setItem('user', JSON.stringify(user));
            
            // Update UI
            updatePlanDisplay('pro');
            
            // Show success message
            alert('Nâng cấp thành công! Bạn đã được kích hoạt gói PRO.');
            
            // Reload page to reflect changes
            window.location.reload();
        } else {
            alert(data.message || 'Có lỗi xảy ra khi nâng cấp. Vui lòng thử lại!');
            if (upgradeBtn) {
                upgradeBtn.disabled = false;
                upgradeBtn.innerHTML = '<i class="fa-solid fa-crown"></i> Nâng cấp ngay';
            }
        }
    } catch (error) {
        console.error('Error upgrading plan:', error);
        alert('Có lỗi xảy ra khi kết nối đến server. Vui lòng thử lại sau!');
        if (upgradeBtn) {
            upgradeBtn.disabled = false;
            upgradeBtn.innerHTML = '<i class="fa-solid fa-crown"></i> Nâng cấp ngay';
        }
    }
}

