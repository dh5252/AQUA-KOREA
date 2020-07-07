/*@뒤 이메일 주소 함수*/
function checkemailaddy() {

    if (form.email_select.value == '1') {//직접 입력일 경우 (html에서 직접입력일 경우 value를 1로 설정해놓음)
        form.email2.readOnly = false;
        form.email2.value = '';
        form.email2.focus();
        //박스의 value에 아무것도 입력하지 않음 -> 박스에 직접 주소 입력
    }
    else {//다른 주소를 선택한 경우
        form.email2.readOnly = true;
        form.email2.value = form.email_select.value;
        //선택한 주소가 박스에 자동으로 입력되도록 설정
    }
}


/*예약 버튼 기능*/
function reservation() {
    //각각 입력한 값을 저장함
    var form = document.form;//form 저장
    var GroupName = form.GroupName.value;//단체명 저장
    var Name = form.Name.value;//예약자명 저장
    var Phone1 = form.Phone1.value;//핸드폰 번호 가운데 자리 저장
    var Phone2 = form.Phone2.value;//핸드폰 번호 끝자리 저장
    var email = form.email.value;//이메일 @앞 주소
    var email2 = form.email2.value;//이메일 @뒤 주소
    var VisitDate = form.VisitDate.value;//방문 날짜
    var VISIT_TIME = form.VISIT_TIME.value;//방문 시간
    var VisitNumber_adult = form.adult.value;//방문 성인 수
    var VisitNumber_highteen = form.highteen.value;//방문 청소년 수
    var VisitNumber_child = form.child.value;//방문 어린이 수
    var VisitNumber_teacher = form.teacher.value;//방문 인솔교사 수
    var more = form.more.value;


    if (!GroupName || !Name || !Phone1 || !Phone2 || !email || !VisitDate ||  !(VisitNumber_adult || VisitNumber_highteen || VisitNumber_child || VisitNumber_teacher)){
        //만약 하나라고 입력되지 않은 경우 정보를 입력하라고 알림
        //대인, 청소년, 어린이, 인솔교사 인원 수는 4가지 중 하나만 입력해도 모두 입력된 것으로 인정
        alert('정보를 빠짐없이 입력하시오');
    }
    else {//모두 입력한 경우
        alert('제출이 완료되었습니다.');//예약에 성공
        form.submit();

    }
}
