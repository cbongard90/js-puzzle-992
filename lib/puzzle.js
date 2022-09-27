// todo

const hintBtn = document.getElementById("show-hint");
const hint = document.querySelector(".hint");

// Listen to the click
hintBtn.addEventListener( "click", (event) => {
  hint.classList.toggle("active");
})
