gsap.registerPlugin(ScrollTrigger);

function locomotivework() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

var cursor = document.querySelector("#cursor");
var productDiv = document.querySelector(".product-images");
var scrollContainer = document.querySelector("#scroll-images");
var string = document.querySelector("#string");
var path = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

var mainImg = document.querySelector(".home-right img");

function cursormovement() {
  window.addEventListener("mousemove", function (dets) {
    // console.log(dets.x)
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      ease: "back.out(1.7)",
    });
  });

  productDiv.addEventListener("mouseenter", function (dets) {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      scale: 5,
      ease: "back.out(1.7)",
      backgroundColor: "#ffffff8a",
    });
  });
  productDiv.addEventListener("mouseleave", function (dets) {
    cursor.innerHTML = "";
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      scale: 1,
      backgroundColor: "#000",
    });
  });
}

function strip() {
  string.addEventListener("mousemove", function (dets) {
    var path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    gsap.to("#string svg path", {
      attr: { d: path },
      duration: 1,
      ease: "power3.out",
    });
  });
  string.addEventListener("mouseleave", function (dets) {
    // var path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
    gsap.to("#string svg path", {
      attr: { d: finalPath },
      duration: 1,
      ease: "elastic.out(1,0.2)",
    });
  });
}
var tl = gsap.timeline();

function stagger() {
  tl.from(".left-navbar img", {
    y: -60,
    opacity: 9,
    duration: 2,
    delay: 0.2,
    stagger: 0.3,
  });
  tl.from("li", {
    y: -60,
    opacity: 9,
    duration: 2,
    delay: 0.2,
    stagger: 0.3,
  });
  tl.from(".button", {
    y: -60,
    opacity: 9,
    duration: 2,
    delay: 0.2,
    stagger: 0.3,
  });
}

function scrollImages() {
  gsap.to("#scroll-images img", {
    transform: "translateX(-340%)",
    opacity: 1,
    x: "-180%",
    scrollTrigger: {
      trigger: "#scroll-images ",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      scrub: 6,
      pin: true,
      // markers: true,
    },
  });
  scrollContainer.addEventListener("mouseenter", function (dets) {
    // cursor.innerHTML="view"
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      scale: 1,
      ease: "back.out(1.7)",
      backgroundColor: "orange",
    });
  });
  scrollContainer.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      scale: 1,
      ease: "back.out(1.7)",
      backgroundColor: "#000",
    });
  });
}

var tl2 = gsap.timeline();
function page2Text() {
  tl2.to(".text-left", {
    transform: "translateX(0%)",
    opacity: 1,
    x: 200,
    scrollTrigger: {
      trigger: ".text-left",
      scroller: "#main",
      start: "top 60%",
      end: "top 100%",
      scrub: 6,
      pin: true,
      // markers: true,
    },
  });
  tl2.to(".text-right", {
    transform: "translateX(-50%)",
    opacity: 1,
    x: 200,
    scrollTrigger: {
      trigger: ".text-right",
      scroller: "#main",
      start: "top 40%",
      end: "top 100%",
      scrub: 6,
      pin: true,
      // markers: true,
    },
  });
}

function marqueWheel() {
  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        duration: 5,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        duration: 5,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}
var tl3 = gsap.timeline();

function deliverySection() {
  tl3.to("#page4 #page4-home", {
    // backgroundColor: "red",
    y: -30,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#page4-home ",
      scroller: "#main",
      start: "top 0%",
      end: "top 90%",
      scrub: 6,
      // markers: true,
    },
  });
  tl3.to("#page4 .page4-right", {
    y: -50,
    delay: 1,
    scrollTrigger: {
      trigger: ".page4-right",
      scroller: "#main",
      start: "-40% 0%",
      end: "top 90%",
      scrub: 6,
      // markers: true,
    },
  });
}

gsap.to("#page8", {
  y: -150,
  scrollTrigger: {
    trigger: "#page8",
    scroller: "#main",
    start: "top -30%",
    end: "top 90%",
    scrub: 6,
    // markers: true,
  },
});

locomotivework();
cursormovement();
stagger();
strip();
page2Text();
scrollImages();
marqueWheel();
deliverySection();
