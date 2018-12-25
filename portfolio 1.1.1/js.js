

//przeniesienie w płynny sposób na miejsce na stronie 

$(document).ready(function() { 

	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

});




//modal z cv

var modal = document.getElementById('myModal');

var btn = document.getElementById('myBtn');

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
}
    span.onclick = function(){
        modal.style.display = "none";
    }
    
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.dispaly= "none";
        }
    };

    


//    zmiana wygladu menu
    
$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var find_class_small = $.contains('#nav', '.small');
        
        if(top>100 && find_class_small == false){
            $('#nav').addClass('small');
        }
        else{
            $('#nav').removeClass('small');
        }
    });
});


//przeniesienie w płynny sposób na miejsce na stronie 

$(document).ready(function() { 

	$('arrow1').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

});



$(".form").on("click", function(){
    $("form").animate({
        'width': '600'  
    },1200)
});




