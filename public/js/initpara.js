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