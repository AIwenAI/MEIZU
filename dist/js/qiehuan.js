var glass = (function () {
    return {
        init: function () {
            // 获取最大的盒子
        //   $ul = $('.ul');
        //   $li = $('.ul').children('li');
        //   console.log($li);  
            this.$box = $('.box');
            // 获取展示图片的盒子
            
            $showImage = $('.show-image').find('img');
            // console.log($showImage);
            // 获取小图片的盒子
            this.$ulbox = $('.img-box');
            // console.log(this.$ulbox)
            // 获取每一张图片的li集合
            this.$liAll = this.$ulbox.children();
            // // 给每一li添加索引， 方便获取
            // for (var i = 0; i < this.$liAll.length; i++) {
            //     this.$liAll[i].index = i;
            // }
            this.event();
        },
        event: function () {
            var _this = this;
            // 利用事件委托，给每一个li添加点击事件
            this.$ulbox.on('click', 'li',function(){
                let index = $(this).index();
                let fIndex = $(this).closest('ul>li').index()
                _this.showImage(index, fIndex);
            })
           
            // $ul.on('click', 'li',function(){
            //     _this.showImage($(this).index())
            // })
        },
        showImage: function (index, showIndex) {
            for (var i = 0; i < this.$liAll.length; i++) {
                this.$liAll.eq(i).removeClass();
            }
            this.$liAll.eq(index).addClass('active');
            var src =  this.$liAll.eq(index).find('img').attr('class');
            // console.log(src)
            console.log(showIndex, index);
            // console.log($src)
            $showImage.eq(showIndex).attr('src' , src.replace('small', 'big') ) ;
        }
    }

}());