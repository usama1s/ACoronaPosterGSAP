gsap.registerPlugin(ScrollTrigger);



  CustomEase.create("custom1", "M0,-0.566,C0.127,-0.184,0.281,1,0.5,1,0.728,1,1,-0.526,1,-0.526")
TweenMax.fromTo("#image1", {
	duration: 2.5,
	ease: "custom1",
	x: 150, y: 150,repeat:-1
},
{
	duration: 2.5,
	ease: "custom1",
	x: -50, y: 150,repeat:-1
});

TweenMax.fromTo("#image2", {
	duration: 2.5,
	ease: "custom1",
	x: 600, y: 150,repeat:-1
},
{
	duration: 2.5,
	ease: "custom1",
	x: 800, y: 150,repeat:-1
});
  // TweenMax.from("#image", {scrollTrigger:
  //   {
  //     trigger:"#image",
  //     start:"top 75%",
  //     end:"bottom 25%",
  //     toggleActions:"restart complete none reset"
  //     }, opacity: 0, x: +2000});
