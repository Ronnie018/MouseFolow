const WINDOW = document.getElementById("container")
const FOLOW_MOUSE = document.getElementById("mouse-folow")
let MOUSE_POSITION = []

WINDOW.addEventListener("mousemove", function( event ){ 
    MOUSE_POSITION = ([event.clientX - (FOLOW_MOUSE.clientWidth/2), event.clientY - (FOLOW_MOUSE.clientHeight/2)])
    FOLOW_MOUSE.style.top = `${MOUSE_POSITION[1]}px`
    FOLOW_MOUSE.style.left = `${MOUSE_POSITION[0]}px`
    console.log(MOUSE_POSITION);
})



/*
    MOUSE_POSITION.push([event.clientX, event.clientY])
    FOLOW_MOUSE.style.top = MOUSE_POSITION[1]
    FOLOW_MOUSE.style.left = MOUSE_POSITION[0]
*/