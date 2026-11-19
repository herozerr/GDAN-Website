function goToSection(sectionNum) {
    window.scrollTo({top: document.getElementById("info-section").offsetTop + 70});
    let carouselItems = document.getElementsByClassName('carousel-item');
    for (let i = 0; i<carouselItems.length; i++) {
        carouselItems[i].style.transform = `translateX(-${90*sectionNum}vw)`;
    }

    const carouselWrapper = document.querySelector(".carousel-wrapper");
    if (carouselWrapper) {
        carouselWrapper.scrollLeft = 0;
    }

    const lazyIframes = carouselItems[sectionNum]?.querySelectorAll("iframe[data-src]");
    lazyIframes?.forEach((iframe) => {
        if (!iframe.src) {
            iframe.src = iframe.dataset.src;
        }
    });
}

function init() {
    document.body.ondragstart = function () { return false; };
    resetCarousel();
    window.addEventListener("load", resetCarousel);
    window.setTimeout(resetCarousel, 500);
}

function resetCarousel() {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    if (carouselWrapper) {
        carouselWrapper.scrollLeft = 0;
    }

    const carouselItems = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.transform = "translateX(0)";
    }
}