//toggle effect on What_we_do section
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

//Portfolio hover effect
$(document).ready(function(){
    var works=[{portfolio:"work1",label:"wk1"},
               {portfolio:"work2",label:"wk2"},
               {portfolio:"work3",label:"wk3"},
               {portfolio:"work4",label:"wk4"},
               {portfolio:"work5",label:"wk5"},
               {portfolio:"work6",label:"wk6"},
               {portfolio:"work7",label:"wk7"},
               {portfolio:"work8",label:"wk8"},
            ];
    works.forEach(function(work){
        $("#"+ work.portfolio).mouseover(function(){
            $("#"+ work.label).show();
        }).mouseout(function(){
            $("#" + work.label).hide();
        });
    })
        
});