document.addEventListener("DOMContentLoaded", function () {
    const rectangle = document.getElementById("colorRectangle");

    rectangle.addEventListener("mousemove", function (event) {
        const cursorX = event.clientX - rectangle.getBoundingClientRect().left;
        const percentage = (cursorX / rectangle.offsetWidth) * 100;

        if (percentage <= 50) {
            rectangle.style.backgroundColor = "red";
        } else {
            rectangle.style.backgroundColor = "blue";
        }
    });

    // Reset color when the mouse leaves the rectangle
    rectangle.addEventListener("mouseleave", function () {
        rectangle.style.backgroundColor = "white";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const rectangle = document.getElementById("colorRectangle");


    // Step-3: we will tell the mouse to do something when hover over the rectangle

    rectangle.addEventListener("mousemove", function () {

    })
});