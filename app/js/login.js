
var regs= (function(){
    return{
        init(){
            this.event();
        },
        event(){      
            const self = this;
            //点击登录按钮跳转到首页
            $('.btn').on('click',function(){
                if(!$('.ipt_account').val()){
                    alert('账号不能为空')
                    $('.ipt_account').select();
                    return false;
                }if(!$('.inp_pass').val()){
                    alert('密码不能为空')
                    $('.inp_pass').select();
                    return false;
                }
                var obj = {
                    phone:$('.ipt_account').val(),
                    password:$('.inp_pass').val()
                }
                sendAjax('http://10.36.145.51:7777/server/login.php',{
                    method:'POST',
                    data:obj,
                })
                .then(data => {
                    // localStorage.name = $('.inp1').val();
                    document.cookie = `name=${$('.ipt_account').val()}`;
                    location.href = 'index.html';
                    // console.log($('.ipt_account').val());
                })
                .catch(data =>{
                    alert(data.msg);
                })
            })
        },

        }
}())