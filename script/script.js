$(document).ready(function(){
    //상단 좌측 앱 다운로드
    open1 = $('.open1') ;
    box = $('.header-top_download_box') ;

    open1.click(function(){
        box.toggle(function(){
            box.addClass('show')
        },function(){
            box.addClass('hide')
        });
    });
});



$(document).ready(function(){
//상단 메뉴네비 슬라이드
 $('.header-bottom_nav > ul > li').hover(function(){
    $(this).find('.subnav-wrap').stop().fadeIn(0.5);
 },function(){
    $(this).find('.subnav-wrap').stop().fadeOut(0.5);
 }); 
});





$(document).ready(function(){
    //카드 슬라이드
    var num = 1;

    setInterval(function(){
        if(num < 8){
            num++;
            $('.card-slide_bar_itemslist').animate({
                top: '-=55px'
            },'slow');
        }else{
            num = 1;
            $('.card-slide_bar_itemslist').animate({
                top: 0
            },'slow');
        }
    },3000);
});