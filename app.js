function smoothScroll( target, duration ){
    let targetEl = document.querySelector(target);

    /* The Element.getBoundingClientRect() method returns the
     size of an element and its position relative to the viewport.*/
    let targetPosition = targetEl.getBoundingClientRect().top;
    
   /* Return the number of pixels the document is currently scrolled along the vertical axis */
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;

    let startTime = null;

    console.log(startPosition);

    function animation ( currentTime ){
        if( startTime === null ){
            startTime = currentTime;
        }
        let timeElapsed = currentTime -startTime;

        let run = ease ( timeElapsed, startPosition, distance, duration);
        window.scrollTo( 0, run);
        if( timeElapsed < duration) requestAnimationFrame( animation );
    }

    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    };

    requestAnimationFrame( animation );
}

let section1El = document.querySelector(".section1");

section1El.addEventListener('click', function() {
    smoothScroll( '.section2', 3000);
})


let section2El = document.querySelector(".section2");

section2El.addEventListener('click', function() {
    smoothScroll( '.section1', 5000);
})



