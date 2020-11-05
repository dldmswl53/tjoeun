$(function () {
    $('.slideshow').each(function () {


        let $슬라이드이미지 = $(this).find('img'),
                슬라이드갯수 = $슬라이드이미지.length,
                현재이미지 = 0

        // 첫번째 이미지를 페이드인
        $슬라이드이미지.eq(현재이미지).fadeIn()
        // 3초 후에 다음 슬라이드 이미지를 fade in
        setInterval(다음슬라이드,3000)

        // 다음 슬라이드를 표시하는 함수
        function 다음슬라이드(){

            let 다음이미지 = 현재이미지 + 1
            // 현재 이미지 페이드 아웃
            $슬라이드이미지.eq(현재이미지).fadeOut();


            // 다음 이미지를 페이드 인
            $슬라이드이미지.eq(다음이미지).fadeIn();

        }

    })







})