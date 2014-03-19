$(window).load(function(){

$('input').focus(function(){
	$(this).parents('form').addClass('keyboard_visible');
	$('body').animate({scrollTop: $(this).offset().top - 10});
});

$('input').blur(function(){
	$(this).parents('form').removeClass('keyboard_visible');
});

// Enable Phonegap Navigation and same page transition
$.mobile.phonegapNavigationEnabled = true;
$.mobile.changePage.defaults.allowSamePageTransition = true;



});//]]>  




//////////////////////////////////////////////////////////////////////////////////////////

/*signin*/

function sendreport(){
	
			var dataString='uname=admin';
    		
            $.ajax({
            url  : 'http://appsout.twomini.com/android/home/sendreport',
            data: dataString,
            type : "POST",
            dataType: 'json',
			error: function(error) 
			{
			alert('Sorry. Bad internet connection.');
			},
            success : function(res){

            	

            		//navigator.notification.alert("Invalid email and password", null, 'Login', 'OK');
            		alert("res");
				
            }
			
			
        });
		
			}
	}

//////////////////////////////////////////////////////////////////////////////////////////


	
	
//////////////////////////////////////////////////////////////////////////////////////////	
 

