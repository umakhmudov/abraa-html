$(document).ready(function(){

    //init selectbox plugins

    //for dropdown on search bar
    $('#headerSearchType').selectBox({
        mobile: true
    });

    //for dropdown for language selection (header)
    $('#headerLang').selectBox({
        mobile: true
    });

    //for dropdown for language selection (slide out navigation)
    $('#sidebarLang').selectBox({
        mobile: true
    });

    $('.plain-white-dropdown').selectBox({
        mobile: true
    });

    //toggle search bar on mobile
    $('.mobile_search_toggle_btn').click(function(e){
        e.preventDefault();
        $('.header-search-section').toggleClass('active');
    });

    //match heights on product boxes
    $('.product-box').matchHeight();

    //collapse/expand product filters
    $('.collapse-filter-btn').click(function(e){
        e.preventDefault();
        var collapse_area_id = $(this).attr('data-collapse-section');
        var collapse_area = $('#'+collapse_area_id);
        $(this).toggleClass('collapsed');

        if($(this).hasClass('collapsed')){
            //if it's collapsed, set plus sign and hide the area
            collapse_area.addClass('hidden');
            $(this).find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
        } else {
            //if it's expanded, set minus sign and show the area
            collapse_area.removeClass('hidden');
            $(this).find('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
        }
    });

    //customer popovers for suppliers in products listing
    $("[rel=popover]").each(function(i, obj) {

        $(this).popover({
            html: true,
            trigger: 'hover click',
            content: function() {
                var id = $(this).attr('data-popover-id');
                return $('#' + id).html();
            }
        });

    });

    $('.mobile-filter-btn').click(function(e){
        e.preventDefault();
        $('.filters-bar').toggleClass('active');
    });

    //whenever filter is applied
    // 1. make the filter bar inactive (on mobile, this hides the filter bar and displays the products list)
    // 2. scroll to the top of the list (next to the filters and products list)
    $('.apply-filter-btn').click(function(){
        $('.filters-bar').removeClass('active');
        scrollToElement($('.filters-bar'));
    })

    //init the slider plugin
    $('#categories_slider').multislider();

    //function to smoothly scroll to an element in HTML
    function scrollToElement(el){
        $('html, body').animate({
            scrollTop: el.offset().top - 60
        }, 1000);
    }
})