
var password = (function(){
   
      passwordeg = /^\w{6,18}$/;   //密码的正则表达式
      return {
          init(){
           this.event();
           this.get();
           $('.pass_header').load('reg_index.html #reg_logo');
           $('.pass_footer').load('reg_index.html #reg_footer');
  
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
            
        } ,
        get(){
            $('.password').on('focus',function(){
                $('.inp_box').css({
                 borderColor:'#387aff',
                })
            });
            $('.password').on('blur',function(){
                $('.inp_box').css({
                 borderColor:'#ddd',
                })
            })
            $('#pwd_btn').on('click',function(){
                $('.password_num').attr("type","text") ;
                $('#xianshi').attr("class","iconfont icon-yincangmima")
            })
            $('.password_num').on('blur',function(){
             $('.password_num').attr("type","password") ;
             $('#xianshi').attr("class","iconfont icon-xianshimima");
            })
     
        }
            }      
  }())