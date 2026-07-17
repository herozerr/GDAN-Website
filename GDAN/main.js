function goToSection(sectionNum) {
    window.scrollTo({top: document.getElementById("info-section").offsetTop + 70});
    let carouselItems = document.getElementsByClassName('carousel-item');
    for (let i = 0; i<carouselItems.length; i++) {
        carouselItems[i].style.transform = `translateX(-${90*sectionNum}vw)`;
    }
}

function init() {
    document.body.ondragstart = function () { return false; };
}