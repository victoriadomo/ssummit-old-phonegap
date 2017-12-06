
var app = angular.module('theApp', ['pascalprecht.translate']);

app.config(function($translateProvider) {
  $translateProvider.translations('eng', translationsEN)
  .translations('spa', translationsSpa)
  .translations('fre', translationsFre);
  var idioma = localStorage.getItem('idioma');
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.preferredLanguage(idioma);
 
});

$( 'p[id^="lang-"]' ).click(function() {
  var lang = $( this ).attr('id').slice(5);
  window.localStorage.setItem('idioma', lang);
  location.reload(true);  
});

$( 'div[id^="lang-"]' ).click(function() {
  var lang = $( this ).attr('id').slice(5);
  window.localStorage.setItem('idioma', lang);
  window.location = 'index.html';  
});

var idiomaSelec = localStorage.getItem('idioma');

if (idiomaSelec == 'eng') {
     linkStore="http://www.successsummit.eu";
} else if (idiomaSelec == 'spa') {
     linkStore="http://www.successsummit.eu";
} else if (idiomaSelec == 'fre') {
     linkStore='http://www.successsummit.eu';
}

