// Scroll smothe function
function gotSmothTo(destination) {
    $('html, body').animate(
        {
            scrollTop: $(destination).offset().top
        },
        1000
    );
    return false;
}

// Add and remove class based on array methods
function slideTriggerClass(className) {
    let cssClassName = $('.' + className);
    cssClassName.scrolling();

    cssClassName.on('scrollin', () => cssClassName.children('.slide__content').addClass('active'));
	cssClassName.on('scrollout', () => cssClassName.children('.slide__content').removeClass('active'));
};

let slidesArray = ['appear-eco-slide', 'appear-origin-slide','appear-over-production-slide' ,'appear-drwadown-slide'];
slidesArray.map(className => slideTriggerClass(className));


