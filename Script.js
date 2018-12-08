		
		
		function getRandomColor() {
			  var letters = '0123456789ABCDEF'.split('');
			  var color = '#';
			  for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			  }
			  return color;
			}
		
		function drawShape() {
			
			var x = Math.floor((Math.random()*200) + 100);
			var y = Math.floor(Math.random()*400);
			var w = Math.floor(Math.random()*350);
			if (Math.random() > 0.5) {
				document.getElementById("shape").style.borderRadius = "50%";
			} else {
				document.getElementById("shape").style.borderRadius = "0%";
			}
			var z = document.getElementById("shape");
			z.style.width = x+'px';
			z.style.height = x+'px';
			z.style.left=y+"px";
			z.style.top=w+"px";
			z.style.backgroundColor = getRandomColor();
			z.style.display = "block";
		}
		
		var start = new Date().getTime();
		
		function shapeAppear() {
		
			drawShape();
			start = new Date().getTime();
			
		}
		
		function appearAfterDelay(){
			setTimeout(shapeAppear(), Math.random() * 2000);
		}
		
		appearAfterDelay();
		
		document.getElementById("shape").onclick = function(){
			
			document.getElementById("shape").style.display = "none";
			
			var end = new Date().getTime();
			
			var diff = ((end - start) / 1000);
			
			document.getElementById("timer").innerHTML = " " + diff + "sec";
			
			appearAfterDelay();
		}
		
		console.log(length)
		