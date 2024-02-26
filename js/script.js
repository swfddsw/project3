//메뉴 클릭시 사이드 출력
$('.menu .allbtn_open').click(function(e){
  e.preventDefault();
  let c = $('.menu_mo').css('display')
  if(c == 'none'){
    $('.menu_mo').addClass('on')
  }
})
//x버튼 클릭시 사이드 축소
$('.mm1').click(function(e){
  e.preventDefault();
  $('.menu_mo').removeClass('on')
})
// 사이드메뉴 아코디언 생성
$('.menu_mo h3').click(function(e){
  e.preventDefault();
  let d = $(this).siblings('.menu_list').css('display');
  if(d == 'none'){
    $('.menu_mo h3').removeClass('active')
    $('.menu_mo .menu_list').slideUp();
    $(this).addClass('active');
    $(this).siblings('.menu_list').slideDown();
  }else{
    $(this).removeClass('active');
    $(this).siblings('.menu_mo .menu_list').slideUp()
  }
})
$('.m1_card ul').slick({
  arrows : false,
  slidesToShow:3,
  slidesToScroll: 1,
})
$('.main3_in ul').slick({
  arrows : false
})
$('.m3img ul').slick({
  prevArrow : $('.m3left'),
  nextArrow : $('.m3right') 
})
$('.start').click(function(){
  let dis = $('.start_select').css('display')
  if(dis == 'none'){
    $('.end_select').css('display','none')
    $('.start_select').css('display','block')
  }else{
    $('.start_select').css('display','none')
  }
})
$('.start_close').click(function(){
  $('.start_select').css('display','none')
})

$('.end').click(function(){
  let dis = $('.end_select').css('display')
  if(dis == 'none'){
    $('.start_select').css('display','none')
    $('.end_select').css('display','block')
  }else{
    $('.end_select').css('display','none')
  }
})
$('.end_close').click(function(){
  $('.end_select').css('display','none')
})

$('.rr_c').click(function(){
  let dis = $('.seatclass').css('display')
  if(dis == 'none'){
    $('.seatclass').css('display','block')
  }else{
    $('.seatclass').css('display','none')
  }
})
$('.seat_close').click(function(){
  $('.seatclass').css('display','none')
})
