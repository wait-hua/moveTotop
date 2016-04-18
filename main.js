$(document).ready(function(){
    
    $(window).scroll( function() {               //滚动时触发
        var top = $(document).scrollTop();       //获取滚动条到顶部的垂直高度
        var height = $(window).height();     //获得可视浏览器的高度
        if(top > 1/10*height){                           //到一定高度显示
            $("#moveTotop").fadeIn(300);
        }else {                            
            $("#moveTotop").fadeOut(300);
        }
    });
    /*点击回到顶部*/
    $('#moveTotop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});
