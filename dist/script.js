
let myAnimation = anime.timeline({
    easing: 'easeOutExpo',
    duration: 5000
});

myAnimation
    .add({
        targets: '.wrapper',
        opacity: ['0', '1'],
        duration: 1000,
        easing: 'easeInOutQuad'
    })
    .add({
        targets: '.title',
        marginLeft: ['20px', '0'],
        opacity: ['0', '1'],
        duration: 1000,
        easing: 'easeInOutQuad'
    })
    .add({
        targets: '.subtitle',
        opacity: ['0', '1'],
        duration: 1000,
        easing: 'easeInOutQuad'
    })
    .add({
        targets: '.video',
        opacity: ['0', '1'],
        marginBottom: ['0', '10px'],
        duration: 1000,
        easing: 'easeInOutQuad'
    })
    .add({
        targets: '.page-nav',
        opacity: ['0', '1'],
        duration: 1000,
        easing: 'easeInOutQuad'
    });

