$(document).ready(function(){

    //init selectbox plugin

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
    })

    //init the slider plugin
    $('#categories_slider').multislider();
})