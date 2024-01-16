const input = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

input.addEventListener("input", (even) => {

    const inputText = even.target.value.trim();
    spanName.textContent = inputText === '' ? 'Anonymous' : inputText;
    
});
