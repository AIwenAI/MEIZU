// 获取cookie
var cook = (function () {
    let str = document.cookie;
            var arr = str.split('; ');
            var obj = {};
            arr.forEach(x => {
                var _arr = x.split('=');
                
                obj[_arr[0]] = _arr[1];
            })
    return {
        init() {
            
            // console.log(obj);
            if (document.cookie) {
                $('.my-box').html(`<dt><a href="">个人中心</a></dt>
                <dt><a href="../register.html">我的订单</a></dt>
                <dt><a href="">M码通道</a></dt>
                <dt><a href="javascript:void(0);" class="tuichu">退出登录</a></dt>`);
            }
            $('.tuichu').on('click',function(){
                // $('.my-box').css({'display':'none'});
                document.cookie = `${arr[0]}= ; max-age=${-1};`
                // console.log(arr[0]);
                location.reload();
                
            })
        },
        event(){
            if (document.cookie) {
                $('.ul_right').html(`<li><a href="">我的订单</a></li>
                <li><a href="index.html" class="username">用户<em>${obj.name}</em> 的商城</a></li>`); 
                if(!localStorage.shopList || localStorage.shopList == '[]'){
                    $('.gouwu').html(`
                    <div class='qw'>
                    <img src="img/gwc2.png">
                    <ul class="aa">
                        <li><p>购物车内还没有商品，赶紧去选购吧~~~</p></li>
                        <li><a href="index.html">返回商城首页</a></li>
                    </ul></div>`);
                }
            }
        }
    }
}())

