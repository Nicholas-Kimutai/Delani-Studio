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


//Form submission function
function formSub(){
    event.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    if((name=="")||(name==null)){
        alert("Please enter your name")
    }
    else if((email=="")||(email==null)||(!validMail(email))){
        alert("Please enter a valid email")
    }
    else if((message=="")||(message==null)){
        alert("Please enter your message")
    }
    else{
        alert(name + " we have received your message. Thank you for reaching out to us.")
    }
 }

 //Email validation
function validMail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
  }