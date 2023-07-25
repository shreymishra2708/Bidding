$(function(){
  
  
    loop();
      
      
    });
    
    
    function randomIntFromInterval(min, max) { 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    function loop(){
        
      var randomPercent = randomIntFromInterval(1, 6);
      var randomTime = randomIntFromInterval(5, 10) * 1000;
      var factor =  1 - (randomPercent/100);
      var oldVal = parseFloat(document.getElementById("mainElement").innerHTML.trim());
      
      var newVal = (factor * oldVal).toFixed(2);
      console.log({oldVal,randomPercent, randomTime, factor,newVal});
    
      $("#mainElement").html(newVal);
      
      setTimeout(function(){
        loop();
      },randomTime)
      
    }
    
    
    function loop1(){
      
      // detect changes in element #mainElement
      // new current value
      // decrement current value
      // newVal >= Stop loss
      // proceed
      
      
    }