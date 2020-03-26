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

// Add and remove active class to slide based on array methods
function slideTriggerClass(className) {
    let cssClassName = $('.' + className);
    cssClassName.scrolling();

    cssClassName.on('scrollin', () => cssClassName.children('.slide__content').addClass('active'));
    // cssClassName.on('scrollout', () => cssClassName.children('.slide__content').removeClass('active'));
}

// Trigger active class between slide selectors
function slideSelectorsTrigger(className, index) {
    let cssClassName = $('.' + className);
    cssClassName.scrolling();
    if (index !== undefined) {
        let innerIndex = index + 1;
        cssClassName.on('scrollin', () => {
            $('.slide-selectors__list .slide-selectors__item').removeClass('active');
            $('.slide-selectors__list .slide-selectors__item:nth-child(' + innerIndex + ')').addClass('active');
        });
    }
}
let slidesArray = ['appear-eco-slide', 'appear-origin-slide', 'appear-over-production-slide', 'appear-drwadown-slide']; // TODO: rename correctly
slidesArray.map((className, index) => slideSelectorsTrigger(className, index));
slidesArray.map(className => slideTriggerClass(className));
