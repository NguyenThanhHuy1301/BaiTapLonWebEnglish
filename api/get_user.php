<?php
require_once '../database/config.php';

// Chấp nhận cả GET và POST request
$sessionToken = null;

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Lấy session token từ query parameter
    if (isset($_GET['session_token'])) {
        $sessionToken = trim($_GET['session_token']);
    } elseif (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
        if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            $sessionToken = $matches[1];
        }
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy session token từ POST body
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['session_token'])) {
        $sessionToken = trim($data['session_token']);
    }
}

if (empty($sessionToken)) {
    sendJSONResponse(false, 'Session token không được cung cấp!');
}

try {
    // Verify session token và lấy user_id
    $userId = verifySessionToken($sessionToken);
    
    if ($userId === null) {
        sendJSONResponse(false, 'Session không hợp lệ hoặc đã hết hạn!');
    }
    
    $conn = getDBConnection();
    
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

