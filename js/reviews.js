//created by Harsh Bhavsar
$(document).ready(function()
{
	 var XHR=new XMLHttpRequest();
                XHR.onreadystatechange=function(){
                    console.log(XHR.readyState)
                    if(XHR.readyState==4 && XHR.status==200){
                        var xmlDoc=XHR.responseXML;
                        var imglink1=xmlDoc.getElementsByTagName("imglink")[0].innerHTML;
                        var name1=xmlDoc.getElementsByTagName("name")[0].innerHTML;
                        var imglink2=xmlDoc.getElementsByTagName("imglink")[1].innerHTML;
                        var name2=xmlDoc.getElementsByTagName("name")[1].innerHTML;
                        var imglink3=xmlDoc.getElementsByTagName("imglink")[2].innerHTML;
                        var name3=xmlDoc.getElementsByTagName("name")[2].innerHTML;
                        var bio1=xmlDoc.getElementsByTagName("bio")[0].innerHTML;
                        var bio2=xmlDoc.getElementsByTagName("bio")[1].innerHTML;
                        var bio3=xmlDoc.getElementsByTagName("bio")[2].innerHTML;
                        $("#chef1").append("<img src='"+imglink1+"' height='300px' width='300px'><h3>'"+name1+"'</h3>")
                        $("#chef2").append("<img src='"+imglink2+"' height='300px' width='300px'><h3>'"+name2+"'</h3>")
                        $("#chef3").append("<img src='"+imglink3+"' height='300px' width='300px'><h3>'"+name3+"'</h3>")
                        $("#bio1").append(bio1)
                        $("#bio2").append(bio2)
                        $("#bio3").append(bio3)
                    }
                }
                XHR.open("GET","Team.xml");
                XHR.send();
	
	$("#submit").click(function(evt)                       
	{	
        var valid=true;
		var email = $("#email").val().trim();
		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
        if(email=="")
		{
            $("#email").next().text("Please enter an email");
            $("#email").focus();
            valid = false;
        }
		else if(!emailPattern.test(email))
		{
		 $("#email").next().text("Please Enter a valid email address");
            $("#email").focus();
            valid = false;
        }	
		else{
            $("#email").next().text("");
            
        }
		
		var experience = $("#experience").val();
		if(experience=="")
		{
            $("#experience").next().text("Please enter some comments");
            $("#experience").focus();
            valid = false;
        }
		else{
            $("#experience").next().text("");
            
        }
		
		
		
		var name = $("#name").val().trim();
        if(!name)
		{
            $("#name").next().text("Please Enter your name");
            $("#name").focus();
            valid = false;
        }
		else{
            $("#name").next().text("");
        }
				
        if (valid==false)
		{
            evt.preventDefault();
        }
		
    });

});

