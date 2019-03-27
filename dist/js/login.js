var  logSecond = (function(){
    var  phoneg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/,
    passwordeg = /^\w{6,18}$/;   //密码的正则表达式
    return{
        init(){
            this.event();
            this.passreg();
            this.get();
        $('.logS_header').load('reg_index.html #reg_logo');
        $('.logS_footer').load('reg_index.html #reg_footer');

        },
        event(){
            $(".ipt_account").on('blur',function () {
                var phonen = $.trim($('.ipt_account').val());
                if (phoneg.test(phonen)) {
                    $('.vers').css({
                        color:'#387aff',
                    })
                    $('.vers').html('输入正确');
                        }else{
                            $('.vers').css({
                                color:'red',
                            })
                            $('.vers').html('格式错误，请输入正确的手机号');
                        }
              })
              $(".ipt_account").on('focus',function(){
                $('.vers').html('');
              })
        },
        passreg(){
            $(".inp_pass").on('blur',function () {
                var pass = $.trim($('.inp_pass').val());
                if (passwordeg.test(pass)) {
                    $('.pas_ver').css({
                        color:'#387aff',
                    })
                    $('.pas_ver').html('验证成功');
                        }else{
                            $('.pas_ver').css({
                                color:'red',
                            })
                            $('.pas_ver').html('格式错误，请输入正确的密码');
                        }
              })
              $(".inp_pass").on('focus',function(){
                $('.pas_ver').html('');
              })
        },
        get(){
               $('.ipt_account').on('focus',function(){
            $('.inpS_box').css({
                borderColor:'#387aff',
            })
        })
        $('.ipt_account').on('blur',function(){
            $('.inpS_box').css({
                borderColor:'#ddd',
            })
        })
        $('.inp_pass').on('focus',function(){
            $('.ipPass_box').css({
                borderColor:'#387aff',
            })
        })
        $('.inp_pass').on('blur',function(){
            $('.ipPass_box').css({
                borderColor:'#ddd',
            })
        })
        $('.reg_qr').on('click',function(){
            $('.erwei').css({
                display:'block',
            });
            $('.reg_code').css({
                color:'#ddd',
            })
        })
        $('.reg_code').on('click',function(){
            $('.erwei').css({
                display:'none',
            })
            $('.reg_code').css({
                color:'#000',
            })
        })
       
        }
        
    }
}())