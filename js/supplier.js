$(document).ready(function(){

    //init the supplier tab selector

    $('.supplier-tab-link').click(function(e){
        e.preventDefault();
        var supplier_tab_id = $(this).attr('data-tab-id');

        //hide all the supplier tabs
        $('.supplier-tab').addClass('hidden');

        //show only the selected one
        $('#'+supplier_tab_id).removeClass('hidden');

        //mark all other tabs inactive, except this one
        $('.supplier-tab-link').removeClass('active');
        $(this).addClass('active');
    })

})