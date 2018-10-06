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
    })

    //init the slider plugin
    $('#categories_slider').multislider();
})