var logIndex = (function(){
  let  count = 60, //间隔函数，1秒执行
     InterValObj1, //timer变量，控制时间
    curCount1,
    phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;//手机号正则//当前剩余秒数
    return {
        init(){
         this.event();
         this.phonere();
         $('.log_header').load('reg_index.html #reg_logo');
        $('.log_footer').load('reg_index.html #reg_footer');

        },
        event(){
            $("#btnSendCode1").on('click',function () {
                        curCount1 = count;
                    var phone = $.trim($('#phoneNumber').val());
                    if (!phoneReg.test(phone)) {
                            	alert(" 请输入有效的手机号码"); 
                            	return false;
                            }
                    //设置button效果，开始计时
                    $("#btnSendCode1").css({
                        color: '#8e8e8e',
                    });
                    $("#btnSendCode1").attr("disabled", "true");
                    $("#btnSendCode1").val(+ curCount1 + "秒后重新获取");
                    InterValObj1 = window.setInterval(SetRemainTime1, 1000); 
                    //启动计时器，1秒执行一次
                    //向后台发送处理数据
                     function SetRemainTime1(){
                        if(curCount1 == 0) {
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
            phonere(){
                $(".ipt_phone").on('blur',function () {
                    $('.phone_num').css({
                        borderColor: '#ddd',
                    })
                    var phonen = $.trim($('.ipt_phone').val());
                    if ( phoneReg.test(phonen)) {
                        $('.ver').css({
                            color:'#387aff',
                        })
                        $('.ver').html('输入正确');
                            }else{
                                $('.ver').css({
                                    color:'red',
                                })
                                $('.ver').html('格式错误，请输入正确的手机号');
                            }
                  })
                  $(".ipt_phone").on('focus',function(){
                    $('.phone_num').css({
                        borderColor: '#387aff',
                    })
                    $('.ver').html('');
                  })
                  $('.changes').on('click', function () {
                    $('#cha_phone').attr("class", "iconfont icon-shouji")
                }) 
            }
        }
}())