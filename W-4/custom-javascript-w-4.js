
document.getElementById("sanitizer-img").addEventListener("mouseover", function(){
   // document.getElementsByClassName('cls-5').style.display = 'block';
   var all = document.getElementsByClassName('cls-5');
   for (var i = 0; i < all.length; i++) {
     all[i].style.display = 'block';
   }
   var alll = document.getElementsByClassName('cls-6');
   for (var i = 0; i < alll.length; i++) {
     alll[i].style.display = 'block';
   }
 });

document.getElementById("mask-img").addEventListener("mouseover", function(){
    // document.getElementsByClassName('cls-5').style.display = 'block';
    var all = document.getElementsByClassName('cls-9');
    for (var i = 0; i < all.length; i++) {
      all[i].style.display = 'block';
    }
    var alll = document.getElementsByClassName('cls-10');
    for (var i = 0; i < alll.length; i++) {
      alll[i].style.display = 'block';
    }
  });

  document.getElementById("dispose-mask-img").addEventListener("mouseover", function(){
     // document.getElementsByClassName('cls-5').style.display = 'block';
     var all = document.getElementsByClassName('cls-100');
     for (var i = 0; i < all.length; i++) {
       all[i].style.display = 'block';
     }
     var alll = document.getElementsByClassName('cls-30');
     for (var i = 0; i < alll.length; i++) {
       alll[i].style.display = 'block';
     }
   });

gsap.registerPlugin(ScrollTrigger);
TweenMax.from(".cls-2", {scrollTrigger:
  {
    trigger:".cls-2",
    start:"top 75%",
    end:"bottom 25%",
    toggleActions:"restart complete none reset"
    }, opacity: 0, x: +2000});

    TweenMax.from(".cls-3", {scrollTrigger:
      {
        trigger:".cls-3",
        start:"top 75%",
        end:"bottom 25%",
        toggleActions:"restart complete none reset"
      }, opacity: 0, x: -2000});

      TweenMax.from(".cls-4", {scrollTrigger:
        {
          trigger:".cls-4",
          start:"top 75%",
          end:"bottom 25%",
          toggleActions:"restart complete none reset"
        }, opacity: 0, x: +2000});
