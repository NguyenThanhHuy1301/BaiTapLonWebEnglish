<?php
// Database configuration
// BẠN CẦN SỬA CÁC THÔNG TIN SAU THEO DATABASE BẠN ĐÃ TẠO TRONG AAPANEL:

define('DB_HOST', 'localhost');        // Thường là localhost hoặc 127.0.0.1
define('DB_USER', 'utc2_dictionary');             // Tên user database bạn đã tạo trong aaPanel
define('DB_PASS', 'utc2_dictionary');                 // Mật khẩu database bạn đã tạo trong aaPanel
define('DB_NAME', 'utc2_dictionary');  // TÊN DATABASE BẠN ĐÃ TẠO TRONG AAPANEL (tự đặt tên)

// Kết nối database
function getDBConnection() {
    try {
        $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        
        // Kiểm tra kết nối
        if ($conn->connect_error) {
            throw new Exception("Connection failed: " . $conn->connect_error);
        }
        
        // Set charset UTF-8
        $conn->set_charset("utf8mb4");
        
        return $conn;
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Database connection error']);
        exit;
    }
}

// Trả về response JSON
function sendJSONResponse($success, $message, $data = null) {
    header('Content-Type: application/json; charset=utf-8');
    $response = [
        'success' => $success,
        'message' => $message
    ];
    
    if ($data !== null) {
        $response['data'] = $data;
    }
    
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    exit;
}

// Secret key để mã hóa session token (nên thay đổi trong production)
define('SESSION_SECRET_KEY', 'utc2_dictionary_secret_key_2025');

// Tạo session token từ user_id (không cần database)
function createSessionToken($userId) {
    $timestamp = time();
    $expiresAt = $timestamp + (7 * 24 * 60 * 60); // 7 ngày
    $data = $userId . '|' . $expiresAt;
    $signature = hash_hmac('sha256', $data, SESSION_SECRET_KEY);
    $token = base64_encode($data . '|' . $signature);
    return $token;
}

// Verify và lấy user_id từ session token
function verifySessionToken($token) {
    try {
        $decoded = base64_decode($token);
        if ($decoded === false) {
            return null;
        }
        
        $parts = explode('|', $decoded);
        if (count($parts) !== 3) {
            return null;
        }
        
        $userId = $parts[0];
        $expiresAt = $parts[1];
        $signature = $parts[2];
        
        // Verify signature
        $data = $userId . '|' . $expiresAt;
        $expectedSignature = hash_hmac('sha256', $data, SESSION_SECRET_KEY);
        
        if (!hash_equals($expectedSignature, $signature)) {
            return null; // Invalid signature
        }
        
        // Check expiration
        if ($expiresAt < time()) {
            return null; // Token expired
        }
        
        return (int)$userId;
    } catch (Exception $e) {
        return null;
    }
}
?>

