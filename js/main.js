$(function(){
    
    $("body,html").stop().animate({"scrollTop":0},1500,"swing");
    
    var t = $(window).height()/2 - $(".quick").height()/2;
    
    $(".quick").stop().animate({top:t},700,"linear");
    
     var ht = $(window).height();
        $("#container>div").height(ht);

        $(window).resize(function(){
             var ht = $(window).height();
            $("#container>div").height(ht);
        });
    
     /* 날짜표시 */
    var today = new Date();
    var y = today.getFullYear();
    var d = today.getDate();
    var m = today.getMonth()+1;
    
    var week = new Array('Monday','Monday','Tueday','Wednesday','Thursday','Friday','Saturday','Sunday');
    
    $("#date").text("SEOUL, "+y+", "+m+", "+d+","+week[today.getDay()]);
    
    
    //처음실행
    var start = setTimeout(function(){
        
        $("#content1 > section").addClass("on");
    }, 500);
    
    //Scroll Moves
    $(window).scroll(function(){
        //QuickMenu Position
            var t = $(this).scrollTop() + $(window).height()/2 - $(".quick").height()/2;
        
            $(".quick").stop().animate({top:t},700,"linear");
        
        //present scroll position
            var scroll = $(this).scrollTop();
            var content = $("#container > div");
        
        //contents1
            if(scroll>=content.eq(0).offset().top){
              
                $(".quick li a").removeClass("on");
             
                $(".quick li a").eq(0).addClass("on");
                
                //내용물 애니메이션
                $("#content1 > section").addClass("on");
            }else{//content1에서 떠났을때
                $("#content1 > section").removeClass("on");
            }
            
        //contents2
            if(scroll>=content.eq(1).offset().top){
              
                $(".quick li a").removeClass("on");
                
               
                $(".quick li a").eq(1).addClass("on");
                
                $("#content2>section").addClass("on");
            }else{//content2에서 떠났을때
                $("#content2 >section").removeClass("on");
            }
            
        //contents3
            if(scroll>=content.eq(2).offset().top){
              
                $(".quick li a").removeClass("on");
                
               
                $(".quick li a").eq(2).addClass("on");
                
                $("#content3>section").addClass("on");
            }else{//content3에서 떠났을때
                $("#content3 >section").removeClass("on");
            
            }
        //contents4
            if(scroll>=content.eq(3).offset().top){
             
                $(".quick li a").removeClass("on");
                
               
                $(".quick li a").eq(3).addClass("on");
                
                $("#content4>section").addClass("on");
            }else{//content4에서 떠났을때
                $("#content4 >section").removeClass("on");
            }
        
        //contents5
            if(scroll>=content.eq(4).offset().top){
              
                $(".quick li a").removeClass("on");
              
                $(".quick li a").eq(4).addClass("on");
                
                $("#content5 > section").addClass("on");
            }else{//content4에서 떠났을때
                $("#content5 >section").removeClass("on");
            }
    
        //한페이지씩 이동
    $("#container > div").mousewheel(function(event,delta){
        //Delta 는 마우스휠이 움직였을때 위치값
        if(delta > 0){//마우스를 위로 올릴때
            var prev = $(this).prev().offset().top;
            $("body,html").stop().animate({"scrollTop":prev},1400,"linear");
        }else if(delta < 0){//마우스를 내릴때
            var next = $(this).next().offset().top;
            $("body,html").stop().animate({"scrollTop":next},1400,"linear");
        }
        
    });//mousewheel
        
 });//sclroll Moves    
    //퀵메뉴 클릭시 해당 div로 이동
        //상단 메뉴(헤더 주메뉴) 높이가 있는 경우
        $(".quick li").click(function(){
            var i = $(this).index();
            var target = $("#container>div").eq(i).offset().top;
            $("body,html").stop().animate({"scrollTop":target},1500,"swing");
        });
    
    
//Hotel Click Animation  
    $("#content1 > section > span:nth-of-type(1)").click(function(){
        $(this).toggleClass("on");
        $("#content1 > section >p:nth-of-type(2)").css({"animation":"none","opacity":"0"});
        $(".boy > span, .boy").addClass("out");
    });
    
//tram animation
    $(".tram").click(function(e){
        e.preventDefault;
        $(this).stop().toggleClass("updown");
        $("#content2").addClass("bgChange");
    });
    
//CJ one banner click function
    $("#content2 > section > h2").click(function(){
        $(this).css({"background":"url(images/bg_bannerCjone.png) no-repeat 0 0"});
        $("#content2 > section > div").animate({"top":"-270px"}, 1500, 'easeInOutBack');
    });
    
    $("#content2 > section > div > button").click(function(){
        $("#content2 > section > div").animate({"top":"2500px"}, 1500, 'easeInOutBack');
        $("#content2 > section > h2").css({"background":"url(images/bg_bannerCjone_bnw.png) no-repeat 0 0"});
    });
    
//truck Animation
    $("#truck").click(function(){
        $(this).addClass("truckToleft");
    });
//SVG    
    $(function(){
        var paths = $('#Layer_1').find('path');
     paths.each(function(i,path){
         var total_lenth = path.getTotalLength();
         console.log(total_lenth);
     });    
    });
    /*Contents3 btn events*/
    $("#content3 > section > span.btn3").click(function(){
        $(this).children().attr("src","images/W3C_valid.png");
        $("#content3 > section .img2").toggleClass("throw");
    });
    $("#content3 > section > span.btn2").click(function(){
        $(this).children().attr("src","images/logo_WA.png");
        $("#content3 > section .img1").toggleClass("throw");
    });
    $("#content3 > section > span.btn4").click(function(){
        $(this).children().attr({"src":"images/crossB.png"});
    });
    $(function(){
		$('#content3 > section .btn1').click(function(){
			myFunction();
			
            $(this).children().attr("src","images/logo_ihl.png");
            return false;
		});
		//현대 IHL 팝업
		function myFunction(){
			window.open("IHL/index.html","blank","toolbar=no,scrollbars=yes,resizable=no,top=0,left=0,width=1920,height=980")
		}
	});
    //content4 
    $(".left button").click(function(){
        $("div.right").addClass("turnP");
        $(".nasCont").addClass("active"); 
    });
    
    $(".left .nasCont p i").click(function(){
        $(".nasCont").removeClass("active"); 
        $("div.right").removeClass("turnP");
    });
    
    $("#button-blue").click(function(){
        openAPP();
        return false;
    });
    function openAPP(){
        window.open("moviePPL/splash.html","blank","toolbar=no,scrollbars=no,resizable=no,top=0,left=0,width=375,height=812");
		}
   
    /* content5 */
    $("#content5 .profile").hover(function(){
        $(this).css({"background":"#fff url(images/portraitVB.jpg) no-repeat 0 15%","background-size":"100%"});
    });
    $("#content5 .profile").click(function(){
        $("#contact").toggleClass("card");
        $("#content5 #stats").removeClass("spread");
    });
    
    $("#content5 .skills").click(function(){
        $(this).children().attr("src","images/gb_cake.png");
        $("#content5 #stats").toggleClass("spread");
        $("#contact").removeClass("card");
    });
    
});//Very first function

window.addEventListener('load', () => {
  const ctx = document.getElementById('canvas').getContext('2d');
  
  let brushWidth = 100;
  let brushOffset = brushWidth;
  let speed = 10;
  let txt = 'MOVIE PEOPLE'; 
  let x = 30, i = 0;
  
  ctx.font = '40px Snell Roundhand';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#111';
  
  (function draw() {
    ctx.clearRect(x, 0, 800, 150);
    ctx.setLineDash([brushWidth - brushOffset, brushOffset - speed]);
    brushOffset -= speed;
    ctx.strokeText(txt[i], x, 70);
    
    if (brushOffset > 0) {
      requestAnimationFrame(draw);
    } else {
      brushOffset = brushWidth;
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();

      if (i < txt.length) {
        requestAnimationFrame(draw);
      }
    }
  })()
 
});

 
