const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");

function removeClass(arr) {
    arr.forEach((item) => {
        if(item.classList.contains("active-btn")) item.classList.remove("active-btn");
        if(item.classList.contains("active-content")) item.classList.remove("active-content");
    });
};

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(event) {
        removeClass(btns);
        removeClass(contents);
        event.target.classList.add("active-btn");
        contents[i].classList.add("active-content");
    });
};

window.addEventListener("load", () => {
    document.querySelector(".logo").style.transform = "rotate(45deg)";
    document.querySelector(".block").style.transform = "rotate(-45deg)";
    document.querySelector(".primary-title").style.transform = "scale(1)";;
});