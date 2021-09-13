(function($, window, document){
    
    var wix={
        
        init:function(){
            this.scrollEvent();
            this.header();
            this.section4();
            this.section5();
            this.section6();
        },
        scrollEvent:function(){

            var s2Top = $('#section2').offset().top-80;
            var s5Top = $('#section5').offset().top-80;
            var s8Top = $('#section8').offset().top-80;
            var s9Top = $('#section9').offset().top-80;

            $(window).scroll(function(){
                if($(window).scrollTop()==0){
                    $('.main-btn').removeClass('addHover')
                    $('.main-btn').eq(0).addClass('addHover')
                }
                
                if($(window).scrollTop()>s2Top){
                    $('.main-btn').removeClass('addHover')
                    $('.main-btn').eq(2).addClass('addHover')
                }
                if($(window).scrollTop()>s5Top){
                    $('.main-btn').removeClass('addHover')
                    $('.main-btn').eq(3).addClass('addHover')
                }
                if($(window).scrollTop()>s8Top){
                    $('.main-btn').removeClass('addHover')
                    $('.main-btn').eq(4).addClass('addHover')
                }
                if($(window).scrollTop()>s9Top){
                    $('.main-btn').removeClass('addHover')
                    $('.main-btn').eq(5).addClass('addHover')
                }        
            })
        },
        header:function(){
            $('.main-btn').on({
                click:function(){
                    $('.main-btn').removeClass('addHover')
                    $(this).addClass('addHover')
                }
            })
            $('.main-btn').eq(0).on({
                click:function(){
                    $('html,body').stop().animate({scrollTop:$('#section1').offset().top-80},1000,'easeInOutExpo')
                }
            })
            $('.main-btn').eq(2).on({
                click:function(){
                    $('html,body').stop().animate({scrollTop:$('#section2').offset().top-80},1000,'easeInOutExpo')
                }
            })
            $('.main-btn').eq(3).on({
                click:function(){
                    $('html,body').stop().animate({scrollTop:$('#section5').offset().top-80},1000,'easeInOutExpo')
                }
            })
            $('.main-btn').eq(4).on({
                click:function(){
                    $('html,body').stop().animate({scrollTop:$('#section8').offset().top-80},1000,'easeInOutExpo')
                }
            })
            $('.main-btn').eq(5).on({
                click:function(){
                    $('html,body').stop().animate({scrollTop:$('#section9').offset().top-80},1000,'easeInOutExpo')
                }
            })
        },
        section4:function(){
            var s4Top = $('#section4').offset().top-500;

            $(window).scroll(function(){
                if($(window).scrollTop()>s4Top){
                    $('.title').addClass('addAni')
                    $('.sub-title').addClass('addAni')
                }
                
                if($(window).scrollTop()==0){
                    $('.title').removeClass('addAni')
                    $('.sub-title').removeClass('addAni')
                }
            })
        },
        section5:function(){
            $('.img-op').mouseenter(function(){
                $(this).addClass('addImg')
            });
            $('.img-op').mouseleave(function(){
                $(this).removeClass('addImg')
            });
        },
        section6:function(){
            
            $('#section7').on({
                click:function(){
                    $('.outline-img').removeClass('addclick')
                }
            })

            $('.outline-img').on({
                click:function(){
                    $('.outline-img').removeClass('addclick')
                    $(this).addClass('addclick')
                }
            })

        }
    };

    wix.init();

})(jQuery, window, document);