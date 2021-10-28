const WINDOW = document.getElementsByClassName("container")[0]
const FOLOW_MOUSE = document.getElementsByClassName("mouse-folow")[0]
let MOUSE_POSITION = []

WINDOW.addEventListener("mousemove", function( event ){
   clearTimeout 
    MOUSE_POSITION = (
        [event.clientX - (FOLOW_MOUSE.clientWidth/2), 
        event.clientY - (FOLOW_MOUSE.clientHeight/2)]
        )
    FOLOW_MOUSE.style.transform = `translate(${MOUSE_POSITION[0]}px,${MOUSE_POSITION[1]}px)`
})
