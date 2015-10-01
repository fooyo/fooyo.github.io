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
        autoScrolling: false,
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
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
    $('.bxslider').bxSlider({
        auto: true
    });
    $('.rotator').css("opacity", 1);
});