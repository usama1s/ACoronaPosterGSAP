

document.getElementById("gloves-img").addEventListener("mouseover", function(){
   // document.getElementsByClassName('cls-5').style.display = 'block';
   var all = document.getElementsByClassName('cls-5');
   for (var i = 0; i < all.length; i++) {
     all[i].style.display = 'block';
   }
   var alll = document.getElementsByClassName('cls-4');
   for (var i = 0; i < alll.length; i++) {
     alll[i].style.display = 'block';
   }
 });

 document.getElementById("no-germs-img").addEventListener("mouseover", function(){
    // document.getElementsByClassName('cls-5').style.display = 'block';
    var all = document.getElementsByClassName('cls-15');
    for (var i = 0; i < all.length; i++) {
      all[i].style.display = 'block';
    }
    var alll = document.getElementsByClassName('cls-13');
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
