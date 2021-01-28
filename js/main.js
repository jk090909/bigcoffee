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

// 이미지 슬라이더 : fade효과
let num = 1;
let slider = setInterval(function(){
  if(num > 2) { num = 0; }
  // 전체 이미지 fade out
  $('.slider > img').removeClass('show');
  // 다음 이미지 표시
  $('.slider > img').eq(num).addClass('show');
  console.log(num)
  num++;
}, 3000);