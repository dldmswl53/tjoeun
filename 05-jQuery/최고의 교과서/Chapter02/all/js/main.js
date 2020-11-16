// typo에 마우스오버시
// 1. 백그라운드를 퍼플로 변경
// 2.h1의 컬러를 퍼플로 변경

$(function () {
    $('#typo')
        .mouseenter(function () {
            $(this).css({
                    'background': 'purple'
                })
                .mouseleave(function () {
                    $(this).css({
                        'background': ''
                    })
                    $('h1').css({
                        'background': ''
                    })
                })
        })
    $('h1').mouseenter(function () {
        $(this).css({
            'background': 'purple'
        })
    })

})