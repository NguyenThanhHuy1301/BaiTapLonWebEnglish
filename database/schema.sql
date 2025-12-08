
CREATE TABLE IF NOT EXISTS users (
    -- Primary Key
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- Thông tin đăng nhập
    username VARCHAR(50) NOT NULL UNIQUE COMMENT 'Tên đăng nhập (unique)',
    email VARCHAR(100) NOT NULL UNIQUE COMMENT 'Email (unique)',
    password VARCHAR(255) NOT NULL COMMENT 'Mật khẩu đã được hash bằng bcrypt',
    
    -- Thông tin gói sử dụng
    plan ENUM('trial', 'pro') DEFAULT 'trial' COMMENT 'Gói sử dụng: trial (miễn phí) hoặc pro (trả phí)',
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Thời gian tạo tài khoản',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Thời gian cập nhật cuối',
    
    -- Indexes để tối ưu truy vấn
    INDEX idx_username (username),
    INDEX idx_email (email),
    INDEX idx_plan (plan),
    INDEX idx_created_at (created_at)
    
) ENGINE=InnoDB 
DEFAULT CHARSET=utf8mb4 
COLLATE=utf8mb4_unicode_ci
COMMENT='Bảng lưu thông tin người dùng và gói sử dụng';

-- ============================================================================
-- KẾT THÚC
-- ============================================================================

-- Hiển thị thông báo thành công
SELECT 'Database schema đã được tạo thành công!' AS message;
SELECT 'Các bảng đã tạo:' AS info;
SHOW TABLES;
