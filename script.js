gsap.from(".navbar",{
    duration:1,
    y : '-100%',
    ease:"bounce"
});

gsap.from(".logo", {
    duration : 2,
    opacity : 0,
    delay : .5
});

gsap.from(".nav-item", {
    duration : 2,
    opacity : 0,
    delay : .6
});

gsap.from(".actions", {
    duration:2,
    opacity:0,
    delay:.7
});

gsap.from(".hero", {
    duration:1,
    opacity:0,
    y:"-25%",
    delay:.8,
    ease:"bounce"
});

gsap.from(".intro",{
    duration:1,
    y : '-100%',
    ease:"bounce"
});

gsap.from(".presentation",{
    duration:1,
    y : '-100%',
    ease:"bounce"
});

// Scroll reveal
ScrollReveal().reveal('.intro');
ScrollReveal().reveal('.presentation');