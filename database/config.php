<?php
// Database configuration
// BẠN CẦN SỬA CÁC THÔNG TIN SAU THEO DATABASE BẠN ĐÃ TẠO TRONG AAPANEL:

define('DB_HOST', 'localhost');        // Thường là localhost hoặc 127.0.0.1
define('DB_USER', 'root');             // Tên user database bạn đã tạo trong aaPanel
define('DB_PASS', '');                 // Mật khẩu database bạn đã tạo trong aaPanel
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
?>

