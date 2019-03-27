var inter = (function(){
    let $box, $minBox, $nav, $liAll;
    return {
        init(){
            $box = $('.header');
            $minBox = $box.children('header');
            $minBoxZ = $minBox.children('.header-xin')
            $nav = $minBoxZ.children('.nav');
            $liAll = $nav.children('li');

            this.event()
        },
        event(){
            // const self = this;
            let timer = null;
            $nav.on('mouseenter','li',function(){
                    const index = $(this).index();
                    if(index === 0 || index === 1 || index === 2 || index === 3){
                        $box.css({
                            'background-color':'#fff',
                        })
                        // $('.phone-goods').css({
                        //     'display': 'block',
                        // })
                        $('.phone-goods').animate({
                            'height': 190 + 'px'
                        },400)
                        $('.phone-goods').show();
                        $(this).siblings('li').children().css({
                            'color': '#333',
                        })
                        $('.logo').css({
                            'color': '#00bfff',
                        })
                        $('.my').css({
                            'background':'url(../images/my.png) no-repeat',
                            'background-size': 30 + 'px',
                        })
                        $('.shop-car').css({
                            'background':'url(../images/shop-car.png) no-repeat',
                            'background-size': 30 + 'px',
                        })
                    }
                    if(index === 4 || index === 5 || index === 6 || index === 7){
                        $box.css({
                            'background':'none',
                        })
                        $('.phone-goods').hide()
                        $('.phone-goods').empty().css({
                            'height': 0 + 'px',
                        });
                        $('.logo').css({
                            'color': '#fff',
                        })
                        $('.my').css({
                            'background':'url(../images/my1.png) no-repeat',
                            'background-size': 30 + 'px',
                        })
                        $('.shop-car').css({
                            'background':'url(../images/shop-car1.png) no-repeat',
                            'background-size': 30 + 'px',
                        })
                        $(this).siblings('li').children().css({
                            'color': '#fff',
                        })
                    }
                    $(this).children().css({
                        'color': '#00ff00',
                    })
                    if(index === 0){
                            $('.phone-goods').html(`
                            <li><a href="xxx-shop.html">
                                    <img src="images/phone-goods1.jpg" alt="">
                                    <span>魅族 Note9</span>
                                    <em>￥1398</em>
                                </a>
                            </li>
                            <li><a href="xxx-shop.html">
                                    <img src="images/phone-goods2.jpg" alt="">
                                    <span>魅族 Note9</span>
                                    <em>￥1398</em>
                                </a>
                            </li>
                            <li><a href="xxx-shop.html">
                                    <img src="images/phone-goods3.jpg" alt="">
                                    <span>魅族 Note9</span>
                                    <em>￥1398</em>
                                </a>
                            </li>
                            <li><a href="xxx-shop.html">
                                    <img src="images/phone-goods4.jpg" alt="">
                                    <span>魅族 Note9</span>
                                    <em>￥1398</em>
                                </a>
                            </li>
                            <li><a href="xxx-shop.html">
                                    <img src="images/phone-goods5.jpg" alt="">
                                    <span>魅族 Note9</span>
                                    <em>￥1398</em>
                                </a>
                            </li>
                            <li><a href="xxx-shop.html">
                                    <img src="images/phone-goods6.jpg" alt="">
                                    <span>魅族 Note9</span>
                                    <em>￥1398</em>
                                </a>
                            </li>
                            <li><a href="xxx-shop.html">
                                    <img src="images/phone-goods7.jpg" alt="">
                                    <span>魅族 Note9</span>
                                    <em>￥1398</em>
                                </a>
                            </li>
                            <li><a href="xxx-shop.html">
                                    <img src="images/phone-goods8.jpg" alt="">
                                    <span>魅族 Note9</span>
                                    <em>￥1398</em>
                                </a>
                            </li>`)
                       
                    }
                    if(index === 1){
                        $('.phone-goods').html(`
                        <li><a href="xxx-shop.html">
                                <img src="images/min-headset1.jpg" alt="">
                                <span>POP 真无线蓝牙耳机</span>
                                <em>￥469</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-headset2.jpg" alt="">
                                <span>魅族 Flow Bass 三单元耳机</span>
                                <em>￥399</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-headset3.jpg" alt="">
                                <span>魅族 HALO 激光蓝牙耳机</span>
                                <em>￥499</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-headset4.jpg" alt="">
                                <span>魅族 EP51 蓝牙运动耳机</span>
                                <em>￥129</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-headset5.jpg" alt="">
                                <span>魅族 EP52 Lite 蓝牙耳机</span>
                                <em>￥129</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-headset6.jpg" alt="">
                                <span>魅族 LIVE 四单元动铁耳机</span>
                                <em>￥1099</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-headset7.jpg" alt="">
                                <span>魅族 EP-31 耳机</span>
                                <em>￥99</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-headset8.jpg" alt="">
                                <span>魅蓝 EP52 蓝牙耳机</span>
                                <em>￥199</em>
                            </a>
                        </li>`)
                    }
                    if(index === 2){
                        $('.phone-goods').html(`
                        <li><a href="xxx-shop.html">
                                <img src="images/min-parts1.jpg" alt="">
                                <span>魅族移动电源3</span>
                                <em>￥79</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-parts2.jpg" alt="">
                                <span>快充电源适配器（UP0830S）</span>
                                <em>￥69</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-parts3.jpg" alt="">
                                <span>魅族无线充电器</span>
                                <em>￥79</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-parts4.jpg" alt="">
                                <span>魅族 Type-C 2.0数据线</span>
                                <em>￥49</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-parts5.jpg" alt="">
                                <span>魅族 Micro USB 数据线</span>
                                <em>￥29</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-parts6.jpg" alt="">
                                <span>魅族 Type-C 金属数据线</span>
                                <em>￥39</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-parts7.jpg" alt="">
                                <span>魅族 16th 高透保护膜</span>
                                <em>￥19</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-parts8.jpg" alt="">
                                <span>魅族 16th Plus 亲肤保护壳</span>
                                <em>￥29</em>
                            </a>
                        </li>`)
                    }
                    if(index === 3){
                        $('.phone-goods').html(`
                        <li><a href="xxx-shop.html">
                                <img src="images/min-live1.jpg" alt="">
                                <span>魅族盒子 一键找回遥控器</span>
                                <em>￥199</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-live2.jpg" alt="">
                                <span>魅族路由器 极速版</span>
                                <em>￥99</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-live3.jpg" alt="">
                                <span>魅族桌面多功能USB排插</span>
                                <em>￥89</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-live4.jpg" alt="">
                                <span>Everyday 乐游系列 酷 MA 萌定制版</span>
                                <em>￥599</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-live5.jpg" alt="">
                                <span>魅蓝休闲旅行双肩包</span>
                                <em>￥199</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-live6.jpg" alt="">
                                <span>魅蓝胸包</span>
                                <em>￥89</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-live7.jpg" alt="">
                                <span>魅蓝数码收纳包</span>
                                <em>￥59</em>
                            </a>
                        </li>
                        <li><a href="xxx-shop.html">
                                <img src="images/min-live8.jpg" alt="">
                                <span>魅蓝旅行包</span>
                                <em>￥269</em>
                            </a>
                        </li>`)
                    }
                    if(index === 8){
                        $('.phone-goods').html(`
                        <div class="app-box">
                            <img src="../images/app.jpg" alt="">
                            <p></p>
                            <p></p>
                        </div>`)
                        $('.phone-goods').animate({
                            'height': 320 + 'px'
                        },300)
                        $box.css({
                            'background-color':'#fff',
                        })
                        $('.phone-goods').show();
                        $(this).siblings('li').children().css({
                            'color': '#333',
                        })
                        $('.logo').css({
                            'color': '#00bfff',
                        })
                        $('.my').css({
                            'background':'url(../images/my.png) no-repeat',
                            'background-size': 30 + 'px',
                        })
                        $('.shop-car').css({
                            'background':'url(../images/shop-car.png) no-repeat',
                            'background-size': 30 + 'px',
                        })
                    }
            })
            $minBoxZ.on('mouseenter','.my',function(){
                $box.css({
                'background':'none',
                })
                $('.phone-goods').empty()
                $('.phone-goods').stop().animate({
                    'height': 0 + 'px',
                },1);
                $('.phone-goods').hide();
                $('.logo').css({
                    'color': '#fff',
                })
                $('.my').css({
                    'background':'url(../images/my1.png) no-repeat',
                    'background-size': 30 + 'px',
                })
                $('.shop-car').css({
                    'background':'url(../images/shop-car1.png) no-repeat',
                    'background-size': 30 + 'px',
                })
                $liAll.each(function(){
                    $(this).children().css({
                        'color': '#fff',
                    })
                })
            })
            $minBoxZ.on('mouseenter','.shop-car',function(){
                $box.css({
                'background':'none',
                })
                $('.phone-goods').empty()
                $('.phone-goods').stop().animate({
                    'height': 0 + 'px',
                },1);
                $('.phone-goods').hide();
                $('.logo').css({
                    'color': '#fff',
                })
                $('.my').css({
                    'background':'url(../images/my1.png) no-repeat',
                    'background-size': 30 + 'px',
                })
                $('.shop-car').css({
                    'background':'url(../images/shop-car1.png) no-repeat',
                    'background-size': 30 + 'px',
                })
                $liAll.each(function(){
                    $(this).children().css({
                        'color': '#fff',
                    })
                })
            })
            $box.on('mouseleave',function(){
                $box.css({
                    'background':'none',
                })
                $('.phone-goods').empty()
                $('.phone-goods').stop().animate({
                    'height': 0 + 'px',
                },1);
                $('.phone-goods').hide();
                $('.logo').css({
                    'color': '#fff',
                })
                $('.my').css({
                    'background':'url(../images/my1.png) no-repeat',
                    'background-size': 30 + 'px',
                })
                $('.shop-car').css({
                    'background':'url(../images/shop-car1.png) no-repeat',
                    'background-size': 30 + 'px',
                })
                $liAll.each(function(){
                    $(this).children().css({
                        'color': '#fff',
                    })
                })
            })
            $minBoxZ.on('mouseenter','.search',function(){
                $box.css({
                'background':'none',
                })
                $('.phone-goods').empty()
                $('.phone-goods').stop().animate({
                    'height': 0 + 'px',
                },1);
                $('.phone-goods').hide();
                $('.logo').css({
                    'color': '#fff',
                })
                $('.my').css({
                    'background':'url(../images/my1.png) no-repeat',
                    'background-size': 30 + 'px',
                })
                $('.shop-car').css({
                    'background':'url(../images/shop-car1.png) no-repeat',
                    'background-size': 30 + 'px',
                })
                $liAll.each(function(){
                    $(this).children().css({
                        'color': '#fff',
                    })
                })
            })
            $('.phone-goods').on('mouseenter','li',function(){
                $(this).stop().animate({
                    'opacity': '1',
                })
                $(this).siblings().stop().animate({
                    'opacity': '0.5',
                })

            })
            $('.phone-goods').on('mouseleave',function(){
                $(this).children().css({
                    'opacity': '1',
                })

            })
        }    
    }
}())