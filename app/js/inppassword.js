var password = (function(){
   
      passwordeg = /^\w{6,18}$/;   //密码的正则表达式
      return {
          init(){
           this.event();
  
          },
          event(){
              $(".sub_btn").on('click',function () {
                var pass = $.trim($('.password_num').val());
                if (!passwordeg.test(pass)) {
                            $('.ver').innerHTML ='验证成功'
                        }
              })
            
        } 
            }      
  }())