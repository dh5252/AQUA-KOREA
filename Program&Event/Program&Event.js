
$(document).ready(function(){

	$('ul.tabs li').click(function(){ // 진행중/종료 탭을 클릭 시
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current'); // 커렌트 상태를 제거하고

		$(this).addClass('current');
		$("#"+tab_id).addClass('current'); // 클릭한 탭에 커렌트 상태를 더한다.
	})

})
