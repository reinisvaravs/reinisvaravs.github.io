


function showPage(page) {
    document.querySelectorAll(".pages").forEach(div => {
        div.classList.remove('active');
        div.style.display = "none";
    });

    const targetPage = document.querySelector(`#${page}`);
    targetPage.style.display = "block";
    requestAnimationFrame(() => {
        targetPage.classList.add('active');
    });

    document.querySelectorAll(".page_buttons").forEach(button => {
        button.classList.remove("active");
    });

    document.querySelectorAll(`button[data-page="${page}"]`).forEach(button => {
        button.classList.add("active");
    });

    window.scroll({
        top: 0,
    });
}

document.querySelectorAll(".page_buttons").forEach(button => {
    button.onclick = function() {
        showPage(this.dataset.page);
    }
});

window.onload = () => {
    document.querySelector("#page1").classList.add('active');
    document.querySelectorAll(`button[data-page="page1"]`).forEach(button => {
        button.classList.add("active");
    });
}


document.addEventListener("DOMContentLoaded", function() {
    console.log(`Loaded in ${i/1000} s`)
    clearInterval(start);
})