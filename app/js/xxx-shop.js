// var glass = (function () {
//     return {
//         init: function () {
//             // 获取最大的盒子
//             this.$box = document.querySelector('.box');
//             // 获取展示图片的盒子
//             this.$showImage = this.$box.querySelector('.show-image');
//             // 获取小图片的盒子
//             this.$ulbox = this.$box.querySelector('.img-box');
//             // 获取每一张图片的li集合
//             this.$liAll = this.$ulbox.children;
//             // 给每一li添加索引， 方便获取
//             for (var i = 0; i < this.$liAll.length; i++) {
//                 this.$liAll[i].index = i;
//             }
//             this.event();
//         },
//         event: function () {
//             var _this = this;
//             // 利用事件委托，给每一个li添加点击事件
//             this.$ulbox.onclick = function (ev) {
//                 ev = ev || window.event;
//                 var target = ev.target || ev.srcElement;
//                 // console.log(target.nodeName);
//                 // 点击时，真正触发的为图片。
//                 if (target.nodeName === 'IMG') {
//                     // 获取li的索引 =》target.parentNode.index
//                     // 点击触发更换图片
//                     _this.showImage(target.parentNode.index)
//                 }
//             }
//         },
//         showImage: function (index) {
//             for (var i = 0; i < this.$liAll.length; i++) {
//                 this.$liAll[i].className = ''
//             }
//             this.$liAll[index].className = 'active';
//             var src = this.$liAll[index].querySelector('img').getAttribute('src');
//             this.$showImage.querySelector('img').src = src.replace('small', 'big');
//         }
//     }

// }());

var glass = (function () {
    return {
        // x为放大倍数
        init: function (x) {
            this.Multiple = x || 2;
            // 获取最大的盒子
            this.$box = document.querySelector('.box');
            // 获取展示图片的盒子
            this.$showImage = this.$box.querySelector('.show-image');
            // 获取放大图片的盒子
            this.$showBigImage = this.$box.querySelector('.show-big-image');
            // 获取小图片的盒子
            this.$ulbox = this.$box.querySelector('.img-box');
            // 获取每一张图片的li集合
            this.$liAll = this.$ulbox.children;
            // 获取移动的小黑块(放大镜)
            this.$filter = this.$showImage.querySelector('.filter');
            // 给每一li添加索引， 方便获取
            for (var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].index = i;
            }
            this.event();
        },
        event: function () {
            var _this = this;
            // 利用事件委托，给每一个li添加点击事件
            this.$ulbox.onclick = function (ev) {
                ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                // console.log(target.nodeName);
                // 点击时，真正触发的为图片。
                if (target.nodeName === 'IMG') {
                    // 获取li的索引 =》target.parentNode.index
                    // 点击触发更换图片
                    _this.showImage(target.parentNode.index)
                }
            }
            // 这里用onmouseenter： 子元素不触发事件
            this.$showImage.onmouseenter = function () {
                // 放大镜显示
                _this.$filter.style.display = 'block';
                // 展示大图片显示
                _this.$showBigImage.style.display = 'block';

                // 如果展示盒子的尺寸不变， 需要修改放大镜的尺寸，和图片的尺寸，保持等比关系
                // 获取展示盒子的宽度高度
                _this.bigWidth = _this.$showBigImage.clientWidth;
                _this.bigHeight = _this.$showBigImage.clientHeight;
                // 设置小盒子宽高
                _this.$filter.style.width = _this.bigWidth / _this.Multiple + 'px';
                _this.$filter.style.height = _this.bigHeight / _this.Multiple + 'px';
                // 设置大图片宽度
                _this.$showBigImage.querySelector('img').style.width = this.offsetWidth * _this.Multiple + 'px';
            }
            this.$showImage.onmouseleave = function () {
                _this.$filter.style.display = 'none';
                _this.$showBigImage.style.display = 'none';
            }
            this.$showImage.onmousemove = function (ev) {
                ev = ev || window.event;
                // 计算小方块定点坐标
                var x = ev.pageX - this.offsetLeft - _this.$filter.offsetWidth / 2;
                var y = ev.pageY - this.offsetTop - _this.$filter.offsetHeight / 2;
                // 获取小方块移动的最大坐标
                var maxL = this.clientWidth - _this.$filter.offsetWidth,
                    maxT = this.clientHeight - _this.$filter.offsetHeight;
                if (x >= maxL) {
                    x = maxL
                } else if (x <= 0) {
                    x = 0;
                }
                if (y >= maxT) {
                    y = maxT;
                } else if (y <= 0) {
                    y = 0;
                }
                _this.$filter.style.left = x + 'px';
                _this.$filter.style.top = y + 'px';
                var img = _this.$showBigImage.querySelector('img');
                img.style.left = -_this.Multiple * x + 'px';
                img.style.top = -_this.Multiple * y + 'px';
            }
        },
        showImage: function (index) {
            console.log(index);
            for (var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].className = ''
            }
            this.$liAll[index].className = 'active';
            // 修改对应的图片地址
            var src = this.$liAll[index].querySelector('img').getAttribute('src');
            this.$showImage.querySelector('img').src = src.replace('small', 'big');
            this.$showBigImage.querySelector('img').src = src.replace('small', 'largest');
            console.log(src);
        }
    }
}())

var add = (function() {
    var $addBtn = document.querySelector("#btnAdd");
    var $spanNum = document.querySelector("#spanNum");
    var $minusBtn = document.querySelector("#btnMinus");
    var $price_em = document.querySelectorAll("#price_em");
    var $model = document.querySelector("#model");
    var $color = document.querySelector("#color");
    var $memory = document.querySelector("#memory");
    var $package = document.querySelector("#package");
    var $stating = document.querySelector("#stating");
    var count = 1;
    var price = [1090.51,24.51,556.98,23.98,286.48,19.98];
    return{
        init(){
            this.event();
        },
        event(){ 
            $addBtn.onclick = function() {
                count++;
                $spanNum.innerHTML = count;
                for(var i = 0;i<$price_em.length;i++){
                    $price_em[i].innerHTML = (price[i]*count).toFixed(2);
                }
            }
            $minusBtn.onclick = function(){  
                if(count == 1){
                    $spanNum.innerHTML = count;
                }else{
                    count--;
                    $spanNum.innerHTML = count;
                    for(var i = 0;i<$price_em.length;i++){
                        $price_em[i].innerHTML = (price[i]*count).toFixed(2);
                    }
                }
            }
            $model.onclick = function(e){
                e = e || window.event;
                const target = e.target || e.srcElement;
                if(target.nodeName =='A'){
                    var $a = document.querySelectorAll("#model a");
                    for(var i=0;i<$a.length;i++){
                        $a[i].classList.remove("on");
                    }
                    target.classList.add("on");
                }
            }
            $color.onclick = function(e){
                e = e || window.event;
                const target = e.target || e.srcElement;
                if(target.nodeName =='A'){
                    var $a = document.querySelectorAll("#color a");
                    for(var i=0;i<$a.length;i++){
                        $a[i].classList.remove("on");
                    }
                    target.classList.add("on");
                }
            }
            $memory.onclick = function(e){
                e = e || window.event;
                const target = e.target || e.srcElement;
                if(target.nodeName =='A'){
                    var $a = document.querySelectorAll("#memory a");
                    for(var i=0;i<$a.length;i++){
                        $a[i].classList.remove("on");
                    }
                    target.classList.add("on");
                }
            }
            $package.onclick = function(e){
                e = e || window.event;
                const target = e.target || e.srcElement;
                if(target.nodeName =='A'){
                    var $a = document.querySelectorAll("#package a");
                    for(var i=0;i<$a.length;i++){
                        $a[i].classList.remove("on");
                    }
                    target.classList.add("on");
                }
            }
            $stating.onclick = function(e){
                e = e || window.event;
                const target = e.target || e.srcElement;
                if(target.nodeName =='A'){
                    var $a = document.querySelectorAll("#stating a");
                    for(var i=0;i<$a.length;i++){
                        $a[i].classList.remove("on");
                    }
                    target.classList.add("on");
                }
            }

        }
    }
})();
    //添加购物车
    // $(".addcar").click(function(){
    //     $(".succes-add-car").fadeTo(300,1);
    //     $("body").css({ "overflow": "hidden" });
    //     localStorage.setItem = [];
    //     var obj = {}
    //     obj.name = $("#model").children(".on").html();
    //     obj.type = $("#type").children(".on").html();
    //     obj.color = $("#color").children(".on").html();
    //     obj.memory = $("#memory").children(".on").html();
    //     localStorage.setItem.push(obj);
    // });
    // $(".bg-model-ok").click(function(){
    //     $(".succes-add-car").hide();
    //     $("body").css({ "overflow": "visible" });
    // });
var shop_car = (function(){
    let $box, shopData;
    return {
        init() {
            $box = $('.option');
            // console.log($('.count').html())
            this.event();
        },
        event() {
            const self = this;
            $box.on('click','.addcar',function() {
                $(".succes-add-car").fadeTo(300,1);
                $("body").css({ "overflow": "hidden" });
                var obj = {}
                obj.name = $("#model").children(".on").html();
                obj.type = $("#type").children(".on").html();
                obj.color = $("#color").children(".on").html();
                obj.memory = $("#memory").children(".on").html();
                obj.count = Number($('.span-num').html());
                obj.price = 3198;
                shopData = obj;
                // 获取点击按钮的索引
                // var index = self.index('.shop-btn-car');
                // 获取数量
                self.setCarData(shopData);
            })
            $(".bg-model-ok").click(function(){
                $(".succes-add-car").hide();
                $("body").css({ "overflow": "visible" });
            });
        },
        setCarData(data) {
            // 获取原有数据
            let shopList = localStorage.shopList || '[]';
            // 存储到本地数据
            shopList = JSON.parse(shopList);
            var flag = true;
            // 添加数据分两种情况
            for(var i = 0; i < shopList.length; i++) {
                if(shopList[i].name == data.name && shopList[i].memory == data.memory) {
                    // 数据已存在,  相当于count进行累加
                    shopList[i].count += data.count;
                    flag = false;
                    break;
                }
            }
            // 第一次添加
            // if(i == shopList.length){

            // }
            if(flag){
                // 把数据添加到数组中
                shopList.push(data);
            }

            // 替换原有数据
            localStorage.shopList = JSON.stringify(shopList);
            // alert('加入成功');
            $('.count').html(JSON.parse(localStorage.shopList).length - 0);
        },
    }
}())
