$(document).ready(function() {
    $('#close').click(function(){
        $('#menu').hide();
    });
    $('#menu').click(function(){
        $('#menu').hide();
    });
    $('#toggle').click(function(){
        $('#menu').show();
    });
    $(".rotate").textrotator({
        animation: "dissolve",
        speed: 4000
    });
    $("#app").click(function(){
        $("#serviceContainer").show();
        $('#serviceTitle').html("App");
        $('#serviceIcon').css("background", "url(images/app.png) no-repeat center");
        $('#serviceDescription').html("App is cool. App is fun. App is trendy. Above all, apps should be useful and helpful. Mobilising your ideas can be made easier when you are with us.");
    });
    $("#serviceContainer").click(function(){
        $("#serviceContainer").hide();
    });
    $("#web").click(function(){
        $("#serviceContainer").show();
        $('#serviceTitle').html("Web");
        $('#serviceIcon').css("background", "url(images/web.png) no-repeat center");
        $('#serviceDescription').html("Interactive design. Great user experience. Secure online transaction. We know the best how to build an extraordinary website that can impress, and more importantly, can complete your business masterplan.");
    });
    $("#all").click(function(){
        $("#serviceContainer").show();
        $('#serviceTitle').html("All in one");
        $('#serviceIcon').css("background", "url(images/all.png) no-repeat center");
        $('#serviceDescription').html("Wanting to build an empire for your business online? You need experts to help! By keeping all your expectations in mind, we strive to provide you with an integrated IT solution from day one.");
    });
    $('#wanmen').click(function(){
        $('#case').show();
        $('#case iframe')[0].src='wanmen.html';
    });
    $('#townsupper').click(function(){
        $('#case').show();
        $('#case iframe')[0].src='townsupper.html';
    });
    $('#corgi').click(function(){
        $('#case').show();
        $('#case iframe')[0].src='corgi.html';
    });
    $('#tut').click(function(){
        $('#case').show();
        $('#case iframe')[0].src='tut.html';
    });
    $('#cancel').click(function(){
        $('#case').hide();
        $('#case iframe')[0].src='';
    });
    $('#fullpage').fullpage({
        //Navigation
        menu: true,
        anchors:['home', 'aboutUs','services','works','contact'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['home', 'aboutUs','services','works','contact'],
        showActiveTooltips: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header',
        responsive: 1,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 2
            if(index == 2 && direction =='down'){
                $(".menu-toggle-button").trigger("mousedown");
            }

            if(index == 3){
                $(".menu-toggle-button").trigger("mousedown");
            }

            else if(index == 4 && direction == 'up'){
                $(".menu-toggle-button").trigger("mousedown");
            }
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
    var menuItemNum=$(".menu-item").length;
    var angle=120;
    var distance=150;
    var startingAngle=180+(-angle/2);
    var slice=angle/(menuItemNum-1);
    TweenMax.globalTimeScale(0.8);
    var scale = 1;
    $(".menu-item").each(function(i){
        var angle=startingAngle+(slice*i);
        $(this).css({
            transform:"rotate("+(angle)+"deg) scale("+scale+")",
            '-webkit-transform':"rotate("+(angle)+"deg) scale("+scale+")"
        });
        $(this).find(".menu-item-icon").css({
            transform:"rotate("+(-angle)+"deg) scale("+scale+")",
            '-webkit-transform':"rotate("+(-angle)+"deg) scale("+scale+")"
        })
    });
    $(".menu-item-button span").each(function(i){
        var angle=startingAngle+(slice*i);
        $(this).css({
            transform:"rotate("+(-angle)+"deg) scale("+scale+")",
            '-webkit-transform':"rotate("+(-angle)+"deg) scale("+scale+")"
        })
    });
    var on=false;

    $(".menu-toggle-button").mousedown(function(){
        TweenMax.to($(".menu-toggle-icon"),0.1,{
            scale:0.65
        })
    });
    $(document).mouseup(function(){
        TweenMax.to($(".menu-toggle-icon"),0.1,{
            scale:1
        })
    });
    $(document).on("touchend",function(){
        $(document).trigger("mouseup")
    });
    $(".menu-toggle-button").on("mousedown",pressHandler);
    $(".menu-toggle-button").on("touchstart",function(event){
        $(this).trigger("mousedown");
        event.preventDefault();
        event.stopPropagation();
    });

    function pressHandler(event){
        on=!on;

        TweenMax.to($(this).children('.menu-toggle-icon'),0.4,{
            rotation:on?45:0,
            ease:Quint.easeInOut,
            force3D:true
        });

        on?openMenu():closeMenu();

    }
    function openMenu(){
        $(".menu-item").each(function(i){
            var delay=i*0.08;

            var $bounce=$(this).children(".menu-item-bounce");

            TweenMax.fromTo($bounce,0.2,{
                transformOrigin:"50% 50%"
            },{
                delay:delay,
                scaleX:0.8,
                scaleY:1.2,
                force3D:true,
                ease:Quad.easeInOut,
                onComplete:function(){
                    TweenMax.to($bounce,0.15,{
                        // scaleX:1.2,
                        scaleY:0.7,
                        force3D:true,
                        ease:Quad.easeInOut,
                        onComplete:function(){
                            TweenMax.to($bounce,3,{
                                // scaleX:1,
                                scaleY:0.8,
                                force3D:true,
                                ease:Elastic.easeOut,
                                easeParams:[1.1,0.12]
                            })
                        }
                    })
                }
            });

            TweenMax.to($(this).children(".menu-item-button"),0.5,{
                delay:delay,
                y:distance,
                force3D:true,
                ease:Quint.easeInOut
            });
        })
    }
    function closeMenu(){
        $(".menu-item").each(function(i){
            var delay=i*0.08;

            var $bounce=$(this).children(".menu-item-bounce");

            TweenMax.fromTo($bounce,0.2,{
                transformOrigin:"50% 50%"
            },{
                delay:delay,
                scaleX:1,
                scaleY:0.8,
                force3D:true,
                ease:Quad.easeInOut,
                onComplete:function(){
                    TweenMax.to($bounce,0.15,{
                        // scaleX:1.2,
                        scaleY:1.2,
                        force3D:true,
                        ease:Quad.easeInOut,
                        onComplete:function(){
                            TweenMax.to($bounce,3,{
                                // scaleX:1,
                                scaleY:1,
                                force3D:true,
                                ease:Elastic.easeOut,
                                easeParams:[1.1,0.12]
                            })
                        }
                    })
                }
            });


            TweenMax.to($(this).children(".menu-item-button"),0.3,{
                delay:delay,
                y:0,
                force3D:true,
                ease:Quint.easeIn
            });
        })
    }
    $('.bxslider').bxSlider();
});