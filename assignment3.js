/* Assignment 3's js */

window.onload = function () {
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var three = document.getElementById("three");
	var visibleImg = document.getElementById("firstImg");
	var hiddenImg = document.getElementById("img");


	// First event listener
	one.addEventListener('mouseover', function() {
		one.style.backgroundColor = "pink";
	})

	// Second event listener
	two.addEventListener('click', function(){
		two.classList.toggle('two-background');
	})

	// Third event listener
	three.addEventListener('copy', function(){
		alert('You Just Copied a Div!');
		
	})

	// Fourth event listener to first image
	visibleImg.addEventListener('click', function(){
		 
		 if(hiddenImg.style.visibility === "hidden"){
           hiddenImg.style.visibility = "visible";
           hiddenImg.style.position = "absolute";
           visibleImg.style.visibility = "hidden";
         }
        
    
        else {
        hiddenImg.style.visibility = "hidden";
        visibleImg.style.visibility = "visible";
        visibleImg.style.position = "absolute";
        }
	});

	//adding second event listener to the hidden image
    hiddenImg.addEventListener("click", function(){
   
    	if(visibleImg.style.visibility === "hidden"){
        	visibleImg.style.visibility = "visible";
       	    visibleImg.style.position = "absolute";
            hiddenImg.style.visibility = "hidden";
        } 

	   else {
         visibleImg.style.visibility = "hidden";    
         hiddenImg.style.visibility = "visible";
         visbileImg.style.position = "absolute";
      }
    });

}