$(document).ready(function(){

    //init selectbox plugin
    $('#headerSearchType').selectBox({
        mobile: true
    });
    $('#headerLang').selectBox({
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