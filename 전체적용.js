$(document).ready(function(){
  $(".MainMenu ul").hover(function(){  // 메인메뉴 리스트에 hover하면
    $(".SubMenu",this).stop().slideDown(300); // 서브메뉴가 0.3초 동안  내려옴
  },

  function(){
    $(".SubMenu",this).stop().slideUp(300);  // 만약 hover상태가 풀리면 0.3초 동안 올라감
  });
})



$(document).ready(function () {
        $('html, body').animate({ //html과 body에서, 즉 페이지에 처음 들어갈때,
            scrollTop: $('.Content').offset().top // 컨텐츠 클래스로 스크롤된다.
        }, 'fast');
    });


$(document).ready(function() {
       var menu_offset = $('.TopBar').offset(); //menu_offset 변수에 TopBar 좌표를 저장.
       $(window).scroll(function() { // 스크롤이 일어나고
         if ($(document).scrollTop() > menu_offset.top) { //스크롤의 좌표가 TopBar좌표보다 크다면
           		$('.TopBar').addClass('TopBar-fixed'); // TopBar에 fixed상태를 추가한다.
         }
         else {
           		$('.TopBar').removeClass('TopBar-fixed'); // 스크롤의 좌표가 TopBar의 좌표보다 작거나 같다면 fixed 상태를 제거한다.
         }
       });
  });
