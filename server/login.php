<?php
header('Access-Control-Allow-Origin:*');//允许所有来源访问

header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
    include('connet_db.php');
    // 获取传递的信息
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $sql = "select * from meizu where phone='$phone' and password='$password'";
    // var_dump($sql);
    $db = new DB();
    $result = $db -> fetch($sql, "object");
    // var_dump($result);
    if($result) {
        echo "
            <script>
                alert('登录成功, 正在跳转');
                location.href = '../manager.php';
            </script>";
    } else {
        echo "<script>
                alert('登录失败, 用户名称或者密码输入错误');
                location.href = '../login.html';
              </script>";
    }


?>