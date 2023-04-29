const btn = document.querySelector('#btn');
const input = document.querySelector('#bin');

input.addEventListener('keypress', function(evento) {
    if (capturar(evento) !== true) {
        evento.preventDefault();
    }

    function capturar(evento) {
        const press = String.fromCharCode(evento.keyCode);
        const pattern = '[0-1]';

        if (press.match(pattern)) {
            return true;
        } else {
            return alert(`[ERROR] Accept 0 or 1 - Try Again`);
        };
    };
});
btn.addEventListener('click', function converter() {
    const $input = input.value.split('');
    let resultado = 0;

    for (let i = 0; i < $input.length; i++) {
        const String2Num = parseFloat($input[i]);
        const soma = String2Num * 2 ** ($input.length - 1 - i);
        resultado += soma;
    }
    document.querySelector('.result').value = resultado;
});