//created by kunal patel
$(document).ready(function(){
                var i=1;
                var str=[];
                str[1]="<p><span>HUNGRY?!</span><br>GOOD,we are here<br> to <span>serve</span> you.</p>";
                str[2]="<p><span>Quality</span><br>Food,is Waiting...<br>for<span>You.</span></p>";
                str[3]="<p><span>WE</span><br>Have Range of<br> <span>Varities</span> for you.</p>";
                
                 function bannerimage(){    
                    if(i<3){
                        i++;
                    }else{
                        i=1;
                    }
                $("header").fadeOut("300",function(){$(this).css("background-image","url('images/Image"+i+".jpg')");$(this).fadeIn()});
                $("#text").fadeOut("300",function(){$(this).html(str[i]);$(this).fadeIn()});     
                 }
//                  $("html").scroll(function(){
//                      $(".headings").text("kunal");
                      
                      
//                  });  
                
                setInterval(bannerimage,3000);
                function time(){
                    var today=new Date();
                    var date=today.getDate();
                    var month=today.getMonth()+1;
                    var year=today.getFullYear();
                    var clock=today.getHours();
                    var day=today.getDay();
                    console.log(today);
                    $("#openingtimecontent").append("<h3>Timeings for&nbsp;&nbsp;"+date+"/"+month+"/"+year+"</h3>");
                    $("#openingtimecontent").append("<p>For Monday to Friday - 10AM to 10PM</p><p>For Satuerday and Sunday - 10AM to 11PM</p>");
                    if(day==6 || day==0){
                        if(clock>23 && clock<10){
                        $("#openingtimecontent").append("<p>The restuarent is <span><b>CLOSE NOW</b></span></p>");
                    }
                    else{
                        $("#openingtimecontent").append("<p>The restuarent is <span><b>OPEN NOW</b></span></p>");
                    
                    }
                }else{
                        if(clock>22 && clock<10){
                        $("#openingtimecontent").append("<p>The restuarent is <span><b>CLOSE NOW</b></span></p>");
                    }
                    else{
                        $("#openingtimecontent").append("<p>The restuarent is <span><b>OPEN NOW</b></span></p>");
                    }
                       
                }
                    
                 
            }
                time();
            });