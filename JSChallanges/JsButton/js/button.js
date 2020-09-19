
var btn = document.getElementById('btn');
var counter = btn.innerHTML

/* This sets the action to perform on a click event */
btn.onclick = function() {
    /* This changes the button's label */            
    counter++
    btn.innerHTML = counter
};