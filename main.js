document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelector(".categories");

    let isDown = false;
    let startX;
    let scrollLeft;

    categories.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - categories.offsetLeft;
        scrollLeft = categories.scrollLeft;
    })

    categories.addEventListener("mouseleave", () => {
        isDown = false;
    })

    categories.addEventListener("mouseup", () => {
        isDown = false;
    })

    categories.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - categories.offsetLeft;
        const walk = (x - startX)* 2;
        categories.scrollLeft = scrollLeft - walk;
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const pageNumbers = document.querySelectorAll(".pagination span");

    pageNumbers.forEach(page => {
        page.addEventListener("click", function () {
            pageNumbers.forEach(p => p.classList.remove("active"));
            this.classList.add("active");
        });
    });
});