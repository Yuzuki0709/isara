$(function(){
    $('.question_box').click(function(){
        var $answer = $(this).find('.answer');

        if($answer.hasClass('open')){
            $answer.slideUp(250);
            $answer.removeClass('open');
            $(this).find('.change-icon').html('<i class="fas fa-chevron-down question_right"></i>')
        }
        else{
            $answer.slideDown(250);
            $answer.addClass('open');
            $(this).find('.change-icon').html('<i class="fas fa-chevron-up question_right"></i>')
        }
    });

    $('.box_sec11').click(function(){
        var $right = $(this).find('.box_right');

        if($right.hasClass('open')){
            $right.slideUp(250);
            $right.removeClass('open');
            $(this).find('.change-sec11').html('<i class="fas fa-chevron-down"></i>');
        }
        else{
            $right.slideDown(250);
            $right.addClass('open');
            $(this).find('.change-sec11').html('<i class="fas fa-chevron-up"></i>');
        }
    });

    var $pageTop = $('#page-top');
    $pageTop.hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $pageTop.fadeIn();
        }
        else{
            $pageTop.fadeOut();
        }
    });

    $pageTop.click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('.link-request').click(function(){
        var adjust = -45;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href); 
        var position = target.offset().top + adjust;

        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return falese;
    });
 });