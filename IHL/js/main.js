$(document).ready(function(){
    
    $("#footer").load("footer.html");
    
    /* GNB */
    $("ul.gnb>li>a").bind("mouseover focus",function(){
        $(this).parent().next().show(); 
    });
    /* Slide Menu */
    $("#gnb > li").click(function(){
        $(this).addClass("on");
        $("#gnb > li > ul").removeClass("on");
        $("#gnb > li > ul").hide();
        $(this).children("ul").addClass("on");
        $(this).children("ul").show();
    });
    $("#gnb > li").mouseleave(function(){
        $("#gnb > li").removeClass("on");
        $(this).removeClass("on");
    });
    /* Drop Down Menu */
    $("#gnb > li > ul> li > a.drop").click(function(){
        $(this).toggleClass("drop toDrop");
        $(this).siblings("ul").toggleClass("toggle");
    });
    $("#gnb").mouseleave(function(){
        $("#gnb > li > ul").removeClass("on");
    });
    /*$("#gnb > li > ul").next().mouseleave(function(){
        $("#gnb > li > ul").removeClass("on");
    });*/
    
     /* Auto Banner */
    var $banNum = 0; 
    var $maxbanNum = 1;
    
    function autoBan(){
    $banNum++;
        if($banNum > $maxbanNum){$banNum = 0;}

        var banWit = $(".rollM1_right1").width();  
        $(".band_blok").animate({"left":-(banWit * $banNum)},300,"linear",0);
    }
    /* var rplay = setInterval(autoBan,5000);
    */
    /*Prev/Next Button Click event*/
    var $bnnNum = 0;
       
    $("button#next").click(function(e){
        e.preventDefault();
        $bnnNum++;
        if($bnnNum>=4){
            return false;
        }
        var $ban_w = $(".visual_frame > div.band > div").width();
        $(".band").animate({"right":-$ban_w*$bnnNum},500,"linear");
    });
    
    $("button#prev").click(function(e){
        e.preventDefault();
         $bnnNum--;
        if($bnnNum<=-1){
            return false;
        }
        var $ban_w = $(".visual_frame > div.band > div").width();
        $(".band").animate({"right":-$ban_w*$bnnNum},500,"linear");

    });
    
    
    var indexNum = 0;
    $(".tabuttns ul li").click(function(){
        /*탭버튼 배경색 변경*/
        var indexNum = $(this).index();
        
        $(".tabuttns ul li").each(function(idx){
            if(indexNum != idx)
                 $(this).find("img").attr('src', $(this).find('img').attr('src').replace('_on.png','.png'));
            else{
                $(this).find("img").attr('src', $(this).find('img').attr('src').replace('.png','_on.png'));
            }
            
        });
         /*왼쪽 이미지 슬라이드*/
        var cilicked = $(this).index();
        var $ban_w = $(".visual_frame > div.band > div").width();
        $(".band").animate({"right":-$ban_w*cilicked},500,"linear");
    });
    
   /*tab menu*/
    $("#conT dt").click(function(e){
        e.preventDefault;
        $("#conT dt").removeClass("on");
        $("#conT dd").removeClass("on");
        $(this).addClass("on");
        $(this).next().addClass("on");
    });
    
    
    
});//document Ready