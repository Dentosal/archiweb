console.log("??");

document.querySelector("input#api").onkeyup = function (event) {
    let url = event.currentTarget.value;
    event.currentTarget.classList.add("valid");
}
