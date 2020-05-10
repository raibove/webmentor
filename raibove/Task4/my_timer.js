
	var secs = 0;
	var timeout;
	var mins = 0;
	function getTime() {
		 mins = document.getElementById("time").value;
		 secs= mins*60;
		 document.getElementById("minutes").innerHTML = mins;
		 document.getElementById("seconds").innerHTML = secs - Math.round(mins*60);
	} 
	
	function countdown(){
		setTimeout(decrement);
	}
	function decrement(){
		minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");

        if(secs!=0)
        {
         minutes.innerHTML = mins;
         seconds.innerHTML = secs - Math.round(mins*60);

         secs--;
         mins = Math.floor(secs/60);
         timeout= setTimeout(decrement,1000);
        }
        else{
        	minutes.innerHTML = 0;
        	seconds.innerHTML = 0;
        	alert("timeout");
        }
	}

	function stopTime(){
		document.getElementById("minutes").innerHTML = mins;
		document.getElementById("seconds").innerHTML = secs - Math.round(mins*60);
		clearTimeout(timeout);
	}

	function resetTime(){
		document.getElementById("minutes").innerHTML = 0;
		document.getElementById("seconds").innerHTML = 0;
		clearTimeout(timeout);
	}
