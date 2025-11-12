$('document').ready(function(){
    selectCustom();
});

function selectCustom(){
    $('.selectCustom').click(function(){
        $(this).toggleClass('active');
    });
    $('.selectList li').click(function(){
        console.log(1);
        $('.selectList li').removeClass('active');
        $(this).addClass('active');
        $('.selectCustom').toggleClass('active');
        $('.selectCustom').text($(this).text());
    });
    $('.windowSelect li').click(function(){
        $('.windowSelect li').removeClass('active');
        $(this).addClass('active');
    });
}