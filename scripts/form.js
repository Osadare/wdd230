const pass1 = document.querySelector("#password")
const pass2 = document.querySelector("#password2")

const message = document.querySelector("#message")
pass2.addEventListener("focusout", checkSame);

function checkSame() {
    if (pass1.value !== pass2.value) {
        message.textContent = `Passwords do not match!`
        message.style.visibility = "show";

        pass1.value = "";
        pass2.value = "";
        pass1.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
} 
 
   
const rangevalue = document.getElementById("rangeValue");
const range = document.getElementById("r");

range.addEventListener('change', displayRange);
range.addEventListener('input', displayRange);

function displayRange() {
    rangevalue.innerHTML = range.value;
}