
function updateOutput(){
                        
            $("iframe").contents().find("html").html("<html><head><style type ='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val()  + "</body></html>"); 
            
            document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
            
            
        }
            
        $(".toggleButton").hover(function(){
            $(this).addClass("highlightButton");
        },
            function(){
            $(this).removeClass("highlightButton");   
        });
            
        $(".toggleButton").click(function(){
            
            $(this).toggleClass("active");
            $(this).removeClass("highlightButton");
            
            var panelID = $(this).attr("id") + "Panel";
           
            $("#" + panelID).toggleClass("hidden"); //toggle hidden
            
            var activeItems = 4 - $('.hidden').length;
            
            $(".panel").width(($(window).width() / activeItems) - 10);
            
        });
            
        $(".panel").css("height",$(window).height() - $("#navbar").height() -15);
            
        $(".panel").css("width",$(window).width() / 2 - 10);
        
       updateOutput(); $("iframe").contents().find("html").html($("#htmlPanel").val());
        $("textarea").on('change keyup paste', function() {
                updateOutput();
            
        });