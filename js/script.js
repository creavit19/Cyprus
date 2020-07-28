$(document).ready(function(){
    // Слайдер 1 --------------------------
    window.sl1 = $('.slider1');
    sl1.slick({
      autoplay: true,
      arrows: false
    });
    $('#arrow-left').click(()=>{sl1.slick('slickPrev')});
    $('#arrow-right').click(()=>{sl1.slick('slickNext')});
    $('.wrap-slider1 .numbers>:first-child').click(()=>{sl1.slick('slickGoTo', 0)});
    let i=0;
    document.querySelectorAll('.wrap-slider1 .numbers>*').forEach(item=>{
      handler = createGoToSlide(i++);
      item.onclick = handler;
    });
    sl1.on('afterChange', function(event, slick, currentSlide){
      removeClassActive(document.querySelectorAll('.wrap-slider1 .numbers>*'));
      document.querySelector(`.wrap-slider1 .numbers>*:nth-child(${currentSlide+1})`).classList.add('active');
      document.querySelector('.wrap-slider1 .info').innerText = dataSlider1[currentSlide];
    });
    // Слайдер 2 ----------------------------
    window.sl2 = $('.slider2');
    sl2.slick({
      autoplay: true,
      arrows: false
    });
    $('#arrow-left2').click(()=>{sl2.slick('slickPrev')});
    $('#arrow-right2').click(()=>{sl2.slick('slickNext')});
    // Слайдер 3 ------------------------------
    window.sl3 = $('#roundabout-holder');
    sl3.roundabout({
      minOpacity:1,
      minScale:0.4,
      maxScale:1,
      duration:600,
      easing:'swing',
      autoplay:true,
      autoplayDuration:3000,
      autoplayPauseOnHover:false,
      reflect:false,
      enableDrag:false,
      responsive:true,
      btnNext:'#roundabout-next',
      btnPrev:'#roundabout-prev'
    });
    function indicateControl(){
      removeClassActive(document.querySelectorAll('#roundaboutslider .numbers>*')); 
      document.querySelector(`#roundaboutslider .numbers>*:nth-child(${sl3.roundabout("getNearestChild")+1})`).classList.add('active');
    }
    sl3.on('moveClockwiseThroughBack', indicateControl);
    sl3.on('moveCounterclockwiseThroughBack', indicateControl);
    i=0;
    document.querySelectorAll('#roundaboutslider .numbers>*').forEach(item=>{
      handler = createGoToRoundSlide(i++);
      item.onclick = handler;
    });
});

function createGoToSlide(i){
  return function(){sl1.slick('slickGoTo', i)};
}
function removeClassActive(collection){
  collection.forEach(item=>{
    item.classList.remove('active');
  });
}
function createGoToRoundSlide(i){
  return function(){sl3.roundabout("animateToChild", i)};
}
// Прокрутка в начало страницы
var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',5);
	} else clearTimeout(t);
	return false;
}
document.getElementById('up').onclick = up;