$(document).ready(function(){
    $('.navbar-toggle').click(function(e){
        e.preventDefault();
        $('.slideout-menu').toggleClass('open');
    })

    $('.slideout-submenu-toggle').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().find('.slideout-submenu').toggleClass('open');
    })
})