$(document).ready(function(){
    
    var listaSagardotegis = [];
    var accesToken;
    
        // obtiene la API
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/es_LA/all.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    
        /*window.fbAsyncInit = function() {
            // iniciamos la aplicación de Facebook
            FB.init({
                appId      : '765683296917544',
                status     : true,
                xfbml      : true,
                cookie     : true
            });*/
            
            /**
             * Obtenemos una sagardotegi
             */
            /*FB.api(
                '/1704315726496042', // Para más sagardotegis, copiar la función y cambiar el ID de la página
                'GET',
                {
                    "fields":"name,id,picture.type(large),location,description,posts{id,full_picture,created_time,message}", 
                    "access_token":"765683296917544|31ad4ff7d32353f15149a55b4b965596"
                },
                function(response) {
                    // envia los datos al servidor
                    $.ajax({
                        url: "/web/app_dev.php/save-sagardotegis",
                        action: "POST",
                        dataType: "json",
                        data: response
                    });
                }
            );
        }*/
});