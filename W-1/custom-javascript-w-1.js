// document.getElementsByClassName("physical-img").addEventListener("click", function(){
//    // document.getElementsByClassName('cls-5').style.display = 'block';
//    alert("fsd");
//  });
 document.getElementById("physical-img").addEventListener("mouseover", function(){
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
  document.getElementById("mental-img").addEventListener("mouseover", function(){
     // document.getElementsByClassName('cls-5').style.display = 'block';
     var all = document.getElementsByClassName('cls-18');
     for (var i = 0; i < all.length; i++) {
       all[i].style.display = 'block';
     }
     var alll = document.getElementsByClassName('cls-21');
     for (var i = 0; i < alll.length; i++) {
       alll[i].style.display = 'block';
     }
   });
   document.getElementById("social-img").addEventListener("mouseover", function(){
      // document.getElementsByClassName('cls-5').style.display = 'block';
      var all = document.getElementsByClassName('cls-19');
      for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'block';
      }
      var alll = document.getElementsByClassName('cls-211');
      for (var i = 0; i < alll.length; i++) {
        alll[i].style.display = 'block';
      }
    });
// onmouseover="document.getElementById('div1').style.display = 'block';"
gsap.registerPlugin(ScrollTrigger);
TweenMax.from(".cls-2", {scrollTrigger:
  {
    trigger:".cls-2",
    start:"top 75%",
    end:"bottom 25%",
    toggleActions:"restart complete none reset"
    }, opacity: 0, x: +2000});

TweenMax.from("#physical-img", {scrollTrigger:
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
    TweenMax.from("#mental-img", {scrollTrigger:
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

      TweenMax.from("#social-img", {scrollTrigger:
      {
      trigger:".cls-4",
      start:"top 75%",
      end:"bottom 25%",
      toggleActions:"restart complete none reset"
      }, opacity: 0, x: +2000});
