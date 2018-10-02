$(document).ready(function(){
    $('#headerSearchType').selectBox();
    $('#headerLang').selectBox();

    $('.mobile_search_toggle_btn').click(function(e){
        e.preventDefault();
        $('.header-search-section').toggleClass('active');
    })
})