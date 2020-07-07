
//어른 티켓
var sell_price; //판매 가격 변수
var amount; //티켓 갯수 변수

function init () {  //init함수, 대입
  sell_price = document.form.sell_price.value;  //sell_price에 html문서의 form의 sell_price값 대입(판매 가격 대입)
  amount = document.form.amount.value;  //amount에 html문서의 form의 amount값 대입(티켓 갯수 대입)

  change();   //change함수 호출
}

function add () {   //add 함수, +버튼을 눌렀을 때 호출됨
  hm = document.form.amount;  //hm에 html문서의 form의 amount값 대입(티켓 갯수 대입)
  sum = document.form.sum;  //sum에 html문서의 form의 sum값 대입(티켓 총가격 대입)
  hm.value ++ ; //hm의 값을 1증가 시킴

  sum.value = parseInt(hm.value) * sell_price;  //parseInt함수를 이용해 hm값을 정수형으로 바꾸고, hm과 판매 가격(sell_price)을 곱한 값을 sum에 대입
}


function del () { //del 함수, -버튼을 눌렀을 때 호출됨
  hm = document.form.amount;  //hm에 html문서의 form의 amount값 대입(티켓 갯수 대입)
  sum = document.form.sum;  //sum에 html문서의 form의 sum값 대입(티켓 총가격 대입)
    if (hm.value > 0) { //hm의 값이 0보다 클 경우에만 실행(티켓 갯수가 -가 되면 안되므로)
      hm.value -- ; //hm의 값을 1감소 시킴
      sum.value = parseInt(hm.value) * sell_price;  //parseInt함수를 이용해 hm값을 정수형으로 바꾸고, hm과 판매 가격(sell_price)을 곱한 값을 sum에 대입
    }
}

function change () {  //change함수, 출력용
  hm = document.form.amount;  //hm에 html문서의 form의 amount값 대입(티켓 갯수 대입)
  sum = document.form.sum;  //sum에 html문서의 form의 sum값 대입(티켓 총가격 대입)

    if (hm.value < 0) { //티켓갯수가 0보다 작으면
      hm.value = 0; //0대입
    }
  sum.value = parseInt(hm.value) * sell_price;  //parseInt함수를 이용해 hm값을 정수형으로 바꾸고, hm과 판매 가격(sell_price)을 곱한 값을 sum에 대입
}

//어린이 티켓

var sell_price_k; //판매 가격 변수
var amout_k;  //티켓 갯수 변수

function init_k () {  //init_k함수, 대입
  sell_price_k = document.form_k.sell_price_k.value;  //sell_price_k에 html문서의 form_k의 sell_price_k값 대입(판매 가격 대입)
  amount_k = document.form_k.amount_k.value;  //amount_k에 html문서의 form_k의 amount_k값 대입(티켓 갯수 대입)

  change_k(); //change_k함수 호출
}
function add_k () { //add_k 함수, +버튼을 눌렀을 때 호출됨
  hm_k = document.form_k.amount_k;  //hm_k에 html문서의 form_k의 amount_k값 대입(티켓 갯수 대입)
  sum_k = document.form_k.sum_k;  //sum_k에 html문서의 form_k의 sum_k값 대입(티켓 총가격 대입)
  hm_k.value ++ ; //hm_k의 값을 1증가 시킴

  sum_k.value = parseInt(hm_k.value) * sell_price_k;  //parseInt함수를 이용해 hm_k값을 정수형으로 바꾸고, hm_k과 판매 가격(sell_price_k)을 곱한 값을 sum_k에 대입
}
function del_k () { //del_k 함수, -버튼을 눌렀을 때 호출됨
  hm_k = document.form_k.amount_k;  //hm_k에 html문서의 form_k의 amount_k값 대입(티켓 갯수 대입)
  sum_k = document.form_k.sum_k;  //sum_k에 html문서의 form_k의 sum_k값 대입(티켓 총가격 대입)
    if (hm_k.value > 0) { //hm_k의 값이 0보다 클 경우에만 실행(티켓 갯수가 -가 되면 안되므로)
      hm_k.value -- ; //hm_k의 값을 1감소 시킴
      sum_k.value = parseInt(hm_k.value) * sell_price_k;  //parseInt함수를 이용해 hm_k값을 정수형으로 바꾸고, hm_k과 판매 가격(sell_price_k)을 곱한 값을 sum_k에 대입
    }
}
function change_k () {  //change_k함수, 출력용
  hm_k = document.form_k.amount_k;  //hm_k에 html문서의 form_k의 amount_k값 대입(티켓 갯수 대입)
  sum_k = document.form_k.sum_k;  //sum_k에 html문서의 form_k의 sum_k값 대입(티켓 총가격 대입)

    if (hm_k.value < 0) { //티켓갯수가 0보다 작으면
      hm_k.value = 0; //0대입
    }
  sum_k.value = parseInt(hm_k.value) * sell_price_k;  //parseInt함수를 이용해 hm_k값을 정수형으로 바꾸고, hm_k과 판매 가격(sell_price_k)을 곱한 값을 sum에 대입
}


function btn() {  //구매하기 버튼을 눌렀을 경우
  alert('결제가 완료되었습니다!');  //결재완료 알림창
}
