
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backtoTop");
    backToTopButton.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


function searchdevices() {
    let input = document.getElementById('searchBar').value.toUpperCase();
    let sections = document.querySelectorAll('body div h3');

    sections.forEach(sec => {
        let text = sec.textContent.trim().toUpperCase();
        sec.parentElement.style.display = text.includes(input) ? 'block' : 'none';
    });
}
