var inited = false
var initedd = false

function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value + "+";
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
  }

  $(window).on('scroll', function() {
    if ( inited ) {
      return
    }

    var el = document.getElementById("el")
    
    if ( el.offsetTop >= window.innerHeight + document.body.scrollTop ) {
      inited = true
      animateValue("value", 0, 2, 1000);
    }
    
  })

  $(window).on('scroll', function() {
    if ( initedd ) {
      return
    }
    
    var ell = document.getElementById("ell")

    if ( ell.offsetTop >= window.innerHeight + document.body.scrollTop ) {
      initedd = true
      animateValue("valueusers", 0, 10, 1000);
    }
    
  })