document.getElementById("st-1").addEventListener("click", function(){
   window.open("W-1/w-1.html","_self")
 });
 document.getElementById("st-2").addEventListener("click", function(){
    window.open("W-2/w-2.html","_self")
  });
  document.getElementById("st-3").addEventListener("click", function(){
     window.open("W-3/w-3.html","_self")
   });
   document.getElementById("st-4").addEventListener("click", function(){
      window.open("W-4/w-4.html","_self")
    });
    document.getElementById("st-5").addEventListener("click", function(){
       window.open("W-5/w-5.html","_self")
     });
     document.getElementById("st-home").addEventListener("click", function(){
        alert("This is W-home");
      });



      TweenMax.from("#st-home", {scrollTrigger:
        {
          trigger:"#st-home",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
        }, opacity: 0, x: +2000});

      TweenMax.to("#st-home", 6, {rotation:"360", ease:Linear.easeNone, repeat:-1,transformOrigin:"50% 50%"});

      TweenMax.from("#st-t-home", {scrollTrigger:
        {
          trigger:"#st-home",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
          }, opacity: 0, x: -2000});

      TweenMax.from("#home-background", {scrollTrigger:
        {
          trigger:"#st-home",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
          }, opacity: 0, y: -1000});

      // TweenMax.from(".left-side", {scrollTrigger:
      //   {
      //     trigger:"#st-1",
      //     start:"top 75%",
      //     end:"bottom 25%",
      //     toggleActions:"restart complete none reset"
      //     }, opacity: 0, x: +2000, scale:0.5});

      TweenMax.from(".st-1-animate", {scrollTrigger:
        {
          trigger:"#st-1",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
          }, opacity: 0, x: +2000, scale:0.5});


      TweenMax.from(".st-2-animate", {scrollTrigger:
        {
          trigger:"#st-2",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
          }, opacity: 0, x: -2000, scale:0.5});


      TweenMax.from(".st-3-animate", { scrollTrigger:
        {
          trigger:"#st-3",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
          }, opacity: 0, x: +2000, scale:0.5});


      TweenMax.from(".st-4-animate", {scrollTrigger:
        {
          trigger:"#st-4",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
          }, opacity: 0, x: -2000, scale:0.5});


      TweenMax.from(".st-5-animate", {scrollTrigger:
        {
          trigger:"#st-5",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
          },opacity: 0, x: +2000, scale:0.5});


      TweenMax.from("#st-t-footer", {scrollTrigger:
        {
          trigger:"#st-t-footer",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
          },opacity: 0, x: -2000});

      TweenMax.from("#footer-background", {scrollTrigger:
        {
          trigger:"#st-t-footer",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
          },opacity: 0, y: 1000});
