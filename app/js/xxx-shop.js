var glass = (function () {
    return {
        init: function () {
            // 获取最大的盒子
            this.$box = document.querySelector('.box');
            // 获取展示图片的盒子
            this.$showImage = this.$box.querySelector('.show-image');
            // 获取小图片的盒子
            this.$ulbox = this.$box.querySelector('.img-box');
            // 获取每一张图片的li集合
            this.$liAll = this.$ulbox.children;
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
        },
        showImage: function (index) {
            for (var i = 0; i < this.$liAll.length; i++) {
                this.$liAll[i].className = ''
            }
            this.$liAll[index].className = 'active';
            var src = this.$liAll[index].querySelector('img').getAttribute('src');
            this.$showImage.querySelector('img').src = src.replace('small', 'big');
        }
    }

}());


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


