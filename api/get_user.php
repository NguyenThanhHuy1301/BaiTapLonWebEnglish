<?php
require_once '../database/config.php';

// Chỉ chấp nhận GET request
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendJSONResponse(false, 'Method not allowed');
}

// Lấy session token từ header hoặc query parameter
$sessionToken = null;
if (isset($_GET['session_token'])) {
    $sessionToken = trim($_GET['session_token']);
} elseif (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
    if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
        $sessionToken = $matches[1];
    }
}

if (empty($sessionToken)) {
    sendJSONResponse(false, 'Session token không được cung cấp!');
}

try {
    $conn = getDBConnection();
    
    // Tìm session trong database
    $stmt = $conn->prepare("SELECT user_id, expires_at FROM user_sessions WHERE session_token = ? AND expires_at > NOW()");
    $stmt->bind_param("s", $sessionToken);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 0) {
        sendJSONResponse(false, 'Session không hợp lệ hoặc đã hết hạn!');
    }
    
    $session = $result->fetch_assoc();
    $userId = $session['user_id'];
    
    // Lấy thông tin user
    $stmt = $conn->prepare("SELECT id, username, email, plan, created_at FROM users WHERE id = ?");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 0) {
        sendJSONResponse(false, 'Không tìm thấy thông tin người dùng!');
    }
    
    $user = $result->fetch_assoc();
    
    // Trả về thông tin user
    sendJSONResponse(true, 'Lấy thông tin thành công!', [
        'user_id' => $user['id'],
        'username' => $user['username'],
        'email' => $user['email'],
        'plan' => $user['plan'] ?? 'trial',
        'created_at' => $user['created_at']
    ]);
    
    $stmt->close();
    $conn->close();
    
} catch (Exception $e) {
    sendJSONResponse(false, 'Có lỗi xảy ra: ' . $e->getMessage());
}
?>

