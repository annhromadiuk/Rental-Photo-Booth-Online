
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
setInterval(plusSlides,4000,1);





$(document).ready(function() {

	$("a.grouped_elements").fancybox();
	
	
	$("a.grouped_elements").fancybox({
		'hideOnContentClick': true
	});

	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});


/*Form*/
function validateName() {
    var name = document.getElementById('contact-name').value;
    if(name.length == 0) {

        producePrompt("Enter the Name.", 'name-error' , 'red');
        return false;

    }

    if (name.length > 15) {

        producePrompt('max 15 characters','name-error', 'red');
        return false;

    }

    producePrompt('Valid', 'name-error', 'green');
    return true;

}

function validatePhone() {

    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
        producePrompt('Enter the number.', 'phone-error', 'red');
        return false;
    }


    if(!phone.match(/^[0-9]{12}$/)) {
        producePrompt('Only numbers.' ,'phone-error', 'red');
        return false;
    }

    producePrompt('Valid', 'phone-error', 'green');
    return true;
}

function validateEmail () {

    var email = document.getElementById('contact-email').value;
    var emailValidation = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    if(email.length == 0) {

        producePrompt('Enter Email.','email-error', 'red');
        return false;

    }

    if(!email.match(emailValidation)) {

        producePrompt('Email invalid.', 'email-error', 'red');
        return false;

    }

    producePrompt('Valid', 'email-error', 'green');
    return true;

}

var form = document.querySelector('.validateForm');
var validateBtn = form.querySelector('.validateBtn');
var names = form.querySelector('.names');
var email = form.querySelector('.email');
var phone = form.querySelector('.phone');
var message = form.querySelector('.message');
var fields = form.querySelectorAll('.field');

function validateForm() {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('form is sent');
        console.log('name: ', names.value);
        console.log('email: ', email.value);
        console.log('phone: ', phone.value);
        console.log('message: ', message.value);

        for (var i = 0; i < fields.length; i++) {
            if (!fields[i].value) {
                console.log('field is blank', fields[i])
            }
        }
    })

    if (!validateName() || !validatePhone() || !validateEmail()) {
        jsShow('submit-error');
        producePrompt('Fix the bugs to send.', 'submit-error', 'red');
        setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;

    }

}

function jsShow(id) {
    document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
    document.getElementById(id).style.display = 'none';
}

function producePrompt(message, promptLocation, color) {

    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;

}
/*Form*/
/*var smoothJumpUp = function() {
        if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
            window.scrollBy(0,-50);
            setTimeout(smoothJumpUp, 2000);
        }
    }
    
    window.onscroll = function() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 100) {
      	document.getElementById('upbutton').style.display = 'block';
      } else {
      	document.getElementById('upbutton').style.display = 'none';
      }
    }
*/
    /*$(document).ready(function() {
        $('.upbutton').click(function(){
            $(this).addClass('active');
           $('html, body').animate({scrollTop:$('#elementId').position().top - 60}, 2000);
        });
    });*/

    /*(function($) {
        $(function() {
        
          $('.upbutton').click(function() {
            $('html, body').animate({scrollTop: 20},1000);
            return false;
          })
        
        })
        })*/
        