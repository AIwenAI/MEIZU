var  login = (function(){
    return{
        init(){
            this.event();

        },
        event(data){
            const self = this;
            $('.btn').on('click',function(){
                var obj = {
                    phone:$('.ipt_phone').val(),
                    password:$('.password_num').val()
                }
                sendAjax('../server/register.php',{
                    method:'POST',
                    data:obj
                })
                .then(data => {
                  console.log('成功了');
                  location.href = 'login.html';
                })
                .then(data => {},data => {
                    console.log('失败了');
                    alert(data.msg)
                })
            })

        }
    }
})