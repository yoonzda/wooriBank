$('document').ready(function(){
    selectCustom();
});

function selectCustom(){
    $('.selectCustom').click(function(){
        $(this).toggleClass('active');
    });
    $('.selectList li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var currentID = this.parentNode.dataset['select'];
        
        $('#'+currentID).toggleClass('active');
        $('#'+currentID).text($(this).text());
    });
    $('.windowSelect li').click(function(){
        $('.windowSelect li').removeClass('active');
        $(this).addClass('active');
    });
}