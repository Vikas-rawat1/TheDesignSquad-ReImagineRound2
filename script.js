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

  return locoScroll;
}

var locoScroll = locomotivework();
var cursor = document.querySelector("#cursor");
var productDiv = document.querySelector(".coffee-container");
var scrollContainer = document.querySelector("#scroll-images");
var string = document.querySelector("#string");
var path = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

var mainImg = document.querySelector(".home-right img");

var menu = document.querySelector(".right-navbar i");
var close = document.querySelector("#full i");
var sidebarMenu = gsap.timeline();

function cursormovement() {
  window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
      ease: "expoScale(0.5,7,none)",
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

function loadingAnimation() {
  var t1 = gsap.timeline();

  t1.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;

      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 50);
    },
  });

  t1.to("#loader", {
    opacity: 0,
    duration: 4,
    delay: 1.8,
  });
  t1.from("#page1", {
    delay: 0.1,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });
  t1.to("#loader", {
    display: "none",
  });

  t1.from("#page1 video", {
    y:20,
    stagger:0.3,
    duration:0.5,
    scale:0.2,
    opacity:0,
  });
  t1.from(".left-navbar img,li,.right-navbar", {
    y: -60,
    opacity: 0,
    // duration: 1,
    // delay: 0.4,
    stagger: 0.3,
  });

  t1.from(
    "#home-content h3,#home-content h1,#home-content p,#home-content button",
    {
      stagger: 0.3,
      // duration:0.5,
      opacity: 0,
    }
  );
}

function sideMenuOpen() {
  sidebarMenu.to("#full", {
    right: 0,
    duration: 0.3,
  });

  sidebarMenu.from("#full h4", {
    // x: 500,
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
  });
  sidebarMenu.from(".full-left h3,.full-left h2", {
    // x: 500,
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
  });

  sidebarMenu.from("#full i", {
    opacity: 0,
  });
  sidebarMenu.pause();

  menu.addEventListener("click", function () {
    sidebarMenu.play();
    document.body.classList.add("no-scroll");
    locoScroll.stop();
  });
  close.addEventListener("click", function () {
    sidebarMenu.reverse();
    document.body.classList.remove("no-scroll");
    locoScroll.start();
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
    gsap.to("#string svg path", {
      attr: { d: finalPath },
      duration: 1,
      ease: "elastic.out(1,0.2)",
    });
  });
}



function page2Text() {
  var tl2 = gsap.timeline();

  // Common scrollTrigger settings
  const scrollSettings = {
    scroller: "#main",
    scrub: 6,
    pin: true,
    // markers: true, // Uncomment if needed for debugging
  };

  // Animate left-line1
  tl2.to(".page2-left .left-line1", {
    transform: "translateX(20%)",
    opacity: 1,
    scrollTrigger: {
      ...scrollSettings,
      trigger: ".page2-left",
      start: "10% 60%",
      end: "top 100%",
    },
  });

  // Animate right-line1
  tl2.to(".page2-right .right-line1", {
    transform: "translateX(-20%)",
    opacity: 1,
    scrollTrigger: {
      ...scrollSettings,
      trigger: ".page2-right",
      start: "30% 70%",
      end: "40% 100%",
    },
  });

  // Animate left-line2
  tl2.to(".page2-left .left-line2", {
    transform: "translateX(20%)",
    opacity: 1,
    scrollTrigger: {
      ...scrollSettings,
      trigger: ".page2-left",
      start: "50% 50%",
      end: "top 100%",
    },
  });

  // Animate right-line2
  tl2.to(".right-line2", {
    transform: "translateX(-20%)",
    opacity: 1,
    scrollTrigger: {
      ...scrollSettings,
      trigger: ".right-line2",
      start: "70% 40%",
      end: "20% 100%",
    },
  });

  // Animate left-line3
  tl2.to(".page2-left .left-line3", {
    transform: "translateX(20%)",
    opacity: 1,
    scrollTrigger: {
      ...scrollSettings,
      trigger: ".page2-left",
      start: "90% 50%",
      end: "top 100%",
    },
  });
  // Animate right-line3

  tl2.to(".page2-right .right-line3", {
    transform: "translateX(20%)",
    opacity: 1,
    scrollTrigger: {
      ...scrollSettings,
      trigger: ".page2-right",
      start: "90% 40%",
      end: "top 100%",
    },
  });
  tl2.to(".page2-center .mobile-button", {
    transform: "translateX(20%)",
    opacity: 1,
    scrollTrigger: {
      ...scrollSettings,
      trigger: ".page2-center",
      start: "40% 40%",
      end: "top 100%",
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
    y: -30,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#page4-home",
      scroller: "#main",
      start: "top 0%",
      end: "top 90%",
      scrub: 6,
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
    },
  });
}

function scrollImages() {
  gsap.to("#scroll-images img", {
    transform: "translateX(-340%)",
    opacity: 1,
    x: "-180%",
    scrollTrigger: {
      trigger: "#scroll-images",
      scroller: "#main",
      start: "top 0%",
      end: "top -100%",
      scrub: 6,
      pin: true,
    },
  });
  scrollContainer.addEventListener("mouseenter", function (dets) {
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

// var parallex = gsap.timeline();

function page7Scroll() {
  gsap.from("#page7", {
    y: -100,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "-10% 20%",
      end: "top 60%",
      scrub: 4,
      // markers: true,
    },
  });

  // gsap.to("#page8", {
  //   y: 0,
  //   duration: 1.5,
  //   delay: 0.5,
  //   // opacity:20,
  //   ease: "power2.out",
  //   scrollTrigger: {
  //     trigger: "#page7",
  //     scroller: "#main",
  //     start: "80% 90%",
  //     end: "60% 30%",
  //     scrub: 4,
  //     markers: true,
  //   },
  // });
}
function textSplitting() {
  var allH1 = document.querySelectorAll(".p2 h1");
  var clutter = "";

  allH1.forEach(function (elem) {
    // console.log(elem);
    var clutter = "";
    var h1Text = elem.textContent;
    h1SplittedText = h1Text.split("");

    h1SplittedText.forEach(function (elem2) {
      // console.log(elem2);
      clutter += `<span>${elem2}</span>`;
      // console.log(clutter);
    });
    elem.innerHTML = clutter;
    // console.log(elem)
  });
}

function textScrollingAnimation() {
  gsap.to(".p2 h1 span ", {
    color: "black",
    stagger: 0.2,
    delay: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: ".p2 h1",
      scroller: "#main",
      start: "top 20%",
      end: "top -10%",
      scrub: 2,
      // markers: true,
    },
  });
}

function page8Scroll() {
  var tl = gsap.timeline();

  tl.from("#page8", {
    y: -100,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "-40% 30%",
      end: "top 60%",
      scrub: 4,
      // markers: true,
    },
  });
  tl.from("#page8 .page8-upper", {
    // y: -10,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "-20% 30%",
      end: "top 60%",
      scrub: 4,
      // markers: true,
    },
  });
  tl.from("#page8 #page8-last", {
    y: 30,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "10% 30%",
      end: "top 60%",
      scrub: 4,
      // markers: true,
    },
  });
}

// loadingAnimation();
// cursormovement();
sideMenuOpen();
// strip();
page2Text();
// marqueWheel();
// deliverySection();
// scrollImages();
// page7Scroll();
// textSplitting();
// textScrollingAnimation();
// page8Scroll();
