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