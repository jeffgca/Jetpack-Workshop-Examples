var state = 1;
var slides;

function init() {
    slides = document.querySelectorAll("body > section");
    for (var i = 1, il = slides.length; i <= il; i++) {
        slides[i - 1].innerHTML = "<div>" + slides[i - 1].innerHTML + "</div>";
    }
    update();
    document.body.classList.add("loaded");
}

function update() {
    var old = document.querySelector("section[aria-selected]");
    var next = document.querySelector("section:nth-of-type("+ state +")");

    if (old) {
        old.removeAttribute("aria-selected");
        if (old.hasAttribute("data-onunload")) {
            window[old.getAttribute("data-onunload")].call(window, old);
        }
    }

    if (next) {
        next.setAttribute("aria-selected", "true");
        if (next.hasAttribute("data-onload")) {
            window[next.getAttribute("data-onload")].call(window, next);
        }
    }
}

function back() {
    if (state == 1) return;
    state--;
    update();
}

function forward() {
    if (state > slides.length) return;
    state++;
    update();
}

function jumpTo(number) {
    while (number > state) forward();
    while (number < state) back();
}

function resize() {
    var style = document.getElementById("resizeStyle");
    if (!style) {
        style = document.createElement("style");
        style.id = "resizeStyle";
        document.head.appendChild(style);
    }
    style.textContent = "body>section>div {height: "+ window.innerHeight +"px}";
}

window.addEventListener("resize", resize, true);
window.addEventListener("load", resize, true);
window.addEventListener("load", init, true);

window.addEventListener("keydown", function(e) {
    // Don't intercept keyboard shortcuts
    if (e.altKey || e.ctrlKey || e.metaKey ) {
        return;
    }
    if (   e.keyCode == 80 // p
        || e.keyCode == 66 // b
        || e.keyCode == 37 // left arrow
        || e.keyCode == 33 // page up
        || e.keyCode == 38 // up arrow
       ) {
           e.preventDefault();
           back();
       }
    if (   e.keyCode == 78 // n
        || e.keyCode == 32 // space
        || e.keyCode == 39 // right arrow
        || e.keyCode == 34 // page down
        || e.keyCode == 40 // down arrow
        ) {
            e.preventDefault();
            forward();
        }
    if (   e.keyCode == 48 ) // 10
          {
            e.preventDefault();
            jumpTo(10);
          }
    if (   e.keyCode == 49 // 1
        || e.keyCode == 50 // 2
        || e.keyCode == 51 // 3
        || e.keyCode == 52 // 4
        || e.keyCode == 53 // 5
        || e.keyCode == 54 // 6
        || e.keyCode == 55 // 7
        || e.keyCode == 56 // 8
        || e.keyCode == 57 // 9
        ) {
            e.preventDefault();
            jumpTo(e.keyCode-48); // x-48 is the slide number you want!
        }
    if (   e.shiftKey && e.keyCode == 49 // 11
        || e.shiftKey && e.keyCode == 50 // 12
        || e.shiftKey && e.keyCode == 51 // 13
        || e.shiftKey && e.keyCode == 52 // 14
        || e.shiftKey && e.keyCode == 53 // 15
        || e.shiftKey && e.keyCode == 54 // 16
        ) {
            e.preventDefault();
            jumpTo(e.keyCode-38); // x-38 is the slide number you want!
        }
}, true);
