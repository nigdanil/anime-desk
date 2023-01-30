document.addEventListener("DOMContentLoaded", function () {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                lazyImage.src = lazyImage.dataset.src
            }
        })
    });
    const arr = document.querySelectorAll('img.lzy_img')
    arr.forEach((v) => {
        imageObserver.observe(v);
    })
})