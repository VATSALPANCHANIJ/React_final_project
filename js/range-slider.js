/*===================================
    range slider js
===================================*/
    var slider1 = document.getElementById("range1");
    var slider2 = document.getElementById("range2");
    var output1 = document.getElementById("demo1");
    var output2 = document.getElementById("demo2");
    output1.innerHTML = slider1.value;
    output2.innerHTML = slider2.value;

    slider1.oninput = function() {
        output1.innerHTML = slider1.value;
    }
    slider2.oninput = function() {
        output2.innerHTML = slider2.value;
    }