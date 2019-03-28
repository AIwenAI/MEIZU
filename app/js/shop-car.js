var table = (function(){
    let $box,shopData;
        return {
            init() {
                $box = $('.gouwu');
                this.getData()
                this.event()
            },
            event() {
                const self = this
                    // $box.on('click','button',function(){
                    //     let index = $(this).index('button')
                    //     shopData.splice(index, 1);
                    //     self.insterData(shopData)
                    //     self.setCarData();
                    // })
                $box.on('click','.minus1',function(){
                    let val = $(this).siblings('.shuliang').html() - 0;
                    if(val != 1){
                        --val;
                        $(this).siblings('.shuliang').html(val);
                    }
                    let index = $(this).parent().parent().parent().index() - 1;
                    $(this).parent().siblings('.xiaoji').html(val * $('#phonePrice').html());
                    console.log($('#phonePrice').html());
                    shopData[index].count = val;
                    // self.insterData(shopData);
                    self.setCarData();
                })
                $box.on('click','.add1',function(){
                    let val = $(this).siblings('.shuliang').html() - 0;
                    ++val;
                    $(this).siblings('.shuliang').html(val);
                    let index = $(this).parent().parent().parent().index() - 1;
                    
                    $(this).parent().siblings('.xiaoji').html(val * $('#phonePrice').html());
                    shopData[index].count = val;
                    // self.insterData(shopData);
                    self.setCarData();
                })
                $box.on('click','.lastsp',function(){
                    if($('.lastsp').html() == '编辑'){
                        $('.lastsp').html('完成') 
                        $('.bianji').html("<button  data-toggle='modal' data-target='.bs-example-modal-sm' class='btn btn-danger remo'>删除</button>"); 
                    }else if($('.lastsp').html() == '完成'){
                        $('.lastsp').html('编辑')
                        $('.bianji').html('<em>--</em>');
                    }
                })
                let index = null;
                $('.remo').on('click',function(){
                    const _this = this;
                    index = $(this).parent().parent().index() - 1;
                    console.log(1);
                    // debugger
                    
                    // $('.btn-default').on('click',function(){
                    //     location.reload();
                    // })
                        // $(this).parent().parent().remove();
                })
                $('.btn-del').on('click',function(){
                    // debugger
                    shopData.splice(index, 1);
                    location.reload();
                    console.log(1);
                    // self.insterData(shopData);
                    self.setCarData();
                })
                
                $('#all').on('click',function(){
                    if($('#all').prop('checked')){
                        // console.log($('#show_car .dan'));
                        $('#show_car .dan').each(function(){
                            $(this).prop('checked',true)
                        })
                    }else{
                        $('#show_car .dan').each(function(){
                            $(this).prop('checked',false)
                        })
                    }
                        
                })
                $('#show_car .dan').click(function(){
                    let bool = true
                    $('#show_car .dan').each(function(){
                        if(!$(this).prop('checked')){
                            $('#all').prop('checked',false)
                            bool = false
                            // return false;
                        }
                        // else{
                        //     $('.all').prop('checked',true)
                        // }
                    })
                    if(bool){
                        $('#all').prop('checked',true)
                    }
                })
                $('.details').on('click',function(){
                    location.href = 'xxx-shop.html';
                    console.log(1);
                    
                })
            },
            getData() {
                let data = localStorage.shopList || '[]'
                if(data != []){
                    this.insterData(JSON.parse(data))
                    
                }
            },
            insterData(data) {
                shopData = data;
                if(data.length != 0){
                    $box.html(`<div id="title">
                    <div class="inp">
                        <input type="checkbox" name="check" id="all"> 全选
                    </div>
                    <span>单价(元)</span>
                    <span>数量</span>
                    <span>小计(元)</span>
                    <span class="lastsp">编辑</span>
                </div>`);
                    data.forEach(x => {
                        let html = `
                        
        <div id="show_car">
            <span class="addprice">加购价</span>
            <span class="content">另外再加19元起，即可换购超值商品</span>
            <span class="nowBuy">立即加购></span>
            <div class="show_wrap">
                <div class="inp">
                    <input type="checkbox" name="check" class="dan">
                </div>
                <span class="bgsp"></span>
                <div class="details">
                    <span id="phoneName">${x.name}</span><br>
                    <span id="phoneNet" class="desp">${x.type} </span><span id="phoneColor" class="desp">${x.color} </span><span id="phoneMempry" class="desp">${x.memory} </span>
                </div>
                <span class="pricesp">￥<span id="phonePrice">${x.price}</span></span>
                <span class="add">
                    <a href="javascript:void(0);" title="减少" class="minus1">-</a>
                    <span class="shuliang">${x.count}</span>
                    <a href="javascript:void(0);" title="增加" class="add1">+</a>
                </span>
                <span class="xiaoji">${x.count * x.price}</span>
                <span class="bianji" id="bianji"><em>--</em></span>
        </div>
       `
                        $box.append(html)
                    })
                }else{
                    $box.html(` <div class="gwc">
                    <img src="img/gwc.png">
                        <ul class="aa">
                            <li><span>你还没有登录</li>
                            <li><p>登录后可显示你账号中已加入的商品哦~~</p></li>
                            <li><a href="log_second.html">去登录</a></li>
                        </ul>
                </div>`)
                }
               
            },
            setCarData(data) {
                localStorage.shopList = JSON.stringify(shopData)
            }
        }
}())