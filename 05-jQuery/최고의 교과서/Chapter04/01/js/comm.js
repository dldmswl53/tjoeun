$(function () {

    let duration = 300;
    // 1~4번째 버튼 선택
    $('#buttons1 button:nth-child(-n+4')
    .mouseenter(function () {
        $(this).stop().animate({
            'background-color': 'purple',
            'color': 'white'
        }, duration, 'easeInOutCirc')
    })
    .mouseleave(function () {
        $(this).stop().animate({
            'background-color': 'white',
            'color': '#edb000'
        }, duration, 'easeInOutCirc')
    })

    // 5~8번째 버튼에 마우스 오버했을 때
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8')
        .mouseenter(function () {
            $(this).stop().animate({
                'border-width': '10px',
                'color': 'purple'
            }, duration, 'easeInOutCirc')
        })
        .mouseleave(function () {
            $(this).stop().animate({
                'border-width': '0px',
                'color': '#edb000'
            }, duration, 'easeInOutCirc')
        })


    $('#buttons1 button:nth-child(n+9):nth-child(-n+12')
        .mouseenter(function () {
            $(this).find('span').stop().animate({
                'width': '100%'
            }, duration, 'easeInOutCirc')
        })
        .mouseleave(function () {
            $(this).find('span').stop().animate({
                'width': '0%'
            }, duration, 'easeInOutCirc')
        })
            




})