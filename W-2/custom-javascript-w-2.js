gsap.registerPlugin(ScrollTrigger);
TweenMax.from("#tr-1", {scrollTrigger:
  {
    trigger:"#tr-1",
    start:"top 75%",
    end:"bottom 25%",
    toggleActions:"restart complete none reset"
    }, opacity: 0, x: +2000});

    TweenMax.from("#tr-2", {scrollTrigger:
      {
        trigger:"#tr-2",
        start:"top 75%",
        end:"bottom 25%",
        toggleActions:"restart complete none reset"
      }, opacity: 0, x: -2000});
