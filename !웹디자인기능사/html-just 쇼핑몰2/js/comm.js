// 준비 이벤트
$(function () {
    // 명령문

    // tab
    $(".tap > section").click(function () {
        $(".tap > section").removeClass("on");
        $(this).addClass("on");
    })

    // modal
    // modal창 열기
    $(".col2 img").click(function () {
        $("#modal").show();
    })
    // modal button을 클릭했을 때
    $("#modal button").click(function () {
        $("#modal").hide();
    })

    // slide
    let now = 1, // 현재 보여지는 이미지를 now변수에 지정
        width = 100; // 이미지의 가로 사이즈를 width 변수에 지정



    setInterval(function () {

        // if(조건){참일경우 실행문}else{거짓일 경우
        // 첫번째 두번재 이미지 일 경우
        if (now < 3) {
            $(".slide ul").animate({
                left: (width * now * (-1)) + "%"
            })
            now++ //now++ = now+1; 
        } else {
            $(".slide ul").animate({
                left: 0
            })
            now = 1;
        }



    }, 4000) //3초마다 실행 






})