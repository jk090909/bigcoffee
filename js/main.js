// main.js


$(function(){
    $('.btn_toggle').on('click', function(){
        $('#gnb').show();
    });


    // 메인메뉴 닫기
    $('.btn_close').on('click', function(){
        $('#gnb').hide();
    });
});