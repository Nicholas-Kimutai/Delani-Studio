//
$(document).ready(function(){
    var services=[{img:"design_image",details:"design_details"},
                  {img:"development_image",details:"development_details"},
                  {img:"product_image",details:"product_details"}]

   services.forEach(function(service){
    $("." +service.img).click(function(){
        $("."+service.details).show();
        $("."+service.img).hide();
    });
   $("."+service.details).click(function(){
        $("."+service.img).show();
        $("."+service.details).hide();
    });
   })
}); 