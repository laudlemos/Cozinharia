$(".contem-submenu").click(function(){
	$(".contem-submenu").toggleClass("active")
})

let indice=1, quantidadeBanner=4 

function trocaBanner(numeroBanner) {
  $("#home1").removeClass()
  $("#home1").addClass("banner"+numeroBanner)
}
setInterval(function(){
  if(indice > quantidadeBanner){
    indice=1
  }
  trocaBanner(indice)
  indice++
}, 3000)

$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});