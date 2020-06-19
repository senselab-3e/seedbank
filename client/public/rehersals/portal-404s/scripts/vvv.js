/*
 * Code based on something developed by  <Francesco Trillini> ---> his copyright noticed included:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


// NOTES -- it's a hack job but the width for all calculations has +10 added to it, to keep that annoying box edge mostly out of site on the far right. and equal hack will have to be down for the left. 

var self = window;
console.log(window);

//var body = document.querySelectorAll(".waveBabies");
//innerHeight * 0.5

//changing the mouse value is having no effect on where mouse interaction dimensions are happening. still stuck at the top

(function (self) {
    let canvas,
        context,
        wave1 = [],
        wave2 = [],
        wave3 = [],
        mouse = {
            x: innerWidth * 0.5,
            y: innerHeight * 0.5
        },
        angle = 0,
        mouseDown = (interactive = true),
        FPS = 60;

    /*
     * Init.
     */

    function init() {


        //var body2 = document.querySelector("#waves");

        var body = document.querySelector(".waveBabies");
        //if i move this declaration outside of the init function the touch movements no longer work on the mobile devices 
        // console.log(body.length)


        //console.log(el)
        numCanvases = body.length;
        canvas = document.createElement("canvas");
        //canvas.style.marginTop = "250px";

        canvas.width = innerWidth; // if  i add a +10 it creates a weird digital artifact all along the far right
        //sneaky way to push the far right grey line out of field. unfortunately this won't work for the bottom
        canvas.height = innerHeight;
        canvas.style.display = "block";
        // canvas.id = 'something' + el;
        canvas.style.position = "absolute"; // this was originally absolute
        canvas.style.top = 0;
        canvas.style.bottom = 0;
        canvas.style.left = -20;
        canvas.style.right = 0;
        canvas.style.zIndex = 0; // this was at -1 -- i changed it to 10, thinking then it would overlap the main div. but i also need the target div set above zero
        canvas.style.cursor = "n-resize";

        body.appendChild(canvas);

        // Browser supports canvas?
        if (!!capable) {
            context = canvas.getContext("2d");
            //console.log(context)
            // Events
            if ("ontouchmove" in window) {
                canvas.addEventListener("touchstart", onTouchStart, false);
                canvas.addEventListener("touchend", onTouchEnd, false);
                canvas.addEventListener("touchmove", onTouchMove, false);
            } else {
                canvas.addEventListener("mousedown", onMouseDown, false);
                canvas.addEventListener("mouseup", onMouseUp, false);
                canvas.addEventListener("mousemove", onMouseMove, false);
            }

            window.onresize = onResize;

            createWaves();
            createWaves();
            createWaves();
            //createWaves();
            ///originally this was called on twice when it was within the For each loop but that then traps me with a static canvas that doesn't resize this is the hack way of just getting a double loop string without the canvas drawn twice
        } else {
            console.error("Please, update your browser for seeing this animation.");
        }

    }

    /*
     * Checks if browser supports canvas element.
     */

    function capable() {
        return canvas.getContext && canvas.getContext("2d");
    }

    /*
     * On resize window event.
     */

    function onResize() {
        canvas.width = window.innerWidth + 10; //this is how i'm nudging that far right border, offscreen - but this only works on computer viewports, not mobile.
        canvas.height = window.innerHeight;
        //createWaves(); just messing. i can keep tangling up the viewport with even more strings each time the window is resized
    }

    /*
     * Mouse down event.
     */

    function onMouseDown(event) {
        event.preventDefault();

        mouseDown = true;
    }

    /*
     * Mouse up event.
     */

    function onMouseUp(event) {
        event.preventDefault();

        mouseDown = false;
    }

    /*
     * Mouse move event.
     */

    function onMouseMove(event) {
        event.preventDefault();

        mouse.x = event.pageX - canvas.offsetLeft;
        mouse.y = event.pageY - canvas.offsetTop;

        if (interactive) mouseDown = interactive = false;
    }

    /*
     * Touch start event.
     */

    function onTouchStart(event) {
        event.preventDefault();

        mouseDown = true;
    }

    /*
     * Touch end event.
     */

    function onTouchEnd(event) {
        event.preventDefault();

        mouseDown = false;
    }

    /*
     * Touch move event.
     */

    function onTouchMove(event) {
        event.preventDefault();

        mouse.x = event.touches[0].pageX - canvas.offsetLeft;
        mouse.y = event.touches[0].pageY - canvas.offsetTop;

        if (interactive) mouseDown = interactive = false;
    }

    /*
     * Create waves.
     */

    function createWaves() {
        var totalPoints = Math.round(canvas.width / 170);

        for (var quantity = 0, len = totalPoints; quantity < len; quantity++)
            // First wave
            wave1.push({
                x: (canvas.width * quantity) / (len - 1),
                y: canvas.height * 0.5 - 20, // this is where different wave lengths are being set the height for the 3 is different
                vy: Math.random() * 10,

                depth: canvas.height * 0.5
            });

        for (var quantity = 0, len = totalPoints; quantity < len; quantity++)
            // Second wave
            wave2.push({
                x: (canvas.width * quantity) / (len - 1),
                y: canvas.height * 0.5,
                vy: Math.random() * 10,

                depth: canvas.height * 0.5
            });

        for (var quantity = 0, len = totalPoints; quantity < len; quantity++)
            // Third wave
            wave3.push({
                x: (canvas.width * quantity) / (len - 1),
                y: canvas.height * 0.5 + 20,
                vy: Math.random() * 10,

                depth: canvas.height * 0.5
            });

        wave();
    }

    /*
     * Loop logic.
     */

    function wave() {
        clear();
        update();
        render();

        requestAnimFrame(wave);
    }

    /*
     * Clear the whole screen.
     */

    function clear() {
        context.clearRect(0, 0, innerWidth, innerHeight);
    }

    /*
     * Update the waves.
     */

    function update() {
        var ease, friction, threshold;

        friction = 0.99;
        threshold = interactive ? Math.round(canvas.width / 4.5) : 280;

        if (interactive) {
            angle += 0.05;

            mouse.x = canvas.width * 0.5 + Math.sin(angle) * (canvas.width) * 0.2;
            mouse.y =
                canvas.height * 0.5 - 50 + Math.sin(angle) * canvas.height * 0.2;
        }

        for (
            var index = 0; index < (wave1.length || wave2.length || wave3.length); index++
        ) {
            var point1 = wave1[index];
            //console.log(wave1[index])
            var point2 = wave2[index];
            var point3 = wave3[index];

            point1.y += point1.vy;
            point2.y += point2.vy;
            point3.y += point3.vy;

            // Ease
            //----->interesting results
            // point1.vy += (point1.depth - point1.y) * (interactive ? 0.03 : 0.000);
            // point2.vy += (point2.depth - point2.y) * (interactive ? 0.02 : 0.000);
            // point3.vy += (point3.depth - point3.y) * (interactive ? 0.01 : 0.000);
            //----->interesting results
            point1.vy += (point1.depth - point1.y) * (interactive ? 0.03 : 0.00001);
            point2.vy += (point2.depth - point2.y) * (interactive ? 0.02 : 0.00001);
            point3.vy += (point3.depth - point3.y) * (interactive ? 0.01 : 0.00001);
            //----ORIGINAL
            // point1.vy += (point1.depth - point1.y) * (interactive ? 0.03 : 0.009);
            // point2.vy += (point2.depth - point2.y) * (interactive ? 0.02 : 0.008);
            // point3.vy += (point3.depth - point3.y) * (interactive ? 0.01 : 0.007);

            // Friction
            point1.vy *= friction;
            point2.vy *= friction;
            point3.vy *= friction;

            // Threshold
            if (distanceTo(mouse, point1) < threshold && mouseDown)
                point1.vy += (mouse.y - point1.y) * (interactive ? 0.03 : 0.009);

            if (distanceTo(mouse, point2) < threshold && mouseDown)
                point2.vy += (mouse.y - point2.y) * (interactive ? 0.02 : 0.008);

            if (distanceTo(mouse, point3) < threshold && mouseDown)
                point3.vy += (mouse.y - point3.y) * (interactive ? 0.01 : 0.007);
        }
    }

    /*
     * Render the waveS.
     */

    function render() {
        for (
            var wave = 0; wave < (wave1.length || wave2.length || wave3.length); wave++
        ) {
            // Smooth bezier curves
            clear();

            context.save();
            context.globalAlpha = 0.5;
            context.strokeStyle = "#5dcbb8";
            // context.fillStyle = "#5dcbb8";
            context.beginPath();

            context.moveTo(wave1[0].x, wave1[0].y);

            // Draw through N wave1
            for (var N = 1; N < wave1.length - 2; N++) {
                var xc = (wave1[N].x + wave1[N + 1].x) / 2;
                var yc = (wave1[N].y + wave1[N + 1].y) / 2;

                context.quadraticCurveTo(wave1[N].x, wave1[N].y, xc, yc);
            }

            context.quadraticCurveTo(
                wave1[wave1.length - 2].x,
                wave1[wave1.length - 2].y,
                wave1[wave1.length - 1].x,
                wave1[wave1.length - 1].y
            );
            //---->OLD original scripts that created fill square ----
            //context.lineTo(canvas.width, canvas.height);
            //this is where the bottom line is being drawn. //
            // context.lineTo(0, canvas.height / 2);
            // context.lineTo(0, wave1[0].y);
            //---->OLD original scripts that created fill square ----


            //----->remember that these fill styles could be interesting in the gordon matta clarke type way in another context (aka not when for this specific webpage)
            // context.fill();
            context.stroke();
            context.restore();


            context.save();
            context.globalAlpha = 0.5;
            // context.fillStyle = "#89cb5d";
            context.strokeStyle = "#5db5cb";
            context.beginPath();
            context.moveTo(wave2[0].x, wave2[0].y);
            // Draw through N wave2
            for (var N = 1; N < wave2.length - 2; N++) {
                var xc = (wave2[N].x + wave2[N + 1].x) / 2;
                var yc = (wave2[N].y + wave2[N + 1].y) / 2;

                context.quadraticCurveTo(wave2[N].x, wave2[N].y, xc, yc);
            }

            context.quadraticCurveTo(
                wave2[wave2.length - 2].x,
                wave2[wave2.length - 2].y,
                wave2[wave2.length - 1].x,
                wave2[wave2.length - 1].y
            );

            //---->OLD original scripts that created fill square ----
            //context.lineTo(canvas.width, canvas.height);
            // context.lineTo(0, canvas.height / 2);
            // context.lineTo(0, wave2[0].y);
            //---->OLD original scripts that created fill square ----



            // context.fill();
            context.stroke();
            context.restore();

            context.save();
            context.globalAlpha = 0.5;
            // context.fillStyle = "#775dcb";
            context.strokeStyle = "#5db5cb";
            context.beginPath();

            context.moveTo(wave3[0].x, wave3[0].y);

            // Draw through N wave3
            for (var N = 1; N < wave3.length - 2; N++) {
                var xc = (wave3[N].x + wave3[N + 1].x) / 2;
                var yc = (wave3[N].y + wave3[N + 1].y) / 2;

                context.quadraticCurveTo(wave3[N].x, wave3[N].y, xc, yc);
            }

            context.quadraticCurveTo(
                wave3[wave3.length - 2].x,
                wave3[wave3.length - 2].y,
                wave3[wave3.length - 1].x,
                wave3[wave3.length - 1].y
            );
            //---->OLD original scripts that created fill square ----
            //context.lineTo(canvas.width, canvas.height);
            // context.lineTo(-1, canvas.height / 2);
            // context.lineTo(-1, wave3[0].y);
            //---->OLD original scripts that created fill square ----

            context.stroke();
            // context.fill();
            context.restore();
        }
    }

    /*
     * Distance between two wave1.
     */

    function distanceTo(pointA, pointB) {
        var dx = Math.abs(pointA.x - pointB.x);
        var dy = Math.abs(pointA.y - pointB.y);

        return Math.sqrt(dx * dx + dy * dy);
    }

    /*
     * Request new frame by Paul Irish.
     * 60 FPS.
     */

    window.requestAnimFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / FPS);
            }
        );
    })();

    window.addEventListener ?
        window.addEventListener("load", init, false) :
        (window.onload = init);
})(self);