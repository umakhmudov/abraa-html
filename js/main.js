$(document).ready(function(){
    $('#headerSearchType').selectBox({
        mobile: true
    });
    $('#headerLang').selectBox({
        mobile: true
    });

    $('.mobile_search_toggle_btn').click(function(e){
        e.preventDefault();
        $('.header-search-section').toggleClass('active');
    })
})