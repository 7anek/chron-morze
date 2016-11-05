$(document).ready(function(){
    $("#pl").click(function(){
        if(!$("#pl").hasClass("selected")){
            $("#pl").addClass("selected");
            $("#en").removeClass("selected");
        }
    });
    $("#en").click(function(){
        if(!$("#en").hasClass("selected")){
            $("#en").addClass("selected");
            $("#pl").removeClass("selected");
        }
    });

    $("#menuButton").click(function(){
        $("#menuList").animate({height: 'toggle'}, 1000);
    });

    $("#oko").click(function(){
        $("body").toggleClass("nightMode");
    });

    $("#a1").click(function(){
        $("body").css("transform", "scale(0.8) translate(-4%,-12%)");
    });
    $("#a2").click(function(){
        $("body").css("transform", "scale(1) translate(0%,0%)");
    });
    $("#a3").click(function(){
        $("body").css("transform", "scale(1.2) translate(2%,8%)");
    });

    $("ol li a").click(function(event){
        $(".dlaczego").show();
        event.preventDefault();
        var link = $(this).attr('href');
        var offset = $(link).offset().top;
        console.log(offset);

        $("html").animate({scrollTop:offset},1000);
    });

});
