

$(function () {
    // hamburger icon 的切換
    $("button.hamburger").on("click", function () {
        $(this).toggleClass("is-active");
        $('.nav_mob').slideToggle().css('display', 'flex')
    });

    //賽事表切換
    $(".mob_sch_but").on("click", function () {
        // $(this).toggleClass("is-active");
        $('.sch').slideToggle().css('display', 'flex')
    });

});

var isClick = true
$(function () {            //頁面寬度改變，重設賽式表距離
    window.onresize = function () {
        $('.item').css({
            right: 0
        })
        $(".left_but button").attr('disabled', true)
        $(".right_but button").attr('disabled', false)
    }


    //右側按鈕
    $(".right_but button").on("click", function () {
        var width = $('.last_item').position().left //距離左邊按鈕的寬度
        var fullWidth = $('.sch_inner').width() //父元素寬度
        var right_margin = fullWidth - width//距離右邊按鈕的寬度

        if (isClick) {
            isClick = false;
            //定時器
            setTimeout(function () {
                isClick = true;
            }, 500);//0.5秒内不能重複點擊

            if (right_margin > 0 && right_margin < 150) {
                $('.item').css({
                    right: '+=150px'
                })
                $(this).attr('disabled', true)
            } else if (right_margin < 150) {

                $('.item').css({
                    right: '+=150px'
                })
            } else {
                $(this).attr('disabled', true)
            }
            $(".left_but button").attr('disabled', false)
        }


    });

    //左側按鈕
    $(".left_but button").attr('disabled', true)
    $(".left_but button").on("click", function () {
        var left_margin = $('.first_item').position().left //距離左邊按鈕距離

        if (isClick) {
            isClick = false;
            //定時器
            setTimeout(function () {
                isClick = true;
            }, 500);//0.5秒内不能重複點擊
            console.log(left_margin)
            if (left_margin < -150 && left_margin > -151) {
                $('.item').css({
                    right: '-=150px'
                })
                $(this).attr('disabled', true)
                // return
            } else if (left_margin == -150) {
                $('.item').css({
                    right: '-=150px'
                })
                $(this).attr('disabled', true)
            }
            else if (left_margin < 0) {
                $('.item').css({
                    right: '-=150px'
                })
            } else {
                $(this).attr('disabled', true)
            }
            $(".right_but button").attr('disabled', false)
        }
    });
});

