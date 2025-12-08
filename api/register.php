<?php
require_once '../database/config.php';

// Chỉ chấp nhận POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJSONResponse(false, 'Method not allowed');
}

// Lấy dữ liệu từ request
$data = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!isset($data['username']) || !isset($data['email']) || !isset($data['password']) || !isset($data['confirmPassword'])) {
    sendJSONResponse(false, 'Vui lòng điền đầy đủ thông tin!');
}

$username = trim($data['username']);
$email = trim($data['email']);
$password = $data['password'];
$confirmPassword = $data['confirmPassword'];

// Validation
if (empty($username) || empty($email) || empty($password) || empty($confirmPassword)) {
    sendJSONResponse(false, 'Vui lòng điền đầy đủ thông tin!');
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJSONResponse(false, 'Email không hợp lệ!');
}

// Validate password length
if (strlen($password) < 8) {
    sendJSONResponse(false, 'Mật khẩu phải có ít nhất 8 ký tự!');
}

// Validate password match
if ($password !== $confirmPassword) {
    sendJSONResponse(false, 'Mật khẩu xác nhận không khớp!');
}

// Validate username (chỉ cho phép chữ cái, số, dấu gạch dưới)
if (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
    sendJSONResponse(false, 'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới!');
}

// Validate username length
if (strlen($username) < 3 || strlen($username) > 50) {
    sendJSONResponse(false, 'Tên đăng nhập phải có từ 3 đến 50 ký tự!');
}

try {
    $conn = getDBConnection();
    
    // Kiểm tra username đã tồn tại chưa
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        sendJSONResponse(false, 'Tên đăng nhập đã được sử dụng!');
    }
    
    // Kiểm tra email đã tồn tại chưa
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        sendJSONResponse(false, 'Email đã được sử dụng!');
    }
    
    // Hash password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert user vào database với plan mặc định là 'trial'
    $stmt = $conn->prepare("INSERT INTO users (username, email, password, plan) VALUES (?, ?, ?, 'trial')");
    $stmt->bind_param("sss", $username, $email, $hashedPassword);
    
    if ($stmt->execute()) {
        sendJSONResponse(true, 'Đăng ký thành công!', [
            'user_id' => $conn->insert_id,
            'username' => $username
        ]);
    } else {
        sendJSONResponse(false, 'Có lỗi xảy ra khi đăng ký. Vui lòng thử lại!');
    }
    
    $stmt->close();
    $conn->close();
    
} catch (Exception $e) {
    sendJSONResponse(false, 'Có lỗi xảy ra: ' . $e->getMessage());
}
?>

