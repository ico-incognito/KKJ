(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery);

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});

var options = [
    {selector: '#cat3', offset: 50, callback: function(el) {
        Materialize.show($(el));
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#cat3', offset: 50, callback: function(el) {
        Materialize.show($(el));
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#cat3', offset: 50, callback: function(el) {
        Materialize.show($(el));
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#cat3', offset: 50, callback: function(el) {
        Materialize.show($(el));
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } }
];
Materialize.scrollFire(options);