

$("#slider").slideReveal({
  trigger: $("#trigger"),
  position: "right",
  push: false,
  show: function(slider, trigger){
    document.getElementById('slider').style.marginRight = '15px';
    document.getElementById('trigger').classList.add('active');

  },
   hide: function(slider, trigger){
     document.getElementById('slider').style.marginRight = '0px';
     document.getElementById('trigger').classList.remove('active');

  }
});


// heade


// eyes


var pupilsCollection = document.getElementsByClassName('pupil');
var pupilArray = Array.from(pupilsCollection);

var input = {
  mouseX:{
    start: 0,
    end: window.innerWidth,
    current:0
  },
  mouseY:{
    start: 0,
    end: window.innerHeight,
    current: 0
  }
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

var output = {
  x:{
    start: -40,
    end: 40,
    current:0
  },
  y:{
    start: -40,
    end: 40,
    current:0
  }
}

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;



var handleMouseMove = function(event){
input.mouseX.current = event.clientX;
input.mouseY.current = event.clientY;

input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);



  pupilArray.forEach(function(pupil,k){
    pupil.style.transform = 'translate('+output.x.current+'px,'+output.y.current+'px)';

  })

}


var handleResize = function(){
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;

  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;

}

if ("ontouchstart" in document.documentElement == false){
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);

}
