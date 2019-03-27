<?php
    // 获取每一个字段的值
    // $name2 = $_GET['username2']; // 就是获取url中的键值对
    // echo $name2;
    
    header('Access-Control-Allow-Origin:*');//允许所有来源访问

    header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $sql = "INSERT INTO USER  (`PASSWORD`, `phone`) VALUE ('$password','$phone')";
    // 连接数据库
    $coon = new Mysqli('localhost', 'root', '', 'meizu',3306);
    // 设置字符集
    $coon->query("SET CHARACTER SET 'utf8'");//读库   
    $coon->query("SET NAMES 'utf8'");//写库 
    // 执行sql语句
    $result = $coon -> query($sql);
    if($result) {
        echo "<script>
                alert('注册成功');
                location.href = '../log_second.html';
              </script>";
    } else {
        echo "<script>
                alert('获取失败!注册失败!!!马上跳转到到注册页,请重新注册!!);
                location.href = '../register.html';
            </script>";
    }


?>