<?php
require_once '../database/config.php';

// Chỉ chấp nhận POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJSONResponse(false, 'Method not allowed');
}

// Lấy dữ liệu từ request
$data = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!isset($data['session_token']) || !isset($data['plan'])) {
    sendJSONResponse(false, 'Vui lòng cung cấp đầy đủ thông tin!');
}

$sessionToken = trim($data['session_token']);
$plan = trim($data['plan']);

// Validate plan
if (!in_array($plan, ['trial', 'pro'])) {
    sendJSONResponse(false, 'Gói không hợp lệ!');
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
    
    // Cập nhật plan của user
    $stmt = $conn->prepare("UPDATE users SET plan = ? WHERE id = ?");
    $stmt->bind_param("si", $plan, $userId);
    
    if ($stmt->execute()) {
        // Lấy thông tin user đã cập nhật
        $stmt = $conn->prepare("SELECT id, username, email, plan FROM users WHERE id = ?");
        $stmt->bind_param("i", $userId);
        $stmt->execute();
        $result = $stmt->get_result();
        $user = $result->fetch_assoc();
        
        sendJSONResponse(true, 'Cập nhật gói thành công!', [
            'user_id' => $user['id'],
            'username' => $user['username'],
            'email' => $user['email'],
            'plan' => $user['plan']
        ]);
    } else {
        sendJSONResponse(false, 'Có lỗi xảy ra khi cập nhật gói. Vui lòng thử lại!');
    }
    
    $stmt->close();
    $conn->close();
    
} catch (Exception $e) {
    sendJSONResponse(false, 'Có lỗi xảy ra: ' . $e->getMessage());
}
?>

