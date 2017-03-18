(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery);

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
});

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
$(document).ready(function() {
    $('select').material_select();
});

$('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15
});

$(document).ready(function(){
    $('.slider').slider();
});

$(document).ready(function(){
    $('.target').pushpin({
        top: 0,
        bottom: 1000,
        offset: 0
    });
});

$(".button-collapse").sideNav();

$('.button-collapse1').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    }
);

var options = [
    {selector: '#cat2', offset: 200, callback: function(el) {
        Materialize.show($(el));
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#cat3', offset: 200, callback: function(el) {
        Materialize.showStaggeredList($(el));
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#cat4', offset: 200, callback: function(el) {
        Materialize.showStaggeredList($(el));
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } },
    {selector: '#cat5', offset: 200, callback: function(el) {
        Materialize.show($(el));
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
    } }
];
Materialize.scrollFire(options);