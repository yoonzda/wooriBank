$('document').ready(function(){
    selectCustom();
    $('.accordion .faq_answer_box').hide();
    $('.accordion h4').click(function() {
        $('.faq_answer_box').stop().slideUp(300);
        $(this).parents().siblings().removeClass('active');
        $(this).next('.faq_answer_box').stop().slideToggle(300);
        $(this).parents().toggleClass('active');
    });
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