document.getElementsByTagName("div")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("div")[0].lastElementChild.style.color = "green"


// Q4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
});