// JavaScript code for Pimp My Text lab

function fontSize() {

    // change font-size
    var x = document.getElementById("font");
    x.style.fontSize = "24pt";
}

function textStyle() {

    // change text
    var x = document.getElementById("font");
    x.style.fontWeight = "bold";
    x.style.textDecoration = "underline";
    x.style.color = "green";
    x.style.fontFamily = "Futura";
    x.style.backgroundColor = "coral";
    
    
    // x.style.textDecoration = "blink";
    /* This doesnt want to work for me and if i leave it uncommented then it will mess with my underline. */

    // set background image
    var y = document.getElementById("background");
    y.style.backgroundImage = "url(images/hundred-dollar-bill.jpg)";
}

function snoopify() {

    // retrieve string
    var str = document
        .getElementById("font")
        .value;

    // split question mark
    var quest = str.split("?");
    str = quest.join("-izzle?");

    // split period
    var pd = str.split(".");
    str = pd.join("-izzle.");

    // split exclamation mark
    var exclam = str.split("!");
    str = exclam.join("-izzle!");

    // print string
    document
        .getElementById("font")
        .value = str;
}