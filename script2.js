let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string).toString();
            } catch {
                string = "Error";
            }
            document.querySelector('input').value = string;
        } else if (value === 'C') {
            string = "";
            document.querySelector('input').value = string;
        } else if (value === 'M+') {
            memory += parseFloat(document.querySelector('input').value || "0");
        } else if (value === 'M-') {
            memory -= parseFloat(document.querySelector('input').value || "0");
        } else if (value === 'MC') {
            memory = 0;
        } else {
            string += value;
            document.querySelector('input').value = string;
        }
    });
})