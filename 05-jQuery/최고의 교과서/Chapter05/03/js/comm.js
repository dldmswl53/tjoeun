$(function () {
    $('.page-header').each(function () {

        let 헤더 = $(this),
        $윈도우스크롤값 = $(window).scrollTop(),
        $헤더위치 = 헤더.offset().top

        // 윈도우의 스크롤 값: $(window).scrollTop()
        // 헤더의  top 위치 값:$('.page-header').offset().top
        $(window).on('scroll', function () {
            console.log('윈도우의 스크롤 값: ' + $윈도우스크롤값 )
            console.log('헤더의  top 위치 값: ' + $헤더위치 )

            // 만약 윈도우의 스크롤 값이 헤더의 top 위치 값 보다 커지면
            // .page-header' 에서 sticky 클래스를 추가해주고
            // 아닐 경우
            // .page-header' 에서 sticky 클래스를 삭제
            if ($윈도우스크롤값 > $('.page-header').offset().top) {
                헤더.addClass('sticky')
            } else {
                헤더.removeClass('sticky')
            }
        })
    })


})