var regR = (function () {
    let  count = 60, //间隔函数，1秒执行
       InterValObj1, //timer变量，控制时间
      curCount1,
      passwordeg = /^\w{6,18}$/;   //密码的正则表达式
    var phoneg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/; //密码的正则表达式
    return {
        init() {
            this.event();
            this.get_phone();
            this.steTime();
            this.pass_change();
            this.CPassW();
            this.code_change();
            this.showPage();
            this.send();
            $('#hearder').load('reg_common.html #reg_logo');
           $('#footer').load('reg_common.html #reg_footer'); 

        },
        event() {//电话号码输入的正则表示
            $(".ipt_phone").on('blur', function () {
                var phonen = $.trim($('.ipt_phone').val());
                if (phoneg.test(phonen)) {
                    $('.ver').css({
                        color: '#387aff',
                    })
                    $('.ver').html('输入正确');
                } else {
                    $('.ver').css({
                        color: 'red',
                    })
                    $('.ver').html('请输入正确的手机号');
                }
            })
            $(".ipt_phone").on('focus', function () {
                $('.ver').html('');
            })
        },
        get_phone() {//输入框获取焦点时候对样式的改变
            $('.ipt_phone').on('focus', function () {
                $('.phone_num').css({
                    borderColor: '#387aff',
                })
            })
            $('.ipt_phone').on('blur', function () {
                $('.phone_num').css({
                    borderColor: '#ddd',
                })
            })


        },
        steTime() {//设置获取验证码的倒计时
            $("#btnSendCode1").on('click', function () {
               
                $('.vers').html( function yzm(){
                    var arr = ['0','1','2','3','4','5','6','7','8','9'];
                    var str = '';
                    for(var i = 0 ; i < 6 ; i ++ )
                        str += ''+arr[Math.floor(Math.random() * arr.length)];
                    return str;
                 });
               
                 curCount1 = count;
                $("#btnSendCode1").css({
                    color: '#8e8e8e',
                });
                $("#btnSendCode1").attr("disabled", "true");
                $("#btnSendCode1").val(+ curCount1 + "秒后重新获取");
                InterValObj1 = window.setInterval(SetRemainTime1, 1000);
                //启动计时器，1秒执行一次
                //向后台发送处理数据
                function SetRemainTime1() {
                    if (curCount1 == 0) {
                        window.clearInterval(InterValObj1);//停止计时器
                        $("#btnSendCode1").removeAttr("disabled");//启用按钮
                        $("#btnSendCode1").val("获取验证码");
                        $("#btnSendCode1").css({
                            color: '#3a7cff',
                        })

                    } else {
                        curCount1--;
                        $("#btnSendCode1").val(+ curCount1 + "秒后重新获取");
                    }
                }
            });
            
        },
        code_change(){//输入验证码改变输入框的样式
            $('.vers').on('focus',function(){
               
                $('.inp_box').css({
                 borderColor:'#387aff',
                })
            });
            $('.vers').on('blur',function(){
                $('.inp_box').css({
                 borderColor:'#ddd',
                })
            })   
        },
        pass_change(){//密码输入验证正则表达式且改变输入框样式
            $(".password_num").on('blur',function () {
                $('.inp_box2').css({
                    borderColor:'#ddd',
                   })
              var pass = $.trim($('.password_num').val());
              if (passwordeg.test(pass)) {
                  $('.vers2').css({
                      color:'#387aff',
                  })
                  $('.vers2').html('格式正确');
                      }else{
                          $('.vers2').css({
                              color:'red',
                          })
                          $('.vers2').html('格式错误，请输入正确的密码');
                      }
            })
            $(".password_num").on('focus',function(){
              $('.vers2').html('');
              $('.inp_box2').css({
                borderColor:'#387aff',
               })
            })
          
        },
        CPassW(){//密码可见性的修改
        $('#pwd_btn').on('click',function(){
            $('.password_num').attr("type","text") ;
            $('#xianshi').attr("class","iconfont icon-yincangmima");
            $('.vers2').css({
                opactiy:'0',
            })
        })
        $('.password_num').on('blur',function(){
         $('.password_num').attr("type","password") ;
         $('#xianshi').attr("class","iconfont icon-xianshimima");
        })
 
        },
        showPage(){//点击按钮，切换不同的页面
            //点击立即注册，页面切换为输入验证码的页面
             $('.Btnn').on('click',function(){
                  $('#input_phone').css({
                      display:'none'
                  });
                   $('#input_vcode').css({
                    display:'block'
                })
             });
             $('.nextStep').on('click',function(){
                // $('#input_phone').css({
                //     display:'none'
                // });
                $('#input_vcode').css({
                    display:'none'
                })
                 $('#input_password').css({
                  display:'block'
              })
           })
        },
        send(){//发送注册数据
            $('.sub_btn').on('click',function(){
                var obj = {
                    phone:$('.ipt_phone').val(),
                    password:$('.password_num').val()
                }
                sendAjax('http://localhost:7777/server/register.php',{
                    method:'POST',
                    data:obj
                })
                .then(data => {
                    location.href = 'http://localhost:3333/server/log_second.html';
                })
                .catch(data => {
                    alert(data.msg);
                })
            })
        },

        } 
}())