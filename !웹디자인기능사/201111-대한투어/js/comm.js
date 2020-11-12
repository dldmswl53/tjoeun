
    $(function(){
        $('.tab >section').click(function(){
            $('.tab>section').removeClass('on')
            $(this).addClass('on')
        })

    })

    $(function(){
        $('.slideshow').each(function(){
            let $슬라이드이미지 = $(this).find('img'),
            슬라이드갯수 = $슬라이드이미지.length,
            현재이미지 = 0
    
            $슬라이드이미지.eq(현재이미지).fadeIn(
                setInterval(다음슬라이드,3000));
            
            function 다음슬라이드(){
                let 다음이미지 = (현재이미지 + 1) % 슬라이드갯수
    
                $슬라이드이미지.eq(현재이미지).fadeOut()
    
                $슬라이드이미지.eq(다음이미지).fadeIn()
                
                현재이미지 = 다음이미지;
            }
    })
    $(function(){
        $(".col2 img:eq(0)").click(function () {
            $("#modal .inner").show();
        })
        // modal button을 클릭했을 때
        $("#modal button").click(function () {
            $("#modal").hide();
        })
    })




    })