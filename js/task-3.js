const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener("input", () => {
    const textInput = input.value.trim();
    output.textContent = textInput || "Anonymous";
});