$(document).ready(function(){
    
/* Top Menu Clock */    
 var timer = setInterval(function(){
    
        var today = new Date();
    
        var nowHour = today.getHours();
        var nowMin = today.getMinutes();
        
            if(nowMin < 10){
        nowMin = "0"+ nowMin; 
    } 
            if(nowHour < 10){
        nowHour = "0"+ nowHour; 
    }
        
        $("#clock").eq(0).text(nowHour +":"+ nowMin);
    /*.text 메소드는 요소 안에 들어있는 텍스트를 바꿔줄 수 있다*/
    
    }, 1000);






    
});