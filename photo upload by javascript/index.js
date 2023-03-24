const image = document.querySelector("img"),
input = document.querySelector("input");
input.addEventListener("change",() => {
    img.src = URL.createObjectURL(input.files[0]);
})