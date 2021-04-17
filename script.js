let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

console.log("hello");

timeline.to('#rock', 2, { y: -300 })
  .to("#girl", 2, { y: -200 }, "-=2")
  .fromTo("#bg", { y: -50 }, { y: 0, duration: 2 }, "-=2")
  .to(".content", 2, { top: "0%" }, "-=2")
  .fromTo('.content-images', { opacity: 0 }, { opacity: 1, duration: 2 }, "-=2");


let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);