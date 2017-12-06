/* NAVIGATION */

function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };   

function auto_load(seccion){
    if (seccion == undefined){
        seccion  = 'home';            
    } 
    $.ajax({
        url: 'sections/'+seccion+'.html',
        cache: false,
        async: false, 
        success: function(data){
            $("#sections").html(data);
            initiate_plugins();  
    } 
    });
}

var seccion = getUrlParameter('seccion');
auto_load(seccion);

var loading = $('#loading').hide();
$(document)
  .ajaxStart(function () {
    $loading.show();
  })
  .ajaxStop(function () {
    $loading.hide();
  });
  
