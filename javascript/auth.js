// Auth Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide forms
            if (targetTab === 'login') {
                loginForm.classList.remove('hidden');
                signupForm.classList.add('hidden');
            } else {
                loginForm.classList.add('hidden');
                signupForm.classList.remove('hidden');
            }
        });
    });

    // Toggle password visibility
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Find the input field in the same input-wrapper
            const inputWrapper = this.closest('.input-wrapper');
            const input = inputWrapper.querySelector('input[type="password"], input[type="text"]');
            const icon = this.querySelector('i');
            
            if (!input) return;
            
            if (input.type === 'password') {
                input.type = 'text';
                if (icon) {
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                }
            } else {
                input.type = 'password';
                if (icon) {
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            }
        });
    });

    // Login form submission
    const loginFormElement = document.getElementById('loginForm');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const submitBtn = this.querySelector('.auth-submit-btn');
            
            // Basic validation
            if (!email || !password) {
                alert('Vui lòng điền đầy đủ thông tin!');
                return;
            }
            
            // Disable button và hiển thị loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Đang xử lý...';
            
            try {
                const response = await fetch('../api/login.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    // Lưu thông tin user vào localStorage (plan đã được trả về từ API)
                    localStorage.setItem('user', JSON.stringify(data.data));
                    localStorage.setItem('session_token', data.data.session_token);
                    
                    alert('Đăng nhập thành công!');
                    
                    // Redirect to user page after successful login
                    window.location.href = '../Auth/user.html';
                } else {
                    alert(data.message || 'Đăng nhập thất bại!');
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Đăng nhập';
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại!');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Đăng nhập';
            }
        });
    }

    // Signup form submission
    const signupFormElement = document.getElementById('signupForm');
    if (signupFormElement) {
        signupFormElement.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = document.getElementById('signup-username').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;
            const agree = signupFormElement.querySelector('input[name="agree"]').checked;
            const submitBtn = this.querySelector('.auth-submit-btn');
            
            // Validation
            if (!username || !email || !password || !confirmPassword) {
                alert('Vui lòng điền đầy đủ thông tin!');
                return;
            }
            
            if (password.length < 8) {
                alert('Mật khẩu phải có ít nhất 8 ký tự!');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Mật khẩu xác nhận không khớp!');
                return;
            }
            
            if (!agree) {
                alert('Vui lòng đồng ý với điều khoản sử dụng!');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Email không hợp lệ!');
                return;
            }
            
            // Disable button và hiển thị loading
            submitBtn.disabled = true;
            submitBtn.textContent = 'Đang xử lý...';
            
            try {
                const response = await fetch('../api/register.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword
                    })
                });
                
                const data = await response.json();
                
                if (data.success) {
                    alert('Đăng ký thành công! Vui lòng đăng nhập.');
                    
                    // Clear form
                    signupFormElement.reset();
                    
                    // Switch to login tab after successful signup
                    document.querySelector('.auth-tab[data-tab="login"]').click();
                    
                    // Pre-fill email in login form
                    document.getElementById('login-email').value = email;
                } else {
                    alert(data.message || 'Đăng ký thất bại!');
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Đăng ký';
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Có lỗi xảy ra khi đăng ký. Vui lòng thử lại!');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Đăng ký';
            }
        });
    }
});

