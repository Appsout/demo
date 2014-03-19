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

$(document).bind('pageinit', function(event){ 
	
		if(localStorage.vi_content){
			$('#vi_content').html(localStorage.vi_content);
		}
		$.get('http://appsout.twomini.com/android/home/getreport', function(html){

			var vi_content = $('#v_content', html).html();
			localStorage.vi_content = vi_content;
			$('#vi_content').html(vi_content);
		})
		.error(function(e){
			// 
		})
});

/////////////////////////////////////////////////////////////////////////////////



/*signin*/


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

/*signup*/

function signUp(){
	var name=$('#s_name').val();
	var email=$('#s_mail').val();
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var password=$('#s_password').val();
	var phone=$('#s_phone').val();
	var state=$('#s_state').val();
	var country=$('#s_country').val();
	
	if(name==""){
		$('#regStatus').html('Enter your Name');
		$('#s_name').focus();
		}
	else if(email==""){
		$('#regStatus').html('Enter your Mail ID');
		$('#s_mail').focus();
		}
	else if(reg.test(email) == false)
      {
            $("#regStatus").html('Enter a valid Mail ID.');
            $("#s_mail").focus();
      }
	else if(password==""){
		$('#regStatus').html('Enter your Password');
		$('#s_password').focus();
		}
	else if(phone==""){
		$('#regStatus').html('Enter your Phone number');
		$('#s_phone').focus();
		}
	else if(state==""){
		$('#regStatus').html('Enter your State');
		$('#s_state').focus();
		}
	else if(country==""){
		$('#regStatus').html('Enter your Country');
		$('#s_country').focus();
		}
		else{
			
			var dataString='name='+ name +'&email='+ email + '&password=' +  password + '&phone=' +  phone + '&state=' +  state + '&country=' +  country;
    		
            $.ajax({
            url  : 'http://appsout.twomini.com/android/home/signup',
            data: dataString,
            type : "POST",
            dataType: 'json',
			error: function(err) 
			{
			navigator.notification.alert('Bad internet connection', null, 'Error', 'OK');
			//alert('Bad internet connection');
			},
            success : function(res){

            	if(res==1){
            		navigator.notification.alert('Thanks. Please login', null, 'Success', 'OK');
            		//alert('Thanks. Please login');
            		location.href='#login';		
            	}else{
            		//alert('Failed. Please try agin');
            		navigator.notification.alert('Failed. Please try agin', null, 'Error', 'OK');
            	}
            }
			
			
        });
		
			}
	}
	
	
//////////////////////////////////////////////////////////////////////////////////////////	
 function addnew(){

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            var name = $('#c_name').val();
            var mail = $('#c_mail').val();
            var phone = $('#c_phone').val();
            var place = $('#c_place').val();
            var date = $('#c_date').val();
            var product = $('#c_product').val();

            if(name == "")
              {
                    $("#repStatus").html('Enter name.');
                    $("#c_name").focus();
              }
             
              else if(mail == "")
              {
                    $("#repStatus").html('Enter mail ID.');
                    $("#c_mail").focus();
              }

              else if(reg.test(mail) == false)
              {
                    $("#repStatus").html('Enter a valid mail ID.');
                    $("#c_mail").focus();
              }
               else if(phone == "")
              {
                    $("#repStatus").html('Enter number.');
                    $("#c_phone").focus();
              }
              else if(place == "")
              {
                    $("#repStatus").html('Enter place.');
                    $("#c_place").focus();
              }
              else if(date == "")
              {
                    $("#repStatus").html('Enter date.');
                    $("#c_date").focus();
              }
              
              else if(product == "")
              {
                    $("#repStatus").html('Enter product.');
                    $("#c_product").focus();
              }

              else
              {
          var dataStr='name='+ name + '&mail=' +  mail + '&phone=' + phone+ '&place=' +  place + '&date=' + date+ '&product=' + product;
    alert(dataStr);
                     $.ajax({
			            url  : 'http://appsout.twomini.com/android/home/newreport',
			            data: dataStr,
			            type : "POST",
			            dataType: 'json',
						error: function(err) 
						{
						navigator.notification.alert('Bad internet connection', null, 'Error', 'OK');
						//alert('Bad internet connection');
						},
			            success : function(res){

			            	if(res==1){
			            		location.href="#finish";
			            	}
			            	else{
			            		navigator.notification.alert('Failed. Please try agin', null, 'Error', 'OK');
			            		//alert('Failed. Please try agin');

			            	}
			            }
						
						
			        });
              
           }
        }

