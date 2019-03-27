var phone = (function(){
   
   var  phoneg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;   //密码的正则表达式
    return {
        init(){
         this.event();
         this.get();

        },
        event(){
            $(".ipt_phone").on('blur',function () {
              var phonen = $.trim($('.ipt_phone').val());
              if (phoneg.test(phonen)) {
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
              $('.ver').html('');
            })
          
      },
      get(){
        $('.ipt_phone').on('focus',function(){
            $('.phone_num').css({
             borderColor:'#387aff',
            })
        })
        $('.ipt_phone').on('blur',function(){
            $('.phone_num').css({
             borderColor:'#ddd',
            })
        })
 

      } 
          }      
}())