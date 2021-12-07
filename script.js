gsap.from(".navbar",{
    duration:1,
    y : '-100%',
    ease:"power"
});

gsap.from(".logo", {
    duration : 2,
    opacity : 0,
    delay : 1
});

gsap.from(".nav-item", {
    duration : 2,
    opacity : 0,
    delay : 1.5
});

gsap.from(".actions", {
    duration:2,
    opacity:0,
    delay:2
});

gsap.from("h1", {
    duration: 1,
    y : "-100%",
    opacity:0,
    ease:"power1",
    delay:2
});

gsap.from(".hero-p", {
    duration: 1,
    y : "100%",
    opacity:0,
    ease:"power1",
    delay:2.5
});