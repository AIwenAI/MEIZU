var password = (function(){
   
      passwordeg = /^\w{6,18}$/;   //密码的正则表达式
      return {
          init(){
           this.event();
  
          },
          event(){
              $(".password_num").on('blur',function () {
                var pass = $.trim($('.password_num').val());
                if (passwordeg.test(pass)) {
                    $('.ver').css({
                        color:'#387aff',
                    })
                    $('.ver').html('验证成功');
                        }else{
                            $('.ver').css({
                                color:'red',
                            })
                            $('.ver').html('格式错误，请输入正确的密码');
                        }
              })
              $(".password_num").on('focus',function(){
                $('.ver').html('');
              })
            
        } 
            }      
  }())