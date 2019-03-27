var search = (function () {
    let $box, $inp, $ulbox;
    return {
        init() {
            $box = $('form');
            $inp = $box.children('.search');
            $ulbox = $box.children('.search-box');
            this.event();
        },
        event() {
            const self = this;
            $inp.on('focus', function () {
                self.show();
                self.getData($inp.attr('placeholder'));
                $box.animate({
                    'height': $box.height() + $ulbox.height() + 'px'
                })
            })
            $inp.on('input', function () {
                if ($inp.val() == "") {
                    self.getData($inp.attr('placeholder'));
                    self.show();
                } else {
                    self.getData($inp.val());
                    self.show();
                }
            })
            $inp.on('click', function (e) {
                e.stopPropagation();
                if ($inp.val() == "") {
                    self.getData($inp.attr('placeholder'));
                    self.show();
                } else {
                    self.getData($inp.val());
                    self.show();
                }
            })
            $box.on('mouseleave', function () {
                self.hide();
            })
            $(document).on('click', function () {
                self.hide();
            })
            $ulbox.on('click', 'li', function () {
                $inp.val($(this).html());
                self.getData($inp.val());
                self.hide();
            })
        },
        getData(val) {
            const url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
                data = {
                    wd: val,
                    cb: "search.insertData",
                }
            $.ajax({
                type: "get", url, data, async: true, dataType: 'jsonp', success: function (data) {

                }
            })
        },
        insertData(data) {
            $ulbox.html("");
            for (let i = 0; i < 5; i++) {
                const $li = $('<li>');
                $li.html(data.s[i])
                $ulbox.append($li);
            }

        },
        show() {
            if ($inp.value != '') {
                $box.animate({
                    'height': 30 + $ulbox.height() + 'px'
                })
                $ulbox.css({
                    'display': 'block'
                })
            }
        },
        hide() {
            $box.animate({
                'height': 30 + 'px',
            }, 100)
            $ulbox.css({
                'display': 'none'
            })
        }
    }
}())
