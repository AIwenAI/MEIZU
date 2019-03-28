var table = (function(){
    let $box,shopData;
        return {
            init($ele) {
                $box = $($ele)
                this.getData()
                this.event()
            },
            event() {
                const self = this
                $box.on('click','button',function(){
                    let index = $(this).index('button')
                    shopData.splice(index, 1);
                    self.insterData(shopData)
                    self.setCarData();
                })
                $box.on('input','input',function(){
                    let val = $(this).val() - 0;
                    let index = $(this).index('input');
                    shopData[index].count = val;
                    self.insterData(shopData)
                    self.setCarData();
                })
            },
            getData() {
                let data = localStorage.shopList || '[]'
                this.insterData(JSON.parse(data))
            },
            insterData(data) {
                $box.html('');
                shopData = data
                data.forEach(x => {
                    let html = `
                    <div>
                        商品名称: <span>${x.name}</span><br />
                        商品数量: <input type="number" value="${x.count}"><br />
                        商品价格: <span>${x.price}</span><br />
                        商品总价: <span>${x.count * x.price}</span><br />
                        商品提示: <span>${x.ps}</span><br />
                        <button>删除</button>
                    </div>`
                    $box.append(html)
                })
            },
            setCarData(data) {
                localStorage.shopList = JSON.stringify(shopData)
            }
        }
}())