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
                // $box.on('input','input',function(){
                //     let val = $(this).val() - 0;
                //     let index = $(this).index('input');
                //     shopData[index].count = val;
                //     self.insterData(shopData)
                //     self.setCarData();
                // })
            },
            getData() {
                let data = localStorage.shopList || '[]'
                if(data != []){
                    // this.insterData(JSON.parse(data))
                    console.log(data);
                    
                }
            },
            insterData(data) {
                console.log(data);
                if(data != []){
                    $box.html(`<div id="title">
                    <div class="inp">
                        <input type="checkbox" name="check" id="check"> 全选
                    </div>
                    <span>单价(元)</span>
                    <span>数量</span>
                    <span>小计(元)</span>
                    <span class="lastsp">编辑</span>
                </div>`);
                    shopData = data
                    data.forEach(x => {
                        let html = `
                        
        <div id="show_car">
            <span class="addprice">加购价</span>
            <span class="content">另外再加19元起，即可换购超值商品</span>
            <span class="nowBuy">立即加购></span>
            <div class="show_wrap">
                <div class="inp">
                    <input type="checkbox" name="check" id="check">
                </div>
                <span class="bgsp"></span>
                <div class="details">
                    <span id="phoneName">${x.name}</span><br>
                    <span id="phoneNet" class="desp">${x.type} </span><span id="phoneColor" class="desp">${x.color} </span><span id="phoneMempry" class="desp">${x.memory} </span>
                </div>
                <span class="pricesp">￥<span id="phonePrice">${x.count * x.price}</span></span>
                <div class="add">
                    <span class="minus1">-</span><span class="shuliang">${x.count}</span><span class="add1">+</span>
                </div>
              <span class="xiaoji">${x.price}</span>
                <span class="bianji" id="bianji">--</span>
        </div>
       `
                        $box.append(html)
                    })
                }
               
            },
            setCarData(data) {
                localStorage.shopList = JSON.stringify(shopData)
            }
        }
}())