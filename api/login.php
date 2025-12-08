<?php
require_once '../database/config.php';

// Chỉ chấp nhận POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJSONResponse(false, 'Method not allowed');
}

// Lấy dữ liệu từ request
$data = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!isset($data['email']) || !isset($data['password'])) {
    sendJSONResponse(false, 'Vui lòng điền đầy đủ thông tin!');
}

$email = trim($data['email']);
$password = $data['password'];

// Validation
if (empty($email) || empty($password)) {
    sendJSONResponse(false, 'Vui lòng điền đầy đủ thông tin!');
}

try {
    $conn = getDBConnection();
    
    // Tìm user theo email hoặc username
    $stmt = $conn->prepare("SELECT id, username, email, password, plan FROM users WHERE email = ? OR username = ?");
    $stmt->bind_param("ss", $email, $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 0) {
        sendJSONResponse(false, 'Email/tên đăng nhập hoặc mật khẩu không đúng!');
    }
    
    $user = $result->fetch_assoc();
    
    // Verify password
    if (!password_verify($password, $user['password'])) {
        sendJSONResponse(false, 'Email/tên đăng nhập hoặc mật khẩu không đúng!');
    }
    
    // Tạo session token (optional - có thể dùng để quản lý session)
    $sessionToken = bin2hex(random_bytes(32));
    $expiresAt = date('Y-m-d H:i:s', strtotime('+7 days'));
    
    // Lưu session vào database (optional)
    $stmt = $conn->prepare("INSERT INTO user_sessions (user_id, session_token, expires_at) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $user['id'], $sessionToken, $expiresAt);
    $stmt->execute();
    
    // Trả về thông tin user (không trả về password)
    sendJSONResponse(true, 'Đăng nhập thành công!', [
        'user_id' => $user['id'],
        'username' => $user['username'],
        'email' => $user['email'],
        'plan' => $user['plan'] ?? 'trial',
        'session_token' => $sessionToken
    ]);
    
    $stmt->close();
    $conn->close();
    
} catch (Exception $e) {
    sendJSONResponse(false, 'Có lỗi xảy ra: ' . $e->getMessage());
}
?>

